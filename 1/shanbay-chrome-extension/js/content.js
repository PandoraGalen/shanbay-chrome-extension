/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 * 高 龙 的 扇 贝 小 作 业
 * ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
;
(function () {
    // ====================================================
      var removeNode = ['.js-football-meta',
                      '.js-ad-slot-container', 
                      '.js-components-container', 
                      'aside.element-rich-link', 
                      'header#header', 
                      'footer.l-footer', 
                      '.submeta', 
                      'div.top-banner-ad-container', 
                      'header.content_head', 
                      'div.content__labels', 
                      'div.submeta', 
                      'div.content-footer', 
                      'js-secondary-column', 
                      '.content__secondary-column'];
    
    for (var i = 0; i < removeNode.length; i++) {
        $( removeNode[i] ).remove();
    }
    
    // ========================================================
    $('body').css('overflow', 'hidden');
    
    $('.js-content-main-column').prepend( $('header') );
    var height = $(window).height();  // 当前浏览器可视区域的高度
    $('.js-content-main-column').css('height', height).textify({
        numberOfColumn: 1,
        width: 'auto',
        height: 'auto',
        padding: 5,
        margin: 20,
        showNavigation: true,
        textAlign: 'justify'
    });
})();





/* ===========================================================
 * 扇贝小作业 ： 功能 - 鼠标双击页面单词，查询显示单词信息
 *
 * Content：
 *   - getWord() : 屏幕取词
 *   - setCss()  : 设置样式
 *   - createPop() : 创建弹窗
 *   - positionPop() : 弹窗定位
 *   - popShow() : 向屏幕渲染弹窗
 *   - playSound() : 播放语音
 *   - removePop() : 移除弹窗
 *   - translateWord() : 翻译单词
 *   - 其它
 ==================================================================== */
;
(function () {
    // 屏幕取词
    function getWord() {
        return document.getSelection().toString().replace(/^\s/g, '').replace(/$\s/g, '');
    }

    // 设置样式
    function setCss(_this, cssOptions) {
        if (!_this || _this.nodeType == 3 || _this.nodeType == 8 || !_this.style) {
            return;
        }
        // 循环遍历设置样式
        for (var cs in cssOptions) {
            _this.style[cs] = cssOptions[cs];
        }
        return _this;
    }

    // 创建弹窗
    function createPop(res) {
        
        while (!document.querySelector('#wordPop')) {
            
            var pop = document.createElement('div'),
                word = getWord(),
                wordInfo = '<h3 style="margin-bottom: 6px;">' + res.data.content 
                        + '</h3><hr>' 
                        + '<p id="pronunciation">美<i class="iconfont" id="iconfont1">&#xe608;<audio id="shanbay_audio" src="" data-src=""></audio></i><span>[' + res.data.pronunciations.us + ']</span>&nbsp;&nbsp;&nbsp;&nbsp;'
                        + '英<i class="iconfont" id="iconfont2">&#xe608;<audio id="shanbay_audio2" src=""></audio></i><span>[' + res.data.pronunciations.uk + ']</span></p>' 
                        + '<div id="meanWord"><p>' + res.data.definition + '</p></div>';

            pop.id = "wordPop";
            pop.innerHTML = wordInfo;
            document.body.appendChild(pop);

            setCss(pop, {
                'zIndex': 1000,
                'position': 'absolute',
                'width': 280 + 'px',
//                'height': 200 + 'px',
                'padding': '5px',
                'backgroundColor': '#FAFAFA',
                'border': '2px solid #33475f',
                'boxShadow': '1px -1px 6px #bebdbd, -1px 1px 6px #b5b5b5'
            });
            
            var pronunciation = document.getElementById('pronunciation');
            setCss(pronunciation, {
                'fontSize': 14 + 'px',
                'fontFamily': 'Microsoft YaHei',
                'color': '#465049',
                'marginTop': 8 + 'px'
            });

            var meanWord = document.getElementById("meanWord");
            setCss(meanWord, {
                'fontSize': 14 + 'px',
                'marginTop': 6 + 'px',
                'color': '#465049',
                'fontFamily': 'Microsoft YaHei'
            });
        }
        
        pop.addEventListener('click', function(e) {
            e.stopPropagation();
        }, false);
        pop.addEventListener('dblclick', function(e) {
            e.stopPropagation();
        }, false);
        
        if ( document.getElementById('iconfont1') ) {
            document.getElementById('iconfont1').addEventListener('click', function(e) {
                e.stopPropagation();
                var audio = document.getElementById('shanbay_audio');
                audio.src = res.data.audio_addresses.us[0];
                audio.play();
            }, false);
        }
        
         if ( document.getElementById('iconfont2') ) {
            document.getElementById('iconfont2').addEventListener('click', function(e) {
                e.stopPropagation();
                var audio = document.getElementById('shanbay_audio2');
                 audio.src = res.data.audio_addresses.uk[0];
                audio.play();
            }, false);
        }
    }

    // 弹窗位置
    function positionPop(x, y) {

        var _pop = document.querySelector('#wordPop'),
            _W = document.body.clientWidth,
            _H = document.body.clientHeight,
            _pop_h = _pop.clientHeight,
            _pop_w = _pop.clientWidth;
        
//        if ( _W - x < _pop_w ) {
//            _pop.style.left = x  - _pop_w - 23 + "px";
//        }

        if (_H - y > _pop_h) { 
            _pop.style.left = x  + 23 + "px";
            _pop.style.top = y + 14 + "px";
        } 
        
        if (_H - y < _pop_h ) {
            _pop.style.left = x  + 23 + "px";
            _pop.style.top = y - _pop_h - 23 + "px";
        }

    }

    // 显示弹窗
    function popShow(e) {
        var word = getWord(),
            // 鼠标单击事件位置
            x = e.pageX,
            y = e.pageY;

        if (!word) return;
        translateWord(word);
        positionPop(x, y);
    }


    // translate word
    function translateWord(word) {
        try {
            var xhr = new XMLHttpRequest();
            var word = getWord();
            var reqUrl = 'https://api.shanbay.com/bdc/search/?word=' + word;
            xhr.open("GET", reqUrl, false);
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    var res = JSON.parse(xhr.responseText);
                    createPop(res);
                }
            }
            xhr.send(null);

        } catch (exception) {
            alert("xhr fail...");
        }
    }

    // 移除弹窗
    function removePop() {
        // 当前页面是否存在"#wordPop"
        while (document.getElementById("wordPop")) {
            document.body.removeChild(document.getElementById('wordPop'));
        }
    }

    // =======================================================================
//    var link  = document.createElement('link');
//    link.type ="text/css";
//    link.rel  = "stylesheet";
//    link.href = "http://at.alicdn.com/t/font_1476329769_6708782.css";
//    document.head.appendChild( link );
    
    
    document.body.removeEventListener('dblclick', popShow, false);
    // bind double event
    document.body.addEventListener("dblclick", popShow, false);
    // bind click event, remove the popup
    document.addEventListener("click", removePop, false);

})();
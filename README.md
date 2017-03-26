# shanbay-chrome-extension
谷歌浏览器扩展：屏幕广告过滤、屏幕适配、单词查询

    这个仓库里有两个项目包： 1和2。主要区别在文章分页功能实现上:
    * 1中用的是`jQuery`插件`textify.js`：http://www.jq22.com/jquery-info6000
    * 2是通过调整`header`与`.content__main`距离top的距离来实现的。
    
    
    

## 一、Chrome Extension
### reference
 * [谷歌文档](http://open.chrome.360.cn/extension_dev/overview.html)
 * [360翻译谷歌的文档(好吧我是这么认为的, 因为两者几乎一样一样的)](https://developer.chrome.com/extensions/content_scripts)
 * [Chrome 扩展开发——编写一个自己的浏览器插件](http://www.tuicool.com/articles/2MfYv2q)
 * [Chrome插件开发入门（一）](http://ju.outofmemory.cn/entry/74565)
 * [Chrome插件开发入门（二）——消息传递机制](http://ju.outofmemory.cn/entry/74567)
 
 
## 二、广告过滤
好吧， 我偷懒了，这里是直接通过jQuery将指定节点移除完成的。OK, 深深的鄙视下自己再继续下面的内容。
 
 
## 三、文章分页
 * 包`1`使用的是jQuery插件textify.js, 在这里你能找到它：http://www.jq22.com/jquery-info6000 
 * 包`2`中实现原理是，通过每次点击按钮，获取按钮中包含的索引，然后给 `header`和`content__main`设置相应的`top`值。
 
 
## 四、选词翻译
 * 屏幕取词`Window.getSelection()`: https://developer.mozilla.org/en-US/docs/Web/API/Window/getSelection
 * `window.getSelection`方法: http://www.w3dev.cn/article/20140209/window.getSelection.aspx
 * `window.getSelection`和`document.selection`:http://weifei520120.blog.163.com/blog/static/1768908201452373137232/
 * 图标使用的是`阿里矢量图标库`: http://www.iconfont.cn/help/iconuse.html
 
## 五、安装扩展
下载下来压缩文件后解压，找到.crx文件。然后，打开谷歌浏览器在地址栏中输入chrome://extensions/。再把.crx文件拖拽到界面中就可以安装了。
使用前点击浏览器右上角扇贝图标，就可以看到效果了。

## 六、效果截图：
   ![](https://github.com/PandoraGalen/shanbay-chrome-extension/blob/master/2/%E6%88%AA%E5%9B%BE/%E6%88%AA%E5%9B%BE-1.png)
        
   ![](https://github.com/PandoraGalen/shanbay-chrome-extension/blob/master/2/%E6%88%AA%E5%9B%BE/%E6%88%AA%E5%9B%BE-2.png)
        
   ![](https://github.com/PandoraGalen/shanbay-chrome-extension/blob/master/2/%E6%88%AA%E5%9B%BE/%E6%88%AA%E5%9B%BE-3.png)
 
 


# shanbay-chrome-extension
扇贝小作业 ： 屏幕广告过滤、屏幕适配、单词查询

    这个仓库里有两个项目包： 1和2。主要区别在文章分页功能实现上:
    * 1中用的是`jQuery`插件`textify.js`：http://www.jq22.com/jquery-info6000
    * 2是通过调整`header`与`.content__main`距离top的距离来实现的。
    
    
    

## 一、chrome extension
### reference
 * [谷歌文档](http://open.chrome.360.cn/extension_dev/overview.html)
 * [360翻译谷歌的文档(好吧我是这么认为的, 因为两者几乎一样一样的)](https://developer.chrome.com/extensions/content_scripts)
 * [Chrome 扩展开发——编写一个自己的浏览器插件](http://www.tuicool.com/articles/2MfYv2q)
 * [Chrome插件开发入门（一）](http://ju.outofmemory.cn/entry/74565)
 * [Chrome插件开发入门（二）——消息传递机制](http://ju.outofmemory.cn/entry/74567)
 
 
 
## 二、广告过滤
    好吧， 我偷懒了，这里是直接通过jQuery将指定节点移除完成的。OK, 深深的鄙视下自己再继续下面的内容。
 
## 三、文章分页
    包`1`使用的是jQuery插件textify.js, 在这里你能找到它：http://www.jq22.com/jquery-info6000 \<br>
    包`2`中实现原理是，通过每次点击按钮，获取按钮中包含的索引，然后给 `header`和`content__main`设置相应的`top`值。
 
## 四、选词翻译
 
 ### reference
 
 


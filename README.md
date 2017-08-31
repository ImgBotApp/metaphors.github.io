# 自定义博客
## 目录
1. 定制导航栏
2. 创建页面
3. 创作文章
4. 定制SNS
5. 站点配置
6. 主题配置
7. 多作者功能
8. RSS订阅功能
9. 搜索功能
10. 站点地图
11. Google Analytics
12. PWA
13. 在线编辑器
14. 评论系统
15. 个性化配置

## 定制导航栏
编辑 _data/menus.yml 定制导航栏
### **菜单**
按如下格式添加到 _data/menus.yml 新增菜单，导航栏的排序取决于 _data/menus.yml 中的顺序
```
- name: Home
  url: \
  icon: home
```
### **导航栏搜索**
按如下将 _data/menus.yml 中 name 字段为 navSearch 的 switch 字段设置为 true 
```
- name: navSearch
  switch: true
```
### **参数详解**
#### **菜单**
 name   
定义名称，名称将显示在导航栏中

 url   
定义文件路径，设置文件所在相对路径

 icon   
定义图标，图标将显示在移动端的侧边栏中
#### **导航栏搜索**
 name   
必需，请勿更改

 switch   
开关，true为启用，false为不启用

## 创建页面
3种自定义页面形式：标签云、友情链接、分类列表，所有自定义页面放在 pages 文件夹内
### **标签云**
在 pages 文件夹中新建一个 .html 文件，并添加如下头信息：
```
---
layout: tags
---
```
### **友情链接**
在 pages 文件夹中新建一个 .html 文件，并添加如下头信息：
```
---
layout: friends
---
```
友情链接的数据存储在 _data/friends.yml 中，要添加友情链接，只需按如下格式追加即可：
```
- name: GitHub
  image: https://avatars1.githubusercontent.com/u/9919?v=4&s=200
  url: https://www.github.com/github
  describe: GitHub is how people build software.
```
### **分类列表**
在 pages 文件夹中新建一个 .html 文件，并添加如下头信息：
```
---
layout: category_list
---
```
按如下形式添加到 _data 文件夹中的 category.yml 自定义分类卡片的背景
```
- name: living
  img: /assets/category/living.jpg
```
在 category 文件夹中新建一个 .html 文件，并添加如下头信息：
```
---
layout: category_content
---
```
此 .html 文件名为实际的分类名，如： technology.html ，区分大小写，有多少个分类就新建多少个 .html 文件
### **参数详解**
#### **友情链接**
 name   
名称

 image   
头像

 url   
站点链接

 describe   
描述

## 创作文章
在 _posts 文件夹中新建一个 .markdown 文件，按如下格式添加到 .markdown 文件中：
```
---
layout: post
title: "Markdown 语法说明"
date: 2017-08-29 15:41:00 +0800
categories: technology
tags: Markdown
img: http://markdown.tw/images/208x128.png
---
```
添加如下头信息会改善渲染速度：
```
---
themecolor: "#fff"
themetextcolor: "#000"
---
```
当文章的创建日期于用户访问的日期相差100天及以上时，将提示用户“本文最后更新于n天前，文中所描述的信息可能已发生改变，请谨慎使用。”，如果有lastupdate字段，则将计算用户访问日期于该字段的天数差
```
---
lastupdate: 2017-08-29 16:40:10 +0800
---
```
如下多作者状态下选择作者，添加author字段
```
---
author: test
---
```
### **参数详解**
 layout   
要使用的布局，必须为 post  

 title   
文章标题

 date   
文章创建日期

 categories   
文章所属分类

 tags   
文章标签，使用空格分开多个标签

 img   
文章头部图片

 themecolor   
移动端的头部主题颜色

 themetextcolor   
移动端的头部文本颜色

 lastupdate   
文章最后更新日期

 author   
作者

## 定制SNS
编辑 _data/sns.yml 定制SNS，SNS信息存在于所有页面的页脚，最多可添加11种，填写如下url字段启用某SNS，支持的SNS有：GitHub、Twitter、Facebook、Google+、Instagram、Telegram、Tumblr、LinkedIn、新浪微博、知乎、bilibili:
```
- name: github
  url: https://github.com/metaphors
```
### **参数详解**
 name   
SNS名称，无需修改

 url   
站点链接

## 站点配置
编辑 _config.yml 进行站点配置
### **参数详解**
 title   
站点名称，将显示在导航栏左侧

 description   
站点描述，主要用于首页的`<meta name="description">`

 url   
站点网址

 baseurl   
站点目录

 author   
作者

 paginate   
首页的分页数量

 paginate_path   
分页生成的文件路径

 theme   
主题，请勿更改

## 主题配置
编辑 _data/site.yml 进行主题配置
### **参数详解**
 head   
用于配置生成的 HTML 文件的头部信息

 favicon   
网站的 favicon

 high_res_favicon   
高清 favicon

 apple_touch_icon   
iOS 主屏按钮图标

 keywords   
网站关键词

 uiux   
用于设置主题 UI 与 UX

 android_chrome_color   
安卓 Chrome 浏览器的地址栏颜色

 nprogress_color   
页面加载时顶部加载进度条的颜色

 nprogress_buffer  
页面加载时顶部加载进度条的缓冲时间

 meng   
个性化配置

 background   
用于站点背景设置

 purecolor   
背景颜色

 img   
用于设置站点图片

 avatar   
博主头像

 card   
用于设置首页文章卡片

 card_shadow   
首页卡片阴影，支持0-24，0为无阴影

 card_hoverable   
悬停是否加深阴影

 many_authors   
用于设置是否启用多作者

 sns_share   
用于开启或关闭SNS分享功能，支持分享到新浪微博、QQ、Twitter、Facebook、Google+、Telegram、LinkedIn

 comment   
评论系统

 prism   
代码高亮插件（开发中）

 google_analytics   
Google Analytics

 lang   
站点语言，可选：zh-CN、en-US

 deploy   
如果是coding银牌会员，并使用coding pages，将该值设为"coding"，便可以关闭跳转页

## 多作者功能
将 site.yml 的 many_authors 字段设置为 true 启用多作者功能，按如下格式编辑 _data/authors.yml 进行多作者配置：
```
metaphors:
  avatar: "https://avatars3.githubusercontent.com/u/10670315?v=4&s=100"
  name: "Metaphors"
```

## RSS订阅功能
编辑 Gemfile ，添加：
```
gem 'jekyll-feed'
```
编辑 _config.yml ，添加：
```
plugins:
  - jekyll-feed
```
执行下面命令：
```
bundle install
```

## 搜索功能
详见 **定制导航栏** => **导航栏搜索**

## 站点地图
编辑 Gemfile ，添加：
```
gem 'jekyll-sitemap'
```
编辑 _config.yml ，添加：
```
plugins:
  - jekyll-sitemap
```
执行下面命令：
```
bundle install
```

## Google Analytics
详见 **主题配置** => **参数详解** => **google_analytics**

## PWA
启用HTTPS，并添加 manifest.json 和 sw.js 文件到网站根目录，并配置 manifest.json 

## 在线编辑器
详见 **定制导航栏** => **菜单** => 新建Editor页面

## 评论系统
共支持4种评论系统：Disqus、LiveRe、Gitment、Valine
### **Disqus**
启用 Disqus ：在 _data/site.yml 文件中找到 comment 字段并将其 used 字段设置为disqus ，然后按照参数填入信息
### **LiveRe**
启用 LiveRe ：在 _data/site.yml 文件中找到 comment 字段并将其 used 字段设置为livere ，然后按照参数填入信息
### **Gitment**
启用 Gitment ：在 _data/site.yml 文件中找到 comment 字段并将其 used 字段设置为 gitment ，然后按照参数填入信息，详见 https://github.com/imsun/gitment
### **Valine**
启用 Valine ：在 _data/site.yml 文件中找到 comment 字段并将 used 字段设置为 valine ，然后按照参数填入信息
### **参数详解**
 used   
选择要使用的评论系统

#### Disqus
 disqus_shortname   
Disqus shortname

 disqus_button   
是否显示加载 Disqus 按钮

#### LiveRe
 livere_type   
livere 版本，默认值为 city ，如果购买了 livere ，填入 premium

 livere_data_uid   
data-uid

#### Gitment
 owner   
GitHub ID

 repo   
存储评论的 Repository

 client_id   
Client ID

 client_secret   
Client Secret

#### Valine
 valine_placeholder   
留言框占位提示文字

## 个性化配置
将 _data/site.yml 中 meng 字段设置为 true ，编辑 _data/meng.yml 进行个性化配置
### **参数详解**
 title   
用于配置个性化标题

 switch   
开关

 visible   
当浏览器状态为 visible 时的标题文本

 hidden   
当浏览器状态为 hidden 时的标题文本

 with_default_title   
是否与默认标题一起显示并作为后缀

 reset_time   
当浏览器状态为 visible 时，重置为默认标题的延迟

 cursor   
用于配置个性化光标

 auto_url   
 auto 状态下的样式

 pointer_url   
 pointer 状态下的样式

 console   
用来配置console info

 theme_info   
是否显示主题信息

 text   
自定义文本

 color   
文本颜色

 background   
背景颜色

 header   
动态chrome状态栏、hearder颜色

 background   
用于配置个性化背景

 background_img   
图片地址

 transparent_header   
是否透明header

 transparent_footer   
是否透明footer

 text_color   
文本颜色

 card   
用于配置个性化卡片

 background_color   
卡片颜色

 card_img_opacity   
卡片图片透明度

 live2d   
https://github.com/EYHN/hexo-helper-live2d

 model   
模型json路径

 drag   
是否允许拖拽

 width   
canvas 宽度

 height   
canvas 高度

 bottom   
底部偏移

 leftOrRight   
左对齐或右对齐

 offset   
左对齐或右对齐的偏移

 music_player   
用于配置站点播放器

 player   
可选播放器：cplayer、aplayer

 button_color   
按钮颜色

 music   
音乐信息
- title 名称
- author 作者
- url 音乐链接
- pic 封面图

 head_card   
头部卡片

 left_img   
左边卡片图片

 left_text   
左边卡片文本

 right_img   
右边卡片图片（64*64）

 offset_level  
首页，文章页，自定义页距离顶部的偏移（移动端默认为0）
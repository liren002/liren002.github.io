<a href="https://lab.magiconch.com/sakana/?v=takina" target="_blank">
  <img src="html/takina.png" height="160px">
</a><a href="https://lab.magiconch.com/sakana/?v=chisato" target="_blank">
  <img src="html/chisato.png" height="160px">
</a>

# 🐟「Sakana!」石蒜模拟器

地址 https://lab.magiconch.com/sakana/

> さかなー－－－！！

## 插画来源
大伏アオ
[@blue00f4](https://twitter.com/blue00f4)
[Pixiv](https://pixiv.me/aoiroblue1340)

**已从老师推特取得在网页中使用两张插画 (
[その1](https://twitter.com/blue00f4/status/1551887529615687680)、[その2](https://twitter.com/blue00f4/status/1552066743853813760)
) 的非商用授权**
`ヾ(^▽^ヾ)`


## 功能
 - 按住立牌拖拽、松手后立牌会向反方向弹跳
 - 点击底座切换角色
 - 手机开启陀螺仪权限、摇一摇可甩动立牌 [#12 待解决](https://github.com/itorr/sakana/pull/12)
 - 自走模式，以随机间隔、施加一个大小随机的力 [#7](https://github.com/itorr/sakana/pull/7) [@milkybird98](https://github.com/milkybird98)
 - 音效，在适当区间松手时的语音效果 [#9](https://github.com/itorr/sakana/pull/9) [@zthxxx](https://github.com/zthxxx)
 - 多语言支持 [#26](https://github.com/itorr/sakana/pull/26) [@dsrkafuu](https://github.com/dsrkafuu)
 
### 请求参数

 - 添加 `?v=chisato` 请求参数，可获得 [锦木千束](https://lab.magiconch.com/sakana/?v=chisato) 专属链接
 - 添加 `?v=takina` 请求参数，可获得 [井上泷奈](https://lab.magiconch.com/sakana/?v=takina) 专属链接
 - 添加 `?alpha=true` 请求参数，可获得透明背景 [例](https://lab.magiconch.com/sakana/?alpha=true)
 - 添加 `?background=red` 请求参数，可自定义背景 `#FF00FF` `'#d77 url(chisato.png)'` 均可 [例](https://lab.magiconch.com/sakana/?background=%23d77%20url(chisato.png))
 - 添加 `?decay=0.99` 请求参数，自定义衰减 [无阻尼例](https://lab.magiconch.com/sakana/?decay=1) [#11](https://github.com/itorr/sakana/issues/11)
 - 添加 `?inertia=0.1` 请求参数，自定义惯性 [超慢速例](https://lab.magiconch.com/sakana/?inertia=0.001)
 - 添加 `?lang=en-US` 请求参数，自定义语言 [英文](https://lab.magiconch.com/sakana/?lang=en-US) [日语](https://lab.magiconch.com/sakana/?lang=ja-JP)

#### 组合参数例
 - [超高速微阻尼千束英文例](https://lab.magiconch.com/sakana/?inertia=0.7&decay=0.999&v=chisato&lang=en-US)
 - [超慢速无阻尼泷奈日文例](https://lab.magiconch.com/sakana/?inertia=0.001&decay=1&v=takina&lang=ja-JP)

## 本地调试
`document.less` 需要编译成 `.css` 样式文件 [#6](https://github.com/itorr/sakana/pull/6)

## GitHub
https://github.com/itorr/sakana/

## 衍生
 - 网页小组件版本 [Demo](https://sakana.dsrkafuu.net/) [@dsrkafuu/sakana-widget](https://github.com/dsrkafuu/sakana-widget) 
 - 壁纸引擎 @而我撑伞 [BV1vN4y1F7ML](https://www.bilibili.com/video/BV1vN4y1F7ML) [创意工坊](https://steamcommunity.com/sharedfiles/filedetails/?id=2854221525)
 - 壁纸引擎 @麻匪 [BV1jG4y1k7oA](https://www.bilibili.com/video/bv1jG4y1k7oA) [创意工坊](https://steamcommunity.com/sharedfiles/filedetails/?id=2854192204)
## 微博
https://weibo.com/1197780522/M2xbREtGI

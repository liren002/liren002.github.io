/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/05/12/hello-world/index.html","a166890814eea2bf8aab30c3788a0ab3"],["/2022/05/13/centos7配置DNS分离/index.html","8031d373a171354271f175f56f0b47f1"],["/2022/05/16/雷net/index.html","c45e2ab7b336d376ce88054275eb1699"],["/2022/06/21/nc提权/index.html","a5f8f541c185e6d24c847fa3352c871c"],["/2022/09/23/Web-安全应用/index.html","f532191bf12b5609df0120a282195efe"],["/404.html","8a5a9849498c925c22d5255bf411ebb3"],["/about/index.html","2531862ad78d4bda560197cb0859aaa8"],["/archives/2022/05/index.html","b476dc8fe130bb416535fdcaae6ede9b"],["/archives/2022/06/index.html","ada773f27383981c4a7de554e879af7e"],["/archives/2022/09/index.html","6f7061675c110314a746ae0203ef1f5a"],["/archives/2022/index.html","4078f5bb3637421e072871506b491a37"],["/archives/index.html","b9daa9c4e575ecbf953db8abc17db3b7"],["/categories/Steins-Gate/index.html","77fd5a9e8e0bce5e32bb5f477a1204b0"],["/categories/Web渗透/index.html","9339ec086eedf074a82a7cb90c6e1293"],["/categories/index.html","c0cd039eb0f2d1342771a812914bef46"],["/categories/linux/index.html","7eb53ec35400eca87bd3b2548b2258a5"],["/categories/提权/index.html","a55c2611f5da54a61e90ad50d6f59211"],["/contact/index.html","246be65c2bf656f7a6e5f88f389aa37b"],["/css/barrager.css","c3faa9826b45bdd738e401f0a9c4192f"],["/css/bb.css","a13497fcf67377687248cad43633417c"],["/css/gallery.css","995e260b3cd2e85de9f9892b11239361"],["/css/gitment.css","dcd15488193705c273213e72e5ebb7ce"],["/css/loading.css","3b1f9328e845f56b97fc0ead1f118f16"],["/css/matery.css","071a083f00acd6ec27ca4b64b51d7a8d"],["/css/my-gitalk.css","3de42b649a2216cc9bbee350cde6a7e0"],["/css/my.css","c4ad2103f0a537e360bd16650e547b22"],["/css/prism-line-numbers.css","0810c0e4aa6528786cf1253de32ea115"],["/css/prism-tomorrow.css","f46d7519e3b65a6912814727b47a57ff"],["/favicon.png","675264fa889b87be2fe37dad8f0fc360"],["/friends/index.html","cf68319b06cb01e8cdafad6049fff518"],["/index.html","f264f1f79105fb6d3f21fc8b93f7ae6c"],["/js/click_show_text.js","fc106bf6dbf915ef814f673707a80ff8"],["/js/crypto-js.js","60ab5dbd46dfa34dfef3c1548a22a978"],["/js/fireworks.js","f108d0b3a7cd8357621184ea61da1147"],["/js/gallery-encrypt.js","84a2c90b15a9313ca9a29ef49e70ba3d"],["/js/jquery.barrager.js","1c84c8e84cd2f94bdb222c75f0638bb6"],["/js/matery.js","675a091ce42e35c94576f7dafd80530d"],["/js/search.js","7eca48f0950d5e0a2e04b65964c34d2f"],["/libs/animate/animate.min.css","178b651958ceff556cbc5f355e08bbf1"],["/libs/aos/aos.css","04140612fb8b418cda27dee6ecf61042"],["/libs/aos/aos.js","9cc58a148779953a5ebe9360d6cf978c"],["/libs/aplayer/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/libs/aplayer/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/libs/aplayer/Meting.min.js","c0e989e618a2c6f90f59fa1822941d75"],["/libs/awesome/css/all.css","5b73b89d6f6d396f84f532c83e5d14dc"],["/libs/awesome/css/all.min.css","dfb8fc36e102730fddf78b5494eb0035"],["/libs/awesome/webfonts/fa-brands-400.ttf","0fbfc862056bad982c93ba51460e31d9"],["/libs/awesome/webfonts/fa-brands-400.woff2","a9afdb72826cde196ddf29eb8f9d0f8f"],["/libs/awesome/webfonts/fa-regular-400.ttf","35307505c129ab1f9173f7917b50756f"],["/libs/awesome/webfonts/fa-regular-400.woff2","f817938f131b0cabee81e59a96f9c2a6"],["/libs/awesome/webfonts/fa-solid-900.ttf","ffc89d3ea2e2c3ba295689305f91ca78"],["/libs/awesome/webfonts/fa-solid-900.woff2","297973a488f688271dd223d542ba2697"],["/libs/awesome/webfonts/fa-v4compatibility.ttf","4bde6a62454b669bb0ce0448491a71d7"],["/libs/awesome/webfonts/fa-v4compatibility.woff2","72d85419b5a3c5867b1903ef565f5a8d"],["/libs/background/canvas-nest.js","a62fd97db8d4bce3a5e30406831e398d"],["/libs/background/ribbon-dynamic.js","eb6e9d5f62d717fa62445227883dc7b7"],["/libs/background/ribbon-refresh.min.js","6692e63df52b5230e673fc0a3aea5534"],["/libs/background/ribbon.min.js","52d83827dd2784a3d41b65694a6534e5"],["/libs/codeBlock/codeBlockFuction.js","3bfd001c5062e185d294b879eecc8e74"],["/libs/codeBlock/codeCopy.js","5d70070aa5af02a6c18624c2c19d6839"],["/libs/codeBlock/codeLang.js","6618259cbaa1e87d834525a2c55b8dab"],["/libs/codeBlock/codeShrink.js","185e9e214ee7c1c00bb207cac644d38d"],["/libs/cryptojs/crypto-js.min.js","a39fc84fa7659e1d898bbcddf20aa989"],["/libs/dplayer/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/libs/dplayer/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["/libs/echarts/echarts.min.js","b4af19a834bf7cd6435dd8e1ad24cc90"],["/libs/fancybox/fancybox.js","49a6b4d019a934bcf83f0c397eba82d8"],["/libs/fancybox/jquery.fancybox.css","a2d42584292f64c5827e8b67b1b38726"],["/libs/gitalk/gitalk.css","8476031a633732dff9875feae0890070"],["/libs/gitalk/gitalk.min.js","7152eaccbb4bfa6333e19971960018e9"],["/libs/gitment/gitment-default.css","46f304e637384c546f25b5ad90f0fe5a"],["/libs/gitment/gitment.js","2d64177544df22f08ccc1c86fc181e0e"],["/libs/instantpage/instantpage.js","47fcedd7bba8eb1ad3b035c8727f06b5"],["/libs/jqcloud/jqcloud-1.0.4.min.js","b5b4d1002ff256e9bed2b339f572dedc"],["/libs/jqcloud/jqcloud.css","978ed746c5673321fba8401ed6a536ac"],["/libs/jquery/jquery-3.6.0.min.js","8fb8fee4fcc3cc86ff6c724154c49c42"],["/libs/justifiedGallery/justifiedGallery.min.css","0eb3894f1fb48fbc54fbd2072b4372f8"],["/libs/justifiedGallery/justifiedGallery.min.js","f12e15ba020d049ba166af44960051c9"],["/libs/lightGallery/css/lightgallery.min.css","0ecaf59cd1b7e19f2a7b34683d32068c"],["/libs/lightGallery/fonts/lg.svg","e2ec05977cb4b0a18bbcb7f607b79620"],["/libs/lightGallery/fonts/lg.ttf","f4292655f93dd12d9b8e4fc067ef2489"],["/libs/lightGallery/fonts/lg.woff","1fbfd4bcffccb94e8e8a5ea70616b296"],["/libs/lightGallery/img/loading.gif","bbdac9cda255c54bfd809110aff87898"],["/libs/lightGallery/img/meiyou.gif","cb3e92016b2fef2ee912d5e1f4ad9e89"],["/libs/lightGallery/img/video-play.png","d672259b56b5dd1abdff3a98d87864e8"],["/libs/lightGallery/img/vimeo-play.png","a951123e4f7cb5d037a6a872f001a8af"],["/libs/lightGallery/img/youtube-play.png","6267452d4f9c32c7550cec6587f985d3"],["/libs/lightGallery/js/lightgallery-all.min.js","b4705ab663a9555d29fa69a3cf6bec0b"],["/libs/masonry/masonry.pkgd.min.js","520e46df77727aaf3d5e799ef241be02"],["/libs/materialize/materialize.min.css","3a5681d6939e48ba5038fbf8f9f244a2"],["/libs/materialize/materialize.min.js","87d84bf8b4cc051c16092d27b1a7d9b3"],["/libs/mermaid/mermaid.js","f3687bf99ec4a8b6608d45d2809eab00"],["/libs/mermaid/mermaid.min.css","5e9cbdf9d18097fc1d4649670a5be633"],["/libs/mermaid/mermaid.min.js","4164f15ddeaa6d8eec7f087c76c58dc0"],["/libs/minivaline/MiniValine.js","bb0f8ed46503472ce77575f9db9dda93"],["/libs/my404/bodymovin.js","9bbbbd90be37a1a414a604d57b2c07b9"],["/libs/my404/data.js","a6919f5d3328c626b49d752d237bcaa6"],["/libs/others/TencentCaptcha.js","628af9af35fd7579c1b5f481f7a77aa0"],["/libs/others/busuanzi.pure.mini.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["/libs/others/clicklove.js","6a3861c11c04010dd4de27c162cb8a83"],["/libs/others/sakura-half.js","d1cccaec887352d5fff341f873ee0210"],["/libs/others/sakura-reduce.js","c86b1fe1a4f144ec4784b13b17821869"],["/libs/others/sakura-small.js","d9a110e05f736ef48c93f05b45edd397"],["/libs/others/sakura.js","cb6251075cc14487276119b508cd68bf"],["/libs/others/snow.js","f320c79941e71f888b78084d8041e8d9"],["/libs/others/star.js","27343eec730d8dc904e90c898ee84824"],["/libs/prism/prism.css","32b98c935f97106089a2510975293524"],["/libs/scrollprogress/scrollProgress.min.js","63212ebfb10736224d44bcda8a155278"],["/libs/share/css/share.min.css","a5d28161d70468ec2378da676284a34f"],["/libs/share/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/libs/share/fonts/iconfont.svg","6b3cbfae255ab1f2c1e8e8bfc80754d4"],["/libs/share/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/libs/share/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/libs/share/js/jquery.share.min.js","044c903516dd20036471d65d5269821c"],["/libs/share/js/social-share.min.js","7d8197222dcdbe0e7e645a605bf76851"],["/libs/tocbot/tocbot.css","e8f0173e7c5216e5359587a88a570b77"],["/libs/tocbot/tocbot.min.js","4d7b1dfb31f74b6d0701cf3120933597"],["/libs/twikoo/twikoo.all.min.js","feefb4c63d8eea58211ef6113d5ef163"],["/libs/valine/Valine.min.js","3c37a47598a8970c84db5591f01c483d"],["/libs/valine/av-min.js","df7538b359e7a7e904c430e8385b44da"],["/libs/waline/Waline.min.js","ed6cbbe9d1e40233030635398ed386aa"],["/live2dw/assets/moc/z16.1024/texture_00.png","0a1969e9c0d0f1509604bb2b19de0783"],["/live2dw/assets/moc/z16.256/texture_00.png","b925d20a4fdfe8a65b09199a1224e581"],["/live2dw/assets/moc/z16.512/texture_00.png","96f5efb6dd9e3c69de8424b142214452"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/medias/avatar.jpg","720304893c36bdda427077526530883f"],["/medias/banner/0.jpg","9deb69c5504c272f862128dad03928e6"],["/medias/banner/1.jpg","ac0344091377473d229142056dc786ec"],["/medias/banner/2.jpg","1d3ae3880ede0c08a27125599674f1c6"],["/medias/banner/3.jpg","541268861d6865d0dd96fd0974b1de32"],["/medias/banner/4.jpg","ed30a9c70e5a21532113b30dc73fa88f"],["/medias/banner/5.jpg","fad245579c7e87a5e4c89f5c76d7660a"],["/medias/banner/6.jpg","41b57e192fb4ca090a7b86ff6e31ae69"],["/medias/barrager/0.png","f5d8318197ffd7ce9aacf308bf186c5e"],["/medias/barrager/1.png","ea244312d1bf53680470f3da4d308bb4"],["/medias/barrager/2.png","50e265a8acfea4b3bafd407dff4ceaba"],["/medias/barrager/close.png","ab45ca050318e57b6559bb3503bc19a1"],["/medias/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["/medias/featureimages/0.jpg","4d31a43d1b480ed190fc94bfa39ac746"],["/medias/featureimages/1.jpg","0c614f8fd536d217547a51bd06df40a8"],["/medias/featureimages/10.jpg","812bb72c4eaf6dd88cc10e3c9fca7f9c"],["/medias/featureimages/11.jpg","3cdbd3990c62647ceddfc04668f49528"],["/medias/featureimages/12.jpg","fe06d76ab2cc2259a87466960ffe872f"],["/medias/featureimages/14.jpg","82aeab60244b0a5b17921f15c8304e23"],["/medias/featureimages/15.jpg","5c2194b771743dd86238da8f1e5c3ac6"],["/medias/featureimages/16.jpg","5cd414c819be795f369a0b54c9c5d33d"],["/medias/featureimages/18.jpg","e33309c7cf05a87a1e770313826c54c5"],["/medias/featureimages/19.jpg","eb33f90c9da04193b0592008bfb68cc5"],["/medias/featureimages/2.jpg","0e95aac3dd980384fec5f3117c01ca5b"],["/medias/featureimages/20.jpg","ef485d7ca7f41c39917b58c0e960846b"],["/medias/featureimages/21.jpg","85ac8ddf60c17a54d4a1ae85a8535553"],["/medias/featureimages/22.jpg","cbf4223fe0e40e0b79787a025af13386"],["/medias/featureimages/23.jpg","72679fd8242944fd1d5bf8ceabf055e3"],["/medias/featureimages/24.jpg","b8d45f5c9ceaf373068c8b04d379ba69"],["/medias/featureimages/25.jpg","522058b7720f00028ad4a62a36998787"],["/medias/featureimages/26.jpg","c064a5c1153863ce2e432337da25888d"],["/medias/featureimages/27.jpg","d9c737b964d6224a44c9775598d56dd8"],["/medias/featureimages/28.jpg","e61dcfd0e9bc732b224b47b20f4e85cd"],["/medias/featureimages/29.jpg","fad245579c7e87a5e4c89f5c76d7660a"],["/medias/featureimages/3.jpg","0e15367ee9d7599a70a353a1b1ba2596"],["/medias/featureimages/30.jpg","1d53eada50d13e8d8521c2d3a395fd48"],["/medias/featureimages/4.jpg","01ccfbef36428c586f482dd24770d952"],["/medias/featureimages/5.jpg","1d3ae3880ede0c08a27125599674f1c6"],["/medias/featureimages/6.jpg","08221de78a9315e469c07d193062fa83"],["/medias/featureimages/7.jpg","1dfea2a01a21c19ac4990d5c0c46d856"],["/medias/featureimages/8.jpg","b8d45f5c9ceaf373068c8b04d379ba69"],["/medias/featureimages/9.jpg","2e803aa2cae927099989abe33219f4db"],["/medias/gif/meiyou.gif","cb3e92016b2fef2ee912d5e1f4ad9e89"],["/medias/gif/miku.gif","68d560e1770666d7482c35f205d9aebb"],["/medias/gif/naiyazi.gif","3c2061429366926e60dd46dcc006d09d"],["/medias/gif/saber.gif","a3beaf13843f3118f0190053fd6b737f"],["/medias/icp.png","60aa047315ba11596d9f954900c86fdb"],["/medias/images/01.jpg","df3a6be5078170d97b0fa7af440c00d5"],["/medias/images/02.jpg","e48d5fab83ae2f90e2e6f0eef22ec85c"],["/medias/images/03.jpg","01d3b8abfc97d822ef159033b3cec89f"],["/medias/logo.png","c0cfd11cfec8572e0f3035c3d00cf6da"],["/medias/reward/alipay.jpg","1fc42300cac922dec1f12986e14a558b"],["/medias/reward/wechat.png","084946f7be67b0c7ef638caa6b3e34ca"],["/sakana/blue00f4.png","9243af23d0932a81aaa3633dbdd82bef"],["/sakana/chisato.png","473e04a697f793e21d703b2798f2fade"],["/sakana/deto.html","ad6b8a98dacbbebf2cbd52b7414b752e"],["/sakana/document.css","de8691a742eaa469ddfa32aa4039052c"],["/sakana/document.js","facdcb48ecd25f2f1aa94707378b4939"],["/sakana/index.html","85018a5b4426fae190ab14f23251e6a2"],["/sakana/into.html","19b28c49ead6c11f5bfb26ce067b4dff"],["/sakana/locale.js","fcc7456d7089070a646abc70974e76b8"],["/sakana/sakana.css","5964fabf7dfada33df4a9c86d147f7a3"],["/sakana/sakana.js","ceba970099cdafc382a8646bd78e0334"],["/sakana/sakana.min.js","d5516faf79486290e42b7dacb4d89e39"],["/sakana/takina.png","eb59c376a8d1c0cf946b22df68b53142"],["/sakana/test.html","c4dcdc6960a66525576b5336f381dac3"],["/sw-register.js","30f1df1d8fde452c8a5216c5f0dced58"],["/tags/DNS/index.html","20afb01810868fb3ad70195d3a7f28b3"],["/tags/index.html","1760e9f8a840fd010747af35ba781c14"],["/tags/linux/index.html","f1abe349c813c5af0c97060ee2e896ad"],["/tags/web渗透/index.html","73c40b14daa740ff8bcb833921346b8c"],["/tags/windows/index.html","eeb797b742c3fe3e909b5cf4a5490809"],["/tags/命运石之门/index.html","d14da3d72ae9d528b9ba59845f9f522b"],["/tags/提权/index.html","be746e6bad70a8480cf091bf656d2d99"],["/tags/网络安全/index.html","681968345ae1e54b2bdda8eae8c9aae3"],["/tags/雷net/index.html","1027bba388bf95b4558843d7a487a55e"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */

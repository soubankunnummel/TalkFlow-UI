if(!self.define){let e,s={};const i=(i,a)=>(i=new URL(i+".js",a).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(a,t)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let n={};const o=e=>i(e,c),r={module:{uri:c},exports:n,require:o};s[c]=Promise.all(a.map((e=>r[e]||o(e)))).then((e=>(t(...e),n)))}}define(["./workbox-c06b064f"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/209-6dd2c09f60392a57.js",revision:"yR0HQASobMop8dvipTDtM"},{url:"/_next/static/chunks/250-3da8521b8c297f02.js",revision:"yR0HQASobMop8dvipTDtM"},{url:"/_next/static/chunks/288-2673f0f1cc6b44de.js",revision:"yR0HQASobMop8dvipTDtM"},{url:"/_next/static/chunks/373-8f71967fd0a015ee.js",revision:"yR0HQASobMop8dvipTDtM"},{url:"/_next/static/chunks/468-72d46b11b5379124.js",revision:"yR0HQASobMop8dvipTDtM"},{url:"/_next/static/chunks/550-42c52838380a3478.js",revision:"yR0HQASobMop8dvipTDtM"},{url:"/_next/static/chunks/5e22fd23-f9885c48c3e83fc0.js",revision:"yR0HQASobMop8dvipTDtM"},{url:"/_next/static/chunks/670-649a18d618f4bea8.js",revision:"yR0HQASobMop8dvipTDtM"},{url:"/_next/static/chunks/795d4814-3730e9bd12ae6923.js",revision:"yR0HQASobMop8dvipTDtM"},{url:"/_next/static/chunks/828-755ca911b145f40d.js",revision:"yR0HQASobMop8dvipTDtM"},{url:"/_next/static/chunks/972-fcbbc079315fc902.js",revision:"yR0HQASobMop8dvipTDtM"},{url:"/_next/static/chunks/app/(auth)/auth/Login/page-136beb2d8aea5dd4.js",revision:"yR0HQASobMop8dvipTDtM"},{url:"/_next/static/chunks/app/(auth)/auth/layout-c5e1169f5bc1e0a5.js",revision:"yR0HQASobMop8dvipTDtM"},{url:"/_next/static/chunks/app/(auth)/auth/signup/page-88e2ad458db7651b.js",revision:"yR0HQASobMop8dvipTDtM"},{url:"/_next/static/chunks/app/(ui)/%5BuserId%5D/layout-57dca8b5592e7a0f.js",revision:"yR0HQASobMop8dvipTDtM"},{url:"/_next/static/chunks/app/(ui)/%5BuserId%5D/page-5dea470c205b20cd.js",revision:"yR0HQASobMop8dvipTDtM"},{url:"/_next/static/chunks/app/(ui)/%5BuserId%5D/post/%5BpostId%5D/page-4e3ff3f3c3d71754.js",revision:"yR0HQASobMop8dvipTDtM"},{url:"/_next/static/chunks/app/(ui)/%5BuserId%5D/replies/page-6645648348ec15d8.js",revision:"yR0HQASobMop8dvipTDtM"},{url:"/_next/static/chunks/app/(ui)/%5BuserId%5D/reposts/page-c116ff35924d2661.js",revision:"yR0HQASobMop8dvipTDtM"},{url:"/_next/static/chunks/app/(ui)/activity/follows/page-a87338fe53d9f8b5.js",revision:"yR0HQASobMop8dvipTDtM"},{url:"/_next/static/chunks/app/(ui)/activity/layout-93426f6a96699b91.js",revision:"yR0HQASobMop8dvipTDtM"},{url:"/_next/static/chunks/app/(ui)/activity/mentions/page-e2a5b71b59203f0a.js",revision:"yR0HQASobMop8dvipTDtM"},{url:"/_next/static/chunks/app/(ui)/activity/page-35cb19b2282146ce.js",revision:"yR0HQASobMop8dvipTDtM"},{url:"/_next/static/chunks/app/(ui)/activity/quotes/page-5d4c705c6591c6de.js",revision:"yR0HQASobMop8dvipTDtM"},{url:"/_next/static/chunks/app/(ui)/activity/replies/page-77a67aacdb71fdc7.js",revision:"yR0HQASobMop8dvipTDtM"},{url:"/_next/static/chunks/app/(ui)/activity/reposts/page-f9dda06ccb160861.js",revision:"yR0HQASobMop8dvipTDtM"},{url:"/_next/static/chunks/app/(ui)/activity/verified/page-22283123c5dec92d.js",revision:"yR0HQASobMop8dvipTDtM"},{url:"/_next/static/chunks/app/(ui)/chat/%5BId%5D/page-c03537c0eb293019.js",revision:"yR0HQASobMop8dvipTDtM"},{url:"/_next/static/chunks/app/(ui)/following/page-bd2080e61dd3c1df.js",revision:"yR0HQASobMop8dvipTDtM"},{url:"/_next/static/chunks/app/(ui)/layout-250b17ba6c8de94c.js",revision:"yR0HQASobMop8dvipTDtM"},{url:"/_next/static/chunks/app/(ui)/page-12a0583328dee502.js",revision:"yR0HQASobMop8dvipTDtM"},{url:"/_next/static/chunks/app/(ui)/search/page-9e374e2c3113fe0d.js",revision:"yR0HQASobMop8dvipTDtM"},{url:"/_next/static/chunks/app/_not-found-dc09be9fe8d7bf4d.js",revision:"yR0HQASobMop8dvipTDtM"},{url:"/_next/static/chunks/app/layout-3bd081ad4a04e414.js",revision:"yR0HQASobMop8dvipTDtM"},{url:"/_next/static/chunks/fd9d1056-1b8674eb350800d1.js",revision:"yR0HQASobMop8dvipTDtM"},{url:"/_next/static/chunks/framework-b370f160bb96059c.js",revision:"yR0HQASobMop8dvipTDtM"},{url:"/_next/static/chunks/main-8396d29e2afb8c18.js",revision:"yR0HQASobMop8dvipTDtM"},{url:"/_next/static/chunks/main-app-6db52f9d038bd446.js",revision:"yR0HQASobMop8dvipTDtM"},{url:"/_next/static/chunks/pages/_app-d21e88acd55d90f1.js",revision:"yR0HQASobMop8dvipTDtM"},{url:"/_next/static/chunks/pages/_error-d6107f1aac0c574c.js",revision:"yR0HQASobMop8dvipTDtM"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-719fd5a4311a2e5c.js",revision:"yR0HQASobMop8dvipTDtM"},{url:"/_next/static/css/f1224cba256fd40f.css",revision:"f1224cba256fd40f"},{url:"/_next/static/media/05a31a2ca4975f99-s.woff2",revision:"f1b44860c66554b91f3b1c81556f73ca"},{url:"/_next/static/media/513657b02c5c193f-s.woff2",revision:"c4eb7f37bc4206c901ab08601f21f0f2"},{url:"/_next/static/media/51ed15f9841b9f9d-s.woff2",revision:"bb9d99fb9bbc695be80777ca2c1c2bee"},{url:"/_next/static/media/ImageIcon.01ebc4fa.svg",revision:"248d3e81bce94b02e6f13b4fc250538e"},{url:"/_next/static/media/More.0a094543.svg",revision:"efd9b6f014dce896e269c5551be31ad1"},{url:"/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2",revision:"74c3556b9dad12fb76f84af53ba69410"},{url:"/_next/static/media/coment.9f364fa1.svg",revision:"2a25d867120293e70f0ca7fce3323379"},{url:"/_next/static/media/d6b16ce4a6175f26-s.woff2",revision:"dd930bafc6297347be3213f22cc53d3e"},{url:"/_next/static/media/ec159349637c90ad-s.woff2",revision:"0e89df9522084290e01e4127495fae99"},{url:"/_next/static/media/fd4db3eb5472fc27-s.woff2",revision:"71f3fcaf22131c3368d9ec28ef839831"},{url:"/_next/static/media/header.e6d246c2.svg",revision:"701b7772c40a6f7a57885624d9e28f0b"},{url:"/_next/static/media/insta.38b68da1.svg",revision:"ab6c504b6f81cb72f449e36969d0cbc1"},{url:"/_next/static/media/like.92b6d909.svg",revision:"9fec223fe6fb9a38eb7cbb5303c4c616"},{url:"/_next/static/media/logo.d691e716.svg",revision:"301f9c236baf4ddfb41b0ec5a3a025e3"},{url:"/_next/static/media/pachu.077e6636.svg",revision:"ae9e3da3aff0f06909ee957ed189fa0a"},{url:"/_next/static/media/plus.5a84f22e.svg",revision:"4fe576bf05e60304940fe1c34457d115"},{url:"/_next/static/media/red-heart.35be283d.svg",revision:"1508f739eb9ae5573a0d3f4815ec056c"},{url:"/_next/static/media/replieavathar.9517f8c7.svg",revision:"ec4c46c4e0c083aefc1e416e4a54c0d8"},{url:"/_next/static/media/repost.5b72eaa8.svg",revision:"7506411ee55fc4815c8a640aca5b2a46"},{url:"/_next/static/media/shere.1323eb44.svg",revision:"c63d3cef24f2e61e7e685d9e7e9196c2"},{url:"/_next/static/media/smallSerch.2dd47de8.svg",revision:"3546fedffd30546465254459190b72de"},{url:"/_next/static/media/threds.net.62c8f3bc.svg",revision:"fca005315d731ad47f86ba75a0261416"},{url:"/_next/static/media/threedot.692e9566.svg",revision:"4adb11bb0a3786ff344f76cbc4144a4c"},{url:"/_next/static/media/useravathar.76516240.svg",revision:"bb561603cdbd96437da03c3b1d5ed044"},{url:"/_next/static/media/usericon.131b7400.svg",revision:"4748d4fa644f761e6c74a55b5513a6e7"},{url:"/_next/static/yR0HQASobMop8dvipTDtM/_buildManifest.js",revision:"d8963c6657102db1f2fa51dc81a43a6f"},{url:"/_next/static/yR0HQASobMop8dvipTDtM/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/assets/ImageIcon.svg",revision:"248d3e81bce94b02e6f13b4fc250538e"},{url:"/assets/More.svg",revision:"efd9b6f014dce896e269c5551be31ad1"},{url:"/assets/activity.svg",revision:"483777eb447c43b5e8958a44267fc805"},{url:"/assets/car - bugatti.jpg",revision:"d4a69856c1f72d5800b179c431fef4fd"},{url:"/assets/coment.svg",revision:"2a25d867120293e70f0ca7fce3323379"},{url:"/assets/like.svg",revision:"9fec223fe6fb9a38eb7cbb5303c4c616"},{url:"/assets/logo.svg",revision:"301f9c236baf4ddfb41b0ec5a3a025e3"},{url:"/assets/pachu.svg",revision:"ae9e3da3aff0f06909ee957ed189fa0a"},{url:"/assets/plus.svg",revision:"4fe576bf05e60304940fe1c34457d115"},{url:"/assets/post_image.png",revision:"c2c849822b7ddf4fcba1a2ca4e2bc3e0"},{url:"/assets/red-heart.svg",revision:"1508f739eb9ae5573a0d3f4815ec056c"},{url:"/assets/replieavathar.svg",revision:"ec4c46c4e0c083aefc1e416e4a54c0d8"},{url:"/assets/repost.svg",revision:"7506411ee55fc4815c8a640aca5b2a46"},{url:"/assets/shere.svg",revision:"c63d3cef24f2e61e7e685d9e7e9196c2"},{url:"/assets/smallSerch.svg",revision:"3546fedffd30546465254459190b72de"},{url:"/assets/threds.net.svg",revision:"fca005315d731ad47f86ba75a0261416"},{url:"/assets/threedot.svg",revision:"4adb11bb0a3786ff344f76cbc4144a4c"},{url:"/assets/user.svg",revision:"81cf3face2cfec19306891bdcebee2d6"},{url:"/assets/useravathar.svg",revision:"bb561603cdbd96437da03c3b1d5ed044"},{url:"/assets/usericon.svg",revision:"4748d4fa644f761e6c74a55b5513a6e7"},{url:"/icon512_maskable.png",revision:"556942fabc4bc355554756d13c1f28d1"},{url:"/icon512_rounded.png",revision:"d2a0561268aad8cb8ba3227dc820807d"},{url:"/manifest.json",revision:"234aa54e03ad6dcfcb449b1b1ff895aa"},{url:"/svg/header.svg",revision:"701b7772c40a6f7a57885624d9e28f0b"},{url:"/svg/insta.svg",revision:"ab6c504b6f81cb72f449e36969d0cbc1"},{url:"/swe-worker-5c72df51bb1f6ee0.js",revision:"5a47d90db13bb1309b25bdf7b363570e"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4|webm)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:s}})=>!(!e||s.startsWith("/api/auth/callback")||!s.startsWith("/api/"))),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:i})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&i&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:i})=>"1"===e.headers.get("RSC")&&i&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:s})=>s&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET"),self.__WB_DISABLE_DEV_LOGS=!0}));

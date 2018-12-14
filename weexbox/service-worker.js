/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "f757e58c9754b9d37b447765ddbb8ac6"
  },
  {
    "url": "assets/css/0.styles.159835fe.css",
    "revision": "59d575c9879b1aaa4a29c9e930df2426"
  },
  {
    "url": "assets/img/debug1.35fccfe4.png",
    "revision": "35fccfe4ab797b8ffe407c40ae3eb4e8"
  },
  {
    "url": "assets/img/debug2.042bf797.png",
    "revision": "042bf79707589fca59eef912a65641f0"
  },
  {
    "url": "assets/img/debug4.f4aad4d4.png",
    "revision": "f4aad4d4aa3a62e952a48a7cf4c74074"
  },
  {
    "url": "assets/img/debug5.ca1a85a6.png",
    "revision": "ca1a85a63941f1cd359968cac384c18c"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.a11197ef.js",
    "revision": "ba7b5a5bb54f897f370cd2474c360e01"
  },
  {
    "url": "assets/js/11.42404ae1.js",
    "revision": "b48aff32665b343fe7eaabb4853bb754"
  },
  {
    "url": "assets/js/12.e8a9c64e.js",
    "revision": "ce8c188081683c0b4579cfc9716ba7ba"
  },
  {
    "url": "assets/js/13.4cf81b5a.js",
    "revision": "82dc6c76ccee14661749cbe04c2c3600"
  },
  {
    "url": "assets/js/14.f2efb5ef.js",
    "revision": "80254e69db363e1f7a69f09d632c359d"
  },
  {
    "url": "assets/js/15.86f4d40d.js",
    "revision": "c4cbdd5e79fee631116305c5954302bf"
  },
  {
    "url": "assets/js/2.79907540.js",
    "revision": "f6668df5583d15e0e6d66979a72d1c9b"
  },
  {
    "url": "assets/js/3.05edb05d.js",
    "revision": "dc431be7a86999d372cb49d5ffe4242f"
  },
  {
    "url": "assets/js/4.2d08dde4.js",
    "revision": "5abfff16769e6c00daa4423518439769"
  },
  {
    "url": "assets/js/5.ebc1cd3d.js",
    "revision": "0c247dc3513a4a930c73b9dd4b743b2c"
  },
  {
    "url": "assets/js/6.5a6bc04d.js",
    "revision": "b5c4bf81c62aa9f2da4df9650caa1f4b"
  },
  {
    "url": "assets/js/7.166727b1.js",
    "revision": "5e71216e7c123b21bfa3e3a4853472bd"
  },
  {
    "url": "assets/js/8.dabe0502.js",
    "revision": "b5d0abf25eba3d2c1d3e37be754bf794"
  },
  {
    "url": "assets/js/9.ff4aa8ff.js",
    "revision": "f30aaa434d932c543959768418039594"
  },
  {
    "url": "assets/js/app.af58ee99.js",
    "revision": "cd269d142912adabf3e6e4baa939a74c"
  },
  {
    "url": "config/index.html",
    "revision": "6c26f5e9c3ce79335143cb91cfb915df"
  },
  {
    "url": "debug1.png",
    "revision": "35fccfe4ab797b8ffe407c40ae3eb4e8"
  },
  {
    "url": "debug2.png",
    "revision": "042bf79707589fca59eef912a65641f0"
  },
  {
    "url": "debug3.png",
    "revision": "f77773272edb88c73c218a227944d54b"
  },
  {
    "url": "debug4.png",
    "revision": "f4aad4d4aa3a62e952a48a7cf4c74074"
  },
  {
    "url": "debug5.png",
    "revision": "ca1a85a63941f1cd359968cac384c18c"
  },
  {
    "url": "default-theme-config/index.html",
    "revision": "8f4ef02e1d9451056d9ff314345c1ea4"
  },
  {
    "url": "done.png",
    "revision": "59c16027d193ff963cc9e61dcd7c3437"
  },
  {
    "url": "guide/assets.html",
    "revision": "0b9813c99cc967152ff15d309e73bfa9"
  },
  {
    "url": "guide/debug.html",
    "revision": "ed52136315caeab9dedab6ccc4c58479"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "6dcb0430e08a7b930e1308631dfcdf5c"
  },
  {
    "url": "guide/index.html",
    "revision": "3f1c4e78d329c01c5ad64d0cdf09d3a9"
  },
  {
    "url": "guide/module.html",
    "revision": "554f856648b23b2f50bc0cffd8a126cf"
  },
  {
    "url": "guide/native-android.html",
    "revision": "7ad4b84f275f73811a2b45caafd828db"
  },
  {
    "url": "guide/native-ios.html",
    "revision": "fcfe7b3feba762f837ee5cc3276ec06b"
  },
  {
    "url": "guide/project.html",
    "revision": "8fece61e443c567b05368656d63ae7ad"
  },
  {
    "url": "guide/who-s-using.html",
    "revision": "af6fe8646e7e90fafe87c712029ad6e3"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "index.html",
    "revision": "a71886446b8ab5dab013af534ada68d2"
  },
  {
    "url": "line-numbers-desktop.png",
    "revision": "7c8ccab7c4953ac2fb9e4bc93ecd25ac"
  },
  {
    "url": "line-numbers-mobile.gif",
    "revision": "580b860f45436c9a15a9f3bd036edd97"
  },
  {
    "url": "logo.png",
    "revision": "6b7fc72eee2bce0e11b0829f07a9d2c9"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})

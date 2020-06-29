'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "61da8a545acb4f590762f8c39a7abcd7",
"/": "61da8a545acb4f590762f8c39a7abcd7",
"main.dart.js": "f33d63fa0cd4ce6e34f350ecbe419556",
"favicon.png": "1b9f62e59e08d95ddcb2e9a24cb60125",
"icons/Icon-192.png": "4927a0b0e7abc861905aded5c5ae4a89",
"icons/Icon-512.png": "d52578b634cdc3813eedef7a9f1a2084",
"manifest.json": "0a663a7c699c6520a8c1298bc1598a73",
".git/config": "7d8521b89176a7e7e59d2cee5ec1c777",
".git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
".git/objects/6a/506cab8a38dd380764de028f653a66ba9089d5": "22de7efff16c21d6961ab8d1ef44d768",
".git/objects/05/b0b6edf6be5632c8ed068e86c8fcc8c6c737c6": "3a37e8282e6c8ba16ff4147de447670a",
".git/objects/f3/94efdee54cb5dd3fa35b741f00864e903eadc6": "c4764667cfb48abed9f6e91d939aec91",
".git/objects/c1/d7ef438e8f013b6d7cf2f3244ed684b7a7e914": "cca9b47705ba1e16f2e047c0516ddabd",
".git/objects/20/67116ebace2e7cc7f0dc28a1e7035d938b3054": "d47b406b850ce1df0ae8a6dd89727768",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/86/6a1ddbfd5c1c63071a7ffdcb92c18d3d8049ea": "9cc7921f22064ff5ac40e431f5020001",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/2adc0459c5f8ab6b8fec406b19244e1f16e1a7": "a0b2bfd13949eb5292ccaf1666d69ebd",
".git/objects/62/d51a8de9ae0effc1cefa342386e1ead6192b05": "4cda8ee18c03fa353eff141a8e1864df",
".git/objects/d3/57eec7b83cf3241b1e10b4c9ae0de2e3605d76": "d849df55cbb5df90edfd7ac1016ef569",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/de/8f08834cf09ba9a81eec20e7d4b0554d843765": "d7f104fb87a4d1ac9a0ec00661725615",
".git/objects/f7/4604b4f4494abf86e258f3025b93b04ebefd3d": "287a734684a85008a3179f760c04d6d8",
".git/objects/e7/69e7620d1daa06325042127b21ca43096dac85": "b040f62fbd3a438b1e6245fa4d58df74",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "0aebccfd5866bfc3e7c8f625230c22f7",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "cc193b30497a554e0ba5e8fd2bf5e28f",
"assets/LICENSE": "146549712ddd52f1f93c745c0c521797",
"assets/AssetManifest.json": "28f3453229c9ec6fa67832f38ae059d2",
"assets/FontManifest.json": "6331122f59db4f32839f50dcaf3a9a12",
"assets/packages/line_icons/lib/assets/fonts/LineIcons.ttf": "8d0d74fa070d25f1d57e29df18800b8a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/flutter_feather_icons/fonts/feather.ttf": "c96dc22ca29a082af83cce866d35cebc",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/assets/images/chizi.png": "cefbc07dbae60199ce103d5e41bbedea"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});

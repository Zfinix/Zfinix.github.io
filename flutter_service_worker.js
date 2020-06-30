'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "61da8a545acb4f590762f8c39a7abcd7",
"/": "61da8a545acb4f590762f8c39a7abcd7",
"CNAME": "2febfa046e96f30bedaf8db30051b0f8",
"main.dart.js": "47901f305a07686d16a5a0cec42edaa3",
"favicon.png": "1b9f62e59e08d95ddcb2e9a24cb60125",
"icons/Icon-192.png": "4927a0b0e7abc861905aded5c5ae4a89",
"icons/Icon-512.png": "d52578b634cdc3813eedef7a9f1a2084",
"manifest.json": "0a663a7c699c6520a8c1298bc1598a73",
".git/ORIG_HEAD": "b6bf6d685de5dcfb915ac3977f674981",
".git/config": "624870f2520ab1aac94b0a5ccdd503de",
".git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
".git/objects/3e/7c5d318ac643c14d38a6c4ee66ec222b512b26": "6848f38c963de4240f552f94a39c501c",
".git/objects/68/fe8a0d24dd5a33fb8c2a2343b83fad0b82d452": "f8ba0bc079c580d796e7e867b4f1e51b",
".git/objects/57/1f5dc73c21292b5339d5f586c4a93e76bf367b": "68cd0ef26010c96c436d9c8cff07ac07",
".git/objects/6a/506cab8a38dd380764de028f653a66ba9089d5": "22de7efff16c21d6961ab8d1ef44d768",
".git/objects/56/7ec73f4a4cd83b39c434bb1b86f8e1b850350d": "50b53cd23817b4305d3ae924f3553ef7",
".git/objects/0e/88a51f89bd822efce16cb002dd6addd50f746f": "922a61db1b5eb6c54a199f60f45e7958",
".git/objects/05/b0b6edf6be5632c8ed068e86c8fcc8c6c737c6": "3a37e8282e6c8ba16ff4147de447670a",
".git/objects/9d/42ffd45939aa01984dfd0590785ab6a9896716": "c127327fc3e809f0b1d5e720e9a59cae",
".git/objects/da/1343d2d3a38a0e59e345a1f7c9f1d7a4d016b7": "408ced11b0f8521064ecc5bafd4fdd3c",
".git/objects/a2/1ec0e16d9ea82e6d0b3758df2dfcb6dd00661d": "8d66ba3f4fb917c57f4706b3bccfb33d",
".git/objects/a2/c8c982f9c2f96592d6ca3c48b045a68bbc44c5": "cd20a2093de1a155fdefb69606af9c93",
".git/objects/d8/0d9b2adb5079d301b3f203c5357c540735a931": "473402a496f9bad4a83744d3eefb49c7",
".git/objects/e5/b4150f1b5dcefb47d7d5e36d46028b1219940d": "4f587b1286d15f189badd659eb48bfeb",
".git/objects/f3/94efdee54cb5dd3fa35b741f00864e903eadc6": "c4764667cfb48abed9f6e91d939aec91",
".git/objects/f2/ed699751bac628f37585fe629476ea008eef29": "ad7c94e50e130b156312e358d4fc309f",
".git/objects/c1/d7ef438e8f013b6d7cf2f3244ed684b7a7e914": "cca9b47705ba1e16f2e047c0516ddabd",
".git/objects/4e/a892cd5bc8061b4e293f74cffb20c9869e638a": "e2c028b560be782c44eea2b40778f38f",
".git/objects/20/67116ebace2e7cc7f0dc28a1e7035d938b3054": "d47b406b850ce1df0ae8a6dd89727768",
".git/objects/7d/ca870feaf8acb2317c53d285159a224e177a23": "4b221488d242d5f5fa4c78b41982ff35",
".git/objects/7d/5eaf7a98705364fc8e0639cf07d7eb4641ad35": "95ca12344bed08f9adc35295732a883c",
".git/objects/7d/ff226b0886f4f69a7a09dcf2763c9461a2c2b5": "09efdf7b97662012d870036f6f85e59b",
".git/objects/7c/25f0981018a833d22f6908243aa424b7c8d763": "77552c3aa4a86fc26ca4d0615057b89a",
".git/objects/16/b1c9a7ffa35417967a9d1f0498a295f294a70c": "01f84f795bb26f9d132aad5914a3770c",
".git/objects/42/5a7aebdc8184d3068bc3553f15e7f748e12a8d": "5eddb508159047002af6a66eae443c4b",
".git/objects/89/8fcdc96c756fd4cbc271f6e7ef098139038205": "84ff7695bcf7230f5b6bf7f42c14e247",
".git/objects/87/4270ec92c3d1d7a363660f519918dfa4dfb8a1": "6355795f54b6ae21a6479921e4f947c8",
".git/objects/74/f1c8dfe398f32d0a9f459c17cc27028f710ff1": "297851b8bc9ade7b7eae12c171b390da",
".git/objects/1a/2465d4d8954faadc4c874f15edfbf2d9c7ec5c": "b35f802aa2499a2a9f57e63ab9d50d36",
".git/objects/8f/6d78e1f7d9dc7c1e4374ba8a357933a6ea495f": "eb313beb316bc94dc4363877ee064511",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/19/e8c50e23053bc4cbaeefcc199a977a20f986fd": "b417f3d3199cfdc6fd51921972ad1a89",
".git/objects/21/054e2b9a8cc1f3fa911a9fe5c3c2cb22b23b5a": "9a39db4d40ba546cbabf705e557d0c21",
".git/objects/4d/4170c6fb600d055c194078eca72a618f16cc23": "872b9765ed08328de2885405cc43820d",
".git/objects/75/e2c8c93b94f0a3f24f5161b98e8f614ab44a75": "912d76439341a617aa5822ba35be957e",
".git/objects/81/89788e47f36329a5b94dd046b1fd7836feeef6": "0082bd62cec1d5ff38f82e5b7a6e9c88",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/86/6a1ddbfd5c1c63071a7ffdcb92c18d3d8049ea": "9cc7921f22064ff5ac40e431f5020001",
".git/objects/72/5437c9dc5d4793b6f6dee64200d0a31c130c35": "555811e7aad18f56feee56142221792d",
".git/objects/88/2e3ab7f8f795e42de8bad8ba5f9fc616032217": "ba59a6a2e8e578846270358588b332fc",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/2adc0459c5f8ab6b8fec406b19244e1f16e1a7": "a0b2bfd13949eb5292ccaf1666d69ebd",
".git/objects/31/526bb71d9d3c33bbf04202f75f7234b0eb6cfd": "4f2a729e1f55803c418f95bc37b283c6",
".git/objects/62/073c92959fa281a63c538b13748f73366c8dc0": "78e025f68da43daef1d633a86e9864d2",
".git/objects/62/d51a8de9ae0effc1cefa342386e1ead6192b05": "4cda8ee18c03fa353eff141a8e1864df",
".git/objects/96/98db992af45529256f65ea41188d88049e270e": "e5f6c8469e951b23bf42319e77357802",
".git/objects/53/f96318bab3160806fcdf2929e044a8b43adf3d": "8229acac5c26f1e255baed8e6f55bdf5",
".git/objects/39/942ff3a962a533001d8617224656f754ebf45e": "84b2b7dca5c577c96ce10e8251882234",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/0a/e0b32ae7b71b36c27cd6144db6cedc095be3df": "66f01fb96155000845c93fc6efbb41c3",
".git/objects/0a/656a7a7ba364bba2276f8a77802ae6da21c56d": "4d04799a3210d490d8dac3ad91dd54c9",
".git/objects/d3/57eec7b83cf3241b1e10b4c9ae0de2e3605d76": "d849df55cbb5df90edfd7ac1016ef569",
".git/objects/dd/56eabbf298449db91bfa8644c6fbb20b8e6dda": "3fa6bb294070401dbba0b01792b84ce0",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/7e6c0a836eaa40e23128ac2c1255b6fe16e701": "4e3d3a25335b18bbfd73e530937d6375",
".git/objects/de/8f08834cf09ba9a81eec20e7d4b0554d843765": "d7f104fb87a4d1ac9a0ec00661725615",
".git/objects/b0/f2d026d55fc2ba6262002a8a953d9a98c0c1e6": "d40541ef8929f4cbcde3c93b026c16b8",
".git/objects/f7/4604b4f4494abf86e258f3025b93b04ebefd3d": "287a734684a85008a3179f760c04d6d8",
".git/objects/c2/8cec24ebea42187bb15673648cda090a3489a4": "afd3e700b542116f233b7fa6c32cb2f1",
".git/objects/e9/adf85cb63337c56a468e7824ab99c6df620726": "876f9fa4f3597e3ee976a1b685114205",
".git/objects/e7/69e7620d1daa06325042127b21ca43096dac85": "b040f62fbd3a438b1e6245fa4d58df74",
".git/objects/f8/52e2781bf9bec01ebb65962a772f9f27fb5635": "ad493dc359701a3b151863a16a93398a",
".git/objects/24/60ddfb9a0672ff1f296234239de147856b1a4e": "20d633674623bdf992b353fadc51d8c1",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/78/7529fd71fd4b68cc43f124b0cac188cb5d52f3": "5827324e0f1fdf40e655458d78ff74f3",
".git/objects/8b/7c10901bf358de56651d47938f7355d4ebbd7c": "7c3ce0871bf99538063a16facf1dfd09",
".git/objects/25/4f55901a4a7402259166443b56c30966a598b2": "904a2677415c44b59d97744a58ef0790",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "0aebccfd5866bfc3e7c8f625230c22f7",
".git/logs/HEAD": "12d092caab127e9e4c4ab28fc8aa7328",
".git/logs/refs/heads/master": "12d092caab127e9e4c4ab28fc8aa7328",
".git/logs/refs/remotes/origin/master": "0e1cc0034395649bea2196aa39f97f69",
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
".git/refs/heads/master": "7500e095c65c8d816584b75212d42713",
".git/refs/remotes/origin/master": "7500e095c65c8d816584b75212d42713",
".git/index": "ddc5cabc89d67b61f57c2735650e4fcb",
".git/COMMIT_EDITMSG": "f236e47eeed9bc1bed10c14b9a09719e",
".git/FETCH_HEAD": "0d60ad3129abc3c4a420ffd881997294",
"assets/LICENSE": "146549712ddd52f1f93c745c0c521797",
"assets/AssetManifest.json": "856199bc482809b756645e8533229b9b",
"assets/FontManifest.json": "6331122f59db4f32839f50dcaf3a9a12",
"assets/packages/line_icons/lib/assets/fonts/LineIcons.ttf": "8d0d74fa070d25f1d57e29df18800b8a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/flutter_feather_icons/fonts/feather.ttf": "c96dc22ca29a082af83cce866d35cebc",
"assets/db/db.json": "f67e2de96a94c822115877cf3bec8e80",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/assets/images/web_frame.png": "27436e3a79b6aa733734648526bea17f",
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

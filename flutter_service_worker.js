'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "fe43b4e7728f3181282ba67f9a354379",
"version.json": "29d60ee6a6e705a48c1b47f8813746af",
"index.html": "7abeac3cdee4e32e7e65bdb74944f879",
"/": "7abeac3cdee4e32e7e65bdb74944f879",
"main.dart.js": "332c52edfe7fd3b649b90b34c5a805e2",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "b81888306fb711ca3b343e1ef2f67e80",
"assets/AssetManifest.json": "67bb1647b95095fb6f601fef2ea841bb",
"assets/env.json": "10f1070097adfbe45d8c8ad0fbe094a4",
"assets/NOTICES": "567ee1eabd718e43f964432f94a2815e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "6b3819c757fa3d53c4e3f93fabe2590c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b93248a553f9e8bc17f1065929d5934b",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "185614b49de67ab28e0308d5f2c6f1e9",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/images/sad_face.svg": "4eccb4273d492e76924127c7520b7890",
"assets/assets/images/Design.png": "bf5d8b4e29a1a824b3508e99aaea59a6",
"assets/assets/images/tick.png": "b5d0d93ec8f74b8d3c3e0f3d1e581a1f",
"assets/assets/images/priority.png": "a2b219d661e694c35b046af37c00a1bb",
"assets/assets/images/keys.png": "fbb97021497c48667049e8847cce5e44",
"assets/assets/images/discount.png": "6520eda1f39ca26743fd4ed26f13c10a",
"assets/assets/images/memberships.png": "f78b1e34ed64496f04d2f5fa7567f2b1",
"assets/assets/images/project_details.png": "7fe293911e0f57c6501fe270b85b792a",
"assets/assets/images/no-image.jpg": "1a5d2f8e2ae237e2dd853bd7b3fa7287",
"assets/assets/images/32b7e920-537b-4c67-ba5e-01073ef6f56d-1757815904909.jpeg": "dbdebbeefd2dd784d09e4a3c94a1261c",
"assets/assets/images/project_gallery.png": "0fab92c5347eeba40a441f8a6d54b982",
"assets/assets/images/all.png": "e48cdc8f1aaeeb258af74b73252b2d16",
"assets/assets/images/views.png": "ec1c2ce3d02b4cd6313c62d389844c13",
"assets/assets/images/slider_1.png": "7b8ac895eb06822903385ba4e1bfdc00",
"assets/assets/images/reno_logo.png": "6d68249740612eb7b0f80dfa74e5b9d6",
"assets/assets/images/year.png": "b0faf63b2bc575dd8fc2244b265cf6d3",
"assets/assets/images/slider_2.png": "90e83180c4a9e3688a30280d92f02919",
"assets/assets/images/slider_3.png": "af8b6069244049351669d2b17ebfb20b",
"assets/assets/images/32b7e920-537b-4c67-ba5e-01073ef6f56d-1757660089947.jpeg": "dbdebbeefd2dd784d09e4a3c94a1261c",
"assets/assets/images/whatsapp_logo.png": "85becb35e8864e42a5796fd8e240fbfb",
"assets/assets/images/8d557efb-9c20-4c31-b5e4-333f35a4d690-1757816229809.jpeg": "f31bbcdc56ac216d15f9500ae10e2326",
"assets/assets/images/8d557efb-9c20-4c31-b5e4-333f35a4d690-1757661642785.jpeg": "f31bbcdc56ac216d15f9500ae10e2326",
"assets/assets/images/top-ups.png": "fc25a03ec2be639bc23b26b0f39733bb",
"assets/assets/images/date.png": "c3ae91263352883710311f62b1e3fd6a",
"assets/assets/images/portfolio.png": "eb949322af1c4c43a5e25d37b54f2ee7",
"assets/assets/images/reno.png": "5d0e3d270518199b224bce40eb70f927",
"assets/assets/images/Renovation.png": "51abc76dd552e8f509f8a19e721507a0",
"assets/assets/images/apple_icon.png": "be00559b7ff821149abce8b2ddf4675d",
"assets/assets/images/google_logo.png": "24c22e47b7f198df14783544924f51e3",
"assets/assets/images/Timeline.png": "d1cb16a2ba45d5aecb8ac6b4c59e45ad",
"assets/assets/images/video.png": "e3edf766bf50e95d2129dd51485fdc03",
"assets/assets/images/Design_styles.png": "2d64912eff65dae5c6a3defbb5656ff4",
"assets/assets/images/clock.png": "1596803981cb95be2e2780e34fcd099c",
"assets/assets/images/project_info.png": "071c54011de7730cb79c44961b824ba6",
"assets/assets/images/edit.png": "59174f3a1e967e2236387991008d981b",
"assets/assets/images/PHOTO-2025-09-12-14-33-14-1757658826356.jpeg": "0601ef083817eb20bfcdb7fce17988f7",
"assets/assets/images/purchases.png": "65ff01065423a764b3bff49d2afe2154",
"assets/assets/images/slider_2.jpeg": "899b6c87eebbbd20ba6250855bc43dec",
"assets/assets/images/slider_3.jpeg": "831539f8a1a93c3558b94682bcc3f923",
"assets/assets/images/img_app_logo.svg": "52e0f13a4898fcb7e2e6b785bc50d3e8",
"assets/assets/images/IMG_1961-1757564924074.jpeg": "b1f9482ac1a90156ed05de596944420e",
"assets/assets/images/Budget.png": "7860eebec374b4398003b34024d6cb50",
"assets/assets/images/images.png": "c5c08a435aed152c6424868ee8e204c8",
"assets/assets/images/save.png": "3b338fb020ecc053efa7a2215bbd695a",
"assets/assets/images/8d557efb-9c20-4c31-b5e4-333f35a4d690-1757816484789.jpeg": "f31bbcdc56ac216d15f9500ae10e2326",
"assets/assets/images/cost.png": "a860a70dbe3415dc45b91cdab14c47ef",
"assets/assets/images/reno_type.png": "2f0da5896f6b8c3e3cf4df933dd75017",
"assets/assets/members.json": "4a97544ef2e394c4dd7846373e8e61df",
"assets/assets/README.md": "310a970fa31389fa571855f5bf8dee2d",
"assets/assets/Member-List-Export-2025-September-17-0519.csv": "1597896dd34660a8b5b94c4794027ed3",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

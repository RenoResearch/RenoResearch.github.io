'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "ea98f32ba9e98a786a260d3900aba093",
"version.json": "63fce595acf2b608752da563416e8659",
"index.html": "7abeac3cdee4e32e7e65bdb74944f879",
"/": "7abeac3cdee4e32e7e65bdb74944f879",
"main.dart.js": "5ad42907d4925cdf98f3e976a41d1766",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "b81888306fb711ca3b343e1ef2f67e80",
"assets/AssetManifest.json": "dd9de9f11a25e5650f90bab1a5e6221d",
"assets/env.json": "10f1070097adfbe45d8c8ad0fbe094a4",
"assets/NOTICES": "567ee1eabd718e43f964432f94a2815e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "efc43b44899d77d81905ce6fd16fbba6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b93248a553f9e8bc17f1065929d5934b",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "6d2f3af6d57c9c59332170d6f34d853d",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/images/last_login.png": "da4ef2e731f7cbf2662affcc8cd015c5",
"assets/assets/images/info.png": "071c54011de7730cb79c44961b824ba6",
"assets/assets/images/email.png": "5428503bee096a45fdddd4f9fcdbb5b2",
"assets/assets/images/area.png": "5a2eac75f3408f0f6a20af554533fefc",
"assets/assets/images/bx_certification.png": "46f6bad2214b8c89808e048369ce58ce",
"assets/assets/images/Team.png": "9871a1b059b63f86f8233c4fdae072b2",
"assets/assets/images/sad_face.svg": "4eccb4273d492e76924127c7520b7890",
"assets/assets/images/street.png": "246332f5b26866010ba5b170c8a5ac9d",
"assets/assets/images/Design.png": "bf5d8b4e29a1a824b3508e99aaea59a6",
"assets/assets/images/renovation_loan.png": "dd1e4303c30cfca5eb1b27dd629dc725",
"assets/assets/images/tick.png": "b5d0d93ec8f74b8d3c3e0f3d1e581a1f",
"assets/assets/images/Region.png": "2de2f324ee034bf133d816760d2b8604",
"assets/assets/images/chat_now.png": "fa8cdf8ca129eddb76c554a877bc67b9",
"assets/assets/images/Portfolios.png": "5cc2ca8464f86757a9c1a8c7bf65a1e5",
"assets/assets/images/priority.png": "a2b219d661e694c35b046af37c00a1bb",
"assets/assets/images/leads_un.png": "862a2d25102c2dc07380f0483bf020b0",
"assets/assets/images/create_s.png": "5f1f3174332e5782d194aeba61e07fd7",
"assets/assets/images/experience.png": "daad6cc6779d450965386cc9f5811e10",
"assets/assets/images/address_contact.png": "0bd213f42045bd45e6a56d122eea463a",
"assets/assets/images/profile_navigator.png": "793ea4b60d4c26e95f3e89f399d5e7a4",
"assets/assets/images/actions.png": "04f8e57587accea9c0e2c6707dda655a",
"assets/assets/images/keys.png": "fce3c371a3dab5364725dab73ef27196",
"assets/assets/images/Mail.png": "2528b25e2bc4cf3562941b9144d4993c",
"assets/assets/images/website.png": "20915310470eb2fae234f8a78a275e44",
"assets/assets/images/phone_contact.png": "a12b9bcac48962be14d6123b2e48d483",
"assets/assets/images/discount.png": "6520eda1f39ca26743fd4ed26f13c10a",
"assets/assets/images/memberships.png": "f78b1e34ed64496f04d2f5fa7567f2b1",
"assets/assets/images/instagram.png": "8ba2ac147aa34874df4fb252a03f3fc2",
"assets/assets/images/project_details.png": "7fe293911e0f57c6501fe270b85b792a",
"assets/assets/images/no-image.jpg": "1a5d2f8e2ae237e2dd853bd7b3fa7287",
"assets/assets/images/Name_contact.png": "938373b96f9d22bb6339c0e471549840",
"assets/assets/images/32b7e920-537b-4c67-ba5e-01073ef6f56d-1757815904909.jpeg": "dbdebbeefd2dd784d09e4a3c94a1261c",
"assets/assets/images/bundles_s.png": "3c674ed73bb7caa98c6375c342b8a610",
"assets/assets/images/Postal_code.png": "fe7641a953790124481928e49ae48771",
"assets/assets/images/project_gallery.png": "0fab92c5347eeba40a441f8a6d54b982",
"assets/assets/images/address.png": "296d548f510df85d3ff495d2d93992db",
"assets/assets/images/all.png": "e48cdc8f1aaeeb258af74b73252b2d16",
"assets/assets/images/views.png": "ec1c2ce3d02b4cd6313c62d389844c13",
"assets/assets/images/country.png": "44dd71692f4fd0ad78201a5679dddab0",
"assets/assets/images/slider_1.png": "7b8ac895eb06822903385ba4e1bfdc00",
"assets/assets/images/Design_styles_nav.png": "dfb49bf1b6bb159bd8483adbdf346a87",
"assets/assets/images/reno_logo.png": "6d68249740612eb7b0f80dfa74e5b9d6",
"assets/assets/images/Phone_number.png": "2b146a59ffbeed341ad28b10d2d19f6c",
"assets/assets/images/Services.png": "66c4de423c67ee92444cbaf6540a1990",
"assets/assets/images/Tag.png": "cc0c48c5ce0130c9dc88d2a11372f07d",
"assets/assets/images/create_un.png": "e31569b8adb7ef18d1a3a6c14b8eddff",
"assets/assets/images/Services_nav.png": "5451c9c3137322f191e993fe89adae8a",
"assets/assets/images/year.png": "b0faf63b2bc575dd8fc2244b265cf6d3",
"assets/assets/images/slider_2.png": "90e83180c4a9e3688a30280d92f02919",
"assets/assets/images/uen.png": "72002685ce226bcb547637886e6c599f",
"assets/assets/images/slider_3.png": "af8b6069244049351669d2b17ebfb20b",
"assets/assets/images/professional_experiance.png": "2be56c02dff411a56138edc0dd44d785",
"assets/assets/images/metadata.png": "b4fd80570f12ede8cbaf82ceee2a3533",
"assets/assets/images/32b7e920-537b-4c67-ba5e-01073ef6f56d-1757660089947.jpeg": "dbdebbeefd2dd784d09e4a3c94a1261c",
"assets/assets/images/business_owner.png": "daad6cc6779d450965386cc9f5811e10",
"assets/assets/images/arrow.png": "0f5ab46dfebba0ed19dc77b49f936f0b",
"assets/assets/images/whatsapp_logo.png": "85becb35e8864e42a5796fd8e240fbfb",
"assets/assets/images/phone_contact_nav.png": "a12b9bcac48962be14d6123b2e48d483",
"assets/assets/images/Firm_details.png": "997c55b9e64d39e631797722d548678f",
"assets/assets/images/loan_options.png": "997d812ee335e7a811b23ec9faaef27f",
"assets/assets/images/website_links.png": "110c4b9919f3222193e7aa455af0efc2",
"assets/assets/images/edit_profile.png": "36a405c21a2505bcbcc77e7f9d500a7a",
"assets/assets/images/work_done.png": "1b3580fa88bd2ece7014d192deec1406",
"assets/assets/images/about_us.png": "963b0494b01bb4559c6dbe0e25480d4a",
"assets/assets/images/8d557efb-9c20-4c31-b5e4-333f35a4d690-1757816229809.jpeg": "f31bbcdc56ac216d15f9500ae10e2326",
"assets/assets/images/project%2520details.png": "7fe293911e0f57c6501fe270b85b792a",
"assets/assets/images/Design_nav.png": "dfb49bf1b6bb159bd8483adbdf346a87",
"assets/assets/images/contact.png": "84201d41f36ac0e92a555e227bdc8995",
"assets/assets/images/home_s.png": "6d2782fb149980383e6a929c36bafe72",
"assets/assets/images/8d557efb-9c20-4c31-b5e4-333f35a4d690-1757661642785.jpeg": "f31bbcdc56ac216d15f9500ae10e2326",
"assets/assets/images/team_size.png": "db624d037a4be7f00e00a5cdf8e448bd",
"assets/assets/images/top-ups.png": "fc25a03ec2be639bc23b26b0f39733bb",
"assets/assets/images/date.png": "c3ae91263352883710311f62b1e3fd6a",
"assets/assets/images/balance.png": "c2bac00f4e2a8d366c2f823ce3a35160",
"assets/assets/images/portfolio.png": "eb949322af1c4c43a5e25d37b54f2ee7",
"assets/assets/images/home_un.png": "fe28abe1ddd3eb0ccf01fa0de750cd98",
"assets/assets/images/company_description.png": "0b8a920bbbf54ce8ed1bbab20b44f728",
"assets/assets/images/reno.png": "5d0e3d270518199b224bce40eb70f927",
"assets/assets/images/Renovation.png": "51abc76dd552e8f509f8a19e721507a0",
"assets/assets/images/apple_icon.png": "be00559b7ff821149abce8b2ddf4675d",
"assets/assets/images/google_logo.png": "24c22e47b7f198df14783544924f51e3",
"assets/assets/images/cost_range.png": "b02a62332f217e894eb90a7140e0761d",
"assets/assets/images/description.png": "9a674b21fbb9ebe60dadce1b5ecae57c",
"assets/assets/images/Timeline.png": "d1cb16a2ba45d5aecb8ac6b4c59e45ad",
"assets/assets/images/linkedin.png": "6ec1f15fd4fc31a0a239211188f0ceb9",
"assets/assets/images/video.png": "e3edf766bf50e95d2129dd51485fdc03",
"assets/assets/images/profile.png": "e8a9d82a0087ba7cbadc7ba35a77f44a",
"assets/assets/images/additional_details.png": "b2cba71bf1eefe8634c90a2c31c3ad6f",
"assets/assets/images/mobile.png": "ebefdd13c322710c40cad0a775adfa27",
"assets/assets/images/Design_styles.png": "2d64912eff65dae5c6a3defbb5656ff4",
"assets/assets/images/Location.png": "b9a03f37e0c85eaba11190742f701866",
"assets/assets/images/project_id.png": "6ae7617954178240af4b07d8688a4282",
"assets/assets/images/clock.png": "1596803981cb95be2e2780e34fcd099c",
"assets/assets/images/project_info.png": "071c54011de7730cb79c44961b824ba6",
"assets/assets/images/leads_s.png": "0beab6a597a069517e849cadbe7a349e",
"assets/assets/images/edit.png": "59174f3a1e967e2236387991008d981b",
"assets/assets/images/t.png": "0feb365d5a9a76ac844dc04e30d573d8",
"assets/assets/images/dlt.png": "4414bb6613b20e19b1a3c74360d0b09b",
"assets/assets/images/PHOTO-2025-09-12-14-33-14-1757658826356.jpeg": "0601ef083817eb20bfcdb7fce17988f7",
"assets/assets/images/purchases.png": "65ff01065423a764b3bff49d2afe2154",
"assets/assets/images/chat_un.png": "9e77c01d255c705ed48bf72199958f9f",
"assets/assets/images/Name.png": "be40940d1e49d41f5e6d57908528fd9b",
"assets/assets/images/mobile_number.png": "c807bc5fa7037582623a092c73c584f7",
"assets/assets/images/Name_nav.png": "be40940d1e49d41f5e6d57908528fd9b",
"assets/assets/images/slider_2.jpeg": "899b6c87eebbbd20ba6250855bc43dec",
"assets/assets/images/chat_s.png": "33577a839ff11616d3e4266f55f34457",
"assets/assets/images/facebook.png": "96a575a929817415e5131c292df9e2ea",
"assets/assets/images/slider_3.jpeg": "831539f8a1a93c3558b94682bcc3f923",
"assets/assets/images/img_app_logo.svg": "52e0f13a4898fcb7e2e6b785bc50d3e8",
"assets/assets/images/IMG_1961-1757564924074.jpeg": "b1f9482ac1a90156ed05de596944420e",
"assets/assets/images/contact_person.png": "106a539c3852644f1f3d1432abeeb944",
"assets/assets/images/cost_nav.png": "b815c60a9c6b321e75509c2fc7ecafea",
"assets/assets/images/registration_date.png": "d6cdc519eb14376243f8636ec7e6015f",
"assets/assets/images/Budget.png": "7860eebec374b4398003b34024d6cb50",
"assets/assets/images/current_plan.png": "bb60dc076abd2adb4f897d67de49315a",
"assets/assets/images/images.png": "c5c08a435aed152c6424868ee8e204c8",
"assets/assets/images/save.png": "3b338fb020ecc053efa7a2215bbd695a",
"assets/assets/images/8d557efb-9c20-4c31-b5e4-333f35a4d690-1757816484789.jpeg": "f31bbcdc56ac216d15f9500ae10e2326",
"assets/assets/images/Firm.png": "0a3c255633384341d7483e0edae22681",
"assets/assets/images/cost.png": "a860a70dbe3415dc45b91cdab14c47ef",
"assets/assets/images/gold.png": "6a787d7fbbcc94200043687ffc93f74f",
"assets/assets/images/platinum.png": "a994ad97d8fdae87a76729198dec64de",
"assets/assets/images/images_navigator.png": "ee95aed0ade703ff28c980a84b7f777e",
"assets/assets/images/bundles_un.png": "b635eddd445236a50cc5a2dff79f2d06",
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

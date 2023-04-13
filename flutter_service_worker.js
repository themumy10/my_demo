'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "604cb5f5d6393ca931fb8a9c0b5afd52",
"splash/img/light-2x.png": "f3f9ea727e1e0dc2f50e3fb685c409fd",
"splash/img/dark-4x.png": "9911215b0f85e11599991464d5beb00c",
"splash/img/light-3x.png": "643a3271094e367523e9cb79652285db",
"splash/img/dark-3x.png": "643a3271094e367523e9cb79652285db",
"splash/img/light-4x.png": "9911215b0f85e11599991464d5beb00c",
"splash/img/dark-2x.png": "f3f9ea727e1e0dc2f50e3fb685c409fd",
"splash/img/dark-1x.png": "0cf5a19dedcac6c20416f23e2a1643a8",
"splash/img/light-1x.png": "0cf5a19dedcac6c20416f23e2a1643a8",
"splash/splash.js": "123c400b58bea74c1305ca3ac966748d",
"splash/style.css": "c94c38ff00a9d487c353a2d78989ea08",
"index.html": "bf1bed160502f642198a6268c2075cb2",
"/": "bf1bed160502f642198a6268c2075cb2",
"main.dart.js": "3c75cd4f29c321fb10184952bb335813",
"favicon.png": "eb4fff6abb172bda9a23e46951b5dbd7",
"icons/favicon.ico": "8ee04cc280c557c4ff0065a3ffecca38",
"icons/Icon-192.png": "817c54b3abb9d748196318840822294f",
"icons/favicon.png": "ebfdb1ca25d199db58c0bee1ac35e505",
"icons/Icon-512.png": "1a322b01e0994bc424e863a9cc29539e",
"manifest.json": "96b4ff4741b796f356fce1b603f6e23a",
"assets/AssetManifest.json": "07c0da3545f8b818d69ee2943488005f",
"assets/NOTICES": "9d2d844b180a62a53303804786e0572c",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/packages/model_viewer_plus/assets/model-viewer.min.js": "fb3df9ef8e49b5e08b6afcb95521a52c",
"assets/packages/model_viewer_plus/assets/template.html": "8de94ff19fee64be3edffddb412ab63c",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/svg/logo.svg": "8b94e675cb9a71b8fec6ed247a63fd0f",
"assets/assets/images/pizzas/smoked_tongue.png": "f11c524c8f01b1cd2c38951255b3a4d1",
"assets/assets/images/pizzas/deep_dish.png": "fa1a39f4ef2843588633cc7cf042c44e",
"assets/assets/images/pizzas/nutella_oreo.png": "c866484d4d6a9196c743d83ba3166100",
"assets/assets/images/pizzas/salad_enginar.png": "d316c75187575ac2cafad8bc9fa36732",
"assets/assets/images/pizzas/chocolate_calzone.png": "bbd1b176a2a3e4b75838b6168c55953b",
"assets/assets/images/pizzas/sojouk.png": "e8062c3e2d8c90694e7ff8c9912e2f72",
"assets/assets/images/pizzas/salad_somon.png": "126065670b47bd2521c26b040342c3cf",
"assets/assets/images/pizzas/vegan_cabbage.png": "121a96738af8ddef9731c8bf02a93e9c",
"assets/assets/images/pizzas/super_margarita.png": "564a6cd21a1e24d4c4b50df190dc9b81",
"assets/assets/images/pizzas/mozerralla.png": "cab74dad1e871d9c6cf9d38b49afb12e",
"assets/assets/images/pizzas/vegan_abuergine.png": "0f0f723c87f097ca87e50b6751f7b61c",
"assets/assets/images/pizzas/classic_vegan.png": "26bc34306c4c8a2a52188da27bff90dc",
"assets/assets/images/pizzas/pepproni.png": "ded3e12c20b8b3a0f2ffe9a29b34cae1",
"assets/assets/images/pizzas/vegan_enginar.png": "a7ffa301953f6122e737b159a059e1ab",
"assets/assets/images/pizzas/four_cheese.png": "b19b3e063de17cbe1846bb2e6b13f5f0",
"assets/assets/images/pizzas/aubergine.png": "cf6bb1c8b40adcdbe768e7160bf50973",
"assets/assets/images/pizzas/salad_white_cheese.png": "84218a10fab017a116651a84121b7647",
"assets/assets/images/pizzas/salad_ton_fish.png": "498ba5c6449a9123af2edfe83305ec51",
"assets/assets/images/pizzas/tongue_rib.png": "508031d6c5ff9e0022030802cc3604a1",
"assets/assets/images/pizzas/super_sossage.png": "b3ff53574555044a91c73ff26b61bd64",
"assets/assets/images/pizzas/margarita.png": "066810e8c3becce1666fadf3acebab90",
"assets/assets/images/pizzas/pastramy.png": "0a6ceda43a3a1ef66f7bb303a88acb6f",
"assets/assets/images/pizzas/pizza_duo.png": "fa70837d3874c88594121a9861bf27ea",
"assets/assets/images/pizzas/nutella_m_m.png": "d97fc50724f509367baf82bc56ebe0fa",
"assets/assets/images/pizzas/goat_cheese.png": "96f572d45708549216218277592a8b26",
"assets/assets/images/pizzas/super_pastramy.png": "0ec6e82c170bc2543475a390ab137664",
"assets/assets/images/pizzas/logo.png": "235734d71d12c873dad56c642cf13605",
"assets/assets/images/pizzas/vegan_margarita.png": "bd5e4e3244491b62a4303711b1fa4b7a",
"assets/assets/images/pizzas/tire_sojouk.png": "0b4820021da880e18a61d2b6ebb0d74f",
"assets/assets/images/pizzas/margarita_yesil.png": "da0d199e7981fc16fbe3b867cd8ae94d",
"assets/assets/images/pizzas/pizza_back.png": "1bf80c03f6e4c436d6b47e02c1773f95",
"assets/assets/images/pizzas/courgette.png": "834061a0c5cbb9231873cd084b234086",
"assets/assets/images/pizzas/smoked_antrikot.png": "9d6f59d4367b2187cad5274c42756c4f",
"assets/assets/images/pizzas/super_sojouk.png": "4364297dc63c95e3699f958fe7b249f0",
"assets/assets/images/pizzas/cheddar_sossage.png": "93510bce3e1c3c6ee427945f1459f397",
"assets/assets/images/pizzas/ricotta.png": "6d79befe68ad8a6661fab1b40d9d415d",
"assets/assets/images/pizzas/vegan_mushroom.png": "2c90e19aebce6322036825a29010512f",
"assets/assets/images/pizzas/chocolate_pizza.png": "c0b40cca58d3d5d4c41bf2030969dece",
"assets/assets/images/logo_with_back.png": "19d21c6202759c2f563980e7d5e5a7e7",
"assets/assets/images/chef.png": "66d2cc24ec80dcd7f6e8592bf25561cc",
"assets/assets/images/models/pizza.glb": "1c174a43905b01f5091d037bb61010dd",
"assets/assets/images/desserts/01-lemon-cheesecake-bg.png": "5b5d8a37dc4b778272d545d1d3ddb8dd",
"assets/assets/images/desserts/01-lemon-cheesecake-bg-lg.png": "bb69805f0f4efb39540d73cc4849d3cb",
"assets/assets/images/logo_dark.png": "19d21c6202759c2f563980e7d5e5a7e7",
"assets/assets/images/logo.png": "19d21c6202759c2f563980e7d5e5a7e7",
"assets/assets/images/logo_light.png": "19d21c6202759c2f563980e7d5e5a7e7",
"assets/assets/images/menu_images/deserts.webp": "8933550bcda9a6fd62edc8160daf2e79",
"assets/assets/images/menu_images/pizzas.webp": "b272cc4629bba60a001b1b8a147e35a0",
"assets/assets/images/menu_images/iconics_pizzas.webp": "e1b636718f69bc55af723185ce383d24",
"assets/assets/images/menu_images/drinks.webp": "cce2c2597eb222a38b6beb3443fc9b1b",
"assets/assets/images/menu_images/salads.webp": "bf52b8d399751883cca87147b206a1c0",
"assets/assets/images/menu_images/vegan_pizzas.webp": "89487b8ee00b3c8ea2f1538294b166b8",
"assets/assets/fonts/Rubik-Bold.ttf": "f70066a21af08705d0503ad692446de1",
"assets/assets/fonts/Rubik-Light.ttf": "98df4209c27b1be565511cc954fa307d",
"assets/assets/fonts/Rubik-Medium.ttf": "bb476f36e32039a411d1f3afaf5a81af",
"assets/assets/fonts/Rubik-Regular.ttf": "e100d91366c744a9fcf055b7c5af9961"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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

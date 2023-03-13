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
"index.html": "3450c9540df3a446c0baf38fa415a2ad",
"/": "3450c9540df3a446c0baf38fa415a2ad",
"main.dart.js": "c2f3636073070eca4f75877cb0e93975",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"favicon.png": "eb4fff6abb172bda9a23e46951b5dbd7",
"icons/favicon.ico": "8ee04cc280c557c4ff0065a3ffecca38",
"icons/Icon-192.png": "817c54b3abb9d748196318840822294f",
"icons/favicon.png": "ebfdb1ca25d199db58c0bee1ac35e505",
"icons/Icon-512.png": "1a322b01e0994bc424e863a9cc29539e",
"manifest.json": "96b4ff4741b796f356fce1b603f6e23a",
"assets/AssetManifest.json": "8c6e990aa221a90e44b0b2d91504643d",
"assets/NOTICES": "9d2d844b180a62a53303804786e0572c",
"assets/FontManifest.json": "bebdbe62372509ab3ac605d59c5954a4",
"assets/packages/model_viewer_plus/assets/model-viewer.min.js": "fb3df9ef8e49b5e08b6afcb95521a52c",
"assets/packages/model_viewer_plus/assets/template.html": "8de94ff19fee64be3edffddb412ab63c",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/svg/logo.svg": "8b94e675cb9a71b8fec6ed247a63fd0f",
"assets/assets/images/drinks/damla_su.jpeg": "921a12d05e55b196443b057d4f965aea",
"assets/assets/images/drinks/nigde.jpeg": "394570bca812795dca7193b112d432d4",
"assets/assets/images/drinks/cola.jpeg": "df6de41f2d5a837cec56f957d7d3a6bf",
"assets/assets/images/drinks/san_pellegrino.jpeg": "110446f8dfd4ed5aedba018b386a42a7",
"assets/assets/images/drinks/americano.jpeg": "4fcdbf7534d3d3ac2fcd788eaaf2ad04",
"assets/assets/images/drinks/fanta.jpeg": "25da12c16b3253920c6258ef1d5f624e",
"assets/assets/images/drinks/damla_soda.jpeg": "50c67ba76149cbfadffb9666060095f5",
"assets/assets/images/drinks/sprite.jpeg": "67a37e2db3983f49a120f37ed8e068ec",
"assets/assets/images/drinks/turkish_coffee.jpeg": "300aff19a93a8cc4d104a2b2116411c6",
"assets/assets/images/drinks/ayran.jpeg": "38638fe89c2f02c6b1461b2d362ce933",
"assets/assets/images/drinks/espresse.jpeg": "153361775d1d8b32c873e770066e39f4",
"assets/assets/images/drinks/fusetea.jpeg": "5415c9aa08bf0811e1675686107faee8",
"assets/assets/images/drinks/cappy.jpeg": "446aa0bbe669f6a3740c1fc7200dcc03",
"assets/assets/images/pizzas/deep_dish.png": "70e12ab8de813f3300cf609d0a926843",
"assets/assets/images/pizzas/nutella_oreo.png": "448e2e366f432e91baf6647ac7064581",
"assets/assets/images/pizzas/salad_enginar.png": "bb144c710f99563f67a50b054815682c",
"assets/assets/images/pizzas/chocolate_calzone.png": "d2889c3f98874e2659615902bb5de1c9",
"assets/assets/images/pizzas/salad_somon.png": "d01e3d5936ea6b37067529f9fcdade87",
"assets/assets/images/pizzas/vegan_cabbage.png": "18c103e8157603731fefb48da00c90e2",
"assets/assets/images/pizzas/super_margarita.png": "70ac03f2acd8635d3073a8d371202da7",
"assets/assets/images/pizzas/mozerralla.png": "8a752c4525f5bcf883291f0c3de81091",
"assets/assets/images/pizzas/vegan_abuergine.png": "ba75af821f7e3edba26bef8cc145460c",
"assets/assets/images/pizzas/classic_vegan.png": "74c59a943a6331b72552c51b91245c8b",
"assets/assets/images/pizzas/vegan_enginar.png": "4fb8a73913ccffc3118ccb08988e630c",
"assets/assets/images/pizzas/four_cheese.png": "c4320c1dbef3d3e55ee9b514956c0bb3",
"assets/assets/images/pizzas/aubergine.png": "04758aa9d1d66284ebe92f7fe7873616",
"assets/assets/images/pizzas/salad_white_cheese.png": "07ac40302c1d494aa53b783a2ee3ff1c",
"assets/assets/images/pizzas/salad_ton_fish.png": "9862b101844aced1fc1313a764d1d996",
"assets/assets/images/pizzas/super_sossage.png": "3c1a8a99cdb82510a862766d9d53cb9e",
"assets/assets/images/pizzas/margarita.png": "baea7afec9b6447239e41e6977675018",
"assets/assets/images/pizzas/pizza_duo.png": "01b6b9b55ac03663c7a1c542d96abbbf",
"assets/assets/images/pizzas/nutella_m_m.png": "b2021f4ce0d169bed918a300ec074e8b",
"assets/assets/images/pizzas/goat_cheese.png": "6ff03720113a0b191630a68c6459c088",
"assets/assets/images/pizzas/super_pastramy.png": "d5b364c91b69296a5af7e3762d94e0eb",
"assets/assets/images/pizzas/logo.png": "19d21c6202759c2f563980e7d5e5a7e7",
"assets/assets/images/pizzas/vegan_margarita.png": "4e9850de222cf91140470aa7980c31b9",
"assets/assets/images/pizzas/margarita_yesil.png": "ff3f36a9d53fd6c0b865f4827d0addcc",
"assets/assets/images/pizzas/pizza_back.png": "fa706f20dfb56e80a1655895d4adca82",
"assets/assets/images/pizzas/courgette.png": "cdc3178026b168ab6735ecafa9fdfc74",
"assets/assets/images/pizzas/super_sojouk.png": "ccab7bd07dce9215d92d0e7a17ca4248",
"assets/assets/images/pizzas/ricotta.png": "19a41c23d00226ac19b7a20eeaca91c3",
"assets/assets/images/pizzas/vegan_mushroom.png": "fc0bb826f414a6a993ce345b8dbd6691",
"assets/assets/images/pizzas/chocolate_pizza.png": "30d0b1998d9637f377456a34484fdd99",
"assets/assets/images/logo_with_back.png": "19d21c6202759c2f563980e7d5e5a7e7",
"assets/assets/images/chef.png": "66d2cc24ec80dcd7f6e8592bf25561cc",
"assets/assets/images/models/pizza_model.glb": "01ca2c6f7af7b004d96fc1b6673ab57c",
"assets/assets/images/desserts/01-lemon-cheesecake-bg.png": "5b5d8a37dc4b778272d545d1d3ddb8dd",
"assets/assets/images/desserts/12-chocolate-cake-2.png": "7086e6e6061af9f9332c4e5f45658e96",
"assets/assets/images/desserts/06-white-cream-cake.png": "72a8d761a1e9ab030d0a2ba3bb739ea6",
"assets/assets/images/desserts/10-strawberries.png": "a79464f0bbd083afff41a5e1be71d5df",
"assets/assets/images/desserts/08-cream-cupcakes.png": "1ff6c141271aee101688faf81782b245",
"assets/assets/images/desserts/09-fruit-plate.png": "7d02c401d57e684cca4629ca3f59011b",
"assets/assets/images/desserts/14-fruit-pie.png": "2f7ef095aaaed9bdb84fbe4a43ebfad2",
"assets/assets/images/desserts/07-honey-cake.png": "6696ece812ec169ba1a462b089ae4074",
"assets/assets/images/desserts/05-macaroons.png": "6c1c142c18f700cd54bfe9e6a84a55ed",
"assets/assets/images/desserts/04-fluffy-cake.png": "052b58ceb18ec1f5a93803f08488188f",
"assets/assets/images/desserts/01-lemon-cheesecake.png": "e4a6e999863d592e56ac386d4474bc50",
"assets/assets/images/desserts/02-chocolate-cake-1.png": "9d7262180f2d593b0d86e8926e129888",
"assets/assets/images/desserts/15-apple-pie.png": "2d349519b5ed75ffc09316f990732f90",
"assets/assets/images/desserts/13-strawberry-powdered-cake.png": "eb76ad0808ebfc3b525fb5d831ec4287",
"assets/assets/images/desserts/11-powdered-cake.png": "3ada434b6c99e2e896b3e0e3f67c8680",
"assets/assets/images/desserts/03-chocolate-donuts.png": "9db38d810512b1e73381b0ea7027b72f",
"assets/assets/images/desserts/01-lemon-cheesecake-bg-lg.png": "bb69805f0f4efb39540d73cc4849d3cb",
"assets/assets/images/logo_dark.png": "19d21c6202759c2f563980e7d5e5a7e7",
"assets/assets/images/logo.png": "19d21c6202759c2f563980e7d5e5a7e7",
"assets/assets/images/logo_light.png": "19d21c6202759c2f563980e7d5e5a7e7",
"assets/assets/images/menu_images/deserts.webp": "6a09a0bec61d97733f331aa0a8e6c282",
"assets/assets/images/menu_images/pizzas.webp": "d8807a1466377c6881c524c33222301e",
"assets/assets/images/menu_images/iconics_pizzas.webp": "fbbe7c734420b0106bbfd317c2c6707e",
"assets/assets/images/menu_images/drinks.webp": "191d2e2f3a53d02d1700a0302aeb4df5",
"assets/assets/images/menu_images/salads.webp": "1ff33f0e51668f8200d73df6e627443f",
"assets/assets/images/menu_images/vegan_pizzas.webp": "3cf1ac432c8c4bc61e06cc5c9e5c7abf",
"assets/assets/lottie/share.json": "d5f4630c10e86582b55b0807686535a8",
"assets/assets/lottie/location.json": "5de78046e29d7d5974dfc94a20c659c0",
"assets/assets/lottie/satellite.json": "c03858665772b301e429b749ccead6fc",
"assets/assets/lottie/map.json": "7958a8c809fc98a841df84e19860cbf0",
"assets/assets/fonts/Rubik-Bold.ttf": "f70066a21af08705d0503ad692446de1",
"assets/assets/fonts/Rubik-Light.ttf": "98df4209c27b1be565511cc954fa307d",
"assets/assets/fonts/Rubik-Medium.ttf": "bb476f36e32039a411d1f3afaf5a81af",
"assets/assets/fonts/Rubik-Regular.ttf": "e100d91366c744a9fcf055b7c5af9961",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
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

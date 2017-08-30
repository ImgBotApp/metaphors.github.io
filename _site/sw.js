var CACHE_NAME = 'madhur-cache-v1'; var urlsToCache = [ 'https://cdn.bootcss.com/jquery/3.2.1/jquery.min.js', 'https://cdn.bootcss.com/mdui/0.2.1/js/mdui.min.js', 'https://cdn.bootcss.com/nprogress/0.2.0/nprogress.min.js', 'https://cdn.bootcss.com/jquery_lazyload/1.9.7/jquery.lazyload.min.js', 'https://cdn.bootcss.com/mdui/0.2.1/css/mdui.min.css', 'https://cdn.bootcss.com/nprogress/0.2.0/nprogress.min.css', '/category/', '/category/coding.html', '/editor/', '/friends/', '/assets/css/global.css', '/', '/category/living.html', '/category/reading.html', '/search.json', '/sw.js', '/tags/', '/tags.json', '/sitemap.xml', '/robots.txt', '/feed.xml', '/living/2017/08/28/Hello-World.html', '/assets/css/customCss.css', '/assets/images/blog/hello_world.jpg', '/assets/images/category/coding.jpg', '/assets/images/category/living.jpg', '/assets/images/category/reading.jpg', '/assets/images/home/background.png', '/assets/images/home/left_img.jpg', '/assets/images/home/right_img.png', '/assets/images/music/howls_moving_castle.jpg', '/assets/images/music/spirited_away.jpg', '/assets/images/music/the_wind_rise.jpg', '/assets/images/touch/apple-touch-icon-152x152.jpeg', '/assets/images/touch/chrome-touch-icon-192x192.jpeg', '/assets/images/touch/icon-128x128.jpeg', '/assets/images/touch/ms-touch-icon-144x144.jpeg', '/assets/js/History.js', '/assets/js/customJS.js', '/assets/live2d/wanko/motions/idle_01.mtn', '/assets/live2d/wanko/motions/idle_02.mtn', '/assets/live2d/wanko/motions/idle_03.mtn', '/assets/live2d/wanko/motions/idle_04.mtn', '/assets/live2d/wanko/motions/shake_01.mtn', '/assets/live2d/wanko/motions/shake_02.mtn', '/assets/live2d/wanko/motions/touch_01.mtn', '/assets/live2d/wanko/motions/touch_02.mtn', '/assets/live2d/wanko/motions/touch_03.mtn', '/assets/live2d/wanko/motions/touch_04.mtn', '/assets/live2d/wanko/motions/touch_05.mtn', '/assets/live2d/wanko/motions/touch_06.mtn', '/assets/live2d/wanko/wanko.1024/texture_00.png', '/assets/live2d/wanko/wanko.moc', '/assets/live2d/wanko/wanko.model.json', '/assets/music/howls_moving_castle.mp3', '/assets/music/spirited_away.mp3', '/assets/music/the_wind_rise.mp3', '/manifest.json', '/package-lock.json', ]; self.addEventListener('install', function(event) { event.waitUntil(caches.open(CACHE_NAME).then(function(cache) { return cache.addAll(urlsToCache); }).catch(function(err) { console.log('Cache add error: ', err); })); }); self.addEventListener('fetch', function(event) { event.respondWith( caches.match(event.request) .then(function(response) { if (response) { return response; } var fetchRequest = event.request.clone(); return fetch(fetchRequest).then( function(response) { if(!response || response.status !== 200 || response.type !== 'basic') { return response; } var responseToCache = response.clone(); caches.open(CACHE_NAME) .then(function(cache) { cache.put(event.request, responseToCache); }); return response; } ); }) ); }); self.addEventListener('fetch', function(event) { event.respondWith( caches.open(CACHE_NAME).then(function(cache) { return fetch(event.request).then(function(response) { cache.put(event.request, response.clone()); return response; }); }).catch(function() { return caches.match('/offline.html'); }) ); });
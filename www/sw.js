// 这是一个极简的 Service Worker，确保 PWA 能够被识别
self.addEventListener('fetch', function(event) {
  // 这里暂时不写复杂的缓存逻辑，先保证它能“安装”到桌面
  event.respondWith(fetch(event.request));
});
"use strict";var precacheConfig=[["/Portfolio/index.html","006875a6df8565ab6b1c16cc8400af26"],["/Portfolio/static/css/main.4eed2610.css","49894f259bd9a1376d4215c444e71f42"],["/Portfolio/static/js/main.3f9f68a4.js","c553e66503b689db3cac08091613bdcd"],["/Portfolio/static/media/CV-Krystian Dziuk.158b1419.pdf","158b141946e0e302cc46b08b6500077a"],["/Portfolio/static/media/bggenerator-min.046020e2.jpg","046020e24ca2403bdc57ef9041d5c3c7"],["/Portfolio/static/media/bricks-min.299e78c6.jpg","299e78c62c1e68cbb515395a2181e6bb"],["/Portfolio/static/media/bricks-mobile.274b59cd.jpg","274b59cdfa5d900823d4a8721a40d55b"],["/Portfolio/static/media/dragonball-min.b093b5a2.jpg","b093b5a2594bce58bc3def5986377496"],["/Portfolio/static/media/face-min.45fe5390.png","45fe539046f0122b31aa6688e635eae3"],["/Portfolio/static/media/fog-horizontal.f65c4e33.png","f65c4e33b7972cdc648f19bdf7c27014"],["/Portfolio/static/media/fontello.6aa7054d.woff2","6aa7054d21e80325d2fba9a1e505aff6"],["/Portfolio/static/media/fontello.7fde3f64.woff","7fde3f64735728a5aa488bf765904e4f"],["/Portfolio/static/media/fontello.99450ea2.eot","99450ea2258dbafb99aa6432d683122e"],["/Portfolio/static/media/fontello.e15332c8.svg","e15332c84eea34fd906ec48e15bbfa89"],["/Portfolio/static/media/fontello.f0178981.ttf","f01789816323b84b86f05e28a6337b30"],["/Portfolio/static/media/krainaindyka-min.a6341c40.jpg","a6341c40f603c9317f5688639deb38df"],["/Portfolio/static/media/portfolio-min.fdd51979.jpg","fdd519790c7908d8ba03abf21ac2d361"],["/Portfolio/static/media/solarsystem-min.62241e63.jpg","62241e63c539599b3573574128a65b51"],["/Portfolio/static/media/starwars-min.d5855ba7.jpg","d5855ba79ad4e70b5a74105031c8014c"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="/Portfolio/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});
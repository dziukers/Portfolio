"use strict";var precacheConfig=[["/Portfolio/index.html","93079a784361938559292c609fd30cbf"],["/Portfolio/static/css/main.04b8f4dc.css","dc539c031c8da3969a37bfea37d38f39"],["/Portfolio/static/js/main.5a2a46aa.js","fd8ccbf4fd58b34a06c02f3dc39c3781"],["/Portfolio/static/media/CV-Krystian Dziuk.510cdc0f.pdf","510cdc0f34dd02c0b6df4c2ab30344df"],["/Portfolio/static/media/bggenerator-min.046020e2.jpg","046020e24ca2403bdc57ef9041d5c3c7"],["/Portfolio/static/media/bricks-min.299e78c6.jpg","299e78c62c1e68cbb515395a2181e6bb"],["/Portfolio/static/media/bricks-mobile.274b59cd.jpg","274b59cdfa5d900823d4a8721a40d55b"],["/Portfolio/static/media/dragonball-min.b093b5a2.jpg","b093b5a2594bce58bc3def5986377496"],["/Portfolio/static/media/face-min.45fe5390.png","45fe539046f0122b31aa6688e635eae3"],["/Portfolio/static/media/fog-horizontal.f65c4e33.png","f65c4e33b7972cdc648f19bdf7c27014"],["/Portfolio/static/media/fontello.226e54c9.woff","226e54c922be65e7694a0588ee39ad5b"],["/Portfolio/static/media/fontello.3a76a7fa.svg","3a76a7fa27a35e3860e01fd4e85092a5"],["/Portfolio/static/media/fontello.3efe7a75.ttf","3efe7a75bc325c17249e8b974b7eb1c8"],["/Portfolio/static/media/fontello.3fb547d2.eot","3fb547d2d50135493a81b084c97b3d07"],["/Portfolio/static/media/fontello.f8e859a5.woff2","f8e859a52d1fd26ce3d53f29e1130fc1"],["/Portfolio/static/media/krainaindyka-min.a6341c40.jpg","a6341c40f603c9317f5688639deb38df"],["/Portfolio/static/media/portfolio-min.fdd51979.jpg","fdd519790c7908d8ba03abf21ac2d361"],["/Portfolio/static/media/solarsystem-min.62241e63.jpg","62241e63c539599b3573574128a65b51"],["/Portfolio/static/media/starwars-min.d5855ba7.jpg","d5855ba79ad4e70b5a74105031c8014c"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="/Portfolio/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});
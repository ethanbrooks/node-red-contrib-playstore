var gplay = require('google-play-scraper');
var memoized = require('google-play-scraper').memoized(); // cache with default options
var memoizedCustom = require('google-play-scraper').memoized({ maxAge: 1000 * 60 }); // cache with customized options
 
// first call will hit google play and cache the results
memoized.developer({devId: "DxCo Games"}).then(console.log);
 
// second call will return cached results
memoized.developer({devId: "DxCo Games"}).then(console.log);

gplay.search({term: 'panda', throttle: 10}).then(console.log);

gplay.categories().then(console.log);

gplay.permissions({appId: "com.dxco.pandavszombies"}).then(console.log);

gplay.similar({appId: "com.dxco.pandavszombies"}).then(console.log);

gplay.reviews({
  appId: 'com.mojang.minecraftpe',
  sort: gplay.sort.RATING
}).then(console.log, console.log);

gplay.suggest({term: 'panda'}).then(console.log);

gplay.search({
    term: "panda",
    num: 2
  }).then(console.log, console.log);

gplay.list({
    category: gplay.category.GAME_ACTION,
    collection: gplay.collection.TOP_FREE,
    num: 12
  })
  .then(console.log, console.log);
 
gplay.app({appId: 'com.google.android.apps.translate'})
  .then(console.log, console.log);

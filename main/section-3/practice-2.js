'use strict';

module.exports = (collectionA, objectB) => collectionA
  .map(x => objectB.value.includes(x.key) ? ({key:x.key,count:x.count- Math.floor(x.count / 3)}) : x)

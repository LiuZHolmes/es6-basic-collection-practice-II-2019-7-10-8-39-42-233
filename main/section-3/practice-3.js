'use strict';

module.exports = (collectionA, objectB) => [...new Set(collectionA)]
  .map(x => ({key:x,count:collectionA.filter(y => x === y).length}))
  .map(x => objectB.value.includes(x.key) ? ({key:x.key,count:x.count- Math.floor(x.count / 3)}) : x)

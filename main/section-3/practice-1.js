'use strict';

module.exports = (collectionA, objectB) => collectionA
  .map(x => objectB.value.includes(x.key) ? ({key:x.key,count:x.count-1}) : x)

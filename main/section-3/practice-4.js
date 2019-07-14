'use strict';

module.exports = (collectionA, objectB) => {
  const transform = (x) => {
    if (x.includes('-')) {
      return x[0].repeat(parseInt(x.split('-')[1]));
    }
    else return x;
  }
  return [... new Set(collectionA.map(transform).join('').split(''))]
  .map(x => ({key:x,count:collectionA.map(transform).join('').split('')
  .filter(y => x === y).length}))
  .map(x => objectB.value.includes(x.key) ? ({key:x.key,count:x.count- Math.floor(x.count / 3)}) : x)

}

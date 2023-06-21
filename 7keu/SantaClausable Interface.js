var santa = {
  sayHoHoHo: function () {
    console.log('Ho Ho Ho!');
  },
  distributeGifts: function () {
    console.log('Gifts for all!');
  },
  goDownTheChimney: function () {
    console.log('*whoosh*');
  },
  name: 'I Santa',
};

function isSantaClausable(obj) {
  if (
    typeof obj.sayHoHoHo === 'function' &&
    typeof obj.distributeGifts === 'function' &&
    typeof obj.goDownTheChimney === 'function'
  )
    { return true; } else return false;
}

console.log(isSantaClausable(santa));

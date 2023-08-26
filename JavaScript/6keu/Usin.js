var Cat = (function () {
  const cats = [];

  function Cat(name, weight) {
    if (!name || !weight) {
      throw new Error('Error');
    }
    Object.defineProperty(this, 'name', { get: () => name });
    Object.defineProperty(this, 'weight', {
      get: () => weight,
      set: (value) => {
        weight = value;
      },
    });
    cats.push(this);
  }

  Cat.averageWeight = function () {
    if (cats.length === 0) return 0;
    const totalWeight = cats.reduce(function (sum, cat) {
      return sum + cat.weight;
    }, 0);
    return totalWeight / cats.length;
  };

  return Cat;
})();

function numberOfPairs(gloves) {
  const pairGlove = {
    name: new Array(),
    count: 0,
    pushName: function (name) {
      this.name.push(name);
    },
    deleteName: function (name) {
      delete this.name[this.name.indexOf(name)];
      this.count++;
    },
  };

  for (const item of gloves)
    pairGlove.name.includes(item)
      ? pairGlove.deleteName(item)
      : pairGlove.pushName(item);

  return pairGlove.count;
}

console.log(numberOfPairs(["red", "green", "red", "blue", "blue"]));
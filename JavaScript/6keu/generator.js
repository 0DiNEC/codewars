const photoManager = {
  set: new Set(),
  nameExists: function (name) {
    return this.set.has(name);
  }
}

function generateName () {
  const alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  let res = "";
  for (let i = 0; i < 6; i++) {
    res += alpha.charAt(Math.floor(Math.random() * alpha.length));
  }
  return photoManager.nameExists(res) ? generateName() : res;
}


photoManager.nameExists('ABCDEF'); // returns true
photoManager.nameExists('BBCDEF'); // returns false
function createSecretHolder(secret) {
return obj = {
  secret : secret,

  getSecret: function() {
    return this.secret;
  },
  setSecret: function (secret) {
    this.secret = secret;
  }
}
}

var obj = createSecretHolder(5);

console.log(obj.getSecret());
console.log(obj.setSecret(2));
console.log(obj.getSecret());
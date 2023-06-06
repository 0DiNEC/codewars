class File {
  constructor (fullName, contents) {
    const _fullName = fullName;
    Object.defineProperties(this, {
      fullName: {
        value: _fullName,
        writable: false
      },
      filename: {
        value: _fullName.substr(0, _fullName.lastIndexOf('.')),
        writable: false
      },
      extension: {
        value: _fullName.substr(_fullName.lastIndexOf('.') + 1, _fullName.length),
        writable: false
      }
    })
  }
}

var fileWithComplexName = new File("alpha.beta.gamma.delta.txt", "alpha beta gamma delta");
console.log(fileWithComplexName.extension); // "txt"
fileWithComplexName.extension = "js"; // Reassignment should fail
console.log(fileWithComplexName.extension); // still "txt"
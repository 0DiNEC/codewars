class File {
  constructor (fullName, contents) {
    const _fullName = fullName;
    this.contents = contents;
    this.lineCursorPos = 0;
    this.cursorPos = 0;
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

  getContents () {
    return this.contents;
  }

  write (content) {
    this.contents = `${this.contents.length ? this.contents+'\n':''}${content}`;
  }

  gets () {
    return this.contents.split('\n')[this.lineCursorPos++];
  }

  getc() {
    return this.contents.split('')[this.cursorPos++];
  }
}

var myFile = new File("Lorem Ipsum.txt", "Lorem ipsum dolor sit amet, adispicing eu.");
console.log(myFile.getc()); // "L"
console.log(myFile.getc()); // "o"
console.log(myFile.getc()); // "r"
console.log(myFile.getc()); // "e"
console.log(myFile.getc()); // "m"
console.log(myFile.getc()); // " "
console.log(myFile.getc()); // "i"
console.log(myFile.getc()); // "p"
// ... (many calls to myFile.getc())
console.log(myFile.getc()); // undefined (when number of calls exceeds character count)
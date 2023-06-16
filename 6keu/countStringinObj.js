const obj = {
  obj1: {
    first: "string",
    second: "string",
    third: false,
    fourth: ["string", 2],
    fifth: [],
    sixth: undefined,
    seventh: []
  },

  obj2: {
    0: "string",
    1: 2,
    2: "string",
    0: "string",
    3: "string"
  },

  obj3: {
    1: 2,
    2: "string",
    3: ["string", 2],
    4: "string"
  }
}

let countStr = (obj) => {
  let count = 0;
  for (let key in obj) {
    if (typeof obj[key] == "string")
      count++;
    if (typeof obj[key] == "object") count += countStr(obj[key]);
  }
  return count;
}

console.log(countStr(obj));



let strCount = (obj) => {
  let count = 0;
  let logString = "";

  for (const key in obj) {
    const element = obj[key];

    if (typeof(element) === "string") {
      count++;
      logString += key.toString() + " : " + element.toString() + "\n";
    }
    if (typeof(element) === 'object') {
      count += strCount(element);
      logString += key.toString() + " : " + element.toString() + "\n";
    }
  }

  console.log("----------Log---------\n" + logString);
  console.log(count);
  return count;
}

strCount(obj);
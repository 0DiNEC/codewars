const getStrFormat = (t, word) => {
  if (t === 0) return "";
  if (t === 1) return `${t} ${word}`;
  return `${t} ${word}s`;
};

const getFullStrFormat = (year, day, hour, min, sec) => {
  digit = ["and", ","];
  strTime = new Array();
  strTime.push(getStrFormat(year,'year'));
  strTime.push(getStrFormat(day, 'day'));
  strTime.push(getStrFormat(hour, "hour"));
  strTime.push(getStrFormat(min, "minute"));
  strTime.push(getStrFormat(sec, "second"));

  bAnd = true;
  return strTime.reduceRight((prev, cur, i) => {
    if (cur !== "" && prev !== "") {
      if (bAnd) {
        bAnd = false;
        return `${cur} and ${prev}`;
      } else return `${cur}, ${prev}`;
    }
    return cur + prev;
  });
};

function formatDuration(seconds) {
  if (seconds === 0) return 'now';
  
  let tseconds = seconds % 60;
  let tminute = Math.floor(seconds / 60);
  let thour = 0;
  let tdays = 0;
  let tyear = 0;

  if (tminute >= 60) {
    thour = Math.floor(tminute / 60);
    tminute %= 60;
    tseconds %= 60;
  }

  if (thour >= 24) {
    tdays = Math.floor(thour / 24);
    thour %= 24;
  }

  if (tdays >= 365) {
    tyear = Math.floor(tdays / 365);
    tdays %= 365;
  }

  return getFullStrFormat(tyear, tdays, thour, tminute, tseconds);
}

console.log(formatDuration(0));

// assert.strictEqual(formatDuration(1), "1 second");
// assert.strictEqual(formatDuration(62), "1 minute and 2 seconds");
// assert.strictEqual(formatDuration(120), "2 minutes");
// assert.strictEqual(formatDuration(3600), "1 hour"); 578537
// assert.strictEqual(formatDuration(3662), "1 hour, 1 minute and 2 seconds");

let whatTimeIsIt = function (angle) {
  if (angle < 30)
    angle = 360 + angle;
  let hourAngle = 30;
  let hour = (Math.floor(angle / hourAngle)).toString();
      hour = hour.length === 1 ? "0" + hour : hour;
  let minut = angle % hourAngle === 0 ? "00" : (Math.floor(((angle % hourAngle) * 60) / hourAngle)).toString();
      minut = minut.length === 1 ? "0" + minut : minut; 
  return hour + ":" + minut;
  }

console.log(whatTimeIsIt(63.73435863870628));
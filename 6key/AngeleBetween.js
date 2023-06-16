function handAngle (date) {
  const hour = date.getHours();
  const minutes = date.getMinutes();

	const hourAngle = 0.5 * (hour * 60 + minutes);
  const minuteAngle = 6 * minutes; 
  let angle = Math.abs(hourAngle - minuteAngle);

  
  if (angle > 180) {
    angle = 360 - angle;
  }

  
  if (angle === 180) {
    return Math.PI;
  }

  return angle * (Math.PI / 180);
}

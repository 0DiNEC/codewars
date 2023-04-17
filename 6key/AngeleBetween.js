function handAngle (date) {
  const hour = date.getHours();
  const minutes = date.getMinutes();

	const hourAngle = 0.5 * (hours * 60 + minutes); // calculate the angle of the hour hand
  const minuteAngle = 6 * minutes; // calculate the angle of the minute hand
  let angle = Math.abs(hourAngle - minuteAngle); // calculate the absolute difference between the two angles

  // handle cases where angle is greater than 180 degrees
  if (angle > 180) {
    angle = 360 - angle;
  }

  // handle cases where angle is 180 degrees (opposite sides of the clock)
  if (angle === 180) {
    return Math.PI;
  }

  return angle * (Math.PI / 180); // convert angle from degrees to radians
}

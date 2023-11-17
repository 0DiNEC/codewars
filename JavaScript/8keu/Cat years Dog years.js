// NOTES:

// humanYears >= 1
// humanYears are whole numbers only
// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that

var humanYearsCatYearsDogYears = function (humanYears) {
  let dogYears = 15,
    catYears = 15;

  if (humanYears > 1) {
    dogYears += 9;
    catYears += 9;
  }

  if (humanYears > 2) {
    const years = humanYears - 2;
    dogYears += years * 5;
    catYears += years * 4;
  }
  return [humanYears, catYears, dogYears];
};

console.log(humanYearsCatYearsDogYears(2));


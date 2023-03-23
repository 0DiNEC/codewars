// obj = {
//   type : "",
//   material : "",
//   secondMaterial : ""
// }

let a = [
  { type: "rotten apples", material: "organic" },
  {
    type: "out of date yogurt",
    material: "organic",
    secondMaterial: "plastic",
  },
  { type: "wine bottle", material: "glass", secondMaterial: "paper" },
  { type: "amazon box", material: "paper" },
  { type: "beer bottle", material: "glass", secondMaterial: "paper" },
];

function recycle(array) {
  const materialBins = ["paper", "glass", "organic", "plastic"];

  function getBins(item, binsMaterial) {
    return binsMaterial === item.material || binsMaterial === item.secondMaterial
      ? item.type
      : null;
  }

  binsMaterialItems = new Array();
  for (let i = 0; i < materialBins.length; i++) {
    binsMaterialItems.push(
      array.map((item) => getBins(item, materialBins[i])).filter((item) => item)
    );
  }

  return binsMaterialItems;
}

recycle(a);

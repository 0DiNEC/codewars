const HEX = { HEX_DECIMAL: "0123456789ABCDEF" };

const getMaxColorHSV = (color) => {
  let rgb = new Array();
  for (let i = 1; i < color.length; i += 2) {
    const c = parseInt(color.slice(i, i + 2), 16);
    rgb.push(c);
  }
  rgb = rgb.sort((a, b) => {
    return b - a;
  });

  return rgb[0];
};

function brightest(colors) {
  if (colors.length <=  0) return;
  if (colors.length === 1) return colors[0];
  
  let max = getMaxColorHSV(colors[0]);
  let maxColor = colors[0];

  for (let i = 1; i < colors.length; i++) {
    const color = colors[i];
    if (max < getMaxColorHSV(color)) {
      max = getMaxColorHSV(color);
      maxColor = color;
    }
  }

  return maxColor;
}

f = ["#863617","#3ED1D3","#0B9FD6"]

console.log(brightest(f));

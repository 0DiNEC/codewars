// myFunc

function myFunc(delimiter, ...args) {
  const copyArgs = args
    .slice(0, args.length - 1)
    .map((num) => `${num}${delimiter}`)
    .join('');
  return [...copyArgs, args.at(-1)].join('');
}


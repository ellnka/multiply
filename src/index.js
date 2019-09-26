module.exports = function multiply(first, second) {

  let result = new Array(first.length + second.length).fill(0);

  for (let i = first.length - 1, i2 = 0; i >= 0; i--, i2++) {
    let inMind = 0;
    let n1 = Number(first[i]);
    let j2 = 0;

    for (let j = second.length - 1; j >= 0; j--, j2++) {
      let n2 = Number(second[j]);

      let sum = n1 * n2 + (result[i2 + j2] || 0) + inMind;
      inMind = Math.floor(sum / 10);

      result[i2 + j2] = sum % 10;
    }
    result[i2 + j2] += inMind || 0;
  }

  return result.reverse()
    .join("")
    .split("0")
    .join(" ")
    .trimLeft()
    .split(" ")
    .join("0");
};

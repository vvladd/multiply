module.exports = function multiply(first, second) {

  let firstArr = first.split("");
  let secondArr = second.split("");
  let firstArrLen = firstArr.length;
  let secondArrLen = secondArr.length;
  let resultArr = [];

  for (let i = 0; i < firstArrLen; i++) {
    for (let j = 0; j < secondArrLen; j++) {
      let multiply =
        firstArr[firstArrLen - 1 - i] * secondArr[secondArrLen - 1 - j];
      resultArr[i + j] = resultArr[i + j]
        ? resultArr[i + j] + multiply
        : multiply;
    }
  }
  
  for (let i = 0; i < resultArr.length; i++) {
    let move = Math.floor(resultArr[i] / 10);
    resultArr[i] = resultArr[i] % 10;
    if (resultArr[i + 1]) resultArr[i + 1] += move;
    else if (move !== 0) resultArr[i + 1] = move;
  }

  return resultArr.reverse().join("");
};

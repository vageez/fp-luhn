const compose = (...fns) => x => fns.reduceRight((g, f) => f(g), x);
const gt9 = n => (a => +a[0] + +a[1])(n.toString().split(""));
const isEven = i => i % 2 == 0;
const calculation = n => (num => (num > 9 ? gt9(num) : num))(n * 2);
const ccToArray = ccnum =>
  ccnum
    .toString()
    .split("")
    .reverse();
const convertCcno = ccno =>
  ccno.map((c, i) => (isEven(i + 1) ? calculation(c) : c));
const sum = ccno => ccno.reduce((acc, c) => +acc + +c, 0);
const checkSum = sum => sum % 10;
const isValid = sum => sum === 0;
const checkNum = ccnum =>
  typeof ccnum === "undefined"
    ? (function() {
        throw Error("Function expects an input, none were given.");
      })()
    : (function() {
        return ccnum;
      })();

module.exports = num =>
  compose(
    isValid,
    checkSum,
    sum,
    convertCcno,
    ccToArray,
    checkNum
  )(num);

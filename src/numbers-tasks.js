/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                              *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Numbers_and_dates           *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number   *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math     *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Returns an area of a rectangle given by width and height.
 */
function getRectangleArea(width, height) {
  return width * height;
}

/**
 * Returns a circumference of circle given by radius.
 */
function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}

/**
 * Returns an average of two given numbers (overflow-safe).
 */
function getAverage(value1, value2) {
  return value1 / 2 + value2 / 2;
}

/**
 * Returns a distance between two points by cartesian coordinates.
 */
function getDistanceBetweenPoints(x1, y1, x2, y2) {
  return Math.hypot(x2 - x1, y2 - y1);
}

/**
 * Returns a root of linear equation a*x + b = 0.
 */
function getLinearEquationRoot(a, b) {
  return -b / a;
}

/**
 * Returns an angle (in radians) between two vectors.
 */
function getAngleBetweenVectors(x1, y1, x2, y2) {
  const dot = x1 * x2 + y1 * y2;
  const len1 = Math.hypot(x1, y1);
  const len2 = Math.hypot(x2, y2);
  const denom = len1 * len2;
  if (denom === 0) return 0;
  const cos = Math.min(1, Math.max(-1, dot / denom));
  return Math.acos(cos);
}

/**
 * Returns a last digit of an integer number.
 */
function getLastDigit(value) {
  return value % 10;
}

/**
 * Returns a number by given string representation.
 */
function parseNumberFromString(value) {
  return Number(value);
}

/**
 * Returns a diagonal length of the rectangular parallelepiped (a,b,c).
 */
function getParallelepipedDiagonal(a, b, c) {
  return Math.sqrt(a * a + b * b + c * c);
}

/**
 * Returns the number rounded to specified power of 10.
 */
function roundToPowerOfTen(num, pow) {
  const p = 10 ** pow;
  return Math.round(num / p) * p;
}

/**
 * Returns true if the number is prime; otherwise false.
 */
function isPrime(n) {
  if (n <= 1) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;
  for (let i = 3; i * i <= n; i += 2) {
    if (n % i === 0) return false;
  }
  return true;
}

/**
 * Tries to convert value to number; otherwise returns default value.
 */
function toNumber(value, def) {
  const num = Number(value);
  return Number.isNaN(num) ? def : num;
}

/**
 * Returns the cube of the given number.
 */
function getCube(num) {
  return num ** 3;
}

/**
 * Returns the Fibonacci number at the specified index (0-based).
 */
function getFibonacciNumber(index) {
  if (index <= 0) return 0;
  if (index === 1) return 1;
  let a = 0;
  let b = 1;
  for (let i = 2; i <= index; i += 1) {
    const c = a + b;
    a = b;
    b = c;
  }
  return b;
}

/**
 * Returns the sum of all numbers from 1 to n.
 */
function getSumToN(n) {
  return (n * (n + 1)) / 2;
}

/**
 * Returns the sum of the digits of a given number.
 */
function getSumOfDigits(num) {
  return Math.abs(Math.trunc(num))
    .toString()
    .split('')
    .reduce((s, d) => s + Number(d), 0);
}

/**
 * Returns true if the given number is a power of two.
 */
function isPowerOfTwo(num) {
  return Number.isInteger(num) && num > 0 && Math.log2(num) % 1 === 0;
}

/**
 * Returns the sine of a number.
 */
function getSine(num) {
  return Math.sin(num);
}

/**
 * Returns a string representation of a number in a specified base.
 */
function numberToStringInBase(number, base) {
  return number.toString(base);
}

/**
 * Returns a string representation of a number in exponential notation.
 */
function toExponential(number, fractionDigits) {
  return number.toExponential(fractionDigits);
}

/**
 * Returns a string representation of a number in fixed-point notation.
 */
function toFixed(number, fractionDigits) {
  return number.toFixed(fractionDigits);
}

/**
 * Returns a string representation rounded to precision significant digits.
 */
function toPrecision(number, precision) {
  return number.toPrecision(precision);
}

/**
 * Returns the primitive value of a Number object.
 */
function getNumberValue(number) {
  return number.valueOf();
}

/**
 * Returns whether the parameter is a finite number (not NaN/Infinity).
 */
function isNumber(number) {
  return typeof number === 'number' && Number.isFinite(number);
}

/**
 * Returns whether a number is an integer.
 */
function isInteger(number) {
  return Number.isInteger(number);
}

/**
 * Returns a floating point number parsed from string or NaN.
 */

function getFloatOnString(str) {
  return Number.parseFloat(str);
}

/**
 * Returns an integer parsed with the specified base or NaN.
 */
function getIntegerOnString(str, base) {
  return Number.parseInt(str, base);
}

/**
 * Returns the smallest integer <= number.
 */
function roundToSmallestInteger(number) {
  return Math.floor(number);
}

/**
 * Returns the largest integer >= number.
 */
function roundToLargestInteger(number) {
  return Math.ceil(number);
}

/**
 * Returns the number rounded to the nearest integer.
 */
function roundToNearestInteger(number) {
  return Math.round(number);
}

function isSafeInteger(number) {
  return Number.isSafeInteger(number);
}

/**
 * Returns the integer part of a number (truncates fractional digits).
 */
function getIntegerPartNumber(number) {
  return Math.trunc(number);
}

/**
 * Returns the sum of numbers (handles FP precision gently).
 */
function getSumOfNumbers(x1, x2, x3) {
  const sum = x1 + x2 + x3;
  return Math.round(sum * 1e12) / 1e12;
}

/**
 * Returns the largest of two numbers.
 */
function getMaxNumber(firstNumber, secondNumber) {
  return Math.max(firstNumber, secondNumber);
}

/**
 * Returns a random integer in the inclusive range [min, max].
 */
function getRandomInteger(min, max) {
  const lo = Math.ceil(min);
  const hi = Math.floor(max);
  return Math.floor(Math.random() * (hi - lo + 1)) + lo;
}

/**
 * Returns the length of the hypotenuse of a right triangle.
 */
function getHypotenuse(a, b) {
  return Math.hypot(a, b);
}

/**
 * Returns count of odd numbers from 0 to number (inclusive).
 */
function getCountOfOddNumbers(number) {
  return Math.floor((Math.abs(number) + 1) / 2);
}

module.exports = {
  getRectangleArea,
  getCircleCircumference,
  getAverage,
  getDistanceBetweenPoints,
  getLinearEquationRoot,
  getAngleBetweenVectors,
  getLastDigit,
  parseNumberFromString,
  getParallelepipedDiagonal,
  roundToPowerOfTen,
  isPrime,
  toNumber,
  getCube,
  getFibonacciNumber,
  getSumToN,
  getSumOfDigits,
  isPowerOfTwo,
  getSine,
  numberToStringInBase,
  isSafeInteger,
  roundToLargestInteger,
  roundToSmallestInteger,
  roundToNearestInteger,
  getSumOfNumbers,
  isNumber,
  isInteger,
  toExponential,
  toFixed,
  toPrecision,
  getNumberValue,
  getFloatOnString,
  getIntegerOnString,
  getIntegerPartNumber,
  getMaxNumber,
  getRandomInteger,
  getHypotenuse,
  getCountOfOddNumbers,
};

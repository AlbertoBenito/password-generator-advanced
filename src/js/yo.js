const passwordElement = document.getElementById('password');
const lengthTextElement = document.getElementById('length-text');
const rangeElement = document.getElementById('range');
const buttonGenerateElement = document.getElementById('generate-password');

const uppercaseCharters = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
const lowercaseCharters = 'abcdefghijklmnñopqrstuvwxyz';
const numbersCharters = '1234567890';
const symbolsCharters = '+-.,!"·$%&/()=?{}';

let passwordLength = rangeElement.ariaValueMax;
let allowCharters = '';
let findPassword = '';


// let number1 = parseInt(prompt("Nhập số thứ nhất: "));
// let number2 = parseInt(prompt("Nhập số thứ hai: "));
// let random = Math.floor(Math.random() * (number1 - number2 + 1)) + number2;
// document.write(`Số random giữa ${number1} và ${number2} là: ${random}`);
let num1 = parseFloat(prompt("Nhập số thứ nhất:"));
let num2 = parseFloat(prompt("Nhập số thứ hai:"));

let min = Math.min(num1, num2);
let max = Math.max(num1, num2);

let randomNumber = Math.random() * (max - min) + min;

console.log(`Số ngẫu nhiên trong khoảng (${min}, ${max}): ${randomNumber}`);

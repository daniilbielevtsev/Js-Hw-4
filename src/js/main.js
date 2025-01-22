let textField1 = "hi";
let textField2 = "hello";
if (textField1 && textField2) {
  console.log("Обидва поля заповнені");
} else {
  console.log("Не всі поля заповнені");
}

// 2
const sum1 = 5;
const sum2 = 7;

const fullSum = sum1 + sum2;

if (fullSum > 10) {
  console.log("Сума більша за 10");
} else {
  console.log("Сума менша або дорівнює 10");
}

//3
const word = "JavaScript";

if (word.includes("JavaScript")) {
  console.log("Текст містить слово JavaScript");
} else {
  console.log("Текст не містить слово JavaScript");
}

// 4
const number = 16;

if (number > 10 && number < 20) {
  console.log("Число входить в діапазон від 10 до 20");
} else {
  console.log("Число не входить в діапазон від 10 до 20");
}

// 5
let name = "daniil";
let email = "daniil@gmail.com";
let password = "!123456!";

let isNameValid = name.length >= 3;
let isEmailValid =
  email.includes("@") && email.lastIndexOf(".") > email.indexOf("@");
let isPasswordValid = password.length >= 6;

if (isNameValid && isEmailValid && isPasswordValid) {
  console.log("Перенаправлення на іншу сторінку");
} else {
  console.log("Помилка: неправильне заповнення");
}

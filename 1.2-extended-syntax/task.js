"use strict";
let a;
let b;
let c;

function getResult(a, b, c) {
  let d = b**2 - 4 * a * c;
  let x = [];
  if (d < 0) {
    x = [];
  } else if (d === 0) {
    x[0] = -b / (2 * a);
  } else if ( d > 0) {
    x[0] = (-b - Math.sqrt(d)) / (2 * a);
    x[1] = (-b + Math.sqrt(d)) / (2 * a);
  };
  return x;
};

let marks = [];
function getAverageMark(marks) {
  let sum = 0;
  let averageMark;
  let averageRating = 0;
  if (marks.length === 0) {
    averageMark = 0;
  } else if (marks.length > 5) {
    console.log("Колличество оценок " + marks.length);
    marks = marks.slice(0, 5);
  };
  for (let index = 0; index < marks.length; index++) {
    sum += marks[index];
    averageMark = sum / marks.length;
    };
  return averageMark;
  };

let name;
let dateOfBirthday;
let result;

function askDrink(name, dateOfBirthday){
  let age = new Date().getFullYear() - dateOfBirthday;
  if (age > 18) {
    result = `Не желаете ли олд-фэшн, ${name}?`
  }
  else (result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`)
  return result;
};
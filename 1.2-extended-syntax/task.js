"use strict";
let a = 2;
let b = 4;
let c = -3;
let d = b**2 - 4 * a * c;
let x = [];
function getResult(a,b,c){
  if (d > 0) {
    x[0] = -b - Math.sqrt(d) / (2 * a);
    x[1] = (-b + Math.sqrt(d)) / (2 * a);
  } else if (d = 0) {
    x[0] = -b / (2 * a)
  } else if (d < 0) {
      x = [];
  }
    // код для задачи №1 писать здесь
    return x;
};

let marks = [];
marks.push(3, 5, 4, 3, 5, 3);
let markss;
let sum = 0;
let averageRating = 0;

function getAverageMark(marks){
  if (marks.length > 5) {
    console.log("Колличество оценок " + marks.length);
    markss = marks.slice(0, 5);
    for (let index = 0; index < markss.length; index++) {
       sum += markss[index];
      averageMark = sum / markss.length;
    }; 
  } else if (marks.length <= 5) {
    for (let index = 0; index < marks.length; index++) {
      sum += marks[index];
      averageMark = sum / marks.length;
    }; 
  } else if (marks.length = 0) {
    averageMark = 0;
  }
  return averageMark;
}; 

let name = "Nik";
let dateOfBirthday = 2010;
let age = new Date().getFullYear() - dateOfBirthday;
let result;

function askDrink(name,dateOfBirthday){
  if (age > 18) {
    result = `Не желаете ли олд-фэшн, ${name}?`
  }
  else (result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`)
  return result;
  // код для задачи №3 писать здесь
    // return result;
}
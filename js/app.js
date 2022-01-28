'use strict'

function getUserName() {
  var name = prompt("What is your name ?")
  console.log("his/her name is :", name)
  if (name == "") {
    name = "invalid"
  }
  return name;
}


function getUserGender() {
  var gender = confirm("If you are male press: ok, if you are female press: cancel ")
  console.log("the gender", gender)
  if (gender == true) {
    gender = "male"
  } else { gender = "female" }

  console.log("the gender", gender)
  if (gender == "") {
    gender = "invalid"
  }
  return gender;
}

function getAge() {
  var age = prompt("How old are you?")
  if (age <= 0) { age = prompt("How old are you, please enter a valid age?") }
  console.log("age", age);
  confirm(`welcome ${getUserName()} \nPress yes to move the welcoming message`);
  if (age == "") {
    age = "invalid"
  };
  return age;
}

function getNickName() {
  var nickName = "Mr";
  var errorMsg = "";
  gender.toLowerCase() === "male" ? nickName : (nickName = "Mr");
  gender.toLowerCase() === "female" ? nickName = "Mrs" :errorMsg = "you entered answer wrong ";
  if (nickName == "") {
    nickName = "invalid"
  }
  errorMsg != "again" ? alert(`welcome ${getUserName()}`) : alert(`welcome again ${getNickName()} ${getUserName()}`);
  return nickName;
}
const array = [getUserName(), getUserGender(), getAge(), getNickName(), married, children, disability];
var married = confirm("Are You Married?");
var children = confirm("Do You Have Any Children?");
var disability = confirm("Do You Have Any Disability?");
console.log(array);

for (let i = 0; i < array.length; i++) {
  console.log("userAnswer", array[i])
}


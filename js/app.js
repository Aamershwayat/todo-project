'use strict'
var gender="";

function getUserName() {
  var name = prompt("What is your name ?");
  console.log("his/her name is :", name);
  if (name == "") {
    name = "invalid"
  }
  return name;
}
var newName =getUserName();


function getUserGender() {
  var genderCheck = confirm("If you are male press: ok, if you are female press: cancel ");
  console.log("the gender", gender);
  if (genderCheck == true) {
    gender = "male"
  } else { gender = "female" }

  console.log("the gender", gender)
  if (genderCheck == "") {
    gender = "Invalid"
  }
  return gender;
}

function getAge() {
  var age = prompt("How old are you?")
  if (age <= 0) { age = prompt("How old are you, please enter a valid age?") }
  else{
  console.log("age", age);
  }

  if (age == "") {
    age = "Invalid"
  };
  return age;
}

var newGender=getUserGender();

function getNickName() {
  var nickName = "";
  newGender.toLowerCase() === "male" ? nickName="Mr" : (nickName = "Mrs");
  if (nickName == "") {
    nickName = "Invalid"
  }
  if (nickName=="Mr"||nickName=="Mrs") {
    alert(`welcome ${nickName}.${newName}`);
  }
  return nickName;
}
var newAge=getAge();
var newNickName=getNickName();

var married = confirm("Are You Married?");
var children = confirm("Do You Have Any Children?");
var disability = confirm("Do You Have Any Disability?");

const array = [newName, newgender, newAge, newNickName, married, children, disability];

console.log(array);

for (let i = 0; i < array.length; i++) {
  console.log("userAnswers", array[i])
}


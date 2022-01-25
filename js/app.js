'use strict'


var yourName = prompt("What is your name ?")
console.log ("his/her name is :" , yourName  )
 
var gender = confirm("If you are male press: ok, if you are female press: cancle ")
console.log ("the gender" , gender)

if (gender==true){
    gender= "male"
}else { gender =  "female"}
console.log ("the gender" , gender)

var age = prompt ("How old are you?")
if (age <=0)
{age = prompt ("How old are you, please venter a valid age?")}
console.log ("age", age) ;
confirm(`welcom $ {yourName}/n press yes to move the wecoming message`);

var nickName = "Mr" ;
var errorMsg = "" ; 
gender.toLowerCase() === "male" ?
nickName :
( nickName = "Mr")  ;

gender.toLowerCase() === "female" ?
nickName = "Mrs" :
errorMsg = "you entered answer wrong "

errorMsg != "again" ?
alert (`welcom ${yourName}`) :
alert (`welcom again ${nickName} ${yourName}`) ;

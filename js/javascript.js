"use strict"

const myArray = ['Emil', 'Frederik', 'Zilmer', 'Rune'];

for (let i = 0; i < myArray.length; i++) {
    console.log(`${i+1}. ${myArray[i]}`);
}

let person = prompt("Please enter your name", "");
let text;
if (person == null || person == "") {
  text = "User cancelled the prompt.";
} else {
  alert('Ha en god dag ' + person + '!');
} 




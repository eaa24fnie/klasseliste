"use strict"

const myArray = ['Emil', 'Frederik', 'Zilmer', 'Rune'];

for (let i = 0; i < myArray.length; i++) {
    console.log(`${i+1}. ${myArray[i]}`);
}

// let person = prompt("Please enter your name", "");
// let text;
// if (person == null || person == "") {
//   text = "User cancelled the prompt.";
// } else {
//   alert('Ha en god dag ' + person + '!');
// } 


let ageEntered= prompt("Please enter your age", "");
if(isNaN(ageEntered)) {
    alert('Indtast venligst et tal.');
}
if (ageEntered <= 17) {
  alert('Du er ikke gammel nok.');
} else if (ageEntered >= 18 && ageEntered < 60) {
    alert('Du er gammel nok.');
} else {
    alert('All inclusive, Tillykke!');
}




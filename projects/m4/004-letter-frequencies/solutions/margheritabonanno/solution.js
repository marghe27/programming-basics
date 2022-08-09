// 4th challenge: Letter Frequencies
"use strict";



// use of prompt to get the file to read 
const fileName = prompt("Inserire il nome del file da leggere:");
console.log("fileName is: "+fileName);

// url of the file to open and to read
const blob = `http://localhost:8888/margheritabonanno_2/${fileName}`;


//function to read user's file

readFile(blob,fileName);


// 4th challenge: Letter Frequencies
"use strict";
//import  {readUserFile, controlExtens, controlValidName, charCountOccurances} from './functions.js';
const {readUserFile, controlExtens, controlValidName, charCountOccurances} = require('./functions');

const fs = require('fs-js');
const readline = require ('readLine');


//  
const blob = 'acronimi_divertenti.txt';
const echo = console.log;
let args = process.argv;
let arg = args[2];
echo(' terzo Argomento' + ': ' + arg);
fs.readFile(arg, 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
  /**function to read user's file*/
  readUserFile(arg,data);
});





/*const echo = console.log;

let args = process.argv;
 if(args.length >= 3) {
  args.forEach((arg, index) => {
    
    echo('Argomento ' + index + ': ' + arg);
  });
} 
let arg = args[2];
echo(' terzo Argomento' + ': ' + arg);
*/
//comando node: node arguments.js test

  // Esempio di inserimento argomenti direttamente nel terminale:
  
  /* var argument = process.argv ;
  
  console.log(argument) ; */

  //terminal:
  // node solution DEMO 123
  // [
  //  '/usr/local/bin/node',
  //  '/Users/daisymac/stageTomorrowDev2022/margheritabonannoNode/solution',
  //  'DEMO',
 //   '123'
//  ] 

  /* const myArgs = process.argv.slice(2);
  console.log('myArgs: ', myArgs);

  terminal: 
  node solution one two three four five
  myArgs:  [ 'one', 'two', 'three', 'four', 'five' ]
 */

// Printing process.argv property value
/* let args = process.argv;
  
console.log("number of arguments is "+args[2]);
  
args.forEach((val, index) => {
    console.log(`${index}: ${val}`);
}); */

//node solution extra_argument1 extra_argument2 3




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

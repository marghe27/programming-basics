// 4th challenge: Letter Frequencies
"use strict";

//PROMISES
// use of FETCH to get and read elements
/* const functionFetch = (url) => fetch(url)
     .then(response=>response.text())
     .catch(error=>console.log("Errore "+error)); */


//function to read user's file
const readUserFile = (url,fileName)=>{
    //to control if the name of the file is a valid name
    if(!controlValidName(url)){
        console.log("Incorrect file name!");
        return;
    }  
    if(controlExtens(url)){
        console.log("This file is ok, because it's a readable text file"); 
        // to get and read the element
        //functionFetch(url).then(values =>{
            // Remove punctuation, spaces and numbers from string
            const myTextArray = removePunct(fileName);   
            console.log("My text without punctuation and in lowercase:  "+myTextArray);// 
            // count all char occurances
            const count = charCountOccurances(myTextArray);  
            console.log(count);   
        //})
    }else{
        console.log("ATTENTION! This file isn't a readable text file!");
    }   
}


//to control if the name of the file has valid extension
const controlExtens = (url)=>{
    // to separate the file name from its extension
    const ext = url.split(".");
    // take the extension in position [length-1]
    console.log("ext:  "+ ext[ext.length-1]); 
    //array of text file extensions
    const arrExtens = ["doc","docx","odt","tex","txt","rtf"];
    // checks whether an element is in array
    const isInArray = (el) => el == ext[ext.length-1];
    return arrExtens.some(isInArray);
}

//to control if the name of the file is a  valid name
const controlValidName = (str) => /^[a-zA-Z0-9_.+-]+\.[a-zA-Z]+$/.test(str);
  

// to count all chars of the text 
const charCountOccurances =(arr) =>
    [...arr].reduce((prev, curr) => { 
        prev[curr] = prev[curr] ? prev[curr]+ 1 : 1; 
        return prev
    }, {});           



// Remove punctuation, spaces and numbers from string
const removePunct = textArr => {
    const remove = textArr.replace(/[,.]|[0-9]|[-_ \“ \” \! \? \; \: \– ]|[\( \) \"\']|[\s]/gi, '');
    return remove.toLowerCase();
}

/* to export the functions */
module.exports = {readUserFile, controlExtens, controlValidName, charCountOccurances}; 
// 4th challenge: Letter Frequencies
"use strict";

//PROMISES
// use of FETCH to get and read elements
const functionFetch = (url) => {
       
    return fetch(url)
     .then((response)=>{
         return response.text();
     })
     .then(data =>{
        //console.log("data response:  "+data);
        return data;})
     .catch(error=>{
        console.log("Errore "+error);
     })

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
    const isTrue = arrExtens.some(isInArray);

    return isTrue;
}

//to control if the name of the file is a  valid name
function controlValidName(str) {
    return /^[a-zA-Z0-9_.+-]+\.[a-zA-Z]+$/.test(str);
  }
  

// to count all chars of the text 
function charCountOccurances (arr) { 
    const countChar = [...arr].reduce((prev, curr) => { 
                    prev[curr] = prev[curr] ? prev[curr]+ 1 : 1; 
                    return prev }, {});           
    console.log(countChar); 
    return countChar;

}

// Remove punctuation, spaces and numbers from string
const removePunct = (textArr)=>{
    const remove = textArr.replace(/[,.]|[0-9]|[-_ \“ \” \! \? \; \: \– ]|[\( \) \"\']|[\s]/gi, '');
    const myTextClear = remove.toLowerCase();
    console.log("My text without punctuation and in lowercase (myTextClear):  "+myTextClear);//
    return myTextClear;
}
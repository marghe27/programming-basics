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

//it removes punctuation, spaces and numbers from string
const removePunct = (textArr)=>{
    const remove = textArr.replace(/[,.]|[0-9]|[-_ \“ \” \! \? \; \: \– ]|[\( \) \"\']|[\s]/gi, '');
    const myTextClear = remove.toLowerCase();
    console.log("My text without punctuation and in lowercase (myTextClear):  "+myTextClear);//
    return myTextClear;
}

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

// use the prompt to get the file
const fileName = prompt("Enter the name of the file to read:");
console.log("fileName is: "+fileName);

// file to open and to read
const blob = `http://localhost:8888/margheritabonanno_2/${fileName}`;



//function that control if user's file is readable
const controlExtens = (url)=>{
    //to control if the name of the file is a valid name
    controlValidName(fileName) ? console.log("correct file name!") : console.log("incorrect file name!"); 

    // to separate the file name from its extension
    const ext = url.split(".");
    // take the extension in position [ext.length-1]
    console.log("ext:  "+ ext[ext.length-1]); 
    //array of text file extensions
    const arrExtens = ["doc","docx","odt","tex","txt","rtf"];
    // checks whether an element is in array
    const isInArray = (el) => el == ext[ext.length-1];
    const isTrue = arrExtens.some(isInArray);
    // expected output: true if the extens. is .txt and etc.
    console.log(isTrue);
    
    if(isTrue){
            console.log("This file is ok, because it's a readable text file"); 
            const myText = functionFetch(url); 
            console.log("myText " + myText);
            myText.then(values =>{
                const myTextArray = values.toLowerCase().split(""); // create array from text
                console.log("myArray:  "+myTextArray);//
                countOccurrences("p",myTextArray);    
                
            })
    }else{
        console.log("Pay attention! This file isn't a readable text file!");
    }
        
    
}


controlExtens(blob);

//passing an array of strings, the function counts the repeated occurrences. This function is inside the controlExtens function
const countOccurrences = (charText, stringText)=>{
    let count = 0;
    stringText.forEach(element => {
        if(element == charText){
            count++;
           
        }
    });
    console.log("count "+count);
    return count; 
}

//to control if the name of the file is a  valid name. This function is inside the controlExtens function.
function controlValidName(str) {
    return /^[a-zA-Z0-9_.+-]+\.[a-zA-Z]+$/.test(str);
  }
  
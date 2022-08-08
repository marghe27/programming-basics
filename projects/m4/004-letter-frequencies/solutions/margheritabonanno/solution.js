// 4th challenge: Letter Frequencies
"use strict";



// use of prompt to get the file to read 
const fileName = prompt("Inserire il nome del file da leggere:");
console.log("fileName is: "+fileName);

// url of the file to open and to read
const blob = `http://localhost:8888/margheritabonanno_2/${fileName}`;



//function that control if user's file is readable
const controlExtens = (url)=>{
    //to control if the name of the file is a  valid name
    controlValidName(fileName) ? console.log("correct file name!") : console.log("incorrect file name!"); 

    // to separate the file name from its extension
    const ext = url.split(".");
    // it takes the extension in position [length-1]
    console.log("ext:  "+ ext[ext.length-1]); 
    //array of text file extensions
    const arrExtens = ["doc","docx","odt","tex","txt","rtf"];
    // it checks whether an element is in array
    const isInArray = (el) => el == ext[ext.length-1];
    const isTrue = arrExtens.some(isInArray);
    // expected output: true if the extens. is .txt and etc.
    console.log(isTrue);
    
    if(isTrue){
            console.log("This file is ok, because it's a readable text file"); 
            const myText = functionFetch(url); 
            console.log("myText " + myText);
            myText.then(values =>{
               
                // Remove punctuation, spaces and numbers from string
                const myTextArray = removePunct(values);
                
                // count all char occurances
                charCountOccurances(myTextArray);
                
            })
    }else{
        console.log("ATTENTION! This file isn't a readable text file!");
    }
        
    
}

controlExtens(blob);


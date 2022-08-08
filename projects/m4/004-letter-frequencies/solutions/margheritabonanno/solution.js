// 4th challenge: Letter Frequencies
"use strict";



// use of prompt to get the file to read 
const fileName = prompt("Inserire il nome del file da leggere:");
console.log("fileName is: "+fileName);

// url of the file to open and to read
const blob = `http://localhost:8888/margheritabonanno_2/${fileName}`;


//function to read user's file
const readFile = (url)=>{
    //to control if the name of the file is a valid name
    controlValidName(fileName) ? console.log("Correct file name!") : console.log("Incorrect file name!"); 

    //to control if the name of the file has valid extension
    const isTrue = controlExtens(url);
    
    if(isTrue){
            console.log("This file is ok, because it's a readable text file"); 
            // to get and read the element
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

readFile(blob);


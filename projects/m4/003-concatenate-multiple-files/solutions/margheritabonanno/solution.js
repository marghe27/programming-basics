// Third challenge: Concatenate multiple files.

"use strict";

//PROMISES
// use of FETCH to get and read elements


const functionFetch = (src)=>{

   return fetch(src)

      .then((response)=>{
         return response.text();
       })

      .catch((error)=>{
         console.log("Errore "+error);
      }) 
      
};


// function to create array of files
const getFiles = ()=>{
   const arrFiles = [];
   const text_00 = 'http://localhost:8888/margheritabonanno/acronimi_divertenti.txt';
   const text_01 = 'http://localhost:8888/margheritabonanno/fileProva.txt';
   
   arrFiles.push(text_00);
   arrFiles.push(text_01);
   
   let text = "";

   for (let i of arrFiles) {
         text += i; 
         console.log(`file: ${text}`);
      
   }
      return arrFiles;
  
}
// assignment of return value of getFiles() to arr
const arr = getFiles();
   console.log(" get file "+arr[1]+" \n\n\r "+arr[0]);

// function to create array of Promise
const getPromises = () => {
   const promiseArray = []; 
   promiseArray.push(functionFetch(arr[0]));
   promiseArray.push(functionFetch(arr[1]));
   console.log("promiseArray "+ promiseArray);
   return promiseArray;
}

// assignment of return value of getPromises() to getPromisesArray
const getPromisesArray = getPromises(); 
console.log(" getPromises() "+ getPromisesArray);

// Promise.all to read, with response.text(), ALL Promise fetched 
const promiseAll = Promise.all(getPromisesArray)
                  .then(values => {
                     
                     for (const value of values) {
                        console.log(" value "+value);
                     } 
                     return values;
                  })
                  
                  .catch(error => {
                     console.error(error.message)
                  });

console.log("promiseAll "+ promiseAll); 

    
         


// Third challenge: Concatenate multiple files.

"use strict";

//PROMISES
// use of FETCH to get and read elements


const functionFetch = (src)=>{

      fetch(src)

      .then((response)=>{
         console.log(response); 
         return response.text()
       })
            
      .then((data)=>{
         console.log("Data "+data);
         
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
// assignment of return value of getFiles() to returnValue
 const returnValue = getFiles();
   console.log(" get file "+returnValue[1]+" \n\n\r "+returnValue[0]);

 // array di Promises 
 const promiseList = []; 
 promiseList.push(functionFetch(returnValue[0]));
 promiseList.push(functionFetch(returnValue[1]));
   console.log(" prova promiseList " + promiseList );
 
 
// Promise All takes  the array of strings
 Promise.all(promiseList)
      
      .then((data)=>{
         console.log("Promise All "+data[0]+" \n\n\r "+data[1]);
         return data;
      });

    
         


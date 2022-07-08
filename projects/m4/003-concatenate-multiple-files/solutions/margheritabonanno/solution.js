// Third challenge: Concatenate multiple files.

"use strict";

//Use PROMISES
// Promise to create input elements

const creaInputElement = new Promise ((resolve, reject)=>{
        return resolve();         
          
});

creaInputElement.then(()=>{
    // function to open file with input element
     openFile();  
     readFile(this);        
            
});

function openFile(){
            // DOM manipulation
            let element = document.createElement('input');
            element.setAttribute('type',"file"); 
            element.setAttribute('id', "btnOpenFile");
            element.setAttribute('multiple','');

           //it doesn't work
            element.onChange = () => {
                //it doesn't work
               alert("Funziona On Change");
               
            }; 
            //create style to display input element
            element.style.display = 'block';
            element.style.marginLeft = '10px';
            document.body.appendChild(element);
            //search file
            element.click();

};

// Function to read files open with input
function readFile(inputObj) {
    
    /*  @param inputObj is OBJECT? */
    Object.entries(inputObj).map(([key, value]) => console.log(`${key}: ${value}`));
    
    
}
    
         


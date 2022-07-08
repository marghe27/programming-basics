// Third challenge: Concatenate multiple files.

"use strict";

//USARE LE PROMISE

//funzione per creare l'elemento Input per aprire i file di testo 


const creaInputElement = new Promise ((resolve, reject)=>{
        return resolve();
            /* ()=>{
           let element = document.createElement('input');
             element.setAttribute('type',"file"); 
            element.setAttribute('id', "btnOpenFile");
            element.setAttribute('multiple','');

            element.onChange = () => {
                //showFile(this);
                setTimeout(() => resolve("done"), 2000);
               
            }; 
            //create style to display input element
            element.style.display = 'block';
            element.style.marginLeft = '10px';
            document.body.appendChild(element);
            //search file
            element.click(); }*/
            
           
       
          
});

creaInputElement.then(()=>{
     //alert(result);
     showFile();
            
            
});

function showFile(){

    //return alert("Funziona show File");
            let element = document.createElement('input');
             element.setAttribute('type',"file"); 
            element.setAttribute('id', "btnOpenFile");
            element.setAttribute('multiple','');

            element.onChange = () => {
                
               alert("Funziona On Change");
               
            }; 
            //create style to display input element
            element.style.display = 'block';
            element.style.marginLeft = '10px';
            document.body.appendChild(element);
            //search file
            element.click();

};
    /*const files = [];
    files.push(input);
    let text = "";
    /*for (let i in files) {
        text += files[i];
        console.log("text "+text);
    }
    for (let i = 0, len = input.length; i < len; i ++) {
        text += input[i];
        console.log("text "+text);
    }
    document.getElementById("DEMO").innerHTML = text; 
    /*let reader = new FileReader();
    reader.readAsText(file);
    reader.onload = ()=>{
        console.log("Reader"+reader.result);
    };*/

    /*
    let openfile = function (){
        
        let reader;
        // If FileReader is supported
        if (window.File && window.FileReader){
            reader = new FileReader();

        } else{
            alert('FileReader not supported in your browser');
            return false;
        }
        
            
            reader.onload = function(e) {
                let output = e.target.result;

                //a cite to display the result 
                let node = document.querySelector("cite");
                node.before(element);       

                 //cite node for displaying the text of the file
                node.innerText = output;
                console.log("output "+ node.innerText);

                let text = node.innerText;
                document.getElementById("DEMO").innerHTML = text;  
                console.log("text "+text);
                        
            
            };
            reader.readAsText(element.files[0]);
    */  
         


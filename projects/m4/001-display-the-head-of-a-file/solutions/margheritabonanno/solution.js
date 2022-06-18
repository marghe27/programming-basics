// display-the-head-of-a-file 

"use strict";

try {

    function readText(fileName){

        // create element input with type file
        let element = document.createElement('input');
        element.setAttribute('type',"file");
        element.setAttribute('id', "btnOpenFile");
        element.onchange = function(){
            readText(this);
        }

        //create style to display input element
        element.style.display = 'block';
        element.style.marginLeft = '10px';
        document.body.appendChild(element);

        //a table to display the result
        let table = document.querySelector("table");
        table.before(element); 
    
        //search file
        element.click();

        let reader;
        // If FileReader is supported
        if (window.File && window.FileReader){
            reader = new FileReader();

        } else{
            alert('FileReader not supported in your browser');
            return false;
        }
        // If the file to read is the one passed as argument: 
        let argument = (fileName.file[0])? true : false;

        if(argument){
            console.log(fileName.file[0].name);
            reader.onload = function(event) {
            let output = event.target.result;
            parseResult(output);
            };
        reader.readAsText(fileName.file[0]);
        } else {
            errorhandler();
            return false;
        }
        return true;
    }
let errorhandler = () => alert("This is not the requested file");

function parseResult(result){
    // let lines = result.split(/\r?\n/g);
}
    
} catch (error) {
    document.getElementById("errorMessage").innerHTML = error.message;
    console.log(error.message);
}
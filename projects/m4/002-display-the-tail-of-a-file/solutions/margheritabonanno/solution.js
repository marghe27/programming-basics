//second challenge: Display the Tail of a File

"use strict";

try {

    // create element input with type file
    let element = document.createElement('input');
    element.setAttribute('type',"file");
    element.setAttribute('id', "btnOpenFile");
    element.onchange = function(){
        openfile();
    }
    

    //create style to display input element
    element.style.display = 'block';
    element.style.marginLeft = '10px';
    document.body.appendChild(element);
    //search file
    element.click();

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
                console.log("output "+ node.innerText.substring(0, 10));

                const linesArray = output.split(/\r\n|\n/); // 
                
                
                linesArray.forEach((item, index) => {
                           index + ":" + item + "<br>";
                        });
                        // display last 10 lines of a text file
                        const lastLines = linesArray.slice(-11, -1); //-1
                        let text = "";
                        lastLines.forEach( (item, index)=>{
                            text += index + ". " + item + "<br>";
                        });
                        
                        document.getElementById("DEMO").innerHTML = text;  
                        console.log("text "+text);
                        
            
            };
            reader.readAsText(element.files[0]);
        
        return true;
    }




    
} catch (error) {
    document.getElementById("errorMessage").innerHTML = error.message;
    console.log(error.message);
}
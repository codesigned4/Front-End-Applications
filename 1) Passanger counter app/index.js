let countEl=document.getElementById("count-el")
let saveEl=document.getElementById("save-el")
let count=0
//document.getElementById("count-el") this codes asks to html 
//document.getElementById("count-el").innerText it is the text between tags
//DOM=Documnet Object Model
//the document keyword in Javascript is of the data type object
//DOM shortly means how to use JavaScript to modify websites

function increment(){
    
    count=count+1
    countEl.textContent=count

}

function save(){
    let countStr=count+" - "
    countEl.textContent=0 //we do not use inner text because of it does not get all of content(like space) so we use that textContent function
    count=0
    saveEl.textContent+=countStr
}



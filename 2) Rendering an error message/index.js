// When the user clicks the purchase button, render out
// "Something went wrong, please try again" in the paragraph
// that has the id="error".
let ourError=document.getElementById("error")

function purchase(){
    ourError.textContent="Something went wrong,please try again"
}


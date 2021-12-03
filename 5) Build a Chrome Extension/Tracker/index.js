let inputBtn=document.getElementById("input-btn")
let myLeads=[]
let inputEl=document.getElementById("input-el")
let ulEl=document.getElementById("ul-el")
let deleteEl=document.getElementById("delete-btn")
let leadsFromLocalStorage=JSON.parse(localStorage.getItem("myLeads"))
let saveEl=document.getElementById("save-btn")

if(leadsFromLocalStorage){
    myLeads=leadsFromLocalStorage
    render(myLeads)
}

/*function saveLead(){
    console.log("Button clicked")
} like below it is more professional*/

inputBtn.addEventListener("click",function(){
    let inputValue=inputEl.value
    myLeads.push(inputValue)
    inputEl.value=""     
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
  
    render(myLeads)
})

deleteEl.addEventListener("dblclick",function(){
    myLeads.length=0 //clear array
    localStorage.clear()
    ulEl.textContent=""
})

saveEl.addEventListener("click",function(){
    chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads",JSON.stringify(myLeads))
        render(myLeads)
    })

})

//innerHTML creating HTML elements using javascript
function render(array){
    let listItems=""
    for(let i=0;i<array.length;i++){
        listItems+=`
        <li>
            <a target="_blank" href="${array[i]}">${array[i]}</a>
        </li>` //we can create HTML elements with respect to innerHTML
    }
    ulEl.innerHTML=listItems
}

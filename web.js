let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let input3 = document.getElementById("input3");
let total = document.getElementById("total");
let expenses = document.getElementById("expenses");
let balance = document.getElementById("balance");
function budget() {
    if (input1.value != "") {
        total.innerHTML = input1.value;
    } else {
        alert("Please Fill the Input");
    }
}

function check() {
    expenses.innerHTML = input3.value;
     balance.innerHTML = input1.value - input3.value;
    
     let list = document.getElementById("list");
    list.innerHTML +=  `
    <div id="hello">
    <li id="a">${input2.value}</li>
    <li id="b">${input3.value}</li>
    <button onclick="dele(this)">Delete</button></div> `

    input2.value = ""
    input3.value = ""
     saveData();
    }
    
    function dele(e){
        e.parentNode.remove();
        console.log(e);
        saveData();
}




function saveData(){
    localStorage.setItem("check", list.innerHTML);
}
function showTask(){
    list.innerHTML = localStorage.getItem("check");
}
showTask();




















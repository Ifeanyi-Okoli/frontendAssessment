let page = document.querySelector(".page");
let filter = document.querySelector(".filter");
let filterBtn = document.querySelector(".filter-btn");
let filterBtnIcon = document.querySelector(".filter-btn-icon");
let filterBtnText = document.querySelector(".filter-btn-text");

let stack = document.querySelectorAll(".stack");
let stackBtn = document.querySelectorAll(".stack-btn1");
let  arr = [];
function stackChoice(stack) {
    for (let i = 0; i < stack.length; i++) {
        stack[i].addEventListener("click", function () {
            // stackBtn[i].classList.toggle("stack-btn2");
            alert(stack[i].classList);
        })
        if(stack[i].classList.contains("Fullestack")) {
            Array.push(stackBtn[i], "Fullstack");
        }
    }
}

function listFilter() {
    filterBtn.addEventListener("click", function () {
        filter.classList.toggle("filter2");
        filterBtnIcon.classList.toggle("filter-btn-icon2");
        filterBtnText.classList.toggle("filter-btn-text2");
    })
}
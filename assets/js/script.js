let navItems =[...document.getElementsByClassName("nav-item")];


navItems.forEach(element => {
    let flag=0;
    element.addEventListener("click",()=>{
        let dropdown = element.lastElementChild;
        let arrow = element.firstElementChild.firstElementChild;
        arrow.classList.toggle("up")
        arrow.classList.toggle("down")
        dropdown.classList.toggle("open");
        dropdown.classList.toggle("close");
    })
});

let burger = document.querySelector(".nav-btn");
let nav=document.querySelector("nav")
burger.addEventListener("click",()=>{
    nav.classList.toggle("open")
    burger.classList.toggle("open")
})
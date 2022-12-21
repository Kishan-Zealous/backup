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
let menu = document.querySelector('.menu')
burger.addEventListener("click",()=>{
    nav.classList.toggle("open")
    burger.classList.toggle("open")
})


let accordian = [...document.getElementsByClassName("accordion-card-title")];

accordian.forEach((element,index)=>{
    let arrow = element.lastElementChild;
    let h3= arrow.previousElementSibling;
    let content = element.nextElementSibling;
    arrow.addEventListener("click",()=>{
        for(let i=0;i<5;i++){
            if(index!=i){
                accordian[i].nextElementSibling.style.maxHeight=null;
                accordian[i].lastElementChild.firstElementChild.classList.add("down");
                accordian[i].lastElementChild.firstElementChild.classList.remove("up");
                accordian[i].lastElementChild.previousElementSibling.style.color="#000";
            }
        }
        if(!content.style.maxHeight){
            h3.style.color="#099E71"
            content.style.maxHeight=content.scrollHeight+"px";
            arrow.firstElementChild.classList.add("up");
            arrow.firstElementChild.classList.remove("down");
            flag[index]=1;
        }
        else{
            h3.style.color="#000"
            arrow.firstElementChild.classList.remove("up");
            arrow.firstElementChild.classList.add("down");
            content.style.maxHeight=null;
            flag[index]=0;
        }
        content.classList.toggle("active")        
    })

})
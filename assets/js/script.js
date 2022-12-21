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
    let content = element.nextElementSibling;
    let flag = 0
    arrow.addEventListener("click",()=>{
        for(let i=0;i<5;i++){
            if(index!=i){
                console.log(index,i)
                accordian[i].nextElementSibling.style.maxHeight=null;
            }
        }
        if(flag==0){
            content.style.maxHeight=content.scrollHeight+"px";
            flag=1;
        }
        else{
            content.style.maxHeight=null;
            flag=0;
        }
        content.classList.toggle("active")
        console.log(content.classList)
        
    })

})
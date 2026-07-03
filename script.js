
// ==============================
// Smooth Fade-in Animation
// ==============================

const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
});

const hiddenElements=document.querySelectorAll(".hero,.glass-card,.skill");

hiddenElements.forEach((el)=>observer.observe(el));


// ==============================
// Navbar Shadow on Scroll
// ==============================

window.addEventListener("scroll",()=>{

const header=document.querySelector("header");

header.classList.toggle("sticky",window.scrollY>40);

});


// ==============================
// Scroll To Top Button
// ==============================

const btn=document.createElement("button");

btn.innerHTML="↑";

btn.id="topBtn";

document.body.appendChild(btn);

window.onscroll=function(){

if(document.documentElement.scrollTop>300){

btn.style.display="block";

}

else{

btn.style.display="none";

}

}

btn.onclick=function(){

window.scrollTo({

top:0,

behavior:"smooth"

});

}
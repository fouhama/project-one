/************************* */
let sclls =document.querySelectorAll(".skills .spn");
let sectionSclls =document.querySelector(".skills");
let number =document.querySelectorAll(".stats .number");
let sectioStats=document.querySelector(".stats");
let Start= false;
window.onscroll=function (){
    if(window.scrollY >= sectioStats.offsetTop - 250){
        if(!Start){
            number.forEach(e=>startCot(e));
        }
        Start=true;
    }
    if(window.scrollY >= sectionSclls.offsetTop - 250 ){
        sclls.forEach((span)=>{span.style.width= span.dataset.width;
        });
        
    };
};
function startCot(el){
    let g=el.dataset.gols;
    let count =setInterval(()=>{
        el.textContent++;
        if(el.textContent == g){
            clearInterval(count);
        }
    }, 2000 / g);
    
};
/**************** */
let dayHT = document.querySelector(".events .time .day");
let hourHT = document.querySelector(".events .time .hour");
let mintHT = document.querySelector(".events .time .min");
let secHT = document.querySelector(".events .time .secnd");


let contdown=new Date("May 12, 2022 23:59:59").getTime();
let conter =setInterval(()=>{
    let datenow =new Date();
    let diffDate =contdown- datenow;
    let days =Math.floor(diffDate/(1000*60*60*24));
    let hours =Math.floor((diffDate % (1000*60*60*24)) /(1000*60*60));
    let min = Math.floor((diffDate % (1000*60*60)) /(1000*60));
    let secnd =Math.floor((diffDate % (1000*60)) /1000);
    dayHT.innerHTML = days;
    hourHT.innerHTML =hours < 10 ? `0${hours}`: hours;
    mintHT.innerHTML=min < 10 ? `0${min}`: min;
    secHT.innerHTML=secnd < 10 ? `0${secnd}`: secnd;

    if(diffDate < 0 ){
        clearInterval(conter);
    }
},1000);

/***************************** */
let btnbar =document.querySelector("header .container .main-ul >li:last-child");
let boxBar =document.querySelector("header .container .main-ul >li:last-child .sous-ul");
btnbar.onclick =function(e){
    boxBar.classList.toggle("open-nav");
    e.stopPropagation();
};
document.addEventListener('click',(e)=>{
    if(e.target !==btnbar && addEventListener.target !==boxBar ){
        if (boxBar.classList.contains("open-nav")) {
            boxBar.classList.toggle("open-nav");
        }
    }
});


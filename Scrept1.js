let input=document.querySelector("#inp");
let btn=document.querySelector("#button");
let span=document.querySelector("#spn");
let clas=document.querySelector(".all");
let clas1=document.querySelector(".all1");
let divAll=document.querySelector("#theall");
let btn1=document.querySelector("#Dismiss");
let Yes=/\w+@\w+.com/ig;

btn.addEventListener("click",function(){
    if(input.value==input.value.match(Yes))
        {
            span.style.display="none";
            input.style.backgroundColor="white";
            input.style.color="black";
            clas1.style.display="block";
            divAll.style.transform="rotateY(180deg)";
        }
    else
        {
            span.style.display="";
            input.style.backgroundColor="rgb(232, 108, 108)";
            input.style.color="white";
        }
})
btn1.addEventListener("click",function()
{
    divAll.style.transform="rotateY(360deg)";
})
    

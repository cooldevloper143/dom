var a = document.querySelector("h1");
a.style.color="red";
a.addEventListener("click",()=>{
    // console.log("this element was clicked");
    a.innerHTML="akshata";
    a.style.backgroundColor="pink";

})
console.log(a.innerHTML);
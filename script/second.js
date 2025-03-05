document.getElementById("history-btn").addEventListener("click",function(event){
   
    const divValueP=document.getElementById("history-value");
     divValueP.classList.add("hidden")
       location.reload();
     


})
document.getElementById("discover-card").addEventListener("click",function(event){
    event.preventDefault();
 window.location.href="main.html"

})
 document.getElementById("nav-btn").addEventListener("click",function(event){
    event.preventDefault();
    const bodyBackground=document.getElementById("bodyC")
   
    let randomColor="#"+Math.floor(Math.random()*16777215).toString(16);
     document.body.style.backgroundColor=randomColor;
    
 })
 document.getElementById("current-date").textContent= new Date().toDateString();

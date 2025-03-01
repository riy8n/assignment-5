const comBtn= document.querySelectorAll(".btn-complete")
const h2Title=document.querySelectorAll(".title")
for (let j=0; j<h2Title.length; j++){
    const h2Value=h2Title[j];
    
}

for(let i=0; i<comBtn.length; i++){
    const completeBtn=comBtn[i];
 
  completeBtn.addEventListener("click",function(event){
    event.preventDefault();
    alert("Board uploaded Successfully")

// card calculation
    const cardValue=getInnerTextById("card-number")
    const sum=cardValue-1;
    getCalculateValue("card-number",sum)
   
    const navValue=getInnerTextById("nav-value")
    const navSum=navValue+1;

    // btn title
    const cardT=completeBtn.parentElement.parentElement.parentElement;
    const cardTitle= cardT.querySelector(".title").innerHTML
    // get time
    const currentTime= new Date();
    let hours=currentTime.getHours().toString().padStart(2,"0")
    const minutes=currentTime.getMinutes().toString().padStart(2,"0");
    const seconds= currentTime.getSeconds().toString().padStart(2,"0");

    const amPm = hours>=12?`PM`:` AM`;
    hours = hours % 12 || 12;
     const clickedTime= `${hours}:${minutes}:${seconds} ${amPm}`;
   
 
    // converted to history button
    const p=document.createElement("p")
    p.innerText=`
    You have Complete The Task ${cardTitle} at ${clickedTime} 
    `
const container=document.getElementById("history-value");
container.appendChild(p)

    

  //  button disable
   event.target.disabled= true;
   event.target.style.backgroundColor= "#fff"
   event.target.style.cursor="not-allowed" 
 
  })

  

}


  
  
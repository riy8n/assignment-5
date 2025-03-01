function getInnerTextById(id){
    const element=document.getElementById(id);
    const convertedElement=parseInt(element.innerHTML);
return convertedElement;

}
// function getInnerTextByClass(className) {
//     const value = document.className(className).innerText;
//     const convertedValue = parseInit(value);
//     return convertedValue;

// }
function getCalculateValue(id,value){
    document.getElementById(id).innerText=value;
}


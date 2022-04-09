const data = [
  'Teal',
  'SkyBlue',
  'DarkSeaGreen',
  'Purple',
  'LightPink',
  'Crimson'
];
const defaultColor = 'Silver';
// your code here...
var first=document.getElementById("color-select").firstElementChild;
first.setAttribute("value",defaultColor);
///////////////////////
var teal=document.createElement("option");
teal.innerText=data[0];
document.getElementById("color-select").appendChild(teal);
teal.setAttribute("value",data[0]);
////////////////
var skyBlue=document.createElement("option");
skyBlue.innerText=data[1];
document.getElementById("color-select").appendChild(skyBlue);
skyBlue.setAttribute("value",data[1]);
//////////////////
var darkSeaGreen=document.createElement("option");
darkSeaGreen.innerText=data[2];
document.getElementById("color-select").appendChild(darkSeaGreen);
darkSeaGreen.setAttribute("value",data[2]);
/////////////////
var purple=document.createElement("option");
purple.innerText=data[3];
document.getElementById("color-select").appendChild(purple);
purple.setAttribute("value",data[3]);
////////////////
var lightPink=document.createElement("option");
lightPink.innerText=data[4];
document.getElementById("color-select").appendChild(lightPink);
lightPink.setAttribute("value",data[4]);
/////////////////
var crimson=document.createElement("option");
crimson.innerText=data[5];
document.getElementById("color-select").appendChild(crimson);
crimson.setAttribute("value",data[5]);
////////////////
document.getElementById("color-select").addEventListener("change",changefunc);

var box=document.getElementById("box");
function initi(){
  box.setAttribute("style",`background-color:${defaultColor};`);
}
function changefunc(){
  var val=document.getElementById("color-select").value;
  switch(val){
      case defaultColor:
      box.setAttribute("style",`background-color:${defaultColor};`);
      break;
      case data[0]:
      box.setAttribute("style",`background-color:${data[0]};`);
      setTimeout(initi,1000);
      break;
      case data[1]:
      box.setAttribute("style",`background-color:${data[1]};`);
      setTimeout(initi,1000);
      break;
      case data[2]:
      box.setAttribute("style",`background-color:${data[2]};`);
      setTimeout(initi,1000);
      break;
      case data[3]:
      box.setAttribute("style",`background-color:${data[3]};`);
      setTimeout(initi,1000);
      break;
      case data[4]:
      box.setAttribute("style",`background-color:${data[4]};`);
      setTimeout(initi,1000);
      break;
      case data[5]:
      box.setAttribute("style",`background-color:${data[5]};`);
      setTimeout(initi,1000);
      break;
      default:
        break;
  }
 }

//2.Add a “light blue” background color and some padding to the <div>.

let div2 = document.getElementsByTagName("div")[0];

console.log(div2);

div2.style.backgroundColor = "lightblue"; 

div2.style.padding ="40px";

//3 et 4

let li  = document.getElementsByTagName("li");

for (let i = 0; i < li.length; i++) {
   if (li[i].innerHTML=="John") {
     li[i].style.display = "none";
   }else if(li[i].innerHTML=="Pete"){
    li[i].style.border = "4px solid blue";
   }
  
}

console.log(li);

//5 change le font-size

let body = document.body;

body.style.fontSize = "40px";

//3
let x = document.getElementsByTagName("li")[0]; 

let y = document.getElementsByTagName("li")[1];

if (div2.style.backgroundColor = "lightblue"){
  alert("Hello " + x.innerHTML + " and " + y.innerHTML)
}
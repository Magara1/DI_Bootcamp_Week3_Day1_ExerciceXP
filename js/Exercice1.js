/***
 * 
 *  
 * 
 * 
 */

/* Exercise 1 : Users Instructions */

//1.Retrieve the div and console.log it

let elementDiv = document.getElementById("container");

console.log(elementDiv);

//2.

let liInfo = document.getElementsByTagName("li");
console.log(liInfo);

for (let i = 0; i < liInfo.length; i++) {
    if (liInfo[i].innerHTML=="Pete") {
        liInfo[i].innerHTML ="Richard";
    }
}

//3.Change each first name of the two <ul>'s to your name.

let ulinfo = document.querySelectorAll("ul>li:first-child");

for (let i = 0; i < ulinfo.length; i++) {
    ulinfo[i].innerHTML="Magara"
}

console.log(ulinfo);

//4.Delete the <li> that contains the text node “Sarah”.

for(i=0;i<liInfo.length;i++){
    if(liInfo[i].innerHTML=="Sarah"){

        liInfo[i].innerHTML=liInfo[i].remove();
    }
}

//3.Bonus - Using Javascript

//3.1 Add a class called student_list to both of the <ul>'s.

let ul = document.getElementsByTagName("ul");


for(i=0;i<ul.length;i++){
   ul[i].classList.add("student_list")
    }
    console.log(ul);


//3.2 Add the classes university and attendance to the first <ul>.\

let ulFirst = document.getElementsByTagName("ul")[0];

ulFirst.classList.add("university");

ulFirst.classList.add("attendance");

console.log(ulFirst);









/***
 * 
 *  
 *  Magara Etchien N'gouan
 * 
 */

/* Exercise 4 : My Book List 

Take a look at this link for help.
The point of this challenge is to display a list of two books on your browser.*/

//1. In the body of the HTML page, create an empty div:<div class="listBooks"></div>

/*2. In the js file, create an array called allBooks. This is an array of objects. Each object is a book that has 4 keys (ie. 4 properties) :
title,
author,
image : a url,
alreadyRead : which is a boolean (true or false).*/


//3.Initiate the array with 2 books of your choice (ie. Add manually 2 books objects in the array)

let allBooks =[{title:"Rebelle",author:"FatouKeita",image :"http://ecx.images-amazon.com/images/I/51TPBENPS0L._SX195_.jpg",alreadyRead :true},
               {title:"Une si longue lettre",author:"FatouKeita",image :"https://www.africavivre.com/images/stories/A_lire/Mariama-Ba.jpg",alreadyRead :false}
    ];

/* Requirements : All the instructions below need to be coded in the js file:
Using the DOM, render the books inside an HTML table (the HTML table must be added to the <div> created in part 1).
For each book :
You have to display the book’s title and the book’s author.
Example: HarryPotter written by JKRolling.
The width of the image has to be set to 100px.
If the book is already read. Set the color of the book’s details to red. */

let divbyclass = document.getElementsByClassName("listBooks")[0];

console.log(divbyclass);

let table = document.createElement('table');

let tablebody = document.createElement('tbody');

for(i=0;i<allBooks.length;i++){

    let tr =  document.createElement('tr');
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    td1.innerHTML = allBooks[i].title + " Written by " + allBooks[i].author ;
    
    if (allBooks[i].alreadyRead ==true){

        td1.style.color = "red";
    }
 
    td2.innerHTML ='<br>' + '<img src="' + allBooks[i].image + '" width="100px" alt=img' + (parseInt(i) + 1) + '">' ;

    tr.appendChild(td1);
    tr.appendChild(td2);
    tablebody.appendChild(tr)

}
table.appendChild(tablebody);
divbyclass.appendChild(table);



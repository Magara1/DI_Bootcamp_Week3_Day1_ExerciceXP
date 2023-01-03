
let divNavbar = document.getElementById("navBar");

divNavbar.setAttribute("id","socialNetworkNavigation");

console.log(divNavbar);

//1.First, create a new <li> tag (use the createElement method).

let newli = document.createElement("li");

//2.Create a new text node with “Logout” as its specified text

let textNode = document.createTextNode("Logout");

//3.Append the text node to the newly created list node (<li>).
let apppend = newli.append(textNode);

//4.Finally, append this updated list node to the unordered list (<ul>), using the appendChild method
let appenchild = newli.appendChild(textNode);

console.log(appenchild);

//4.Prime : Utilisez les firstElementChildpropriétés et lastElementChildpour récupérer le premier et le dernier <li>élément de leur élément parent ( <ul>). Affichez le texte de chaque lien. ( Astuce : utilisez la textContentpropriété).

let elementfirst = document.querySelectorAll("ul");

console.log(elementfirst);

let firstchild = elementfirst.FirstElementChild

console.log(firstchild);













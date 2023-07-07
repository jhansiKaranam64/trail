/*const items = document.getElementsByClassName('list-group-item');
items[1].style.backgroundColor='green';
for(var i=0;i<items.length;i++){
    items[i].style.fontWeight="bold";
}*/

/*const items = document.getElementsByTagName('li');
for(var i=0;i<items.length;i++){
    items[i].style.fontWeight="bold";
}*/

//3rd item invisible
/*const items = document.getElementsByClassName('list-group-item');
items[1].style.backgroundColor='green';
for(var i=0;i<items.length;i++){
    items[i].style.fontWeight="bold";
}
items[2].style.visibility="hidden";*/

//QuerySelectorALL

//var item = document.querySelector('.list-group-item:nth-child(2)');
//item.style.color ='green';

/*var odd = document.querySelectorAll('li:nth-child(odd)');
for(var i=0;i<odd.length;i++){
    odd[i].style.backgroundColor='#90EE90';
}*/

// TRAVERSING THE DOM

var itemList = document.querySelector('#items');
//parentNode
itemList.parentNode.style.backgroundColor = '#f4f4f4';  //id=main is parentNode
itemList.parentNode //id=container
itemList.parentNode.parentNode //body

//parentElement
itemList.parentElement.style.backgroundColor = '#f4f4f4';

// childNodes
console.log(itemList.childNodes); //considers line break as text node
console.log(itemList.children); //does not consider linebreaks returns array of ele
itemList.children[1].style.backgroundColor='yellow';

//firstChild
console.log(itemList.firstChild); // includes like childNodes
console.log(itemList.firstElementChild); 
itemList.firstElementChild.textContent='Hello 1';

//lastChild
console.log(itemList.lastChild); // includes like childNodes
console.log(itemList.lastElementChild); 
itemList.lastElementChild.textContent='Hello 4';

// nextSibling
console.log(itemList.nextSibling); //line break
console.log(itemList.nextElementSibling);

//previousSibling
console.log(itemList.previousSibling) //text node
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color='green';


// createElement

//create a div
var newDiv = document.createElement('div');
//add class
newDiv.className = 'hello';
//add id
newDiv.id ='hello1';
//add attr
newDiv.setAttribute('title','Hello Div');
//create text node
var newDivText = document.createTextNode('Hello World');
// add text to div
newDiv.appendChild(newDivText);

var head = document.querySelector('header .container');
var h1=document.querySelector('header h1');

newDiv.style.fontSize ='30px';
head.insertBefore(newDiv,h1);

// add before item 1
var item1 = document.querySelector("#items li:first-child");
item1.parentNode.insertBefore(newDiv, item1);
console.log(newDiv);


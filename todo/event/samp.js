<<<<<<< HEAD
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

/* var itemList = document.querySelector('#items');
//parentNode
itemList.parentNode.style.backgroundColor = '#f4f4f4';  //id=main is parentNode
console.log(itemList.parentNode.parentNode); //id=container
console.log(itemList.parentNode.parentNode.parentNode); //body
=======
var itemList = document.querySelector('#items');
//parentNode
itemList.parentNode.style.backgroundColor = '#f4f4f4';  //id=main is parentNode
itemList.parentNode //id=container
itemList.parentNode.parentNode //body
>>>>>>> 9775425b4e2a774f8f639db239e2b7f9daa9d812

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

*/

=======
>>>>>>> 6c0f396 (update event)
var form = document.getElementById('addForm');
var itemList = document.getElementById('items');


<<<<<<< HEAD
// form submit event
form.addEventListener('submit',addItem);
// Delete Event
itemList.addEventListener('click',removeItem);



//addItem function
function addItem(e){
    e.preventDefault();
    // get input value
    var newItem = document.getElementById('item').value;

    // create new li element
    var li = document.createElement('li');
    //add class
    li.className = 'list-group-item';
    //add text node with input value
    li.appendChild(document.createTextNode(newItem));

    //create delete button
    var deleteBtn = document.createElement('button');
    //Add classes to delete button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    deleteBtn.appendChild(document.createTextNode('X'));
    //append button to li
    li.appendChild(deleteBtn);

    // create edit button
    var editBtn = document.createElement('button');
    editBtn.className = 'btn btn-primary btn-sm float-right edit';
    editBtn.appendChild(document.createTextNode('edit'));
    li.appendChild(editBtn);
    //append li to list
    itemList.appendChild(li);
}

// removeItem function
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are u sure?')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}



=======
// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);


// Add item
function addItem(e){
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById('item').value;

  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));

  // Create del button element
  var deleteBtn = document.createElement('button');

  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));

  // edit button
  var editBtn = document.createElement('button');
  editBtn.className = 'btn btn-primary btn-sm float-right edit';
  editBtn.appendChild(document.createTextNode('edit'));
  
  // Append button to li
  li.appendChild(deleteBtn);
  li.appendChild(editBtn);
  // Append li to list
  itemList.appendChild(li);
}

// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

>>>>>>> 6c0f396 (update event)

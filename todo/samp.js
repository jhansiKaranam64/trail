/*const items = document.getElementsByClassName('list-group-item');
items[1].style.backgroundColor='green';
for(var i=0;i<items.length;i++){
    items[i].style.fontWeight="bold";
}*/

const items = document.getElementsByTagName('li');
for(var i=0;i<items.length;i++){
    items[i].style.fontWeight="bold";
}
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

var odd = document.querySelectorAll('li:nth-child(odd)');
for(var i=0;i<odd.length;i++){
    odd[i].style.backgroundColor='#90EE90';
}

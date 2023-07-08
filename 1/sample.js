/*//manuplating the DOM
const ul=document.querySelector('.items');
ul.firstElementChild.textContent='Hello';
ul.children[1].innerText='Hii';
ul.lastElementChild.innerHTML='<h1>What</h1';

//Events
const btn=document.querySelector('.btn');
//onclick
btn.addEventListener('click',e=>{
    e.preventDefault();
    document.getElementById('my-form').style.background="#ccc";
    document.querySelector('body').classList.add('bg-dark');
    ul.lastElementChild.innerHTML='<h1>changed</h1>';

});
//mouseout
btn.addEventListener('mouseout',e=>{
    e.preventDefault();
    document.getElementById('my-form').style.background='purple';
    document.querySelector('body').classList.add('bg-light');
    ul.children[1].innerHTML='<h1>cool</h1>';

});
//mouseover
btn.addEventListener('mouseover',e=>{
    e.preventDefault();
    document.getElementById('my-form').style.background='green';
    document.querySelector('body').classList.add('bg-white');
    ul.firstElementChild.innerHTML='<h1>over</h1>';
});

//Keyboard event
//to display name after submitting
const namesInput=document.querySelector('#name');
nameInput.addEventListener('input',e=>{
    document.querySelector('.container').append(namesInput.value);
});

const emailInput=document.querySelector('#email');
emailInput.addEventListener('input',e=>{
    document.querySelector('.container').append(emailInput.value);
});*/

//user form script
//put DOM values into variables
const myForm=document.querySelector('#my-form');
const nameInput=document.querySelector('#name');
const emailInput=document.querySelector('#email');
const msg=document.querySelector('.msg');
const userList=document.querySelector('#users');

//Listen for form submit
myForm.addEventListener('submit',onSubmit);

function onSubmit(e){
    e.preventDefault();
    if(nameInput.value===''||emailInput.value===''){
        msg.classList.add('error');
        msg.innerHTML='Please enter all fields';

        //remove error after 3 sec
       // setTimeout(()=>msg.remove(),3000);
    }else{
        const li=document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value}:${emailInput.value}`));
        userList.appendChild(li);

        // storing name and id  in localStorage
        var storedInput = localStorage.getItem('ItemDetails');
        if(storedInput){
            storedInput +="\n "+nameInput.value+": "+emailInput.value;
        }else{
            storedInput =nameInput.value+": "+emailInput.value;
        }
        localStorage.setItem('ItemDetails',storedInput);

        //clear fields
        nameInput.value='';
        emailInput.value='';
    }
}

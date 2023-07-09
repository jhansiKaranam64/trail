form = document.getElementById('my-form');
itemList = document.getElementById('items');
const msg=document.querySelector('.msg');

form.addEventListener('submit',addItem);

function addItem(e){
    e.preventDefault();

    var newName = document.getElementById('name');
    var newEmail = document.getElementById('email');
    var newPhone = document.getElementById('Phone');

    if(newName.value===''||newEmail.value===''||newPhone.value===''){
        console.log(newEmail);
        msg.classList.add('error');
        msg.innerHTML='Please enter all fields';

        // remove error after 3 sec
        setTimeout(()=>msg.remove(),3000);
    }else{
        var li =document.createElement('li');
        li.className = "list-group-item";
        li.appendChild(document.createTextNode(newName.value+": "+newEmail.value+": "+newPhone.value));
        itemList.appendChild(li);

        var storedData = localStorage.getItem('userDetails');
        var userDetails = storedData ? JSON.parse(storedData):[];
        var newUser={
            name : newName.value,
            email : newEmail.value,
            phone : newPhone.value
        }
        userDetails.push(newUser);
        localStorage.setItem('userDetails',JSON.stringify(userDetails));
        console.log(localStorage.getItem('userDetails'));

        //clear fields
        newName.value='';
        newEmail.value='';
        newPhone.value='';
    }
}
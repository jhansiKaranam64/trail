form = document.getElementById('my-form');
itemList = document.getElementById('items');
const msg=document.querySelector('.msg');


form.addEventListener('submit',addItem);
itemList.addEventListener('click',removeItem);

// Add details
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
        var button = document.createElement('button');
        button.className ="btn btn-danger btn-sm float-right delete";
        button.appendChild(document.createTextNode('Delete'));
        li.className = "list-group-item";
        li.appendChild(document.createTextNode(newName.value+": "+newEmail.value+": "+newPhone.value));
        li.appendChild(button);
        itemList.appendChild(li);

        var storedData = localStorage.getItem(newEmail.value);
        //var userDetails = storedData ? JSON.parse(storedData):[];
        var newUser={
            name : newName.value,
            email : newEmail.value,
            phone : newPhone.value
        }
        //userDetails.push(newUser);
        localStorage.setItem(newEmail.value,JSON.stringify(newUser));

        //clear fields
        newName.value='';
        newEmail.value='';
        newPhone.value='';
    }
}

// remove deatils from UI and localStorage
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are u sure?')){
            var li = e.target.parentElement;
            var itemLis = li.textContent.split(':');
            var email = itemLis[1].trim();
            localStorage.removeItem(email);
            itemList.removeChild(li);
        }
    }
}
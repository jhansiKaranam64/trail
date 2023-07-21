form = document.getElementById('my-form');
itemList = document.getElementById('items');
const msg=document.querySelector('.msg');


form.addEventListener('submit',addItem);
itemList.addEventListener('click',removeItem);
itemList.addEventListener('click',editItem);

// Add details
function addItem(e){
    e.preventDefault();

    var newName = document.getElementById('name');
    var newEmail = document.getElementById('email');
    var newPhone = document.getElementById('Phone');

    if(newName.value===''||newEmail.value===''||newPhone.value===''){
       
        msg.classList.add('error');
        msg.innerHTML='Please enter all fields';

        // remove error after 3 sec
        setTimeout(()=>msg.remove(),3000);
    }else{
        var storedData = localStorage.getItem(newEmail.value);
        //var userDetails = storedData ? JSON.parse(storedData):[];
        var newUser={
            name : newName.value,
            email : newEmail.value,
            phone : newPhone.value
        }
        //userDetails.push(newUser);
        //localStorage.setItem(newEmail.value,JSON.stringify(newUser));
        axios.post("https://crudcrud.com/api/52f4be3e91fe428785bc85376ee8c253/details",newUser)
            .then(response => {
                console.log(response);
                showNewUserOnScreen(response.data)
            })
            .catch(err => {
                console.log(err);
            })


        //clear fields
        newName.value='';
        newEmail.value='';
        newPhone.value='';
    }
}
//display function
function showNewUserOnScreen(obj){
    var li =document.createElement('li');
    li.dataset.id = obj._id;
    li.className = "list-group-item";
    

    var deleteBtn = document.createElement('button');
    deleteBtn.className ="btn btn-danger btn-sm float-right delete";
    deleteBtn.appendChild(document.createTextNode('Delete'));

    li.appendChild(document.createTextNode(obj.name+": "));
    li.appendChild(document.createTextNode(obj.email+": "));
    li.appendChild(document.createTextNode(obj.phone));
        
    var editBtn = document.createElement('button');
    editBtn.classList = "btn btn-primary btn-sm float-right edit";
    editBtn.appendChild(document.createTextNode('Edit'));

        
    li.appendChild(deleteBtn);
    li.appendChild(editBtn); 
    itemList.appendChild(li);
    
}
// loading data with is already stored in server
window.addEventListener("DOMContentLoaded",() => {
    axios.get("https://crudcrud.com/api/52f4be3e91fe428785bc85376ee8c253/details")
    .then(res=>{
        const data = res.data;
        data.forEach(item =>{
            showNewUserOnScreen(item);
        });
        
    })
    .catch(err=>{
        console.log(err);
    })
})
// remove deatils from UI and localStorage
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are u sure?')){
            var li = e.target.parentElement;
            const id = li.dataset.id;
            console.log('User ID:', id);
            axios.delete(`https://crudcrud.com/api/52f4be3e91fe428785bc85376ee8c253/details/${id}`)
            .then(res =>{
                li.remove();
            })
            .catch(err=>{
                console.log(err);
            })
        }
    }
}

// editItem function
function editItem(e){
    e.preventDefault();
    if(e.target.classList.contains('edit')){
        var newName = document.getElementById('name');
        var newEmail = document.getElementById('email');
        var newPhone = document.getElementById('Phone');
        
        var li = e.target.parentElement;
        // getting values
        var nameElement = li.firstChild;
        var emailElement = nameElement.nextSibling;
        var phoneElement = emailElement.nextSibling;
        // to get values in input placeholders
        newName.value = nameElement.textContent.split(':')[0].trim();
        newEmail.value = emailElement.textContent.split(':')[0].trim();
        newPhone.value = phoneElement.textContent;
        //form.removeEventListener('submit', handleSubmit);
        form.addEventListener('submit', handleSubmit);

        function handleSubmit(e){
            e.preventDefault();
            const updatedUser = {
                name: newName.value,
                email: newEmail.value,
                phone: newPhone.value,
            };
            const userId = li.dataset.id;
            axios
            .put(`https://crudcrud.com/api/52f4be3e91fe428785bc85376ee8c253/details/${userId}`, updatedUser)
            .then((response) => {
                console.log(response);
                // Update the user details in the list item and clear the form fields
                const li = itemList.querySelector(`li[data-id="${userId}"]`);
                console.log(li);
                li.firstChild.textContent = `${updatedUser.name}: `;
                li.firstChild.nextSibling.textContent = `${updatedUser.email}: `;
                li.firstChild.nextSibling.nextSibling.textContent = `${updatedUser.phone}`;
    
            })
            .catch((err) => {
                console.log(err);
            });
        }

       
        
    }
    
}
let inputBx = document.querySelector('#inputBx');
let list = document.querySelector('#list');

//Add an inputed entry by Enter click
inputBx.addEventListener('keyup', function(event) {
    if (event.key == 'Enter') {
        addItem(this.value)
        this.value = ''
    }
})

//Create an li-element with innerHTML property
let addItem = (inputBx) => {
    let listItem = document.createElement('li');
    listItem.innerHTML = `${inputBx}<i></i>`;

   
//Switch a completed task
listItem.addEventListener('click', function() {
    this.classList.toggle('done');
})

    //Function to delete a task
    listItem.querySelector('i').addEventListener('click',
    function() {
        listItem.remove();
})

//Add item from the input form
list.appendChild(listItem);
}



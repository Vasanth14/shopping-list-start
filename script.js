const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');


function addItem(e) {
    e.preventDefault();

    const newItem = itemInput.value;
    if(newItem === ''){
        alert("Please enter an item to add");
        return;
    }
    console.log("success");
    //create list item

    const li = document.createElement('li');
    li.appendChild(document.createTextNode(newItem));

    const button = createButton('remove-item btn-link text-red');
   li.appendChild(button);
   
   itemList.appendChild(li);
   itemInput.value='';
}

function createButton(classes){
    const button = document.createElement('button')
    button.className = classes;
    const icon = createIcon('fa-solid fa-xmark');
    button.appendChild(icon);
    return button;
}

function createIcon(classes){
    const icon = document.createElement('icon');
    icon.className =classes;
    return icon;
}


//Event Listeners

itemForm.addEventListener('submit', addItem);
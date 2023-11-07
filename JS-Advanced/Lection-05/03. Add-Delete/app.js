function addItem() {
    const item = document.getElementById('newItemText');
    const ul = document.getElementById('items');

    let text = item.value;
    let li = document.createElement('li');
    li.textContent = text;

    let deleteLink = document.createElement('a');
    let linkText = document.createTextNode('[Delete]');
    deleteLink.appendChild(linkText);
    deleteLink.href = '#';
    deleteLink.addEventListener('click', deleteItem);

    li.appendChild(deleteLink);
    ul.appendChild(li);

    item.value = '';

    function deleteItem() {
        li.remove();
    }
    
}

// function removeItem(e) {
//     const deleteButton = document.querySelector('ul li a');
//     console.log(deleteButton);
//     deleteButton.addEventListener('click', (e) => {
        
//     }); 
// }



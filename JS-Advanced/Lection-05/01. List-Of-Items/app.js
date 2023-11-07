function addItem() {
    const item = document.getElementById('newItemText');
    const ul = document.getElementById('items');

    let text = item.value;
    let li = document.createElement('li');
    li.textContent = text;

    ul.appendChild(li);

    item.value = '';

}
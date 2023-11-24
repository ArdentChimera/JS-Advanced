import { html, render } from 'https://cdn.jsdelivr.net/npm/lit-html@3.1.0/lit-html.min.js';
const URI = 'http://localhost:3030/jsonstore/advanced/dropdown'

async function addItem() {
    const items = await getData();
    const itemsArray = Object.values(items)
    addOption(itemsArray);

    console.log(Object.values(items));

    const input = document.getElementById('itemText');

    const addBtn = document.querySelector('input[type="submit"]');

    addBtn.addEventListener('click', async (e) => {
        e.preventDefault();
        const data = {text: input.value};

        postData(data);
        addItem();        
    })

}

addItem();


async function getData() {
    const response = await fetch(URI)
    const data = await response.json()

    return data;
}

async function postData(data) {
    const response = await fetch(URI, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })

    if (response.status === 200) {
        console.log('Post successfull');
    }else {
        throw new Error('Failed')
    }
}

function addOption(items) {
    const select = document.getElementById('menu');

    const optionTemplate = (item) => html`<option value='${item._id}'>${item.text}</option>`;
    
    render(html`${items.map(optionTemplate)}`, select);
}
import { html, render } from 'https://cdn.jsdelivr.net/npm/lit-html@3.1.0/lit-html.min.js';

const inputText = document.getElementById('towns');
const loadBtn = document.getElementById('btnLoadTowns');

loadBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const townsArr = inputText.value.split(',');
    const root = document.getElementById('root');

    const listItems = (arr) => html`
    <ul>
        ${arr.map((town) => html`<li>${town}</li>`)}
    </ul>`
    
    render(listItems(townsArr), root);
});


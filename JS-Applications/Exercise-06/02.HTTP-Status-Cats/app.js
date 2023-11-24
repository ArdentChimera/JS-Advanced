import { cats } from './catSeeder.js';
import { html, render } from 'https://cdn.jsdelivr.net/npm/lit-html@3.1.0/lit-html.min.js';

function renderCats() {
    const allCats = document.getElementById('allCats');
    const template = (arr) => html`
        <ul>
            ${arr.map(cat => 
                html`
                <li>
                    <img src="./images/${cat.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
                    <div class="info">
                        <button class="showBtn"  @click=${() => handleClick(cat.id)}>Show status code</button>
                        <div class="status" style="display: none" id="${cat.id}">
                            <h4 class="card-title">Status Code: ${cat.statusCode}</h4>
                            <p class="card-text">${cat.statusMessage}</p>
                        </div>
                    </div>
                </li>
                `
            )}
        </ul>
    `
    render(template(cats), allCats);
}

renderCats();

function handleClick(id) {
    const statusDiv = document.getElementById(`${id}`);
    statusDiv.style.display = 'block';
    const button = event.target
    button.innerHTML = "Hide status code";
}


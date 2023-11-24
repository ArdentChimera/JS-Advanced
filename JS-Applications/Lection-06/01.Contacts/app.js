import { contacts } from './contacts.js';
import { html, render } from 'https://cdn.jsdelivr.net/npm/lit-html@3.1.0/lit-html.min.js';

const contactsContainer = document.getElementById('contacts');

const contactsList = (contacts) => html`<ul>
    ${contacts.map(contact => html`
        <li>
            <div class="contact card">
                <div>
                    <i class="far fa-user-circle gravatar"></i>
                </div>
                <div class="info">
                    <h2>Name: ${contact.name}</h2>
                    <button class="detailsBtn">Details</button>
                    <div class="details" id="${contact.id}">
                        <p>Phone number: ${contact.phoneNumber}</p>
                        <p>Email: ${contact.email}</p>
                    </div>
                </div>
            </div>
        </li>`)}
</ul>`;
render(contactsList(contacts), contactsContainer);

contactsContainer.addEventListener('click', handleShowDetails);

function handleShowDetails(event) {
    const detailsContainer = event.target.closest('.contact').querySelector('.details');
    if (detailsContainer) {
        detailsContainer.style.display = 'block';
    }
}

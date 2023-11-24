import { towns } from './towns.js'
import { html, render } from 'https://cdn.jsdelivr.net/npm/lit-html@3.1.0/lit-html.min.js';
const container = document.getElementById('towns');

const townsList = (townsArr) => html`
   <ul>
      ${townsArr.map((town) => html`<li>${town}</li>`)}
   </ul>
`
render(townsList(towns), container);

function search() {
   const input = document.getElementById('searchText').value;
   let matchesFound = 0;

   const items = Array.from(document.querySelectorAll('ul li'));
   items.forEach((item) => {
      item.classList.remove('active');

      if (item.textContent.toLocaleLowerCase().includes(input.toLocaleLowerCase())) {
         matchesFound++;
         item.classList.add('active');

         const matchesContainer = document.getElementById('result');
         const createMatches = (matches) => html`<p>${matches} matches found</p>`;
         render(createMatches(matchesFound), matchesContainer);
      }
   });
}

const searchBtn = document.querySelector('button').addEventListener('click', () => {
   search();
});


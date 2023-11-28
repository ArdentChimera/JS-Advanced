import { html, render } from 'https://cdn.jsdelivr.net/npm/lit-html@3.1.0/lit-html.min.js';


async function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   const data = await getTableData();
   console.log(Object.values(data));
   const dataArr = Object.values(data);
   createRowTemplate(dataArr);

   function onClick() {
      const inputField = document.getElementById('searchField');
      const input = inputField.value.toLowerCase();
      const rows = Array.from(document.querySelectorAll('table.container tbody tr'));

      rows.forEach(row => {
         row.classList.remove('select');
       });
    
      rows.forEach(row => {
        const tds = Array.from(row.querySelectorAll('td'));
        
        const isMatch = tds.some(td => td.textContent.toLowerCase().includes(input));
        
        row.classList.toggle('select', isMatch);
      });

      inputField.value = '';
   }

   handleSearch(onClick);
}

solve();

async function getTableData() {
   const URL = 'http://localhost:3030/jsonstore/advanced/table'

   const response = await fetch(URL)
   const data = await response.json();

   return data;
   
}

function handleSearch(onClick) {
   const searchBtn = document.getElementById('searchBtn');

   searchBtn.addEventListener('click', onClick);
}

function createRowTemplate(dataArr) {
   const table = document.querySelector('table.container tbody');

   const tableRowTemplate = (el) => html`
                                       <tr id="${el.id}">
                                          <td>${el.firstName} ${el.lastName}</td>
                                          <td>${el.email}</td>
                                          <td>${el.course}</td>
                                       </tr>
                                    `
   render(html`${dataArr.map(tableRowTemplate)}`, table);
}
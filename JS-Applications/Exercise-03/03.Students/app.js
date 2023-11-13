const url = "http://localhost:3030/jsonstore/collections/students";

async function loadData() {
    const response = await fetch(url);
    const data = await response.json();

    return data;
}

function loadTable() {
    const data = loadData();

    data.then(element => {
        const tbody = document.querySelector('#results tbody');
        for (const key in element) {
            createTable(element[key], tbody);
        }
    });
}

loadTable();

function createTable(element, tbody) {   
    tbody.insertAdjacentHTML("beforeend", `
        <tr>
            <td>${element.firstName}</td>
            <td>${element.lastName}</td>
            <td>${element.facultyNumber}</td>
            <td>${element.grade}</td>
        </tr>`
    );
}

function submitEntry() {
    const submitBtn = document.getElementById('submit');

    submitBtn.addEventListener('click', (e) => {
        e.preventDefault();

        const form = document.getElementById('form');
        let formData = new FormData(form);

        const data = Object.fromEntries(formData.entries());

        const body = JSON.stringify({
            firstName: data.firstName,
            lastName: data.lastName,
            facultyNumber: data.facultyNumber,
            grade: Number(data.grade)
        });
        
        postSubmit(body);
        const tbody = document.querySelector('#results tbody').innerHTML = '';
        loadTable();
    });
}

submitEntry();

async function postSubmit(body) {
    const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body
    })
    const data = response.json();
    if (response.status === 200) {
        console.log('Entry submitted !');
    }else {
        throw new Error('Failed to submit');
    }
}




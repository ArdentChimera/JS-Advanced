function attachEvents() {
    handleLoad();

    const createBtn = document.getElementById('btnCreate');
    createBtn.addEventListener('click', (e) => {
        e.preventDefault();

        submitEntry();

        const ul = document.getElementById('phonebook');
        ul.innerHTML = '';
        const phoneBookData = getPhoneBook();
        phoneBookData.then((phoneBook) => {
            console.log(phoneBook);
            for (const key in phoneBook) {
                const deleteBtn = document.createElement('button');
                deleteBtn.setAttribute('id', 'delete');
                deleteBtn.textContent = 'Delete';
                const li = document.createElement('li');
                li.innerHTML = `${phoneBook[key].person}: ${phoneBook[key].phone}`;
                li.appendChild(deleteBtn);

                ul.appendChild(li);
            }
        })
    });
    
}

attachEvents();


function handleLoad() {
    const loadBtn = document.getElementById('btnLoad');
    loadBtn.addEventListener('click', () => {
        const ul = document.getElementById('phonebook');

        const phoneBookData = getPhoneBook();
        phoneBookData.then((phoneBook) => {
            console.log(phoneBook);
            for (const key in phoneBook) {
                const deleteBtn = document.createElement('button');
                deleteBtn.setAttribute('id', 'delete');
                deleteBtn.textContent = 'Delete';
                const li = document.createElement('li');
                li.innerHTML = `${phoneBook[key].person}: ${phoneBook[key].phone}`;
                li.appendChild(deleteBtn);

                ul.appendChild(li);
            }
        })
    });
}



async function getPhoneBook() {
    const url = 'http://localhost:3030/jsonstore/phonebook';
    try {
        const response = await fetch(url)
        const data = await response.json();

        return data;
    } catch (error) {
        console.log(error.message);
    }
}

async function submitEntry() {
    const url = 'http://localhost:3030/jsonstore/phonebook';
    const person = document.getElementById('person');
    const phone = document.getElementById('phone');

    const body = JSON.stringify({
        person: person.value,
        phone: phone.value,
    })

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body
        })
        const data = await response.json();
        if (response.status === 200) {
            return console.log('Creation successfull');
        }else {
            throw new Error('Creation failed:' + response.message);
        }
    } catch (error) {
        console.log(error.message);
    }
}
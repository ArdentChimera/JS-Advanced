function attachEvents() {
    handleLoad();

    const createBtn = document.getElementById('btnCreate');
    createBtn.addEventListener('click', async (e) => {
        e.preventDefault();
        await submitEntry();
        handleLoad(); // Reload the phonebook after creating a new entry
    });
}

attachEvents(); 

function handleLoad() {
    const ul = document.getElementById('phonebook');
    ul.innerHTML = ''; // Clear the phonebook list

    getPhoneBook().then((phoneBook) => {
        console.log(phoneBook);
        for (const key in phoneBook) {
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';

            deleteBtn.addEventListener('click', async (e) => {
                const id = phoneBook[key]._id;
                await deleteEntry(id);
                handleLoad(); // Reload the phonebook after deleting an entry
            });

            const li = document.createElement('li');
            li.setAttribute('id', phoneBook[key]._id);
            li.innerHTML = `${phoneBook[key].person}: ${phoneBook[key].phone}`;
            li.appendChild(deleteBtn);

            ul.appendChild(li);
        }
    });
}

async function getPhoneBook() {
    const url = 'http://localhost:3030/jsonstore/phonebook';
    try {
        const response = await fetch(url);
        const data = await response.json();

        return data;
    } catch (error) {
        console.log(error.message);
    }
}

async function submitEntry() {
    const url = 'http://localhost:3030/jsonstore/phonebook';
    const person = document.getElementById('person').value;
    const phone = document.getElementById('phone').value;

    const body = JSON.stringify({
        person,
        phone,
    });

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body,
        });

        if (response.status === 200) {
            console.log('Creation successful');
        } else {
            throw new Error('Creation failed');
        }
    } catch (error) {
        console.log(error.message);
    }
}

async function deleteEntry(key) {
    const url = `http://localhost:3030/jsonstore/phonebook/${key}`;
    try {
        const response = await fetch(url, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.status === 200) {
            console.log('Entry deleted');
        } else {
            throw new Error('Error deleting the entry');
        }
    } catch (error) {
        console.log(error.message);
    }
}

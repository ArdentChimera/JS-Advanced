function attachEvents() {
    const author = document.querySelector('input[name="author"]');
    const content = document.querySelector('input[name="content"]');

    const submitBtn = document.getElementById('submit');
    submitBtn.addEventListener('click', (e) => {
        e.preventDefault();
        
        const body = JSON.stringify({
            author: author.value,
            content: content.value,
        });

        submitMessage(body);
        author.value = '';
        content.value = '';
    });

    const refreshBtn = document.getElementById('refresh');
    refreshBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const textarea = document.getElementById('messages');
        textarea.innerHTML = '';
        

       
        const messages = getMessages();
        messages.then((data) => {
            for (const key in data) {
                textarea.innerHTML += `${data[key].author}: ${data[key].content}\n`;
            }
        })
    });
}

attachEvents();

const url = 'http://localhost:3030/jsonstore/messenger'

async function submitMessage(body) { 
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body
        })
        const data = response.json();
        if (response.status === 200) {
            return data;
        }else {
            throw new Error(response.message);
        }
    } catch (error) {
        console.log(error.message);
    }
}

async function getMessages() {
    try {
        const response = await fetch(url)
        const data = await response.json();

        return data
    } catch (error) {
        console.log(error.message);        
    }
}
import { showDetails } from './detailView.js';
const URL = 'http://localhost:3030/jsonstore/collections/myboard/posts'

const main = document.querySelector('main');
const topicContent = document.querySelector('div.topic-title');
const section = document.querySelector('div.new-topic-border');
const form = section.querySelector('form');

// Reset form when Cancel button is clicked:
const cancel = document.querySelector('.cancel');
cancel.addEventListener('click', (e) => clearForm(e));

section.remove();

form.addEventListener('submit', (e) => onSubmit(e));



export async function showHome(ev) {
    ev?.preventDefault();
    topicContent.innerHTML = '';
    const topics = await getAllTopics();
    Object.values(topics).forEach(topic => {
        
        const temp = createTopicTemplate(topic);
        console.log(topic);
        topicContent.insertAdjacentHTML("beforeend", temp);

        
    })

    const allLinks = topicContent.querySelectorAll('a');
    
    allLinks.forEach(link => {
        
        link.addEventListener('click', () =>{
            const id = link.getAttribute('data-id');
            showDetails(id)
        });
    });

    

    main.replaceChildren(section);
    main.appendChild(topicContent);
}

function clearForm(e) {
    e?.preventDefault();
    form.reset();
}

function onSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);

    const topicName = formData.get('topicName');
    const username = formData.get('username');
    const postText = formData.get('postText');
    const createDate =new Date();

    createTopic({topicName, username, postText, createDate});
}

async function getAllTopics() {
    const response = await fetch(URL)
    const data = await response.json();

    return data
}

async function createTopic(data) {
    const response = await fetch(URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
    if(response.status === 200) {
        console.log('Post is submitted !!!');
        clearForm();
        showHome();
    }else {
        throw new Error('Error creating the topic');
    }

}


function createTopicTemplate(topic) {
    return `
        <div class="topic-container">
            <div class="topic-name-wrapper">
                <div class="topic-name">
                    <a href="#" class="normal" data-id="${topic._id}">
                        <h2>${topic.topicName}</h2>
                    </a>
                    <div class="columns">
                        <div>
                            <p>Date: <time>${topic.createDate}</time></p>
                            <div class="nick-name">
                                <p>Username: <span>${topic.username}</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
}



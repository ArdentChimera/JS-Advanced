const URL = 'http://localhost:3030/jsonstore/collections/myboard/comments';

const main = document.querySelector('main');
const section = document.getElementById('comments');

section.remove();

export async function showDetails(id) {
    section.innerHTML = createCommenttemplate();
    console.log(id);

    
    const comment = section.querySelector('#post');
    console.log(comment);

    const topicData = await getTpoicData(id);
    for (const key in topicData) {
        if(topicData[key]._id === id) {
            console.log(topicData[key]);

            const name = topicData[key].username;
            const text = topicData[key].postText;
            const time = topicData[key].createDate;
            time.toUTCString();
            new Intl.DateTimeFormat("en-US").format(time);

            const header = createCurrentComentTemplate(name, time, text);
            comment.insertAdjacentHTML('beforeend', header);

        }
    }
    console.log(topicData);
    

    const commentsData = await getComments();
    console.log(commentsData);

    const form = section.querySelector('div.answer form');
    form.addEventListener('submit', (e) =>{
        e.preventDefault();
        const formData = new FormData(e.target);

        const postText = formData.get('postText');
        const username = formData.get('username');
        
        postComment({postText, username});
    })

    main.replaceChildren(section);
}

async function getComments() {
    const response = await fetch(URL)
    const data = await response.json();

    return data;
}

async function postComment(postCommentData) {
    const response = await fetch(URL, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(postCommentData)
    })
    if (response.status === 200) {
        console.log('Post Comment is Successful');
    }
}

async function getTpoicData() {
    const response = await fetch(`http://localhost:3030/jsonstore/collections/myboard/posts`);
    const data = await response.json();

    return data;
}


function createCurrentComentTemplate(name, time, text) {
    return `
    <div class="header">
        <img src="./static/profile.png" alt="avatar">
        <p><span>${name}</span> posted on <time>${time}</time></p>

        <p class="post-content">${text}</p>
    </div>
    `
}

function createCommenttemplate() {
    return `
    <div class="comment" id="post">



        <div id="user-comment">
            <div class="topic-name-wrapper">
                <div class="topic-name">
                    <p><strong>Daniel</strong> commented on <time>3/15/2021, 12:39:02 AM</time></p>
                    <div class="post-content">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure facere sint
                            dolorem quam.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="answer-comment">
    <p><span>currentUser</span> comment:</p>
    <div class="answer">
            <form>
                <textarea name="postText" id="comment" cols="30" rows="10"></textarea>
                <div>
                    <label for="username">Username <span class="red">*</span></label>
                    <input type="text" name="username" id="username">
                </div>
                <button>Post</button>
            </form>
        </div>
    </div>
    `
}
function attachEvents() {
    const options = document.getElementById('posts');
    const viewBtn = document.getElementById('btnViewPost');

    const loadPostsBtn = document.getElementById('btnLoadPosts');
    loadPostsBtn.addEventListener('click', () => {
        const posts = getPosts();

        posts.then((data) => {
            
            for (const key in data) {
                const option = document.createElement('option');
                option.setAttribute('value', key);
                option.textContent = data[key].title;
                

                options.appendChild(option);
            }

            viewBtn.addEventListener('click', () => {
                const selectedKey = options.value;
                const postTitle = document.getElementById('post-title');
                const postBody = document.getElementById('post-body');
        
                if (selectedKey) {
                    const post = data[selectedKey];
                    postTitle.innerHTML = post.title;
                    postBody.textContent = post.body;

                    const postId = post.id;
        
                    const comments = getCurrentPost();
                    comments.then((data) => {
                        const ul = document.getElementById('post-comments');
                        ul.innerHTML = '';

                        for (const key in data) {
                            if(data[key].postId === postId) {
                                const li = document.createElement('li');

                                li.innerHTML = data[key].text;
                                ul.appendChild(li);
                            }
                        }

                        
                    });
                }
            });
        });
    });


}

attachEvents();

async function getPosts() {
    const url = 'http://localhost:3030/jsonstore/blog/posts';
    const response = await fetch(url);
    const posts = response.json();

    return posts;
}

async function getCurrentPost() {
    const url = `http://localhost:3030/jsonstore/blog/comments`
    const response = await fetch(url);
    const comments = response.json();

    return comments;
}
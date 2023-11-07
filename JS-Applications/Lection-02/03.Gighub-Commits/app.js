function loadCommits() {
    const username = document.getElementById('username').value;
    const repository = document.getElementById('repo').value;
    const ul = document.getElementById('commits');

    // Try it with Fetch API
    fetch(`https://api.github.com/repos/${username}/${repository}/commits`)
        .then(res => res.json())
        .then(data => {
            data.forEach(element => {
                const li = document.createElement('li');

                li.textContent = `${element.commit.author.name}: ${element.commit.message}`;
                ul.appendChild(li);
            });
        })
        .catch(err => console.log(err))
}
function solution() {
    const data = getArticles();

    data.then(articles => {
        for (const el of articles) {
            createArticle(el.title, el._id);
        }

        const buttons = Array.from(document.querySelectorAll('#main .accordion .head button'));
        buttons.forEach(button => {
            generateArticleText(button);
        });
    });

}

solution();

async function getArticles() {
    const url = 'http://localhost:3030/jsonstore/advanced/articles/list';
    const response = await fetch(url);
    const articles = response.json();

    return articles;
}

function createArticle(title, id) {
    const body = document.querySelector('body');
    const section = document.createElement('section');
    section.setAttribute('id', 'main');
    const accordion = document.createElement('div');
    accordion.className = 'accordion';
    const head = document.createElement('div');
    head.className = 'head';
    const nameSpan = document.createElement('span');
    const button = document.createElement('button');

    nameSpan.innerHTML = title;
    button.setAttribute('id', id);
    button.className = 'button';
    button.innerHTML = 'More';
    head.appendChild(nameSpan);
    head.appendChild(button);
    accordion.appendChild(head);
    section.appendChild(accordion);
    body.appendChild(section);
}

async function generateArticleText(button) {
    const id = button.getAttribute('id');
    const currentBtn = document.getElementById(`${id}`);
    const head = currentBtn.parentNode;
    const accordion = head.parentNode;
    const extra = document.createElement('div');
    extra.className = 'extra';
    extra.style.display = 'none';

    button.addEventListener('click', async (e) => {
        if (button.innerHTML === 'More') {
            const text = await getArticleText(id);
            const p = document.createElement('p');
            p.textContent = text.content;
            extra.appendChild(p)
            extra.style.display = 'block';
            button.innerHTML = 'Less'
            accordion.appendChild(extra);
        } else {
            extra.innerHTML = '';
            extra.style.display = 'none';
            button.innerHTML = 'More';
        }
    });
}

async function getArticleText(id) {
    const url = `http://localhost:3030/jsonstore/advanced/articles/details/${id}`;
    const response = await fetch(url);
    const articleText = response.json();

    return articleText;
}

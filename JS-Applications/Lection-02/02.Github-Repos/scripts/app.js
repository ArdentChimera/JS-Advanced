function loadRepos() {
	const ul = document.getElementById('repos');

	fetch('https://api.github.com/users/testnakov/repos')
		.then(res => res.json())
		.then(data => {
			
			
			data.forEach(el => {
				const li = document.createElement('li');
				const a = document.createElement('a');

				a.setAttribute('href', el.html_url);
				a.textContent = el.full_name;

				li.appendChild(a);
				ul.appendChild(li);
			});

			
			
		})
		.catch(err => console.error(err))

	ul.innerHTML = '';
}
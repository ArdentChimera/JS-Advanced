function getInfo() {
    const submitBtn = document.getElementById('submit');
    const stopId = document.getElementById('stopId').value;
    const stopName = document.getElementById('stopName');
    const ul = document.getElementById('buses');
    const url = `http://localhost:3030/jsonstore/bus/businfo/${stopId}`

    submitBtn.addEventListener('click', () => {
        fetch(url)
            .then((response) => response.json())
            .then(data => {
                console.log(data);
                stopName.textContent = data.name;
                for (const key in data.buses) {
                    let busId = key;
                    let time = data.buses[key];

                    const li = document.createElement('li');
                    li.textContent = `Bus ${busId} arrives in ${time} minutes`
                    ul.appendChild(li);
                }

            })
            .catch((error) => stopName.textContent = 'Error');
    });
}
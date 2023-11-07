function solve() {
    const infoSpan = document.querySelector('#info span');
    const departBtn = document.getElementById('depart');
    const arriveBtn = document.getElementById('arrive');
    let id = 'depot';

    function depart() {
        if (infoSpan.textContent === 'Not Connected') {
            fetch(`http://localhost:3030/jsonstore/bus/schedule/${id}`)
                .then(response => response.json())
                .then(data => {
                    infoSpan.textContent = `Next stop ${data.name}`;
                    
                    arriveBtn.removeAttribute('disabled');
                    departBtn.setAttribute("disabled", "");
                    id = data.next;
                })
                .catch(err => console.log(err))
        }

        fetch(`http://localhost:3030/jsonstore/bus/schedule/${id}`)
            .then(response => response.json())
            .then(data => {
                infoSpan.textContent = `Next stop ${data.name}`;
                
                arriveBtn.removeAttribute('disabled');
                departBtn.setAttribute("disabled", "");
            })
            .catch(err => console.log(err))
    }

    function arrive() {
        fetch(`http://localhost:3030/jsonstore/bus/schedule/${id}`)
            .then(response => response.json())
            .then(data => {
                if (infoSpan.textContent === 'Next stop Depot') {
                    infoSpan.textContent === 'Arriving at Depot';

                    arriveBtn.setAttribute('disabled', '');
                    departBtn.removeAttribute("disabled");
                }else {
                    infoSpan.textContent = `Arrive at ${data.name}`;

                    id = data.next;
                    arriveBtn.setAttribute('disabled', '');
                    departBtn.removeAttribute("disabled");
                }
            })
            .catch(err => console.log(err))
    }

    return {
        depart,
        arrive
    };
}

let result = solve();
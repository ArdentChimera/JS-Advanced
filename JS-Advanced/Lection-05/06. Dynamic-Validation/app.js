function validate() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let input = document.getElementById('email');

    input.addEventListener('change', (e) => {
        let email = e.target.value;
        if(!emailRegex.test(email)) {
            input.classList.add('error');
        }else {
            input.classList.remove('error');
        }

    });
}
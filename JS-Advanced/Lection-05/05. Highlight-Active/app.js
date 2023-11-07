function focused() {
    let sectionInputs = Array.from(document.querySelectorAll('body div input'));

    console.log(sectionInputs);
    for (const input of sectionInputs) {
        input.addEventListener('focus', (e) => {
            let div = e.currentTarget.parentNode;
            div.classList.add('focused');
        });
        input.addEventListener('blur', (e) => {
            let div = e.currentTarget.parentNode;
            div.classList.remove('focused');
        });
    }

}
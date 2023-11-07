function lockedProfile() {
    const usersRadioBtnArr = Array.from(document.querySelectorAll('input[type="radio"]'));
    const button = Array.from(document.querySelectorAll('button'));

    for (const radioBtn of usersRadioBtnArr) {
        radioBtn.addEventListener('click', () => {
            if (radioBtn.name === 'user1Locked' && radioBtn.value === 'unlock') {
                button[0].addEventListener('click', () => {
                    document.getElementById('user1HiddenFields').style.display = 'block';
                    button[0].textContent = 'Hide it';
                });
            }
        });
    }

    
}
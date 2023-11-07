function deleteByEmail() {
    let tableData = Array.from(document.querySelectorAll('#customers tbody tr'));
    let inputData = document.getElementsByName('email')[0].value;
    let result = document.getElementById('result');


    for (const data of tableData) {
        let row = data.textContent.trim().split('\n ');
        console.log(row);
        let[name, email] = row;
        console.log(email.trim());
        if (email.trim() === inputData) {
            data.remove(); // Remove the row from the DOM
            result.textContent = 'Deleted.';
            return; // Exit the loop once a match is found and removed
        }

        result.textContent = 'Not found.';
    }
}
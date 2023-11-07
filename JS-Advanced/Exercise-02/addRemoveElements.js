function addRemoveElemnts(arr) {
    let result = [];
    let current = 0;
    for (let i = 0; i < arr.length; i++) {

        if (arr[i] === 'add') {
            current ++;
            result.push(current);
        }else {
            current++;
            result.pop();
        }
    }

    if (result.length === 0) {
        return 'Empty';
    }else {
        return result.join('\n');
    }
}

addRemoveElemnts(['add', 'add', 'remove', 'add', 'add']);
function rotateArray(arr, rotations) {
    for (var i = 0; i < rotations; i++) {
        let item = arr.pop();
        arr.unshift(item);
    }

    return arr.join(' ');
}

rotateArray(['1',

'2',

'3',

'4'],

2);
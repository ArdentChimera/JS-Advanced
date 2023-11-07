function sortingArray (arr) {
    let sortedArr = arr.sort((a, b) => a.length - b.length || a.localeCompare(b));

    console.log(sortedArr.join('\n'));
}

sortingArray(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);
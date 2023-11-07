function pieceOfPie(arr, a, b) {
    let indexA = 0;
    let indexB = 0;
    
    indexA = arr.indexOf(a);
    indexB = arr.indexOf(b);

    let result = arr.slice(indexA, indexB + 1);

    return result;
}


pieceOfPie(['Apple Crisp', 'Mississippi Mud Pie', 'Pot Pie', 'Steak and Cheese Pie', 'Butter Chicken Pie', 'Smoked Fish Pie'], 'Pot Pie', 'Smoked Fish Pie');
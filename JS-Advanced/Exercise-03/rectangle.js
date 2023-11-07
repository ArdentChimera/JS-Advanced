function rectangle(width, height, color) {
    let rectangle = {};

    rectangle.width = width;
    rectangle.height = height;
    rectangle.color = color.charAt(0).toUpperCase() + color.slice(1);
    rectangle.calcArea = () => {
        return height * width;
    }

    return rectangle;
}

let rect = rectangle(4, 5, 'red');

console.log(rect.width);

console.log(rect.height);

console.log(rect.color);

console.log(rect.calcArea());

function solution(n) {
    let number = n;
    return function add(number) {
        return n + number;
    }
}

let add5 = solution(7);

console.log(add5(2));

console.log(add5(3));
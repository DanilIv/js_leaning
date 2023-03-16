function sumTo(n) {
    let sum = 0
    for (let i = 1; i < n + 1; i++) {
        sum += i
    }
    return sum

}

function sumReq(n) {
    return (n == 1) ? n : n + sumReq(n - 1)
}

function sumAr(n) {
    return (1 + n) * n / 2
}

console.log(sumTo(100));
console.log(sumReq(100));
console.log(sumAr(100));
function fib(n){
    return (n < 3) ? 1 : fib(n-1) + fib(n-2)
}

function fibFast(n){

    let a = 1
    let b = 1
    for (let i = 3; i <= n; i++){
        let sum = a + b
        a = b
        b = sum
    }
    return b
}

console.log(fibFast(77))

let n = 10;
nextPrime:
for (let i = 2; i <= n; i = i + 1){
    for (let j = 2; j < i; j = j + 1){
        if (i % j == 0) continue nextPrime;
    }
    console.log(i);
}

function getMaxSubSum(arr){
    let maxsum = 0;
    let sum = 0;
    for (let i = 0; i< arr.length; i++){
        sum = sum + arr[i];
        if (maxsum < sum){
            maxsum = sum;
        }
        if (sum < 0){
            sum = 0;
        }
    }
    return maxsum
}

console.log(getMaxSubSum([100, -9, 2, -3, 5]))
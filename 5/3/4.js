function extractCurrencyValue(value){
    return +value.substring(1,value.length)
}

console.log( extractCurrencyValue('$120') === 120 )
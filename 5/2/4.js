function randomInteger(a,b){
    ran = Math.random()
    return Math.floor(a +ran*(b-a+1))
}



console.log( randomInteger(1, 5) ); // 1.2345623452
console.log( randomInteger(1, 5) ); // 3.7894332423
console.log( randomInteger(1, 5) ); // 4.3435234525
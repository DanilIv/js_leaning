function isEmpty(sh){
    for (let key in sh) {
        return true
    }
    return false
}


let schedule = {};

console.log( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

console.log( isEmpty(schedule) ); // false
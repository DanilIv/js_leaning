function  ucFirst(name){
    if (!name) return name
    first = name[0].toUpperCase() + name.slice(1);

    return first
}

console.log(ucFirst("вася"));
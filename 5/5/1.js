function camelize(mas){
    let arr = mas.split("-")
    arr = arr.map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1))
    return arr.join("")
}



console.log(camelize("background-color"));
console.log(camelize("list-style-image"));
console.log(camelize("-webkit-transition"));
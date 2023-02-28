function topSalary(salaries) {
    let max = 0
    let name = null
    for (let [key, value] of Object.entries(salaries)) {
        if (max < value) {
            name = key
            max = value
        }
    }
    return name

}

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};


console.log(topSalary(salaries)); // name:John, затем age:30

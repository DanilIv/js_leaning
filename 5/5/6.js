function Calculator() {

    this.methods = {
        "-": (a, b) => a - b,
        "+": (a, b) => a + b
    }
    this.calculate = function (str) {
        let str2 = str.split(" "),
            a = +str2[0],
            b = str2[1],
            c = +str2[2];
        if (!this.methods[b] || isNaN(a) || isNaN(c)) {
            return NaN;
        }

        return this.methods[b](a, c);
    }
    this.addMethod = function(name, func) {
        this.methods[name] = func;
    };
}


let calc = new Calculator;
calc.addMethod("/", (a, b) => a / b);
console.log(calc.calculate("6 / 2")); // 3
console.log(calc.calculate("3 + 7")); // 10
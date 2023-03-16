function printNumbers(from, to) {
    let current = from;

    let timerId = setInterval(function() {
        console.log(current);
        if (current == to) {
            clearInterval(timerId);
        }
        current++;
    }, 1000);
}

// использование:
printNumbers(5, 10);

function printNumbers2(from, to) {
    let current = from;

    setTimeout(function go() {
        alert(current);
        if (current < to) {
            setTimeout(go, 1000);
        }
        current++;
    }, 1000);
}

// использование:
printNumbers2(5, 10);
function pow(a,b) {
    let res = a;
   for(let i = 1; i < b; i++){
        res = res * a;
   }
}

let a = prompt("x?", '');
let b = prompt("n?", '');

if (b < 1) {
    alert(`Степень ${b} не поддерживается, используйте натуральное число`);
} else {
    alert( pow(a, b) );
}

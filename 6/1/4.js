function printList(list) {
    console.log(list.value)
    if (list.next) {
        printList(list.next)
    }

}
function printList2(list){
    let tmp = list
    while(tmp){
        console.log(tmp.value)
        tmp = tmp.next
    }
}

let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

console.log(printList(list))
console.log(printList2(list))
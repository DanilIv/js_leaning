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

function printList(list) {

    if (list.next) {
        printList(list.next)
    }
    console.log(list.value)

}

function printList2(list) {
    let tmp = list
    let arr = []
    while (tmp) {
        arr.push(tmp.value)
        tmp = tmp.next
    }
    arr.reverse().forEach(el=> console.log(el))
}

console.log(printList2(list))
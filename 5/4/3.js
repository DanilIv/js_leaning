let arr = ["a", "b"];

arr.push(function () {
    console.log(this);
}); // 3 й элемент добавляем и выводим весь массив
arr[2]()
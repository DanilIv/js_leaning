function getSecondsToTomorrow() {
    let d = new Date();
    return 24*3600 - (d.getHours() * 3600 + d.getMinutes() * 60 + d.getSeconds());
}

function getSecondsToTomorrow2() {
    let now = new Date();
    let hour = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let totalSecondsToday = (hour * 60 + minutes) * 60 + seconds;
    let totalSecondsInADay = 86400;

    return totalSecondsInADay - totalSecondsToday;
}

console.log(getSecondsToTomorrow())
console.log(getSecondsToTomorrow2())

var timeID = setInterval(showDate,1000);

function showDate() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}
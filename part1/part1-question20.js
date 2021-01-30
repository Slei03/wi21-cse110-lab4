function timeGetter(){
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
};

setInterval(timeGetter, 1000);
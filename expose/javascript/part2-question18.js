//setInterval(), setTimeout(), clearTimeout()
//Q18
function print(){
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}

setInterval(print, 1000)

// function printNums(){
//     console.log();
//     setTimeout(function(){console.log(2);}, 10000)
//     setTimeout(function(){console.log(3);}, 0)
//     console.log(4);
// }

// printNums();

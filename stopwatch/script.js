


// let secondCount = 0;
// let minuteCount = 0;
// let hourCount = 0;

// let secondElement = document.getElementById("second");
// let minuteElement = document.getElementById("minute");
// let hourElement = document.getElementById("hour");
// let intervalId;


// function setValue() {
//     secondElement.innerHTML = toString(secondCount).padStart(2,"0");
//     minuteElement.innerHTML = toString(minuteCount).padStart(2,"0");
//     hourElement.innerHTML = toString(hourCount).padStart(2, "0");
// }

// function StartCounting() {

//     setValue();

//     intervalId = setInterval(() => {
//         if( secondCount === 59) {
//             secondCount = 0;
            
//             if(minuteCount == 59) {
//                 minuteCount = 0;
//                 hourCount ++;
//             }
//             else {
//                 minuteCount++;
//             }

//         }
//         else {
//             secondCount++;
//         }

//         setValue();

        
//     }, 900);

    
// }

// document.querySelector("#start").addEventListener("click", event => {
//     event.preventDefault();
//     StartCounting();
// })


// document.querySelector("#stop").addEventListener("click", event => {
//     event.preventDefault();
//     clearInterval(intervalId);

// })









let secondCount = 0;
let minuteCount = 0;
let hourCount = 0;

let secondElement = document.getElementById("second");
let minuteElement = document.getElementById("minute");
let hourElement = document.getElementById("hour");
let intervalId; // Declare intervalId globally

function setValue() {
    secondElement.innerHTML = secondCount.toString().padStart(2, "0");
    minuteElement.innerHTML = minuteCount.toString().padStart(2, "0");
    hourElement.innerHTML = hourCount.toString().padStart(2, "0");
}

function startCounting() {
    setValue();

    intervalId = setInterval(() => {
        if (secondCount === 59) {
            secondCount = 0;

            if (minuteCount === 59) {
                minuteCount = 0;
                hourCount++;
            } else {
                minuteCount++;
            }
        } else {
            secondCount++;
        }

        setValue();
    }, 900);
}

function stopCounting() {
    clearInterval(intervalId);
}

document.querySelector("#start").addEventListener("click", (event) => {
    event.preventDefault();
    startCounting();
});

document.querySelector("#stop").addEventListener("click", (event) => {
    event.preventDefault();
    stopCounting();
});

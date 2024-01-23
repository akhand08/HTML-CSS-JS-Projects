

const monthsDay = {
    1: 31,
    2: 28,
    3: 31,
    4: 30,
    5: 31,
    6: 30,
    7: 31,
    8: 31,
    9: 30,
    10: 31,
    11: 30,
    12: 31
}


function leapYearCheckr(year) {

    if( (year % 4 === 0 && year % 100 === 0) || year % (400 === 0)) {
        return true;
    }
    return false;
}

let day = 8;
let month = 12;
let year = 2000;


function setResult(resultDay, resultMonth, resultYear) {
    document.getElementById("resultDay").innerText = resultDay;
    document.getElementById("resultMonth").innerText = resultMonth;
    document.getElementById("resultYear").innerText = resultYear;
}

function isValidData(day, month, year, currentYear) {
    if( day <= 0 && day > 31) return false;
    if(month <= 0 && month > 12)  return false;
    if(year > currentYear ) return false;

    return true;
}

function calculateAge(birthDay, birthMonth, birthYear) {
    let today =  new Date();
    let currentYear = today.getFullYear();
    let currentMonth = today.getMonth() + 1;
    let currentDate = today.getDate();




    let ageYear = currentYear - birthYear;
    let ageMonth;
    let ageDay;


    if( currentMonth < birthMonth) {
        ageYear -= 1;

        ageMonth = (12 - birthMonth) + (currentMonth);

    }
    else {
        ageMonth = currentMonth - birthMonth;
    }


    if( currentDate < birthDay) {
        ageMonth -= 1;
        let tempKey = ageMonth + birthMonth;
        
        ageDay = (monthsDay[tempKey] - birthDay) + currentDate;
        
    }
    else {
        ageDay = currentDate - birthDay;
    }

    setResult(ageDay, ageMonth, ageYear);
    
    // window.onload = () => {
    //     setResult(ageDay, ageMonth, ageYear);
    // }




    
    // console.log( ageDay, ageYear, ageMonth);
    
}



 function getBirthData() {

    let birthDay = document.getElementById("day").value;
    birthDay = parseInt(birthDay,10);
    let birthMonth = document.getElementById("month").value;
    birthMonth = parseInt(birthMonth, 10)
    let birthYear = document.getElementById("year").value;
    birthYear = parseInt(birthYear, 10);

    calculateAge(birthDay, birthMonth, birthYear);

    
 }


 document.getElementById("submitButton").addEventListener("click", () => {

    getBirthData();
 })




class DigitalClock {
    constructor(element) {
        this.clockElement = element;
    }


    updateTime() {
        this.setTime();


        setInterval(()=> {
            this.setTime();
        }, 100);
    }




    setTime() {
        const time = this.getTimeParts();
        const modifiedMinute = toString(time["minute"]).padStart(2,"0");

        this.clockElement.querySelector(".hour").innerHTML = time["hour"];
        this.clockElement.querySelector(".minute").innerHTML = time["minute"];
        this.clockElement.querySelector(".second").innerHTML = time["second"];
        this.clockElement.querySelector(".amPm").innerHTML = time["amPm"] ? "AM": "PM";
    }



    getTimeParts() {
        const now = new Date();
        
        return {
            "hour": now.getHours() % 12 || 12,
            "minute": now.getMinutes(),
            "second": now.getSeconds(),
            "amPm": now.getHours < 12? true: false,
        }
    }
}

const clockElement = document.querySelector(".window");
const clockObject = new DigitalClock(clockElement);

clockObject.updateTime();

// console.log(clockObject);
// console.log(clockObject.getTimeParts());
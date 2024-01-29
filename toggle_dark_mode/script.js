

let toggle = document.getElementById("toggle");
let body = document.querySelector("body");
const title = document.getElementById("title");

toggle.addEventListener("click", function () {
    
     if ( this.classList.contains("ri-moon-fill") ) {
        this.classList.remove("ri-moon-fill");
        this.classList.add("ri-sun-line");


        this.style.color = "white";
        title.style.color = "white";
        body.style.background = "black";
        body.style.transition = "1.5s";

     }
     else {
        
        this.classList.remove("ri-sun-line");
        this.classList.add("ri-moon-fill");

        this.style.color = "black";
        title.style.color = "black";
        body.style.background = "white";
        body.style.transition = "1.5s";


     }
}
)
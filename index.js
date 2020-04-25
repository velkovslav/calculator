// Type of Keycaps
var numberKeycaps = document.querySelectorAll(".number-keycap");
var totalAmountOfNumberKeycaps = numberKeycaps.length;


var array = [];

// Add event listeners to all of the Number Keycaps
for (i=0;i<=totalAmountOfNumberKeycaps;i++) {
    numberKeycaps[i].addEventListener('click', function() {
        buttonValue = this.innerHTML;
        array.push(buttonValue);
        document.getElementById("screen").innerHTML = array.join("")      
    })
}


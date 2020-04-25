var keycaps = document.querySelectorAll(".keycap");
var numberOfKeycaps = keycaps.length;

for (i=0;i<=numberOfKeycaps;i++) {
    keycaps[i].addEventListener('click', function() {
        buttonNumber = this.innerHTML;
        console.log(buttonNumber);
    })
}
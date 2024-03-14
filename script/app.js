const buttons = document.querySelector('.buttons');
const btns = buttons.querySelectorAll('span');
const equal = document.getElementById('equal');
const display = document.getElementById('display');

btns.forEach(btn => {
    btn.addEventListener('click', function() {
       if(this.innerHTML === "=") {
        display.innerHTML = eval(display.innerHTML)
       }
       else {
        if(this.innerHTML === "Clear") {
            display.innerHTML = "";
        }
        else {
            display.innerHTML = display.innerHTML + this.innerHTML
        }
       }
    })
})
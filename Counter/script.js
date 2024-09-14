const counter = document.getElementById('Counter');
const decrease = document.querySelector('.decrease-btn')
const reset = document.querySelector('.reset-btn')
const increase = document.querySelector('.increase-btn')
let startNumber = 0;

increase.addEventListener('click', () => {
    startNumber += 1;
    integerColor(startNumber);
    counter.innerText = `${startNumber}`;
})

function integerColor(startNumber){
    if(startNumber > 0){
        counter.classList.add('positive');
    }
    else if(startNumber < 0){
        counter.classList.add('negative');
    }
    else{
        counter.classList.remove('positive','negative');
    }
}
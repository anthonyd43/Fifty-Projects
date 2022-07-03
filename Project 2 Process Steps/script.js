const steps = document.querySelectorAll('.circle')
const progress = document.querySelector('.progress');
const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');
var currentActive = 0;
// console.log(steps)

prevBtn.addEventListener('click', () =>{
    if(currentActive > 0){
        currentActive--;
    }
    // console.log(currentActive);
    update();
})


nextBtn.addEventListener('click', () =>{
    if(currentActive < steps.length){
        currentActive++;
    }
    // console.log(currentActive);
    update();
})


function update(){
    steps.forEach((step, i) => {
        if(i <= currentActive){
            step.classList.add('active');
        } else{
            step.classList.remove('active');
        }
    })
    
    // Calculate progress bar ~~> 
    let progressWidth = (currentActive / (steps.length-1)) * 100;
    progress.style.width = progressWidth + '%';
    
    // Manage Disabled Attributes for buttons
    if(currentActive === 0){
        prevBtn.disabled = true;
    }
    else if(currentActive === steps.length-1){
        nextBtn.disabled = true;
    }
    else{
        nextBtn.disabled = false;
        prevBtn.disabled = false;
    }
}
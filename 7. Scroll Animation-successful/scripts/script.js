const boxes = document.querySelectorAll(".content");

const viewPortWidth = window.innerHeight;
const triggerY = viewPortWidth/5 * 4;

checkBoxes();

window.addEventListener('scroll', checkBoxes);

function checkBoxes(){
    boxes.forEach(box=>{
        if(box.getBoundingClientRect().top <= triggerY){
            box.classList.add("show");
        }
        else{
            box.classList.remove("show");
        }
    })
}


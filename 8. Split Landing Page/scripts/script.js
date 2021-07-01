const left = document.querySelector("#playstation");
const right = document.querySelector("#xbox");

left.addEventListener('mouseover', ()=>{
    left.style.width = "75vw";
    right.style.width = "25vw";
    document.querySelector("#playstation .container").style.backgroundColor = "rgba(0,0,255,0.47)";
})

left.addEventListener('mouseout', ()=>{
    document.querySelector("#playstation .container").style.backgroundColor = "rgba(0,0,255,0.5)";
})

right.addEventListener('mouseover', ()=>{
    right.style.width = "75vw";
    left.style.width = "25vw";
    document.querySelector("#xbox .container").style.backgroundColor = "rgba(0,0,0,0.47)";
})

right.addEventListener('mouseout', ()=>{
    document.querySelector("#xbox .container").style.backgroundColor = "rgba(0,0,0,0.5)";
})

document.addEventListener('mouseout', ()=>{
    left.style.width = "50vw";
    right.style.width = "50vw";
})


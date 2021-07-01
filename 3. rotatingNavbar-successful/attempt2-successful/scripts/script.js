const open = $("#open");
const close = $("#close");
const button_container = $(".btns");
const content_box = $(".content-box");

open.on('click', ()=>{
    content_box.addClass("rotate");
    button_container.addClass("btnrotate");
    $("nav").addClass("move-in");
})

close.on('click', ()=>{
    content_box.removeClass("rotate");
    button_container.removeClass("btnrotate");
    $("nav").removeClass("move-in");
})
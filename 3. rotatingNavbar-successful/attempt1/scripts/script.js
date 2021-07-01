var rotate = 45;
var adder = -180;

$(".circle").on("click", function(){
    rotate += adder;
    adder *= -1;
    $(".nav").css("transform", "rotate(" + rotate + "deg)");
})

$("#open").on("click", function(){
    $(".upper-layer").css("transform", "rotate(-11deg)");
})

$("#close").on("click", function(){
    $(".upper-layer").css("transform", "rotate(0deg)");
})


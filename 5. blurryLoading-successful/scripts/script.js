const counter = $(".counter");
const loading_bar = $(".loading-bar");
const blur_layer = $(".blur-layer");
var percentage = 0;
var blur = 100;

const x = setInterval(() => {
    percentage++;
    blur--;
    counter.text(percentage + "%");
    loading_bar.css("width", percentage + "vw");
    blur_layer.css("backdrop-filter", "blur(" + blur + "px)");
    if (percentage == 100) { clearInterval(x); $(".background").html(""); }
}, 40)


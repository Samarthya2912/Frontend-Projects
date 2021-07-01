var prevButton = $("#prev");
var nextButton = $("#next");
var progressBar = $("#progress");
var width = 0;
var lastButton = 0;

width = parseInt(progressBar.css("width"));

function colorButtons(time_out) {
    setTimeout(function () {
        $(".circle").removeClass("active");
        for (i = 0; i <= lastButton; i++) {
            document.querySelectorAll(".circle")[i].classList.add("active");
        }
    }, time_out);
}

nextButton.on("click", function () {
    width += 33;
    progressBar.css("width", width + "%");
    if (width > 0) prevButton.prop("disabled", false);
    if (width == 99) nextButton.prop("disabled", true);
    if (lastButton < 3) lastButton++;
    colorButtons(300);
})

prevButton.on("click", function () {
    width -= 33;
    progressBar.css("width", width + "%");
    if (width == 0) prevButton.prop("disabled", true);
    if (width <= 95) nextButton.prop("disabled", false);
    if (lastButton > 0) lastButton--;
    colorButtons(0);
})

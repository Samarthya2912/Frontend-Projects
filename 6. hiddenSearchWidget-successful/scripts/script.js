const search_button = $("button");
const search_box = $("input");

search_button.on('click', () => {
    console.log("clicked");
    console.log(search_box.val());
    if (search_box.val() == "") {
        search_box.toggleClass("collapse");
    }
})

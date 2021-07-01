$('.qna .question button').on('click', function(){
    $(this).parent().parent().children('.answer').toggleClass('show');
    $(this).parent().parent().toggleClass('expand');
    $(this).children("i").toggleClass("bi-x-circle-fill").toggleClass("bi-chevron-down")
})
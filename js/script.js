//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
    ) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

$(function () {
    var maxL = 1000;
    $('.content').each(function () {
        var text = $(this).html();
        if (text.length > maxL) {
            var begin = text.substr(0, maxL),
                end = text.substr(maxL);
            $(this).html(begin)
                //.append($('<a class="readmore"/>').attr('href', '#').html('read more...'))
                .append($('<span class="hidden" />').html(end))
                .after("<button type='button' class='btn btn-primary readmorexd'>MOSTRAR MAS</button>");

        }
    });
    $(document).on('click', '.readmorexd', function () {
        // $(this).next('.readmore').fadeOut("400");
        $(this).text(function (i, text) {
            return text === "MOSTRAR MAS" ? "MOSTRAR MENOS" : "MOSTRAR MAS";
        });
        //var add = $(this).prev().children('.hidden').text();
        $(this).prev().children('.hidden').slideToggle(400);
        //$(this).prev().append(add).html;
        //console.log(add);
    });
    $('.location').each(function (index) {
        $(this).attr("href", "#collapseExample" + index);
        $(this).parent().parent().next().children().first().attr("id", "collapseExample" + index);
    });
    $('.hotel').each(function (index) {
        $(this).attr("href", "#tarifa" + index);
        $(this).parent().parent().next().children().eq(1).attr("id", "tarifa" + index);
    });
})

function responsiveDesign() {
    let container = $("#nav_bar");
    $(window).resize(() => {
        if ($(this).width() <= 400) {
            container.removeClass("container");
        } else {
            container.addClass("container");
        }
    });
}

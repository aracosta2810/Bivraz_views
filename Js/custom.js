function responsiveDesign() {
    let container = $("#nav_bar");
    $(window).resize(() => {
        if ($(this).width() <= 400) {
            container.removeClass("container");
        } else {
            container.addClass("container");
        }
/* 
        if ($(this).width() <= 1075) {
            container.removeClass("justify-content-lg-bettween");
            container.addClass("justify-content-center");
        } else {
            container.addClass("justify-content-lg-bettween");
            container.removeClass("justify-content-center");
        } */
    });
}
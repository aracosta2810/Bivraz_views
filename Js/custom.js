
function responsiveDesign() {
    let container = $("#home");
    if ($(window).width() <= 368) {
        $(".cell_view_artist").removeClass("d-none");
    }
    $(window).resize(() => {
        //Background of container
        if ($(this).width() <= 575) {
            container.removeClass("bg-light");
        } else {
            container.addClass("bg-light");
        }
        //list of users 

        if ($(this).width() <= 368) {
            $(".cell_view_artist").removeClass("d-none");
        } else {
            $(".cell_view_artist").addClass("d-none");
        }

    });
}

function enabledPopover(notifications) {
    $(".fa-bell").attr("data-bs-content", notifications);
    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl)
    });
}
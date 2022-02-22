
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

function enablePopover() {
    let notifications = `
    <a href="#" class="data_notifications"><img src='assets/artistas.png' width='20' height= '20' class="rounded-circle"> Hola mundo Hola mundo</a>
    <br>
    <a href="#" class="data_notifications"><img src='assets/artistas.png' width='20' height= '20' class="rounded-circle"> Hola mundo Hola mundo</a>  
    <br>
    <a href="#" class="data_notifications"><img src='assets/artistas.png' width='20' height= '20' class="rounded-circle"> Hola mundo Hola mundo</a> 
    <br>
    <hr class="dropdown-divider">
    <a href="pages/notifications.html" class="data_notifications btn_more_notifications btn btn-sm" >Ver más</a> `;
    $(".fa-bell").attr("data-bs-content", notifications);
    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl)
    });
}
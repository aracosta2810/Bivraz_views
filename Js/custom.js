function responsiveDesign() {
    let container = $("#home");
    if ($(window).width() <= 368) {
        $(".cell_view_artist").removeClass("d-none");
    }
    if ($(this).width() <= 575) {
        container.removeClass("bg-light");
    } else {

        container.addClass("bg-light");
    }
    if ($(this).width() <= 368) {
        $(".cell_view_artist").removeClass("d-none");
    } else {
        $(".cell_view_artist").addClass("d-none");
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

//-----------------Dando funcionalidad a los paquetes-------------------------------------
var counter = 4;
var cont = 0;
function sendTypePackage(packageType) {
    let type = ``;
    if (packageType == 1) {
        type = "Básico";
    } else if (packageType == 2) {
        type = "Pro";
    } else if (packageType == 3) {
        type = "Golden";
    }
    $(`#package-name`).text(type);
    $("#pacakges_type").val(type);
    $("h3.text-center span").text(type);
}
function replaceInputGroup(cont) {
    let controller = false;
    $(`.input-group-${cont} input`).each(function (index, element) {
        if (element.value == "") {
            controller = true;
        }

    });
    if (!controller) {
        if (cont == 0) {
            $(`.input-group-${cont}`).addClass("d-none");
            $(`.input-group-${cont + 1}`).removeClass("d-none");
        } else if (cont == 1) {
            $(`.input-group-${cont}`).addClass("d-none");
            $(`.input-group-${cont + 1}`).removeClass("d-none");
            $(`#continue`).text("Aceptar");
        } else if (cont == 2) {
            $(`.input-group-${cont}`).addClass("d-none");
            $(`.input-group-${0}`).removeClass("d-none")
            $("#form-modal").modal(`hide`);
            getPackage();
        }
    }

    return controller;
}

function getPackage() {
    $("#form_packages").submit(function (e) {
        e.preventDefault();
        let data = $(this).serialize();
        console.log(data);
        $.ajax({
            type: "post",
            url: "/url",
            data: data,
            dataType: "json",
            success: function (response) {

            },
            error: function (response) {
            }
        });

    });
    $("#form_packages").submit();
}
function separateString(element) {
    if (element.value.length == counter) {
        element.value += " ";
        counter += 5;
    }
}
//-----------------Habilitando el popover-------------------------------------
function enabledPopover(notifications) {
    $(".fa-bell").attr("data-bs-content", notifications);
    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl)
    });
}

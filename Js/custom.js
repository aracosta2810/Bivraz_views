function responsiveDesign() {
    let container = $("#home");
    if ($(window).width() <= 368) {
        $(".cell_view_artist").removeClass("d-none");
    }
    if ($(this).width() <= 575) {
        container.removeClass("bg-white");
    } else {

        container.addClass("bg-white");
    }
    if ($(this).width() <= 368) {
        $(".cell_view_artist").removeClass("d-none");
    } else {
        $(".cell_view_artist").addClass("d-none");
    }
    $(window).resize(() => {
        //Background of container
        if ($(this).width() <= 575) {
            container.removeClass("bg-white");
        } else {
            container.addClass("bg-white");
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
//-----------------Color rojo al corazon---------------------------------------------------------

function likeMe(element) {
    if ($(element).hasClass("far")) {
        $(element).removeClass("far");
        $(element).addClass("fa");
        sendRequest({ like: 1 }, "/like", "POST");
    } else {
        $(element).removeClass("fa");
        $(element).addClass("far");
        sendRequest({ like: -1 }, "/like", "POST");
    }
}

//-----------------Cambiar icono play y pause a las canciones-------------------------------------

function setIconPlayPause(element) {
    if ($(element).hasClass("fa-play-circle")) {
        $(element).removeClass("fa-play-circle");
        $(".fa-pause-circle").each(function (index, element) {
            $(this).removeClass("fa-pause-circle");
            $(this).addClass("fa-play-circle");
        });
        $(element).addClass("fa-pause-circle");
    } else if ($(element).hasClass("fa-pause-circle")) {
        $(element).removeClass("fa-pause-circle");
        $(element).addClass("fa-play-circle");
    }
}

//-----------------Cambiar icono play y pause a las canciones-------------------------------------

function setFollowUnfollow(element) {
    //Esta linea me da si tengo el boton de seguir
    if ($($(element).children()).is("button")) {
        let btnFollow = `<p class="follow-artist"><i class="fa fa-check"></i> Siguiendo</p>`
        $(element).html(btnFollow);
    } else {
        let btnFollow = `<button type="button" class="btn btn-secondary btn-sm">Seguir</button>`
        $(element).html(btnFollow);
    }
}

function sendRequest(value, url_database, method, id = -1) {
    if (id == -1) {
        console.log("Debe seleccionar un elemento");
    } else {
        $.ajax({
            type: method,
            dataType: "json",
            url: url_database / id,
            data: value,
            success: function (response) {
                console.log(response);
            },
            error: function (response) {
                console.log(response);
            }
        });
    }

}
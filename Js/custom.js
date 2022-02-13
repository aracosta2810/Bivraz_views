
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
function getPackage(packageType) {
    let type = ``;
    if (packageType == 1) {
        type = "Básico";
    } else if (packageType == 2) {
        type = "Pro";
    } else if (packageType == 3) {
        type = "Golden";
    }
    $(`#package-name`).text(type);
}
function replaceInputGroup(cont) {
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
    }

}

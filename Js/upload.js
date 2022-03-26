function changedBackground(counter) {
    let colors = [
        `#25363F`,
        `#75C19D`,
        `#742137`,
        `#692579`,
        `#29C4DC`,
        `#F9796A`,
        `#51B962`,
        `#EFB331`,
        `#C6A0CC`,
        `#7F91A3`,
    ];
    $(`.changed-background`).click(function (e) {
        e.preventDefault();
        $(`textarea`).css("background-color", colors[counter]);
        counter++;
        if (counter > colors.length - 1) {
            counter = 0;
        }
    });

}
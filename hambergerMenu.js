const hambergerMenu = () => {
    $("#toggle").click(function() {
        $(this).toggleClass("active");
        $("#overlay").toggleClass("open");
    });
}

module.exports = hambergerMenu;
$(function () {

    $("#dark").click(function () {
        $("body").css("background-color", "black");
        $("body").css("color", "white");
    });

    $("#light").click(function () {
        $("body").css("background-color", "white");
        $("body").css("color", "black");
    });

    $("#party").click(function () {
        $("body").css("background-color", "hotpink");
        $("h1").css("color", "yellow");
        $("h1").css("font-size", "60px");
    });

    $("#toggle-picture").click(function () {
        $("#picture").fadeToggle();
    });

});

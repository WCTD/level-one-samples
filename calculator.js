$(function () {

    $("#add").click(function () {
        let num1 = Number($("#num1").val());
        let num2 = Number($("#num2").val());
        $("#result").text(num1 + num2);
    });

    $("#subtract").click(function () {
        let num1 = Number($("#num1").val());
        let num2 = Number($("#num2").val());
        $("#result").text(num1 - num2);
    });

    $("#multiply").click(function () {
        let num1 = Number($("#num1").val());
        let num2 = Number($("#num2").val());
        $("#result").text(num1 * num2);
    });

    $("#divide").click(function () {
        let num1 = Number($("#num1").val());
        let num2 = Number($("#num2").val());
        $("#result").text(num1 / num2);
    });

});

$(function () {

    let homeScore = 0;
    let awayScore = 0;

    $("#home-goal").click(function () {
        homeScore = homeScore + 1;
        $("#home-score").text(homeScore);
    });

    $("#away-goal").click(function () {
        awayScore = awayScore + 1;
        $("#away-score").text(awayScore);
    });

    $("#reset").click(function () {
        homeScore = 0;
        awayScore = 0;
        $("#home-score").text(homeScore);
        $("#away-score").text(awayScore);
    });

});

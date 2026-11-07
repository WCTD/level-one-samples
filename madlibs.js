$(function () {

    $("#make-story").click(function () {
        let name = $("#name").val();
        let animal = $("#animal").val();
        let food = $("#food").val();
        let verb = $("#verb").val();

        let story = name + " went to the hockey game with a " + animal +
            ". They ate so much " + food + " that they had to " + verb +
            " all the way home!";

        $("#story").text(story);
    });

});

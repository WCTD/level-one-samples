$(function () {

    let answers = [
        "Yes!",
        "No way.",
        "Maybe...",
        "Ask again later.",
        "Definitely!",
        "I don't think so."
    ];

    $("#ask").click(function () {
        // This creates a random number between 0 and the length of the answers array
        let randomNumber = Math.floor(Math.random() * answers.length);
        
        // Pick the item from the answers array that matches the random number
        let answer = answers[randomNumber];

        $("#answer").hide();
        $("#answer").text(answer);
        $("#answer").fadeIn();
    });

});

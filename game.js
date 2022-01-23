window.onload = function () {

    //variables needed in javaScript: 
    var boundaries = document.getElementsByClassName("boundary");
    var start = document.getElementById("start");
    var status = document.getElementById("status");
    var end = document.getElementById("end");
    var score = 0;
    var win = true;


    //Initial score value=0
    boundaries[5].innerHTML = "score = " + score;

    //Start of the MazeGame.
    //The background becomes red ;and a message "you lost" appear ;when touching the boundaries.
    start.addEventListener("mouseover", function () {
        document.getElementById("status").innerHTML = "Move the mouse cursor over to 'E' to win";
        for (var i = 0; i < boundaries.length; i++) {
            boundaries[i].addEventListener("mouseover", function () {
                win = false;
                for (var j = 0; j < boundaries.length - 1; j++) {

                    boundaries[j].style.backgroundColor = "red";
                }
                document.getElementById("status").innerHTML = "You lost!";
                score -= 10;
                for (var j = 0; j < boundaries.length; j++) {
                    boundaries[5].innerHTML = "Score = " + score;
                }

                
            });
        };
    });
};

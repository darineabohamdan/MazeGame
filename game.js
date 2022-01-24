window.onload = function () {

    //variables needed in javaScript: 
    var boundaries = document.getElementsByClassName("boundary");
    var start = document.getElementById("start");
    var status = document.getElementById("status");
    var end = document.getElementById("end");
    var score = 0;
    var win = true;
    var j = 0;
    var i = 0;

    //Initial score value=0
    boundaries[5].innerHTML = "score = " + score;

    //Start of the MazeGame.
    //The background becomes red ;and a message "you lost" appear ;when touching the boundaries.
    start.addEventListener("mouseover", function () {
        document.getElementById("status").innerHTML = "Move the mouse cursor over to 'E' to win";
        for (i=0;i < boundaries.length;i++) {
            boundaries[i].addEventListener("mouseover", function () {
                win = false;
                for (j=0;j < boundaries.length - 1;j++) {

                    boundaries[j].style.backgroundColor = "red";
                    
                
                document.getElementById("status").innerHTML = "You lost!";
            }
                score -= 10;
                while (j < boundaries.length) {
                    boundaries[5].innerHTML = "Score = " + score;
                    j++;
                }


            });
         
        };
    
    //when passing from S to E without touching the boundaries, the background changes to green and 'You WON' message appears.
    end.addEventListener("mouseover", function () {
        if (win == true) {

            

            for (j=0;j < boundaries.length - 1;j++) {
                boundaries[j].style.backgroundColor = "green";
                boundaries[5].innerHTML = "score = " + score;
                score += 5;
                status.innerHTML = "You WON!";
                
            }
        }
    });
});


    //when clicking on S,the game restarts and the score resets.

    start.addEventListener("click", function () {
        score = 0;
        status.innerHTML = "Move the mouse cursor over to 'E' to win"
        for ( i = 0; i < boundaries.length; i++) {

            boundaries[i].style.backgroundColor = "#eeeeee";
            boundaries[5].innerHTML = "score = " + score;
        }
        win = true;
    });
}














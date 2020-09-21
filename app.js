const y = Math.floor(Math.random() * 100 + 1);
guessnumber = 1;

document.getElementById("btn").addEventListener("click",

    function playgame() {
        var audio1 = document.getElementById("music1");
        audio1.play();

        const x = document.getElementById("userguess").value;
        if (isNaN(x)) {
            document.getElementById("output").innerHTML = "Enter a valid number";
        } else {

            if (x > y) {
                document.getElementById("output").innerHTML = "I am thinking about lower number";
                guessnumber += 1;
                document.getElementById("numberofguess").innerHTML = guessnumber;
            } else if (x < y) {
                document.getElementById("output").innerHTML = "I am thinking about higher number";
                guessnumber += 1;
                document.getElementById("numberofguess").innerHTML = guessnumber;
            } else {
                document.getElementById("output").innerHTML = "You are the winner";
                document.getElementById("numberofguess").innerHTML = guessnumber + " times";
                audio1.pause();
                var audio2 = document.getElementById("music2");
                audio2.play();
                var z = document.getElementById('celebreting');
                z.style.visibility = 'visible';
                var a = document.getElementById('rstbtn');
                a.style.visibility = 'visible';






            }
        }
    });

document.getElementById("rstbtn").addEventListener("click",
    function stopgame() {
        var audio2 = document.getElementById("music1");
        audio2.pause();
        var z = document.getElementById('celebreting');
        z.style.visibility = 'hidden';
        var a = document.getElementById('rstbtn');
        a.style.visibility = 'hidden';
        document.getElementById("output").innerHTML = "You stopped game";
        document.getElementById("text_number").innerHTML = "If you want to play again enter a number";


  });



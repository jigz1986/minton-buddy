let params = new URLSearchParams(document.location.search);
// These will not change upcon Undo //
const t1 = params.get("team1name");
const p1t1 = params.get("player1T1name");
const p2t1 = params.get("player2T1name");
const t2 = params.get("team2name");
const p1t2 = params.get("player1T2name");
const p2t2 = params.get("player2T2name");


var points = parseInt(params.get("points"));
var gamePoint = points - 1;
var t1Score = 0;
var t2Score = 0; 
var D = false;

/* Serve Change Logic */
var servside = "Right";
var ServC = p1t1;
var ServL = p1t1;
var ServCT = t1;
var ServLT = t1;
var ServRcvr = p1t2;





window.addEventListener('load', log())

function log() {
    console.log(
        "Team 1 name:------------------------" + t1 +
        "\nPlayer 1 name:--------------------" + p1t1 +
        "\nPlayer 2 name:--------------------" + p2t1 +
        "\nTeam 2 name:----------------------" + t2 +
        "\nPlayer 1 name:--------------------" + p1t2 +
        "\nPlayer 2 name:--------------------" + p2t2 +
        "\n# Points to be played-------------" + points +
        "\nPerson Serving:-------------------" + ServC +
        "\nLast Person Served----------------" + ServL +
        "\nStatus of D flag is --------------" + D +
        "\nCurrent Serving Team:-------------" + ServCT +
        "\nLast Serving Team:----------------" + ServLT +
        "\nPerson Recieving Serve:-----------" + ServRcvr);
}


function log2() {
    console.log(
        "Team 1 Score:----------------------" + t1Score +
        "\nTeam 2 Score:----------------------" + t2Score +
        "\nStatus of D flag is --------------" + D)
}

document.getElementById("team1name").innerHTML = t1;
document.getElementById("team2name").innerHTML = t2;
document.getElementById("points").innerHTML = points;
document.getElementById("p1t1").innerHTML = p1t1;
document.getElementById("p2t1").innerHTML = p2t1;
document.getElementById("p1t2").innerHTML = p1t2;
document.getElementById("p2t2").innerHTML = p2t2;
document.getElementById("lastserver").innerHTML = ServL;
document.getElementById("Currentserver").innerHTML = ServC;
document.getElementById("t1Score").innerHTML = t1Score;
document.getElementById("t2Score").innerHTML = t2Score;
document.getElementById("ServerTeamCurrent").innerHTML = t1;
document.getElementById("ServerTeamLast").innerHTML = t1;
document.getElementById("servside").innerHTML = servside;
document.getElementById("left1").innerHTML = p1t1;
document.getElementById("right1").innerHTML = p2t1;
document.getElementById("left2").innerHTML = p2t2;
document.getElementById("right2").innerHTML = p1t2;
document.getElementById("ServRcvr").innerHTML = p1t2;



document.getElementById("t1earns").addEventListener("click", t1earns); // Button Listener when Team 1 Scores

function t1earns() {
	
	//Checking of Duece is active or not if it is true will incr the score only until difference of two is there or not.
    if (D == true) { 
        t11(); 																								//
        if ((t1Score - t2Score) === 2) {
            log2();  ;
            close();
            alert(t1 + "Wins")
        }
    }

    if (D == false) {
        t11();
        log2(); ;
        if (t2Score < gamePoint && t1Score === gamePoint) {
            console.log("T1 to vitory");
            alert(t1 + "on Game Point");
        } else if (t2Score < gamePoint && t1Score === points) {
            alert(t1 + "Wins");
            close();
        } else if (t2Score === gamePoint && t1Score === gamePoint) {
            console.log("Going Flag True");
            alert("Dues Activated");
            D = true
        }
    } 
	
	else {
        console.log("Error");
        log2();  ;
    }
}


  

function t11() {

    t1Score = t1Score + 1;  
	var lt = document.getElementById("ServerTeamCurrent").innerHTML;
    document.getElementById("ServerTeamLast").innerHTML = lt;
    document.getElementById("t1Score").innerHTML = t1Score;

    if (t1Score % 2 === 0) {
        servside = "Right";      
		document.getElementById("servside").innerHTML = servside;
		document.getElementById("right1").style.backgroundColor = "gray";
		document.getElementById("left1").style.backgroundColor = "green";
		document.getElementById("right2").style.backgroundColor = "gray";
		document.getElementById("left2").style.backgroundColor = "gray";
    }
    if (t1Score % 2 === 1) {
        servside = "Left";       
		document.getElementById("servside").innerHTML = servside;
		document.getElementById("right1").style.backgroundColor = "green";
		document.getElementById("left1").style.backgroundColor = "gray";
		document.getElementById("right2").style.backgroundColor = "gray";
		document.getElementById("left2").style.backgroundColor = "gray";
    }

    document.getElementById("ServerTeamCurrent").innerHTML = t1;
    ServCT = t1;
	
	
	
	
    var last = document.getElementById("ServerTeamLast").innerHTML;
    var curr = document.getElementById("ServerTeamCurrent").innerHTML;

    if (last === curr) {
        var x = document.getElementById("left1").innerHTML;
        var y = document.getElementById("right1").innerHTML;
        document.getElementById("right1").innerHTML = x;
        document.getElementById("left1").innerHTML = y;
        if (t1Score % 2 == 0) {
            var x = left1.innerHTML; //taking player winning team who is about to serve
            var y = right2.innerHTML; //taking player loosing team who is about to recieve
            document.getElementById("Currentserver").innerHTML = x;
            document.getElementById("ServRcvr").innerHTML = y;
        }

        if (t1Score % 2 == 1) {
            var x = right1.innerHTML;
            var y = left2.innerHTML;
            document.getElementById("Currentserver").innerHTML = x;
            document.getElementById("ServRcvr").innerHTML = y;
        }
    };

    if (last !== curr) {
        if (t1Score % 2 == 0) {
            var x = left1.innerHTML; //taking player winning team who is about to serve
            var y = right2.innerHTML; //taking player loosing team who is about to recieve
            document.getElementById("Currentserver").innerHTML = x;
            document.getElementById("ServRcvr").innerHTML = y;
        }

        if (t1Score % 2 == 1) {
            var x = right1.innerHTML;
            var y = left2.innerHTML;
            document.getElementById("Currentserver").innerHTML = x;
            document.getElementById("ServRcvr").innerHTML = y;
        }
    };

}








document.getElementById("t2earns").addEventListener("click", t2earns);


function t2earns() {
    if (D == true) {
        t22();
        if ((t2Score - t1Score) === 2) {
            log2(); ;
            close();
            alert(t2 + "Wins")
        }
    }

    if (D == false) {
        t22();
        log2(); ;
        if (t1Score < gamePoint && t2Score === gamePoint) {
            console.log("T2 to vitory");
            alert(t2 + "on Game Point");
        } else if (t1Score < gamePoint && t2Score === points) {
            alert(t2 + "Wins");
            close();
        } else if (t1Score === gamePoint && t2Score === gamePoint) {
            console.log("Going Flag True");
            alert("Dues Activated");
            D = true
        }
    } else {
        console.log("Error");
        log2(); ;
    }
}




function t22() {

    t2Score = t2Score + 1;
	var lt = document.getElementById("ServerTeamCurrent").innerHTML;
    document.getElementById("ServerTeamLast").innerHTML = lt;
    document.getElementById("t2Score").innerHTML = t2Score;

    if (t2Score % 2 === 0) {
        servside = "Right";
        document.getElementById("servside").innerHTML = servside;
		document.getElementById("right2").style.backgroundColor = "green";
		document.getElementById("left2").style.backgroundColor = "gray";
		document.getElementById("right1").style.backgroundColor = "gray";
		document.getElementById("left1").style.backgroundColor = "gray";
    }
    if (t2Score % 2 === 1) {
        servside = "Left";
        document.getElementById("servside").innerHTML = servside;
		document.getElementById("right2").style.backgroundColor = "gray";
		document.getElementById("left2").style.backgroundColor = "green";
		document.getElementById("right1").style.backgroundColor = "gray";
		document.getElementById("left1").style.backgroundColor = "gray";
    }

    document.getElementById("ServerTeamCurrent").innerHTML = t2;
    ServCT = t2;
	
	
    var last = document.getElementById("ServerTeamLast").innerHTML;
    var curr = document.getElementById("ServerTeamCurrent").innerHTML;

    if (last === curr) {
        var x = document.getElementById("right2").innerHTML;
        var y = document.getElementById("left2").innerHTML;
        document.getElementById("left2").innerHTML = x;
        document.getElementById("right2").innerHTML = y;
        if (t2Score % 2 == 0) {
            var x = right2.innerHTML; //taking player winning team who is about to serve
            var y = left1.innerHTML; //taking player loosing team who is about to recieve
            document.getElementById("Currentserver").innerHTML = x;
            document.getElementById("ServRcvr").innerHTML = y;
        }

        if (t2Score % 2 == 1) {
            var x = left2.innerHTML;
            var y = right1.innerHTML;
            document.getElementById("Currentserver").innerHTML = x;
            document.getElementById("ServRcvr").innerHTML = y;
        }
    };

    if (last !== curr) {
        if (t2Score % 2 == 0) {
            var x = right2.innerHTML; //taking player winning team who is about to serve
            var y = left1.innerHTML; //taking player loosing team who is about to recieve
            document.getElementById("Currentserver").innerHTML = x;
            document.getElementById("ServRcvr").innerHTML = y;
        }

        if (t2Score % 2 == 1) {
            var x = left2.innerHTML;
            var y = right1.innerHTML;
            document.getElementById("Currentserver").innerHTML = x;
            document.getElementById("ServRcvr").innerHTML = y;
        }
    };

}



function close() {
    document.getElementById("mainScoreBoard").style.display = "none";
    document.getElementById("Reset").style.display = "block";
    document.getElementById("battle").style.display = "none";
}


let params = new URLSearchParams(document.location.search);
// These will not change upcon Undo //
const p1 = params.get("player1name");
const p2 = params.get("player2name");

var points = parseInt(params.get("points"));
var gamePoint = points - 1;
var p1Score = 0;
var p2Score = 0; 
var D = false;

/* Serve Change Logic */
var servside = "Right";
var ServC = p1;
var ServL = p1;
var ServRcvr = p2;


const p1L = document.getElementById("left1");
const p1R = document.getElementById("right1");
const p2L = document.getElementById("left2");
const p2R = document.getElementById("right2");



window.addEventListener('load', log())

function log() {
    console.log(
          "Player 1 name:--------------------" + p1 +
        "\nPlayer 2 name:--------------------" + p2 +
        "\n# Points to be played-------------" + points +
        "\nPerson Serving:-------------------" + ServC +
        "\nLast Person Served----------------" + ServL +
        "\nStatus of D flag is --------------" + D +
        "\nPerson Recieving Serve:-----------" + ServRcvr
		);
}
	

function log2() {
    console.log(
        "Player 1 Score:----------------------" + p1Score +
        "\nTeam 2 Score:----------------------" + p2Score +
        "\nStatus of D flag is --------------" + D)
}

document.getElementById("p1").innerHTML = p1;
document.getElementById("p2").innerHTML = p2;
document.getElementById("points").innerHTML = points;
document.getElementById("lastserver").innerHTML = ServL;
document.getElementById("Currentserver").innerHTML = ServC;
document.getElementById("p1Score").innerHTML = p1Score;
document.getElementById("p2Score").innerHTML = p2Score;
document.getElementById("servside").innerHTML = servside;
document.getElementById("right1").innerHTML = p1;
document.getElementById("right2").innerHTML = p2;
document.getElementById("ServRcvr").innerHTML = p2;



document.getElementById("p1earns").addEventListener("click", p1earns); // Button Listener when player 1 Scores

function p1earns() {
	
	//Checking of Duece is active or not if it is true will incr the score only until difference of two is there or not.
    if (D == true) { 
        t11(); 																								//
        if ((p1Score - p2Score) === 2) {
			log2();
            close();
            alert(p1 + " Wins")
        }
    }

    if (D == false) {
        t11();
        log2(); ;
        if (p2Score < gamePoint && p1Score === gamePoint) {
            console.log("p1 to vitory");
            alert(p1 + " on Game Point");
        } else if (p2Score < gamePoint && p1Score === points) {
            alert(p1 + " Wins");
            close();
        } else if (p2Score === gamePoint && p1Score === gamePoint) {
            console.log("Going Flag True");
            alert("Dues Activated");
            D = true
        }
    } else {
        console.log("Error");
        log2();  ;
    }
}


  

function t11() {
    p1Score = p1Score + 1;  
	var lt = document.getElementById("Currentserver").innerHTML;
    document.getElementById("lastserver").innerHTML = lt;
    document.getElementById("p1Score").innerHTML = p1Score;

    if (p1Score % 2 === 0) {
        servside = "Right";      
		document.getElementById("servside").innerHTML = servside;
		p1L.style.backgroundColor = "gray"; 	
		p1L.innerHTML = "";
		p1R.style.backgroundColor = "green"; 	
		p1R.innerHTML = p1;
		p2R.style.backgroundColor = "gray";		
		p2L.style.backgroundColor = "gray";
		p2R.innerHTML = p2; 
		p2L.innerHTML = "";
    }
    if (p1Score % 2 === 1) {
        servside = "Left";       
		document.getElementById("servside").innerHTML = servside;
		p1L.style.backgroundColor = "green"; 	
		p1L.innerHTML = p1;
		p1R.style.backgroundColor = "gray"; 	
		p1R.innerHTML = "";
		p2R.style.backgroundColor = "gray";		
		p2L.style.backgroundColor = "gray";
		p2L.innerHTML = p2; 
		p2R.innerHTML = "";
    }

    document.getElementById("Currentserver").innerHTML = p1;
    ServCT = p1;
}
	



document.getElementById("p2earns").addEventListener("click", p2earns); // Button Listener when player 1 Scores

function p2earns() {
	
	//Checking of Duece is active or not if it is true will incr the score only until difference of two is there or not.
    if (D == true) { 
        t22(); 																								//
        if ((p2Score - p1Score) === 2) {
			log2();
            close();
            alert(p2 + " Wins")
        }
    }

    if (D == false) {
        t22();
        log2(); ;
        if (p1Score < gamePoint && p2Score === gamePoint) {
            console.log("p2 to vitory");
            alert(p2 + " on Game Point");
        } else if (p1Score < gamePoint && p2Score === points) {
            alert(p2 + " Wins");
            close();
        } else if (p1Score === gamePoint && p2Score === gamePoint) {
            console.log("Going Flag True");
            alert("Dues Activated");
            D = true
        }
    } else {
        console.log("Error");
        log2();  ;
    }
}

 

function t22() {
    p2Score = p2Score + 1;  
	var lt = document.getElementById("Currentserver").innerHTML;
    document.getElementById("lastserver").innerHTML = lt;
    document.getElementById("p2Score").innerHTML = p2Score;

    if (p2Score % 2 === 0) {
        servside = "Right";      
		document.getElementById("servside").innerHTML = servside;
		p2L.style.backgroundColor = "gray"; 	
		p2L.innerHTML = "";
		p2R.style.backgroundColor = "green"; 	
		p2R.innerHTML = p2;
		p1R.style.backgroundColor = "gray";		
		p1L.style.backgroundColor = "gray";
		p1R.innerHTML = p1; 
		p1L.innerHTML = "";
    }
    if (p2Score % 2 === 1) {
        servside = "Left";       
		document.getElementById("servside").innerHTML = servside;
		p2L.style.backgroundColor = "green"; 	
		p2L.innerHTML = p2;
		p2R.style.backgroundColor = "gray"; 	
		p2R.innerHTML = "";
		p1R.style.backgroundColor = "gray";		
		p1L.style.backgroundColor = "gray";
		p1L.innerHTML = p1; 
		p1R.innerHTML = "";
    }

    document.getElementById("Currentserver").innerHTML = p2;
    ServCT = p2;
}
	

function close() {
    document.getElementById("mainScoreBoard").style.display = "none";
    document.getElementById("Reset").style.display = "block";
    document.getElementById("battle").style.display = "none";
}


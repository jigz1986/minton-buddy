let params = new URLSearchParams(document.location.search);
const t1name = params.get("team1name");
const p1t1 = params.get("player1T1name");
const p2t1 = params.get("player2T1name");
const t2name = params.get("team2name");
const p1t2 = params.get("player1T2name");
const p2t2 = params.get("player2T2name");
const points = parseInt(params.get("points"));
var gamePoint = points-1;
var t1Score = 0;
var t2Score = 0;


/* Serve Change Logic */
var servside = "Right";
var ServC = p1t1;
var ServL = p1t1;
var ServCT = t1name;
var ServLT = t1name;
var ServRcvr = p1t2;

// console.log(t1name, p1t1, p2t1, t2name, p1t2, p2t2 , points, ServC, ServL, ServCT, ServLT, LastPoint, ServRcvr);
  document.getElementById("team1name").innerHTML=t1name;
  document.getElementById("team2name").innerHTML=t2name;
  document.getElementById("points").innerHTML=points;
  document.getElementById("p1t1").innerHTML=p1t1;
  document.getElementById("p2t1").innerHTML=p2t1;
  document.getElementById("p1t2").innerHTML=p1t2;
  document.getElementById("p2t2").innerHTML=p2t2;
  document.getElementById("lastserver").innerHTML=ServL;
  document.getElementById("Currentserver").innerHTML=ServC;
  document.getElementById("t1Score").innerHTML=t1Score;
  document.getElementById("t2Score").innerHTML=t2Score;
  document.getElementById("ServerTeamCurrent").innerHTML=t1name;
  document.getElementById("ServerTeamLast").innerHTML=t1name;
  document.getElementById("servside").innerHTML= servside;
  document.getElementById("left1").innerHTML=p1t1;
  document.getElementById("right1").innerHTML=p2t1;
  document.getElementById("left2").innerHTML=p2t2;
  document.getElementById("right2").innerHTML=p1t2;
  document.getElementById("ServRcvr").innerHTML=p1t2;

function t1earns(){

  var lt = document.getElementById("ServerTeamCurrent").innerHTML; document.getElementById("ServerTeamLast").innerHTML = lt;
 
  score1();
document.getElementById("t1Score").innerHTML = t1Score;   document.getElementById("ServerTeamCurrent").innerHTML = t1name;
ServCT = t1name;
  var last = document.getElementById("ServerTeamLast").innerHTML;
  var curr = document.getElementById("ServerTeamCurrent").innerHTML;
  if (last === curr) {var x = document.getElementById("left1").innerHTML;
  var y = document.getElementById("right1").innerHTML;
  document.getElementById("right1").innerHTML = x;
  document.getElementById("left1").innerHTML = y;
  servrcv1()};
  if (last !== curr) {servrcv1()};
    }


function t2earns(){
  var lt = document.getElementById("ServerTeamCurrent").innerHTML; document.getElementById("ServerTeamLast").innerHTML = lt;
  
  score2(); if (t1Score === gamePoint && t2Score === gamePoint){duece();};
document.getElementById("t2Score").innerHTML = t2Score; document.getElementById("ServerTeamCurrent").innerHTML = t2name;
ServCT = t2name;
    var last = document.getElementById("ServerTeamLast").innerHTML;
    var curr = document.getElementById("ServerTeamCurrent").innerHTML;
    if (last === curr) { 
    var x = document.getElementById("left2").innerHTML;
    var y = document.getElementById("right2").innerHTML;
    document.getElementById("right2").innerHTML = x;
    document.getElementById("left2").innerHTML = y;
    servrcv2()};
    if (last !== curr) {servrcv2() };    
}
    
///////////////// GENERIC FUNCTIONS SECTION ////////////////
function close() {
  document.getElementById("mainScoreBoard").style.display="none";
      document.getElementById("Reset").style.display="block";
      document.getElementById("battle").style.display="none";
}



function servrcv1(){

 
  if (t1Score % 2 == 0){
    var x = left1.innerHTML; //taking player winning team who is about to serve
    var y = right2.innerHTML; //taking player loosing team who is about to recieve
    document.getElementById("Currentserver").innerHTML = x; 
    document.getElementById("ServRcvr").innerHTML = y;}

  if (t1Score % 2 == 1){
    var x = right1.innerHTML;  
    var y = left2.innerHTML; 
    document.getElementById("Currentserver").innerHTML = x;
    document.getElementById("ServRcvr").innerHTML = y;}
}

function servrcv2(){
 
  if (t2Score % 2 == 0){
    var x = right2.innerHTML; //taking player winning team who is about to serve
    var y = left1.innerHTML; //taking player loosing team who is about to recieve
    document.getElementById("Currentserver").innerHTML = x; 
    document.getElementById("ServRcvr").innerHTML = y;}

  if (t2Score % 2 == 1){
    var x = left2.innerHTML;  
    var y = right1.innerHTML; 
    document.getElementById("Currentserver").innerHTML = x;
    document.getElementById("ServRcvr").innerHTML = y;}
}





function score1() {if (t1Score === gamePoint-1) {alert(t1name+ "is on gamepoint")};
if (t1Score === points-1) {alert(t1name+ "Wins"); close();}
 t1Score = t1Score+1;   
  document.getElementById("t1Score").innerHTML=t1Score;

  console.log(t1Score, t2Score);
  // if (t1Score === gamePoint && t2Score === gamePoint){duece();};
    
    
    if (t1Score % 2 === 0) {servside = "Right";  document.getElementById("servside").innerHTML= servside;}
    if (t1Score % 2 === 1) {servside = "Left";     document.getElementById("servside").innerHTML= servside; }
    } 



 function score2()     {  
  if (t2Score === gamePoint-1) {alert(t2name+ "is on gamepoint")};
  if (t2Score === points-1) {alert(t2name+ "Wins"); close();}
  t2Score = t2Score+1;    
 document.getElementById("t2Score").innerHTML=t2Score;
   console.log(t1Score, t2Score);
  // if (t1Score === gamePoint && t2Score === gamePoint){duece();};
      
    if (t2Score % 2 === 0) {servside = "Right";   document.getElementById("servside").innerHTML= servside;}
    if (t2Score % 2 === 1) {servside = "Left";     document.getElementById("servside").innerHTML= servside; }
    }   
  
//     function duece() {
//       var t1X = t1Score - t2Score;
//       var t2X = t2Score - t2Score;

// if (t1X = 2){alert(t1name)};
// if (t2X = 2){alert(t2name)};
//     }
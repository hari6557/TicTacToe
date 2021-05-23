var flag = 1;
var button = document.getElementsByClassName("audio");
function bell(){
    button.play();
}
function myFunc_1() {
    if (flag == 1) {
        document.getElementById("b1").value = 'X';
        document.getElementById("b1").disabled = true;
        flag = 0; 
    }
    else {       
        document.getElementById("b1").value = 'O';
        document.getElementById("b1").disabled = true;
        flag = 1;
    }
}
function myFunc_2() {
    if (flag == 1) {
        document.getElementById("b2").value = 'X';
        document.getElementById("b2").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b2").value = 'O';
        document.getElementById("b2").disabled = true;
        flag = 1;
    }
}
function myFunc_3() {
    if (flag == 1) {
        document.getElementById("b3").value = 'X';
        document.getElementById("b3").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b3").value = 'O';
        document.getElementById("b3").disabled = true;
        flag = 1;
    }
}
function myFunc_4() {
    if (flag == 1) {
        document.getElementById("b4").value = 'X';
        document.getElementById("b4").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b4").value = 'O';
        document.getElementById("b4").disabled = true;
        flag = 1;
    }
}
function myFunc_5() {
    if (flag == 1) {
        document.getElementById("b5").value = 'X';
        document.getElementById("b5").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b5").value = 'O';
        document.getElementById("b5").disabled = true;
        flag = 1;
    }
}
function myFunc_6() {
    if (flag == 1) {
        document.getElementById("b6").value = 'X';
        document.getElementById("b6").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b6").value = 'O';
        document.getElementById("b6").disabled = true;
        flag = 1;
    }
}
function myFunc_7() {
    if (flag == 1) {
        document.getElementById("b7").value = 'X';
        document.getElementById("b7").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b7").value = 'O';
        document.getElementById("b7").disabled = true;
        flag = 1;
    }
}
function myFunc_8() {
    if (flag == 1) {
        document.getElementById("b8").value = 'X';
        document.getElementById("b8").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b8").value = 'O';
        document.getElementById("b8").disabled = true;
        flag = 1;
    }
}
function myFunc_9() {
    if (flag == 1) {
        document.getElementById("b9").value = 'X';
        document.getElementById("b9").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b9").value = 'O';
        document.getElementById("b9").disabled = true;
        flag = 1;
    }
}
function reset() {
    location.reload();
    document.getElementById("b1") = "";
    document.getElementById("b2") = "";
    document.getElementById("b3") = "";
    document.getElementById("b4") = "";
    document.getElementById("b5") = "";
    document.getElementById("b6") = "";
    document.getElementById("b7") = "";
    document.getElementById("b8") = "";
    document.getElementById("b9") = "";
}
function myFunc() {
    var b1, b2, b3, b4, b5, b6, b7, b8, b9;
    b1 = document.getElementById("b1").value;
    b2 = document.getElementById("b2").value;
    b3 = document.getElementById("b3").value;
    b4 = document.getElementById("b4").value;
    b5 = document.getElementById("b5").value;
    b6 = document.getElementById("b6").value;
    b7 = document.getElementById("b7").value;
    b8 = document.getElementById("b8").value;
    b9 = document.getElementById("b9").value;


    // PLayer 1 win conditions......
    if (b1 == 'X' && b2 == 'X' && b3 == 'X') {
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        document.getElementById("result").value = "PLAYER 1 WINS";
        // alert("Congratulations Player 1 Wins");
        
    }
    else if (b1 == 'X' && b4 == 'X' && b7 == 'X') {
        document.getElementById("b2").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        document.getElementById("result").value = "PLAYER 1 WINS";
        // alert("Congratulations Player 1 Wins");
    }
    else if (b4 == 'X' && b5 == 'X' && b6 == 'X') {
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        document.getElementById("result").value = "PLAYER 1 WINS";
        // alert("Congratulations Player 1 Wins");
    }
    else if (b7 == 'X' && b8 == 'X' && b9 == 'X') {
        document.getElementById("b2").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b1").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("result").value = "PLAYER 1 WINS";
        // alert("Congratulations Player 1 Wins");
    }
    else if (b3 == 'X' && b6 == 'X' && b9 == 'X') {
        document.getElementById("b2").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b1").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("result").value = "PLAYER 1 WINS";
        // alert("Congratulations Player 1 Wins");
    }
    else if (b3 == 'X' && b5 == 'X' && b7 == 'X') {
        document.getElementById("b2").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b1").disabled = true;
        document.getElementById("b9").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("result").value = "PLAYER 1 WINS";    
        // alert("Congratulations Player 1 Wins");
    }
    else if (b1 == 'X' && b5 == 'X' && b9 == 'X') {
        document.getElementById("b2").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("result").value = "PLAYER 1 WINS";
        // alert("Congratulations Player 1 Wins");
    }
    else if (b2 == 'X' && b5 == 'X' && b8 == 'X') {
        document.getElementById("b1").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b9").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("result").value = "PLAYER 1 WINS";
        // alert("Congratulations Player 1 Wins");
    }


    // Player 2 win conditions....


    else if (b1 == 'O' && b2 == 'O' && b3 == 'O') {
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        document.getElementById("result").value = "PLAYER 2 WINS";
        // alert("Congratulations Player 2 Wins");
    }
    else if (b1 == 'O' && b4 == 'O' && b7 == 'O') {
        document.getElementById("b2").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        document.getElementById("result").value = "PLAYER 2 WINS";
        // alert("Congratulations Player 2 Wins");
    }
    else if (b4 == 'O' && b5 == 'O' && b6 == 'O') {
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        document.getElementById("result").value = "PLAYER 2 WINS";
        // alert("Congratulations Player 2 Wins");
    }
    else if (b7 == 'O' && b8 == 'O' && b9 == 'O') {
        document.getElementById("b2").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b1").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("result").value = "PLAYER 2 WINS";
        // alert("Congratulations Player 2 Wins");
    }
    else if (b3 == 'O' && b6 == 'O' && b9 == 'O') {
        document.getElementById("b2").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b1").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("result").value = "PLAYER 2 WINS";
        // alert("Congratulations Player 2 Wins");
    }
    else if (b3 == 'O' && b5 == 'O' && b7 == 'O') {
        document.getElementById("b2").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b1").disabled = true;
        document.getElementById("b9").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("result").value = "PLAYER 2 WINS";
        // alert("Congratulations Player 2 Wins");
    }
    else if (b1 == 'O' && b5 == 'O' && b9 == 'O') {
        document.getElementById("b2").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("result").value = "PLAYER 2 WINS";
        // alert("Congratulations Player 2 Wins");
    }
    else if (b2 == 'O' && b5 == 'O' && b8 == 'O') {
        document.getElementById("b1").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b9").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("result").value = "PLAYER 2 WINS";
        // alert("Congratulations Player 1 Wins");
    }
    
    // Draw conditions.........

    else if ((b1 == 'X' || b1 == 'O') && (b2 == 'X' || b2 == 'O') && (b3 == 'X' || b3 == 'O') && (b4 == 'X' || b4 == 'O') && (b5 == 'X' || b5 == 'O') && (b6 == 'X' || b6 == 'O') && (b7 == 'X' || b7 == 'O') && (b8 == 'X' || b8 == 'O') && (b9 == 'X' || b9 == 'O')) {
        window.alert("Match tied");
    }

    // Turns
    else{
        if(flag == 1){
            document.getElementById("turn").value = "PLAYER 1 TURN";
        }
        else{
            document.getElementById("turn").value = "PLAYER 2 TURN";
        }
    }
}
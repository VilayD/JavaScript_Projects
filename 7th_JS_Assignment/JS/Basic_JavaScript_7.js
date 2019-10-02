
var x = 5
function Multiply1() {
    document.writeln(15 * x + "<br>");
}
function Multiply2() {
    document.writeln(8 * x + "<br>");
}
Multiply1();
Multiply2();

function Divide1() {
    var y = 45
    document.writeln(y / 5 + "<br");
}

Divide1();

function get_Date() {
    if (new Date().getHours() < 10); {
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}

function get_Time() {
    if (new Date().getHours() >= 21); {
        document.getElementById("Time").innerHTML = "Have a good sleep.";
    }
}

function Age_Function() {
    Age = document.getElementById("Age").value;
    if (Age >= 18) {
        Vote = "You are old enough to vote!";
    }
    else {
        Vote = "You are not old enough to vote!";
    }
    document.getElementById("Too_Young").innerHTML = Vote;
}

function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time > 12 == Time < 10) {
        Reply = "It is the afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}
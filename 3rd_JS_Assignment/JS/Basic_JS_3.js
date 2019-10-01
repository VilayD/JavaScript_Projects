document.write("Hello");


function addition() {
    var addition = 2 + 5;
    document.getElementById("Math").innerHTML = addition;
}

function subtraction() {
    var subtraction = 75 - 54;
    document.getElementById("Math2").innerHTML = subtraction;
}

function multiplication() {
    var multi = 7 * 7;
    document.getElementById("Math3").innerHTML = multi;
}

function division() {
    var divide = 150 / 50;
    document.getElementById("Math4").innerHTML = divide;
}

function Math_all() {
    var all_math = (((1+2) *10) / 2)-5;
    document.getElementById("Math5").innerHTML = all_math;
}

function modulus() {
    var m_math = 36 % 5;
    document.getElementById("Math6").innerHTML = "remainder" + m_math;
}

function negation () {
    var x = 10;
    document.getElementById("Math7").innerHTML = -x;
}

function var1() {
    var x = 5;
    x++;
    document.getElementById("v1").innerHTML = x;
}

function var2() {
    var y = 5.25;
    y--;
    document.getElementById("v2").innerHTML = y;
}

function func(){
    document.getElementById("demo").innerHTML = (Math.random()* 100)
}

function myFunction(){
    document.getElementById("my").innerHTML = Math.pow(8,3);
}
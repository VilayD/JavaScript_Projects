

var x = 9;
var y = 8;
x *= y;
document.writeln(x);
document.write("<br>");

function my_Function1() {
    document.getElementById("Test1").innerHTML = 0/0;
}

function my_Function2() {
    document.getElementById("Test2").innerHTML = isNaN('Hello');
}

function my_Function3() {
    document.getElementById("Test3").innerHTML = isNaN('05');
}

function infi() {
    document.getElementById("Demo").innerHTML = 8E410;
}

function infi2() {
    document.getElementById("Demo2").innerHTML = -7E322;
}

document.writeln(10 > 25);
document.write('<br>');

document.writeln(5>=3);


console.log (12-5);

document.writeln("8" + 6);


console.log (15 < 12);

document.writeln(15 == 15);
document.write('<br>');

document.writeln(12 == 11);
document.write('<br>');

person1 = "Bill";
person1 = "Bill";
document.writeln(person1 === person1);

per1 = "happy";
b1  = 45;
document.writeln(per1 === b1);

car = 10;
boat = "10";
document.writeln(car === boat);

dog = "cute"
dog1 = "sad"
document.writeln(dog === dog1);
document.write("<br>");

document.writeln(5 > 3 && 15 > 8);

document.writeln(20 > 10 && 10 < 4 );

document.writeln(5 > 15 || 10 > 4);

document.writeln(15 > 22 || 18 > 23);

function not_Func() {
    document.getElementById("Not").innerHTML = !(20 > 10);
}
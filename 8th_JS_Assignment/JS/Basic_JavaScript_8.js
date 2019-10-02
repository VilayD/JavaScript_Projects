
function Full() {
    var p1 = "I would";
    var p2 = " like to";
    var p3 = " have some";
    var p4 = " cake please!";
    var whole = p1.concat(p2, p3, p4);
    document.getElementById("Concatenate").innerHTML = whole;
}

function slice_Method() {
    var Sentence = "Just want to have fun today.";
    var Section = Sentence.slice(18, 22);
    document.getElementById("slice").innerHTML = Section;
}

function Up() {
    var str = "Dinner was amazing!";
    var res = str.toUpperCase();
    document.getElementById("Result").innerHTML = res;
}

function Search() {
    var str = "Would you like some dessert?";
    var n = str.search("dessert");
    document.getElementById("Search_Res").innerHTML = n;
}

function string_meth() {
    var x = 250;
    document.getElementById("Num_to_string").innerHTML = x.toString();
}

function precision_meth() {
    var y = 268415.25158654885;
    document.getElementById("Precision").innerHTML = y.toPrecision(8);
}

function Fixed() {
    var num = 47.26845;
    var r = num.toFixed(1);
    document.getElementById("Fixed_Num").innerHTML = r;
}

function Value() {
    var str = "How is your day so far?";
    var v = str.valueOf();
    document.getElementById("Val").innerHTML = v;
}
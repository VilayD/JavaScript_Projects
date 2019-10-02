

document.write(Bigger = (5 - 1) ? "Left number is bigger": "Right number is bigger");

function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride =(Height >= 52) ? "You are tall enough" : "You are too short";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function Age_Function() {
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote =(Age >= 18) ? "You are old enough" : "You are too young";
    document.getElementById("Vote").innerHTML = Can_vote + " to vote.";
}

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trial Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year;
}

function Player(Race, Class, Spec) {
    this.Player_Race = Race;
    this.Player_Class = Class;
    this.Player_Spec = Spec;
}
var DaDa = new Player("Bloodelf", "Priest", "Holy");
var Roro = new Player("Human", "Pally", "Portection");
var Keke = new Player("Undead", "Warlock", "Affliction");

function myChar() {
    document.getElementById("New_and_This").innerHTML = 
    "Dada plays a " + DaDa.Player_Race + " who is a " + DaDa.Player_Class + " that specialize in " +
    DaDa.Player_Spec + ".";
}


function Person(Sex, Age, Hobby) {
    this.Person_Sex = Sex;
    this.Person_Age = Age;
    this.Person_Hobby = Hobby;
}
var Paul = new Person("Male", "39", "Racing");
var Sandi = new Person("Female", "32", "Blogging");
var Mike = new Person("Male", "29", "catch");

function About() {
    document.getElementById("Name").innerHTML = "This person's name is Paul. Paul is " +
    Paul.Person_Sex + ". He is " + Paul.Person_Age + " and he likes " + Paul.Person_Hobby + ".";
}

function count_Func() {
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count() {
        var Starting = 5;
        function Minus() {Starting -= 1;}
            Minus();
            return Starting;
        
    }
}



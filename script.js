
var textColorLink = document.getElementById("text-color");
var bgColorLink = document.getElementById("bg-color");
var fflink = document.getElementById("fontFamily");
var sentence = document.getElementById("case");
var finish = document.getElementById("clear");
var bold = document.getElementById("b")
var italic = document.getElementById("i")
var under = document.getElementById("u")
var strike = document.getElementById("st")
var b = document.getElementById("borderr")
var big = document.getElementById("inc")
var small = document.getElementById("dec")
var right = document.getElementById("r")
var center = document.getElementById("c")
var left = document.getElementById("l")

var workingArea = document.getElementById("textArea");
var input = document.getElementById("inp");

// Set the initial colors
var textColor = "black";
var bgColor = "white";
var ff = "Arial";
var s_c = "lower"
var emp = "";
var bc = "black"
var fs = "14px"

textColorLink.addEventListener("click", function () {
    textColor = prompt("Enter a new text color:");
    workingArea.style.color = textColor;
});

bgColorLink.addEventListener("click", function () {
    bgColor = prompt("Enter a new background color:");
    inp.style.backgroundColor = bgColor;
});
fflink.addEventListener("click", function () {
    ff = prompt("Enter a new font-family:");
    workingArea.style.fontFamily = ff;
});
sentence.addEventListener("click", function () {
    s_c = prompt("Enter a case: lower || upper || capitalize");
    workingArea.style.textTransform = s_c;
});
finish.addEventListener("click", function () {
    location.reload()
});
bold.addEventListener("click", function () {
    workingArea.style.fontWeight = "bolder";
});
under.addEventListener("click", function () {
    workingArea.style.textDecoration = "underline";
});
italic.addEventListener("click", function () {
    workingArea.style.fontStyle = "italic";
});
strike.addEventListener("click", function () {
    workingArea.style.textDecoration = "line-through";
});
b.addEventListener("click", function () {
    bc = prompt("Enter Border Color")
    workingArea.style.border = "thick solid";
    workingArea.style.borderColor = bc;
});
big.addEventListener("click", function () {
    fs = prompt("Enter a Font Size to increase");
    workingArea.style.fontSize = fs;
});
small.addEventListener("click", function () {
    fs = prompt("Enter a Font Size to decrease");
    workingArea.style.fontSize = fs;
});
right.addEventListener("click", function () {
    workingArea.style.textAlign = "right";
});
center.addEventListener("click", function () {
    workingArea.style.textAlign = "center";
});
left.addEventListener("click", function () {
    workingArea.style.textAlign = "left";
});
function words() {
    var w = document.getElementById('word');
    var text = workingArea.value;
    var wordLength = text.split(" ")
    w.innerHTML = wordLength.length;
}
function letters() {
    var l = document.getElementById('letter');
    var letter = workingArea.value;
    var Length = letter.split("")
    l.innerHTML = Length.length;
}
function replace() {
    var replaceLetter = prompt("Enter the letter to replace:");
    var replacementLetter = prompt("Enter the replacement letter:");


    var newText = workingArea.value.replaceAll(replaceLetter, replacementLetter);

    workingArea.value = newText;
}

window.addEventListener("load", function () {
  // code her whenthe page is loaded using javascript
});

$(document).ready(function () {
  // code here when the page is loaded using jQuery
});

// selector in js
document.getElementById("idName");
document.getElementsByClassName("className");
document.getElementsByTagName("p");

// selector in jquery
$(".className");
$("p");
$("#idName");

// click handler js
var button = document.getElementById("idName");

button.addEventListener("click", function () {
  // code here
});

// jQuery

$("#idName").click(function () {
  // code here
});

// js css
document.getElementsByTagName("p").style.display = "none";
document.getElementsByTagName("p").style.background = "white";

// jQuery css
$("p").css({ "background-color": "white", display: "none" });

// mn3mul hide lal class name
$(".classsName").hide();

// <img src="img.png" width="50"/>
// hek bl html w iza manna n8yyr il src mniktub hy il ta7t
$("img").attr("src", "img2.png");
// attr i5tisar attrbute ex:il src wil width wil hight hinni attributes

$("img").attr("width", "100");
// hek 8yyrna il width

$(".className").height(50);


// wt user selected it can be lebanon/cyprus ayya she
var userSelect = "Lebanon"

var wikiURL= "http://en.wikipedia.org/wiki/" + userSelect










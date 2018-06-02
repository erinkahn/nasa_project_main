"use strict";

console.log("Hello World from app.js! 5 4 3 2 1 Lift Off!!! #nasaproject #erinandcass");

var $earth = document.querySelector(".earth");
var $orb1 = document.querySelector(".orb-1");
var $orb2 = document.querySelector(".orb-2");
var $glow = document.querySelector(".glow");
var $smoke = document.querySelector(".smoke");

window.addEventListener("mousemove", function () {
	// console.log(event.x/window.innerWidth, event.y/window.innerHeight);

	var multiplierX = -(event.x / window.innerWidth - 0.5) * 2;
	$earth.style.left = 50 + multiplierX + "%"; // 50%
	$orb1.style.left = 50 + multiplierX + "%";
	$orb2.style.left = 50 + multiplierX + "%"; // 50%
	$glow.style.left = 50 + multiplierX + "%"; // 50%
	$smoke.style.left = 50 + multiplierX + "%"; // 50%
});

//---------------------------------------------------------------------------------

// whatever your target is/whatever you click get the href attribute
// loop through the main sections
// remove active class from all of them 
// add active class to the current target id you click on
// add tweenmax plugin to scroll to the right section id thats clicked

var goToSection = function goToSection(event) {
	console.log("nav button clicked!");
	event.preventDefault();
	var sectionID = event.currentTarget.getAttribute("href");

	var mainSections = document.querySelectorAll('.main-section:not(#home)');

	for (var j = 0; j < mainSections.length; j++) {
		mainSections[j].classList.remove("active");
	}
	document.querySelector(".main-section" + sectionID).classList.add("active");

	TweenMax.to(window, 2, { scrollTo: sectionID });
};

// loop through the menu items
// when you click one item, call the function gotosection
var menuItems = document.querySelectorAll('.orb a');
for (var i = 0; i < menuItems.length; i++) {
	menuItems[i].addEventListener("click", goToSection);
}

//---------------------------------------------------------------------------------
// arrow scroll to top

document.querySelector(".missionBackToTop a").addEventListener('click', function () {
	TweenMax.to(window, 2, { scrollTo: '#top' });
});

document.querySelector(".aboutToTop a").addEventListener('click', function () {
	TweenMax.to(window, 2, { scrollTo: '#top' });
});

document.querySelector(".newsToTop a").addEventListener('click', function () {
	TweenMax.to(window, 2, { scrollTo: '#top' });
});

//---------------------------------------------------------------------------------
//nasa stands for

// when you click about, stagger in order scale up, overlap by 1 second
document.querySelector('.about-btn').addEventListener('click', function () {
	console.log("about button clicked");
	TweenMax.staggerTo('.about1 div h3', 2, { color: "#ff0004", yoyo: true, top: "180px", repeat: 1, scale: 2, ease: Linear.easeNone }, 1);
});

//---------------------------------------------------------------------------------
// dots - our centers click and show name

document.querySelector('.dot1').addEventListener('click', function () {
	console.log('first dot clicked');
	document.querySelector('.ames').classList.toggle('show');
});

document.querySelector('.dot2').addEventListener('click', function () {
	console.log('second dot clicked');
	document.querySelector('.afrc').classList.toggle('show');
});

document.querySelector('.dot3').addEventListener('click', function () {
	console.log('third dot clicked');
	document.querySelector('.jsc').classList.toggle('show');
});

document.querySelector('.dot4').addEventListener('click', function () {
	console.log('fourth dot clicked');
	document.querySelector('.ssc').classList.toggle('show');
});

document.querySelector('.dot5').addEventListener('click', function () {
	console.log('fifth dot clicked');
	document.querySelector('.msfc').classList.toggle('show');
});

document.querySelector('.dot6').addEventListener('click', function () {
	console.log('sixth dot clicked');
	document.querySelector('.ksc').classList.toggle('show');
});

document.querySelector('.dot7').addEventListener('click', function () {
	console.log('seventh dot clicked');
	document.querySelector('.grc').classList.toggle('show');
});

document.querySelector('.dot8').addEventListener('click', function () {
	console.log('eighth dot clicked');
	document.querySelector('.hq').classList.toggle('show');
});

document.querySelector('.dot9').addEventListener('click', function () {
	console.log('ninth dot clicked');
	document.querySelector('.gsfc').classList.toggle('show');
});

document.querySelector('.dot10').addEventListener('click', function () {
	console.log('tenth dot clicked');
	document.querySelector('.lrc').classList.toggle('show');
});
//# sourceMappingURL=main.js.map

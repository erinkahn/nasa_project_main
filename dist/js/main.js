"use strict";

console.log("Hello World from app.js! 5 4 3 2 1 Lift Off!!! #nasaproject #erinandcass");

// TweenMax.to('.earth', 100, {
// 	rotation: -360,
// 	repeat: -1,
// 	ease: Linear.easeNone
// });

// TweenMax.to('.orb-1', 100, {
// 	rotation: -360,
// 	repeat: -1,
// 	ease: Linear.easeNone
// });
// TweenMax.to('.orb-1 div', 100, {
// 	rotation: 360, 
// 	repeat: -1,
// 	ease: Linear.easeNone
// });

// TweenMax.to('.orb-2', 150, {
// 	rotation: 360,
// 	repeat: -1,
// 	ease: Linear.easeNone
// });
// TweenMax.to('.orb-2 div', 150, {
// 	rotation: -360, 
// 	repeat: -1,
// 	ease: Linear.easeNone
// });


//---------------------------------------------------------------------------------

// whatever your target is/whatever you cick get the href attribute
// loop through the main sections
// remove active class from all of them 
// add active class to the current target id you click on
// add tweenmax plugin to scroll to the right section id thats clicked

var goToSection = function goToSection(event) {
	console.log("nav button clicked!");
	event.preventDefault();
	var sectionID = event.currentTarget.getAttribute("href");

	var mainSections = document.querySelectorAll('.main-section:not(#home)');

	for (j = 0; j < mainSections.length; j++) {
		mainSections[j].classList.remove("active");
	}
	document.querySelector(".main-section" + sectionID).classList.add("active");

	TweenMax.to(window, 2, { scrollTo: sectionID });
};

// loop through the menu items
// when you click one item, call the function gotosection
var menuItems = document.querySelectorAll('.orb a');
for (i = 0; i < menuItems.length; i++) {
	menuItems[i].addEventListener("click", goToSection);
}
//# sourceMappingURL=main.js.map

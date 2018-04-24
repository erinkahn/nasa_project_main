console.log(`Hello World from app.js! 5 4 3 2 1 Lift Off!!! #nasaproject #erinandcass`)

// TweenMax.to('.earth', 100, {
// 	rotation: -360,
// 	repeat: -1,
// 	// ease: Linear.easeNone
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

var goToSection = function(event) {
	console.log("nav button clicked!")
	event.preventDefault();
	var sectionID = event.currentTarget.getAttribute("href");

	let mainSections = document.querySelectorAll('.main-section:not(#home)');
	
	for (j=0; j < mainSections.length; j++){
		mainSections[j].classList.remove("active")
	}
	document.querySelector(".main-section"+sectionID).classList.add("active")

	TweenMax.to(window, 2, {scrollTo: sectionID})
}




// loop through the menu items
// when you click one item, call the function gotosection
let menuItems = document.querySelectorAll('.orb a');
for (i=0; i < menuItems.length; i++) {
	menuItems[i].addEventListener("click", goToSection)
}




//---------------------------------------------------------------------------------
// arrow scroll to top

document.querySelector(".missionBackToTop a").addEventListener('click', function(){
	TweenMax.to(window, 2, {scrollTo:'#top'});
})

document.querySelector(".aboutToTop a").addEventListener('click', function(){
	TweenMax.to(window, 2, {scrollTo:'#top'});
})

document.querySelector(".newsToTop a").addEventListener('click', function(){
	TweenMax.to(window, 2, {scrollTo:'#top'});
})
	


//---------------------------------------------------------------------------------
// waypoints

// var waypoint = new Waypoint({
// 	element: document.querySelector('.mission1'),
// 	handler: function(direction) {
// 	  console.log('Scrolled to waypoint!');
// 	  TweenMax.from('.mission1', 0.5, {delay: 1, opacity: 0, x: -2000, ease: Linear.easeNone});
// 	},
// 	// offset: '90%'
//   });

//---------------------------------------------------------------------------------
//nasa stands for

// when you click about, stagger in order scale up, overlap by 1 second
document.querySelector('.about-btn').addEventListener('click', function(){
	console.log("about button clicked")
	TweenMax.staggerTo('.about1 div h3', 2, { color:"#ff0004", yoyo:true, top:"180px",  repeat: 1, scale:2, ease: Linear.easeNone}, 1);
})

//// mouse move parallax

// $(document).ready(function(){
//     var windowWidth = $(window).width();

//     $('.page-container ,.earth').mousemove(function(event){
//         var moveX = (($(window).width() / 2) - event.pageX) * 0.1;
//         var moveY = (($(window).height() / 2) - event.pageY) * 0.1;
//         $('.page-back').css('margin-left',moveX + 'px');
//         $('.page-back').css('margin-top',moveY + 'px');
//     });

// });





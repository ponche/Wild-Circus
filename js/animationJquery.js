$(document).ready(function() {

	// variable main
	var speedAnimation = 1700 ; 
	var section = "jumping-stilts" ; 
	var canAnimate = true; 


	// Function 
	function switchOnglet(nextSection)
	{
		canAnimate = false; // lock the call of this function
		$("#" + section).slideUp(speedAnimation, function() {
			$("#" + nextSection).slideDown(speedAnimation, function() {
				section = nextSection; 
				canAnimate = true ;	
			});
		});	 
	}



	// Button Triggers
	$("header").on("click", "#bp-jumping", function() {
		console.log("click on button jumping");
		
		if (section != "jumping-stilts" && canAnimate)
		{
			switchOnglet("jumping-stilts");
		}
	});

	$("header").on("click", "#bp-pneumatic", function() {
		console.log("click on button pneumatic");
		
		if (section != "pneumatic-stilts" && canAnimate)
		{
			switchOnglet("pneumatic-stilts");
		}	
	});

	$("header").on("click", "#bp-pogo" , function() {
		console.log("click on button pogo"); 
		
		if (section != "pogo" && canAnimate) 
		{
			switchOnglet("pogo");
		}
		
	});

}); 


//end of script


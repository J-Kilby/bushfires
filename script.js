//finds all the <span>'s that expand text
var hooks = document.getElementsByClassName('hook');

//adds click events to them all
for (var i = 0; i < hooks.length; i++) {
	hooks[i].addEventListener("click", function() {
		//toggles the 'hidden' class on the text asccociated with the hook
		if (document.getElementById(this.dataset.ref).className == "line hidden") {
			document.getElementById(this.dataset.ref).className = "line";
		} else {
			document.getElementById(this.dataset.ref).className = "line hidden";
		}
	} );
}
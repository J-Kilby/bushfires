//finds all the <span>'s that expand text
var hooks = document.getElementsByClassName('hook');
var tabs = document.getElementsByClassName('tab');
var line;

//adds click events to them all
for (var i = 0; i < hooks.length; i++) {
	hooks[i].addEventListener("click", function() {
		
		line = document.getElementById(this.dataset.ref);
		//toggles the 'hidden' class on the text asccociated with the hook
		if (line.className == "line closed") {
			line.className = "line open";
		} else {
			line.className = "line closed";
		};
		
		if (this.dataset.used == undefined) {
			for (var y = 0; y < line.children.length; y++) {
				if (line.children[y].tagName == "A") {
					document.getElementById("links").innerHTML = document.getElementById("links").innerHTML + "<li><a href='" + line.children[y].href + "'>" + line.children[y].innerHTML + "</a></li>"
				}
			}
			this.dataset.used = "yes";
		}
	} );
}

for (var x = 0; x < 2; x++) {
	tabs[x].addEventListener("click", function() {
		tabs[0].className = "tab";
		tabs[1].className = "tab";
		this.className = "selected tab";
		if (this.innerHTML == 'Article') {
			document.getElementById('timeline').className = " ";
			document.getElementById('twitter').className = "closedTab";
		} else if (this.innerHTML == 'Twitter') {
			document.getElementById('timeline').className = "closedTab";
			document.getElementById('twitter').className = " ";
		}
	} );
}
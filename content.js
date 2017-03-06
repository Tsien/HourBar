function addBar() {
	var newDiv = document.createElement("div");
	var newContent = document.createTextNode("1%");
	newDiv.appendChild(newContent);
	newDiv.setAttribute("id", "myBar");
	var divP = document.createElement("div");
	divP.appendChild(newDiv);
	divP.setAttribute("id", "myProgress");
	document.body.appendChild(divP);
}

function move() {
	var elem = document.getElementById("myBar");
	var width = 1;
	var id = setInterval(frame, 100);
	function frame() {
		if (width >= 100) {
			clearInterval(id);
			alert("Take a break!");
		}
		else {
			width++;
			elem.style.width = width + "%";
			elem.innerHTML = width * 1 + "%";
		}
		// change color
		if (width >= 80) {
			elem.style.backgroundColor = "red";
		}
		else if (width >= 45) {
			elem.style.backgroundColor = "yellow";
			elem.style.color = "black";
		}
	}
}


chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {
    	addBar();
    	move();
    }
  }
);

(function addBar() {
	var newDiv = document.createElement("div");
	var newContent = document.createTextNode("1%");
	newDiv.appendChild(newContent);
	newDiv.setAttribute("id", "myBar");
	var divP = document.createElement("div");
	divP.appendChild(newDiv);
	divP.setAttribute("id", "myProgress");
	document.body.appendChild(divP);
}).call(this);

(function move() {
	var elem = document.getElementById("myBar");
	var width = 1;
	var id = setInterval(frame, 1000);
	function frame() {
		if (width >= 100) {
			clearInterval(id);
		}
		else {
			width++;
			elem.style.width = width + "%";
			elem.innerHTML = width * 1 + "%";
		}
	}
}).call(this);



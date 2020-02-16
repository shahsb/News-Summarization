

function myFunc() {
	var URL = document.getElementById("UrlToFetch").value;
    localStorage.setItem("storageItem",URL);
    console.log("sbs");
}

function classifyByDates() {
	var StDate = document.getElementById("StartDate").value;
	var EnDate = document.getElementById("EndDate").value;
	localStorage.setItem("StartDate",StDate);
	localStorage.setItem("EndDate",EnDate);
}
// Used to toggle the menu on small screens when clicking on the menu button
function myFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else { 
        x.className = x.className.replace(" w3-show", "");
    }
}

exports.myFunc = myFunc ;
exports.myFunction = myFunction;
exports.classifyByDates = classifyByDates;

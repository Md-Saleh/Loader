$(document).ready(function(){
	var myVar;

	function myFunction() {
	  myVar = setTimeout(showPage, 3000);
	}

	function showPage() {
	  document.getElementById("loading-area").style.display = "none";
	  document.getElementById("layout-body").style.display = "block";
	}
});
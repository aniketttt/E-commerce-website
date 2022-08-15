
function myfun(){
	var menu = document.getElementById("items");
	if (menu.style.display==="none"){
		menu.style.display="block";
	} else {
		menu.style.display="none";
	}
};

function myFunction(imgs) {
	var expandImg = document.getElementById("productimg");
	var imgText = document.getElementsByClassName("smallimg");
	expandImg.src = imgs.src;
	imgText.innerHTML = imgs.alt;
	expandImg.parentElement.style.display = "block";
  };


function mycart(){
	location.replace("cart.html")
};
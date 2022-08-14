let menuitems = document.getElementById("manuitems");

	menuitems.style.maxHeight = "1px";

	function menutoggle(){
		if (menuitems.style.maxHeight == "1px")
			{
				menuitems.style.maxHeight = "200px";
			}
		else
			{
				menuitems.style.maxHeight = "1px";
			}

	}
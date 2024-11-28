const subButton = document.querySelector(".subscribe-btn");//for on-click validation
//error pop ups
const errorMsg = document.querySelector(".error-msg");
const errorIcn = document.querySelector(".error-icon");
const form = document.querySelector(".email-field");//for form validation on submission
const email = document.querySelector(".email-input");

//validates message on-click and on form submission
form.addEventListener("submit", validation);
subButton.addEventListener("click", validation);

function validation(noReload) {//function to validate email
	noReload.preventDefault();//keeps the page from reloading
	
	const inpVal = email.value.trim();//gets the value and leaves no whitespaces
	
	//if email input does not match regex, display message
	if(!eComp(inpVal)) {
		errorMsg.style.display = "block";
		errorIcn.style.display = "block";
	} else {//if it does, no message needed
		errorMsg.style.display = "none";
		errorIcn.style.display = "none";
	}
}

function eComp(inp) {//regex function
	return /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/.test(inp);
}
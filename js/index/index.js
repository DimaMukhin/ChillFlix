var admin_email = "chill@flix.com";
var admin_password = "123456dd";

// login help message
var help_login = document.getElementById("help_login");

/* login form */
var form_email = document.getElementById("form_email");
var form_password = document.getElementById("form_password");

/* login input */
var in_email = document.getElementById("input_email");
var in_password = document.getElementById("input_password");

// login button
var btn_login = document.getElementById("btn_login");

btn_login.onclick = function() {
	if (in_email.value == admin_email && in_password.value == admin_password) {
		location.href = "pages/main.html";
	} else {
		form_email.className = "form-group has-error";
		form_password.className = "form-group has-error";
		help_login.style.display = "inline";
	}
};
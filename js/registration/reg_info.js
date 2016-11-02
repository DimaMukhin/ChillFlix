$('document').ready(function() {
	$('#btn_next').tooltip();
	$('#tt_email').tooltip();
	$('#tt_password').tooltip();
});

// "next" button
var btn_next = document.getElementById("btn_next");

/* form validation */
var fn = false;
var ln = false;
var email = false;
var reEmail = false;
var pass = false;
var rePass = false;

/* help messages */
var help_fn = document.getElementById("help_fn");
var help_ln = document.getElementById("help_ln");
var help_email = document.getElementById("help_email");
var help_reEmail = document.getElementById("help_reEmail");
var help_password = document.getElementById("help_password");
var help_rePassword = document.getElementById("help_rePassword");

/* form groups */
var form_fn = document.getElementById("form_fn");
var form_ln = document.getElementById("form_ln");
var form_email = document.getElementById("form_email");
var form_reEmail = document.getElementById("form_reEmail");
var form_password = document.getElementById("form_password");
var form_rePassword = document.getElementById("form_rePassword");

/* input fields */
var in_first = document.getElementById("input_fn");
var in_last = document.getElementById("input_ln");
var in_email = document.getElementById("input_email");
var in_reEmail = document.getElementById("input_reEmail");
var in_password = document.getElementById("input_password");
var in_rePassword = document.getElementById("input_rePassword");

/* first name input check */
in_first.onfocusout = function() {
	if(in_first.value != "") {
		form_fn.className = "form-group has-success";
		help_fn.style.display = "none";
	} else {
		form_fn.className = "form-group has-error";
		help_fn.style.display = "inline";
	}
};


in_first.oninput = function() {
	if(in_first.value != "") {
		form_fn.className = "form-group has-success";
		help_fn.style.display = "none";
		fn = true;
	} else {
		form_fn.className = "form-group";
		fn = false;
	}
	
	checkForm();
};

/* last name input check */
in_last.onfocusout = function() {
	if(in_last.value != "") {
		form_ln.className = "form-group has-success";
		help_ln.style.display = "none";
	} else {
		form_ln.className = "form-group has-error";
		help_ln.style.display = "inline";
	}
};

in_last.oninput = function() {
	if(in_last.value != "") {
		form_ln.className = "form-group has-success";
		help_ln.style.display = "none";
		ln = true;
	} else {
		form_ln.className = "form-group";
		ln = false;
	}
	
	checkForm();
}

/* email input check */
in_email.onfocusout = function() {
	if (validateEmail(in_email.value)) {
		form_email.className = "form-group has-success";
		help_email.style.display = "none";
	} else {
		form_email.className = "form-group has-error";
		help_email.style.display = "inline";
	}
};

in_email.oninput = function() {
	if (validateEmail(in_email.value)) {
		form_email.className = "form-group has-success";
		help_email.style.display = "none";
		email = true;
	} else {
		form_email.className = "form-group";
		email = false;
	}
	
	checkForm();
};

/* repeat email input check */
in_reEmail.onfocusout = function() {
	if (in_reEmail.value == in_email.value) {
		form_reEmail.className = "form-group has-success";
		help_reEmail.style.display = "none";
	} else {
		form_reEmail.className = "form-group has-error";
		help_reEmail.style.display = "inline";
	}
};

in_reEmail.oninput = function() {
	if (in_reEmail.value == in_email.value) {
		form_reEmail.className = "form-group has-success";
		help_reEmail.style.display = "none";
		reEmail = true;
	} else {
		form_reEmail.className = "form-group";
		reEmail = false;
	}
	
	checkForm();
};

/* password input check */
in_password.onfocusout = function() {
	if (validatePassword(in_password.value)) {
		form_password.className = "form-group has-success";
		help_password.style.display = "none";
	} else {
		form_password.className = "form-group has-error";
		help_password.style.display = "inline";
	}
};

in_password.oninput = function() {
	if (validatePassword(in_password.value)) {
		form_password.className = "form-group has-success";
		help_password.style.display = "none";
		pass = true;
	} else {
		form_password.className = "form-group";
		pass = false;
	}
	
	checkForm();
}

/* repeat password input check */
in_rePassword.onfocusout = function() {
	if (in_rePassword.value == in_password.value) {
		form_rePassword.className = "form-group has-success";
		help_rePassword.style.display = "none";
	} else {
		form_rePassword.className = "form-group has-error";
		help_rePassword.style.display = "inline";
	}
};

in_rePassword.oninput = function() {
	if (in_rePassword.value == in_password.value) {
		form_rePassword.className = "form-group has-success";
		help_rePassword.style.display = "none";
		rePass = true;
	} else {
		form_rePassword.className = "form-group";
		rePass = false;
	}
	
	checkForm();
};

// email must be of the following format: email@example.com
function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

// password must be Minimum 8 characters long, at least 1 Alphabet and 1 Number:
function validatePassword(pass) {
    var re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return re.test(pass);
}

function checkForm() {
	if (fn && ln && email && reEmail && pass && rePass) {
		btn_next.href = "reg_pay.html";
		btn_next.removeAttribute("disabled");
		$('#btn_next').tooltip('destroy');
	} else {
		btn_next.removeAttribute("href");
		
		var att = document.createAttribute("disabled");
		att.value = "disabled";
		btn_next.setAttributeNode(att);
		
		$('#btn_next').tooltip();
	}
}

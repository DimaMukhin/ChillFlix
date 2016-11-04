$(document).ready(function() {
	$('#btn_next').tooltip();
	$('#input_cNumber').mask('0000-0000-0000-0000');
	$('#input_postal').mask('S0S-0S0');
	$('#input_cXpr').mask('00/00');
});

var btn_next = document.getElementById("btn_next");

/* form validation */
var cNumber = false;
var cXpr = false;
var address = false;
var postal = false;

/* help messages */
var help_cNumber = document.getElementById("help_cNumber");
var help_cXpr = document.getElementById("help_cXpr");
var help_address = document.getElementById("help_address");
var help_postal = document.getElementById("help_postal");

/* forms */
var form_cNumber = document.getElementById("form_cNumber");
var form_cXpr = document.getElementById("form_cXpr");
var form_address = document.getElementById("form_address");
var form_postal = document.getElementById("form_postal");

/* inputs */
var in_cNumber = document.getElementById("input_cNumber");
var in_cXpr = document.getElementById("input_cXpr");
var in_address = document.getElementById("input_address");
var in_postal = document.getElementById("input_postal");

/* Card Number Input Check */
in_cNumber.onfocusout = function() {
	if(in_cNumber.value.length >= 19) {
		form_cNumber.className = "form-group has-success";
		help_cNumber.style.display = "none";
	} else {
		form_cNumber.className = "form-group has-error";
		help_cNumber.style.display = "inline";
	}
};


in_cNumber.oninput = function() {
	if(in_cNumber.value.length >= 19) {
		form_cNumber.className = "form-group has-success";
		help_cNumber.style.display = "none";
		cNumber = true;
	} else {
		form_cNumber.className = "form-group";
		cNumber = false;
	}
	
	checkForm();
};

/* Card Experation date Input Check */
in_cXpr.onfocusout = function() {
	if(in_cXpr.value.length >= 5) {
		form_cXpr.className = "form-group has-success";
		help_cXpr.style.display = "none";
	} else {
		form_cXpr.className = "form-group has-error";
		help_cXpr.style.display = "inline";
	}
};


in_cXpr.oninput = function() {
	if(in_cXpr.value.length >= 5) {
		form_cXpr.className = "form-group has-success";
		help_cXpr.style.display = "none";
		cXpr = true;
	} else {
		form_cXpr.className = "form-group";
		cXpr = false;
	}
	
	checkForm();
};

/* Address Input Check */
in_address.onfocusout = function() {
	if(in_address.value.length >= 1) {
		form_address.className = "form-group has-success";
		help_address.style.display = "none";
	} else {
		form_address.className = "form-group has-error";
		help_address.style.display = "inline";
	}
};


in_address.oninput = function() {
	if(in_address.value.length >= 1) {
		form_address.className = "form-group has-success";
		help_address.style.display = "none";
		address = true;
	} else {
		form_address.className = "form-group";
		address = false;
	}
	
	checkForm();
};

/* Postal Input Check */
in_postal.onfocusout = function() {
	if(in_postal.value.length >= 7) {
		form_postal.className = "form-group has-success";
		help_postal.style.display = "none";
	} else {
		form_postal.className = "form-group has-error";
		help_postal.style.display = "inline";
	}
};


in_postal.oninput = function() {
	if(in_postal.value.length >= 7) {
		form_postal.className = "form-group has-success";
		help_postal.style.display = "none";
		postal = true;
	} else {
		form_postal.className = "form-group";
		postal = false;
	}
	
	checkForm();
};

function checkForm() {
	if (cNumber && cXpr && address && postal) {
		btn_next.href = "main.html";
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
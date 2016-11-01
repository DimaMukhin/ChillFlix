$('document').ready(function() {
	$('#btn_next').tooltip();
});

var btn_next = document.getElementById("btn_next");
var msg_selected = document.getElementById("msg_selected");

var panel_silver = document.getElementById("panel_silver");
var panel_gold = document.getElementById("panel_gold");
var panel_platinum = document.getElementById("panel_platinum");

var btn_silver = document.getElementById("btn_silver");
var btn_gold = document.getElementById("btn_gold");
var btn_platinum = document.getElementById("btn_platinum");

btn_silver.onclick = function() {
	panel_silver.className = "panel panel-success";
	panel_gold.className = "panel panel-default";
	panel_platinum.className = "panel panel-default";
	
	msg_selected.innerHTML = "You have selected the SILVER plan";
	
	btn_next.href = "reg_info.html";
	btn_next.removeAttribute("disabled");
	$('#btn_next').tooltip('destroy');
};

btn_gold.onclick = function() {
	panel_silver.className = "panel panel-default";
	panel_gold.className = "panel panel-success";
	panel_platinum.className = "panel panel-default";
	
	msg_selected.innerHTML = "You have selected the GOLD plan";
	
	btn_next.href = "reg_info.html";
	btn_next.removeAttribute("disabled");
	$('#btn_next').tooltip('destroy');
};

btn_platinum.onclick = function() {
	panel_silver.className = "panel panel-default";
	panel_gold.className = "panel panel-default";
	panel_platinum.className = "panel panel-success";
	
	msg_selected.innerHTML = "You have selected the PLATINUM plan";
	
	btn_next.href = "reg_info.html";
	btn_next.removeAttribute("disabled");
	$('#btn_next').tooltip('destroy');
};

btn_next.onclick = function() {
	
};
// Dropdown slide out
var styleSelect = document.getElementsByClassName("style-select")[0];
var styleList = document.getElementsByClassName("style-list-wrap")[0];

styleSelect.onclick = function() {
	styleList.classList.toggle("slide-down");
}
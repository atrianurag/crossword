(function loadScripts() {
	addScript('../config/config.json');
	addScript('../js/data.js');
	addScript('../js/matrixBox.js');
	addScript('../js/matrixRow.js');
	addScript('../js/matrix.js');

	addScript('../js/main.js');
})();

function addScript(src) {
	var script = document.createElement('script');
	script.async = false;
	script.src = src;
	document.head.appendChild(script);
}
let input = document.getElementById("editor");
let btnTranslate = document.getElementById("btnTranslate");
let output = document.getElementById("textOutput");

function translate() {
	output.innerHTML = input.value;
}
// btnTranslate.addEventListener("click", translate);

document.addEventListener("keypress", function(event) {
  console.log(event.key);
	if (event.key === "Enter") {
		translate();
	}
});

const rangeInputs = document.querySelectorAll('input[type="range"]');
const textInputs = document.querySelectorAll('input[type="text"]');

function handleInputChange(e) {
	let target = e.target;
	const min = target.getAttribute("data-min");
	const max = target.getAttribute("data-max");
	const val = target.value;
	if (e.target.type === "text") {
		target.parentElement.nextElementSibling.value = target.value;
		target = target.parentElement.nextElementSibling;
	} else {
		target.previousElementSibling.firstElementChild.value = target.value;
	}

	target.style.backgroundSize = ((val - min) * 100) / (max - min) + "% 100%";
}

rangeInputs.forEach((input) => {
	input.addEventListener("input", (e) => {
		handleInputChange(e);
	});
});

textInputs.forEach((input) =>
	input.addEventListener("input", handleInputChange)
);

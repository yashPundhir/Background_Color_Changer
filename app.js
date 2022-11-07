function changeBG() {
	const hexCode = "0123456789ABCDEF";
	let color = "#";
	for (let i = 0; i < 6; i = i + 1) {
		color = color + hexCode[Math.floor(Math.random() * 16)];
	}
	document.querySelector("body").style.backgroundColor = color;
}

//your JS code here. If required.
const container = document.querySelector(".container");

for(let i=1; i<10000; i++) {
	let square = document.createElement("div");
	square.classList.add("square");
	container.append(square);
	square.addEventListener("mouseenter", () => {
		let r = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
		let g = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
		let b = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
		square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
	});
	square.addEventListener("mouseleave", () => {
		square.style.backgroundColor = '#1d1d1d';
	})
}
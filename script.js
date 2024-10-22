//your JS code here. If required.
document.addEventListener('DOMContentLoaded', function() {
    const squares = document.querySelectorAll('.square');
    
    squares.forEach(square => {
        // Add mouseover event listener
        square.addEventListener('mouseover', function() {
            square.style.backgroundColor = '#3498db'; // Change to blue color on hover
        });

        // Add mouseout event listener
        square.addEventListener('mouseout', function() {
            setTimeout(() => {
                square.style.backgroundColor = 'rgb(29, 29, 29)'; // Revert to grey after 1 second
            }, 1000); // Delay of 1 second
        });
    });
});

/*
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
		 setTimeout(() => {
	        square.style.backgroundColor = 'rgb(29, 29, 29)';
	    }, 1000); // delay of 1 second
	})
}
*/


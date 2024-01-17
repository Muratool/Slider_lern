const images = document.querySelectorAll('.slider-img');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

let imageIndex = 0;

function show(img) {
	img.classList.add('active');
}

next.addEventListener('click', () => {
	if (imageIndex <= images.length - 1) {
		images[imageIndex].classList.remove('active');
		imageIndex += 1;
		if (imageIndex <= images.length - 1) {
			show(images[imageIndex]);
		} else {
			imageIndex = 0;
			show(images[imageIndex]);
		}
	}
});

prev.addEventListener('click', () => {
	if (imageIndex >= 0) {
		images[imageIndex].classList.remove('active');
		imageIndex -= 1;
		if (imageIndex < 0) {
			imageIndex = images.length - 1;
		}
		show(images[imageIndex]);
	}
});

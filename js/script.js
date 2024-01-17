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

const trainImages = document.querySelectorAll('.slider__train-img');
const next__train = document.querySelector('.next__train');
const prev__train = document.querySelector('.prev__train');

let trainIndex = 0;

function show_train(train_img) {
	train_img.classList.add('active');
}

function hide_train(train_img) {
	train_img.classList.remove('active');
}

next__train.addEventListener('click', () => {
	hide_train(trainImages[trainIndex]);
	trainIndex += 1;
	if (trainIndex <= trainImages.length - 1) {
		show_train(trainImages[trainIndex]);
	} else {
		trainIndex = 0;
		show_train(trainImages[trainIndex]);
	}
});

prev__train.addEventListener('click', () => {
	hide_train(trainImages[trainIndex]);
	trainIndex -= 1;
	if (trainIndex >= 0) {
		show_train(trainImages[trainIndex]);
	} else {
		trainIndex = trainImages.length - 1;
		show_train(trainImages[trainIndex]);
	}
});
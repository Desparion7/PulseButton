const button = document.querySelector('.btn');

const btnAnimation = (e) => {
	const top = e.clientY;
	const left = e.clientX;

	const btnTopPosition = e.target.offsetTop;
	const btnLeftPosition = e.target.offsetLeft;

	const circelTop = top - btnTopPosition;
	const circelLeft = left - btnLeftPosition;

	const circle = document.createElement('span');
	circle.classList.add('circle');
	circle.style.top = `${circelTop}px`;
	circle.style.left = `${circelLeft}px`;
	e.target.appendChild(circle);

	setTimeout(() => {
		circle.remove();
	}, 300);
};

button.addEventListener('click', btnAnimation);

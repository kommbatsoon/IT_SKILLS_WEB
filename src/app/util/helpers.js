import {Screen} from '@util/srceen';

const CONFIG = {
	scrollingTime: 1500,
};

export function scrollTo(element) {
	let startingY = window.pageYOffset;
	let elementY =
		window.pageYOffset + document.querySelector(element).getBoundingClientRect().top - (Screen.isMobile ? 100 : 60);
	let targetY =
		document.body.scrollHeight - elementY < window.innerHeight
			? document.body.scrollHeight - window.innerHeight
			: elementY;
	let diff = targetY - startingY + 5;
	let easing = function (t) {
		return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
	};
	let start;

	if (!diff) return;

	window.requestAnimationFrame(function step(timestamp) {
		if (!start) start = timestamp;
		let time = timestamp - start;
		let percent = Math.min(time / CONFIG.scrollingTime, 1);
		percent = easing(percent);

		window.scrollTo(0, startingY + diff * percent);

		if (time < CONFIG.scrollingTime) {
			window.requestAnimationFrame(step);
		}
	});
}

export function getClassName(...args) {
	return Object.values(args)?.filter(Boolean).join(' ');
}

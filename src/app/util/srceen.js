const SCREEN_WIDTH = {
	MOBILE: 320,
	TABLET: 768,
	DESKTOP: 1200,
};

window.addEventListener('resize', handleWindowResize);

export function handleWindowResize() {
	Screen.width = window.innerWidth;
}

export const Screen = {
	get width() {
		return this._width;
	},
	set width(width) {
		this._width = width;
	},
	get isMobile() {
		return this.width <= SCREEN_WIDTH.MOBILE;
	},
	get isTablet() {
		return this.width <= SCREEN_WIDTH.TABLET;
	},
	get isDesktop() {
		return this.width <= SCREEN_WIDTH.DESKTOP;
	},
};

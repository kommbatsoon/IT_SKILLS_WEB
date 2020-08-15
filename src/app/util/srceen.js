const SCREEN_WIDTH = {
	MOBILE: 320,
	TABLET: 768,
	DESKTOP: 1200,
};

export const Screen = {
	get width() {
		return this._width;
	},
	set width(width) {
		this._width = width;
	},
	get isMobile() {
		return this.width < SCREEN_WIDTH.TABLET;
	},
	get isTablet() {
		return this.width >= SCREEN_WIDTH.TABLET && this.width < SCREEN_WIDTH.DESKTOP;
	},
	get isDesktop() {
		return this.width >= SCREEN_WIDTH.DESKTOP;
	},
};

export function handleWindowResize() {
	Screen.width = window.innerWidth;
}

handleWindowResize();
window.addEventListener('resize', handleWindowResize);

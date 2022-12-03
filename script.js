if (document.documentElement.clientWidth > 768) {
	const splide = new Splide('#splide1', {
    type: 'loop',
    drag: 'free',
    focus: 'center',
    perPage: 4,
    arrows: false,
    pagination: false,
    autoScroll: {
        speed: 1,
    },
});
	splide.mount(window.splide.Extensions);
};
if (document.documentElement.clientWidth > 768) {
	const splide2 = new Splide('#splide2', {
	type: 'loop',
    drag: 'free',
    focus: 'center',
    perPage: 4,
    arrows: false,
    pagination: false,
    autoScroll: {
        speed: -1,
    },
});
	splide2.mount(window.splide.Extensions);
};

if (document.documentElement.clientWidth < 768) {
	const splide = new Splide('#splide1', {
    type: 'loop',
    drag: 'free',
    focus: 'center',
    perPage: 2,
    arrows: false,
    pagination: false,
    autoScroll: {
        speed: 1,
    },
});
	splide.mount(window.splide.Extensions);
};
if (document.documentElement.clientWidth < 768) {
	const splide2 = new Splide('#splide2', {
	type: 'loop',
    drag: 'free',
    focus: 'center',
    perPage: 2,
    arrows: false,
    pagination: false,
    autoScroll: {
        speed: -1,
    },
});
	splide2.mount(window.splide.Extensions);
};





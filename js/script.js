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

splide.mount(window.splide.Extensions);
splide2.mount(window.splide.Extensions);

const DrawerInitiator = {
    init({
        button, drawer, drawerLinks, header, navOverlay, navCloseBtn,
    }) {
        button.addEventListener('click', (event) => {
            this._toggleDrawer(event, drawer);
            this._toggleTransparents({ event, header, navOverlay });
        });

        navCloseBtn.addEventListener('click', (event) => {
            this._toggleDrawer(event, drawer);
            this._toggleTransparents({ event, header, navOverlay });
        });

        navOverlay.addEventListener('click', (event) => {
            this._closeDrawer(event, drawer);
            this._toggleTransparents({ event, header, navOverlay });
        });

        drawerLinks.forEach((drawerLink) => {
            drawerLink.addEventListener('click', (event) => {
                this._closeDrawer(event, drawer);
                this._toggleTransparents({ event, header, navOverlay });
            });
        });

        header.classList = 'transparent';

        window.addEventListener('scroll', () => {
            const scrollListener = window.scrollY;

            if (scrollListener < 5) {
                header.classList.add('transparent');
            } else {
                header.classList.remove('transparent');
            }
        });
    },
    _toggleDrawer(event, drawer) {
        event.stopPropagation();
        drawer.classList.toggle('open');
    },
    _closeDrawer(event, drawer) {
        event.stopPropagation();
        drawer.classList.remove('open');
    },
    _toggleTransparents({ event, header, navOverlay }) {
        event.stopPropagation();

        const headerClass = header.classList.value;
        const scrollListener = window.scrollY;
        const windowWidth = window.innerWidth;

        if ((headerClass === 'transparent' && scrollListener < 5 && windowWidth < 650) || (headerClass === '' && scrollListener < 5 && windowWidth < 650)) {
            header.classList.toggle('transparent');
        }

        if (windowWidth < 650) {
            navOverlay.classList.toggle('nav-overlay-on-display');
        }
    },
};

export default DrawerInitiator;

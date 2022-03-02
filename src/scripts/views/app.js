import DrawerInitiator from '../utils/drawer-initiator';
import routes from '../routes/route';
import UrlParsing from '../routes/url-parsing';
import { failedToLoadAppShell } from './templates/template-creator';

class App {
    constructor({
        main, restaurantContent, button, drawer, drawerLinks, buttonSkipLink, header, navOverlay, navCloseBtn,
    }) {
        this._main = main;
        this._restaurantContent = restaurantContent;
        this._button = button;
        this._drawer = drawer;
        this._drawerLinks = drawerLinks;
        this._buttonSkipLink = buttonSkipLink;
        this._header = header;
        this._navOverlay = navOverlay;
        this._navCloseBtn = navCloseBtn;

        this._initialAppShell();
    }

    async _initialAppShell() {
        const AppShell = DrawerInitiator;

        if (AppShell) {
            AppShell.init({
                button: this._button,
                drawer: this._drawer,
                drawerLinks: this._drawerLinks,
                header: this._header,
                navOverlay: this._navOverlay,
                navCloseBtn: this._navCloseBtn,
            });
        } else {
            this._drawer.innerHTML = failedToLoadAppShell();
        }

        await this._initialSkipLink();
    }

    _initialSkipLink() {
        this._buttonSkipLink.addEventListener('click', () => {
            this._main.tabIndex = 0;
            this._main.focus();
        });
    }

    async renderPage() {
        const url = UrlParsing.parseActiveUrlWithCombiner();
        const page = routes[url];
        this._restaurantContent.innerHTML = await page.render();
        await page.afterRender();
    }
}

export default App;

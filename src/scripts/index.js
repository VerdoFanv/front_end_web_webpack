import 'regenerator-runtime';
import '../styles/generalStyle.css';
import '../styles/homeStyle.css';
import '../styles/detailedPageStyle.css';
import '../styles/aboutPageStyle.css';
import '../styles/responsive.css';
import swRegister from './utils/sw-register';
import App from './views/app';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

// Custom Elements
import './component/sinJumbo-component';
import './component/sinFooter-component';

const app = new App({
    main: document.querySelector('#mainContent'),
    restaurantContent: document.querySelector('#mainContent'),
    button: document.querySelector('#hamburgerButton'),
    drawer: document.querySelector('.nav-link'),
    drawerLinks: document.querySelectorAll('.drawer-link'),
    buttonSkipLink: document.querySelector('#skipLink'),
    header: document.getElementById('topHeader'),
    navOverlay: document.getElementById('navOverlay'),
    navCloseBtn: document.querySelector('.nav-close'),
});

window.addEventListener('DOMContentLoaded', () => {
    app.renderPage();
});

window.addEventListener('load', () => {
    swRegister();
});

window.addEventListener('hashchange', () => {
    app.renderPage();
});

import { aboutUsTemplate, failedToLoadAppShell } from '../templates/template-creator';

const About = {
    render() {
        return `
            <h1 class="name-page">About Us</h1>
            <section id="aboutUs">
                <div class="loader"></div>
            </section>
        `;
    },
    async afterRender() {
        const aboutUsContainer = document.querySelector('#aboutUs');
        if (aboutUsTemplate) {
            aboutUsContainer.innerHTML = await aboutUsTemplate();
        } else {
            aboutUsContainer.innerHTML = await failedToLoadAppShell();
        }
    },
};

export default About;

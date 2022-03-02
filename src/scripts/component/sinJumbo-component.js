import { LitElement, html, css } from 'lit-element';

class SinJumbo extends LitElement {
    constructor() {
        super();
    }

    static get styles() {
        return css`
            :host {
                display: flex;
                width: 100%;
                min-height: 300px;
                object-fit: cover;
                background-image: url('./heros/hero-large.jpg');
                background-position: bottom;
                background-repeat: no-repeat;
                align-items: center;
            }

            :host .inner-text {
                padding-right: 40px;
                margin: 0 auto;
                text-align: center;
                font-size: 20px;
                color: white;
                transition: .3s ease-in;
            }

            :host .inner-text h1 {
                margin-top: 30px;
                margin-bottom: 15px;
            }

            @media screen and (max-width: 1550px){
                :host {
                    background-image: url('./heros/hero-x-large.jpg');
                }
            }
            @media screen and (max-width: 800px){
                :host {
                    background-image: url('./heros/hero-medium.jpg');
                }
            }
            @media screen and (max-width: 768px){
                :host {
                    min-height: 230px;
                }
            }
            @media screen and (max-width: 480px){
                :host {
                    background-image: url('./heros/hero-small.jpg');
                }
            }
            @media screen and (max-width: 425px){
                :host {
                    min-height: 200px;
                }
                :host .inner-text {
                    padding: 35px;
                    font-size: 16px;
                }
                :host .inner-text h1 {
                    margin-top: 60px;
                }
            }
            @media screen and (max-width: 375px){
                :host {
                    min-height: 195px;
                }
                :host .inner-text {
                    padding: 32px;
                    font-size: 15px;
                }
            }
            @media screen and (max-width: 320px){
                :host {
                    min-height: 190px;
                }
                :host .inner-text {
                    padding: 30px;
                    font-size: 14px;
                }
            }
        `;
    }

    render() {
        return html`
            <div class="inner-text">
                <h1>SINFOR RESTO</h1>
                <p>Temukan restorant favorite-Mu disini...</p>
            </div>
        `;
    }
}

customElements.define('sin-jumbo', SinJumbo);

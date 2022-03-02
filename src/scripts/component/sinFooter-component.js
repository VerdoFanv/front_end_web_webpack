import { html, css, LitElement } from 'lit-element';

class SinFooter extends LitElement {
    static get styles() {
        return css`
            :host {
                width: 100%;
                bottom: 0;
                position: sticky;
            }

            footer {
                padding: 5px;
                background-color: var(--main-color);
            }

            footer > p {
                margin: 0;
                padding: 5px;
                text-align: center;
                font-size: 1.2rem;
                color: white;
                font-weight: bolder;
            }

            @media screen and (max-width: 780px) {
                footer > p {
                    font-size: 1.1rem;
                }
            }

            @media screen and (max-width: 430px) {
                footer > p {
                    font-size: 1rem;
                }
            }

            @media screen and (max-width: 380px) {
                footer > p {
                    font-size: .9rem;
                }
            }
            
            @media screen and (max-width: 320px) {
                footer > p {
                    font-size: .9rem;
                }
            }
        `;
    }

    constructor() {
        super();
    }

    render() {
        return html`
            <footer>
                <p>-- Sinformanze Restaurant ${new Date().getFullYear()} for you &#9829; --</p>
            </footer>
        `;
    }
}

customElements.define('sin-footer', SinFooter);

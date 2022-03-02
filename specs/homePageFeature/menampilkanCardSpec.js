import { LitElement, html } from 'lit-element';

describe('penampil kartu', () => {
    it('seharusnya dapat mengisi item', () => {
        class SinCard extends LitElement {
            static get properties() {
                return {
                    listRestaurants: { type: Number },
                    restaurantItems: { type: String },
                };
            }

            constructor() {
                super();
                this.listRestaurants = 5;
                this.restaurantItems = '';
            }

            render() {
                return html`
                    <h2>Lit Element</h2><br/>
                `;
            }
        }

        document.body.innerHTML = `
            <div class="container">
                <sin-card></sin-card>
            </div>
        `;

        customElements.define('sin-card', SinCard);
    });
});

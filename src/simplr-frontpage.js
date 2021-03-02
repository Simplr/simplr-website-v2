import { LitElement, html, css } from 'lit-element';
import '@simplr-wc/card';
import '@simplr-wc/button';
import './components/app-window';

export default class SimplrFrontpage extends LitElement {
    static get properties() {
        return {
            title: { type: String, reflect: true },
            subtitle: { type: String, reflect: true },
        };
    }

    constructor() {
        super();
        this.title = 'Simplr Lit Element Template';
        this.subtitle = 'Made with 💖 by the Simplr bois';
    }

    firstUpdated() { }

    render() {
        return html`
            <style>
                ${this.renderStyles()}
            </style>

            <div class="hero-content">
                <simplr-card id="development-card">
                    <slot name="content">
                        <h2>Full-Stack Development</h2>
                        <app-window>
                            <img src="/assets/search_undraw.svg" />
                        </app-window>
                        <div class="buttons">
                            <simplr-button elevated primary>Products</simplr-button>
                            <simplr-button elevated secondary>Open Source</simplr-button>
                        </div>
                    </slot>
                </simplr-card>
                <simplr-card id="consulting-card">
                    <slot name="content">
                        <h2>Consulting</h2>
                        <img src="/assets/consulting_undraw.svg" />
                        <div class="buttons">
                            <simplr-button outlined primary>Find out more</simplr-button>
                        </div>
                    </slot>
                </simplr-card>
            </div>
        `;
    }

    renderStyles() {
        return css`
            :host {
                display: flex;
                flex-direction: column;
                width: 100%;
                font-size: 1.5rem;
                align-items: center;
            }

            simplr-card {
                border-radius: 16px;
            }

            .hero-content {
                display: flex;
                width: 60%;
                height: 100vh;
                text-align: center;
                justify-content: space-between;
                align-items: center;
            }

            .hero-content slot[name='content'] {
                height: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-between;
            }

            .hero-content h2 {
                font-weight: 900;
            }

            .hero-content simplr-card {
                height: 60%;
            }

            #development-card img {
                margin: 3rem 0 2rem;
                width: 50%;
                height: auto;
                fill: #ff6d00;
            }

            #development-card .buttons {
                display: flex;
                justify-content: space-between;
                width: 100%;
            }

            #development-card simplr-button {
                --size: 18px;
            }

            app-window {
                margin: 2rem 0;
            }

            #development-card {
                padding: 2rem 3rem;
                min-width: 37.5%;
            }

            #consulting-card {
                padding: 4rem 3rem;
                min-width: 45%;
                background: lightsalmon;
            }

            #consulting-card img {
                width: 80%;
                filter: drop-shadow(6px 12px 6px rgba(0, 0, 0, 0.12));
            }

            #consulting-card .buttons {
                justify-content: center;
            }

            #consulting-card simplr-button {
                --size: 22px;
                font-weight: 700;
            }
        `;
    }
}

if (!customElements.get('simplr-frontpage')) {
    customElements.define('simplr-frontpage', SimplrFrontpage);
}

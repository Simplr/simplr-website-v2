import { LitElement, html, css } from 'lit-element';
import '@simplr-wc/card';
import '@simplr-wc/button';
import './components/app-window';
import root from "./utils/rootpath";

export default class SimplrFrontpage extends LitElement {
    static get properties() {
        return {};
    }

    constructor() {
        super();
    }

    firstUpdated() { }

    render() {
        return html`
            <style>
                ${this.renderStyles()}
            </style>

            <div class="hero-content">
                <h2 class="hero-title">We provide...</h2>
                <div class="hero-cards">
                    <simplr-card id="development-card">
                        <slot name="content">
                            <h2>Full-Stack Development</h2>
                            <app-window>
                                <img src="${root()}assets/search_undraw.svg" />
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
                            <img src="${root()}assets/consulting_undraw.svg" />
                            <div class="buttons">
                                <simplr-button outlined primary>Find out more</simplr-button>
                            </div>
                        </slot>
                    </simplr-card>
                </div>
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
                --content-width: 60%;
            }

            @keyframes fade-in {
                from {
                    transform: translate(0, 100px);
                    opacity: 0;
                }
            }

            simplr-card {
                border-radius: 16px;
                max-width: unset;
            }

            simplr-button {
                white-space: nowrap;
            }

            .hero-content {
                display: flex;
                flex-direction: column;
                width: var(--content-width);
                margin-top: 12.5vh;
                height: 75vh;
                text-align: center;
                align-items: center;
                justify-content: center;
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
                margin: 0;
            }

            .hero-title {
                animation: fade-in 1000ms;

            }

            .hero-content simplr-card {
                box-sizing: border-box;
            }

            .hero-cards {
                display: flex;
                justify-content: center;
                align-items: center;
                margin-top: 5%;
                width: 100%;
                flex-basis: 80%;
                animation: fade-in 1500ms;
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

            #development-card {
                padding: 2rem 3rem;
                max-width: 450px;
                height: 80%;
            }

            #consulting-card {
                padding: 4rem 3rem;
                background: lightsalmon;
                max-width: 550px;
                margin-left: 1rem;
                height: 90%;
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
                --primary-color: #FFF;
                font-weight: 700;
            }
        `;
    }
}

if (!customElements.get('simplr-frontpage')) {
    customElements.define('simplr-frontpage', SimplrFrontpage);
}

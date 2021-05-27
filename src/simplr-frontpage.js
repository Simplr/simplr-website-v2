import { LitElement, html, css } from 'lit-element';
import '@simplr-wc/card';
import '@simplr-wc/button';
import './components/app-window';
import './components/highlight-number';
import root from './utils/rootpath';
import { github } from './icons/github';
import { linkedin } from './icons/linkedin';
import { twitter } from './icons/twitter';

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
            ${this.getHeroContent()} ${this.getIntroductionContent()} ${this.getContactContent()}

            <site-footer></site-footer>
        `;
    }

    getHeroContent() {
        return html`
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
                                <a href="${root()}development#closed">
                                    <simplr-button elevated primary>Products</simplr-button>
                                </a>
                                <a href="${root()}development#open">
                                    <simplr-button elevated secondary>Open Source</simplr-button>
                                </a>
                            </div>
                        </slot>
                    </simplr-card>
                    <simplr-card id="consulting-card">
                        <slot name="content">
                            <h2>Consulting</h2>
                            <img src="${root()}assets/consulting_undraw.svg" />
                            <div class="buttons">
                                <a href="${root()}consulting">
                                    <simplr-button outlined primary>Find out more</simplr-button>
                                </a>
                            </div>
                        </slot>
                    </simplr-card>
                </div>
            </div>
        `;
    }

    getIntroductionContent() {
        return html` <div class="intro-content">
            <h2 class="intro-title">Simplr in numbers</h2>
            <div>
                <div class="highlight-collection">
                    <highlight-number count="2" title="Professional developers"></highlight-number>
                    <highlight-number count="1" title="Vim user"></highlight-number>
                    <highlight-number count="24" title="Cones of Ice Cream in the freezer"></highlight-number>
                    <highlight-number count="0%" title="Micro-management"></highlight-number>
                    <highlight-number count="~1200" title="Github Commits in the past year"></highlight-number>
                    <highlight-number count="> 25" title="Published Web Components"></highlight-number>
                    <highlight-number count="> 5" title="Published Javascript libraries"></highlight-number>
                    <highlight-number count="> 10" title="Finished projects"></highlight-number>
                    <highlight-number count="4" title="Satisfied customer companies"></highlight-number>
                </div>
            </div>
        </div>`;
    }

    getContactContent() {
        return html`
            <div class="contact-content">
                <h2 class="contact-title">Get in contact with us</h2>

                <div class="contacts">
                    <a href="https://github.com/Simplr">${github}</a>
                    <a href="https://www.linkedin.com/company/simplrcompany/">${linkedin}</a>
                    <a href="https://twitter.com/SimplrCompany">${twitter}</a>
                </div>
            </div>
        `;
    }

    static get styles() {
        return css`
            :host {
                display: flex;
                flex-direction: column;
                width: 100%;
                font-size: 1.5rem;
                align-items: center;
                position: relative;
                --content-width: 80%;
            }

            @keyframes fade-in {
                from {
                    transform: translate(0, 100px);
                    opacity: 0;
                }
            }

            a {
                text-decoration: none;
            }

            simplr-card {
                border-radius: 16px;
                max-width: unset;
            }

            simplr-button {
                white-space: nowrap;
            }

            app-window {
                margin: 2rem 0;
            }

            .contact-title {
                margin-bottom: 4rem;
            }

            .contacts {
                display: flex;
                justify-content: space-between;
            }

            .contacts * {
                margin: 0 1rem;
            }

            .contact-content svg {
                width: 5rem;
                height: 5rem;
            }

            .contact-content a {
                transition: 200ms ease-in-out;
            }

            .contact-content a:hover {
                fill: var(--primary-color);
            }

            .hero-content,
            .intro-content,
            .contact-content {
                display: flex;
                flex-direction: column;
                width: var(--content-width);
                margin-top: 10.5vh;
                height: calc(100vh - 12.5vh);
                text-align: center;
                align-items: center;
                justify-content: center;
            }

            .intro-content,
            .contact-content {
                justify-content: flex-start;
            }

            .contact-content {
                height: calc(100vh - 45vh);
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
                margin-top: 2%;
                width: 100%;
                flex-basis: 75%;
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
            }

            #consulting-card {
                padding: 4rem 3rem;
                background: lightsalmon;
                max-width: 550px;
                margin-left: 1rem;
            }

            #consulting-card img {
                width: 80%;
                margin: 2rem 0;
                filter: drop-shadow(6px 12px 6px rgba(0, 0, 0, 0.12));
            }

            #consulting-card .buttons {
                justify-content: center;
            }

            #consulting-card simplr-button {
                --size: 22px;
                --primary-color: #fff;
                font-weight: 700;
            }

            .highlight-collection {
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                margin-top: 3rem;
            }

            .highlight-collection * {
                flex-basis: 30%;
                margin-bottom: 4rem;
            }

            @media only screen and (max-width: 720px) {
                :host {
                    --content-width: 90%;
                }

                .hero-content,
                .intro-content,
                .contact-content {
                    margin-top: 10vh;
                    height: unset;
                }

                .hero-cards {
                    margin-top: 10%;
                    flex-direction: column;
                }

                #development-card {
                    padding: 2rem 2rem;
                    margin-bottom: 3rem;
                }

                #consulting-card {
                    margin-left: 0;
                }

                .highlight-collection {
                    justify-content: space-between;
                }

                .highlight-collection * {
                    flex-basis: 45%;
                }
            }
        `;
    }
}

if (!customElements.get('simplr-frontpage')) {
    customElements.define('simplr-frontpage', SimplrFrontpage);
}

import { LitElement, html, css } from 'lit-element';
import '@simplr-wc/card';
import '@simplr-wc/button';
import './components/technology-logo.js';
import './components/reference-companies.js';
import root from './utils/rootpath.js';
import { scrollToBlock } from './utils/scroller.js';
import { email, phone } from './icons/contact.js';

export default class SimplrContactPage extends LitElement {
    static get properties() {
        return {};
    }

    constructor() {
        super();
    }

    firstUpdated() {
        scrollToBlock(this.shadowRoot);
    }

    render() {
        return html`
            <div class="content-pane main-pane">
                <h2>Contact</h2>
                <p>Get in contact with us!</p>
                <div class="contacts">
                    <div class="contact-container">
                        <p><b>Santeri Wikström, CEO, Software Developer</b></p>
                        <p>${phone} +358 40 4152119</p>
                        <p>${email} santeri@simplr.company</p>
                    </div>
                    <div class="contact-container">
                        <p><b>Matias Huhta, CTO, Software Engineer</b></p>
                        <p>${phone} +358 44 2065502</p>
                        <p>${email} matias@simplr.company</p>
                    </div>
                </div>
            </div>

            <site-footer></site-footer>
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

            .main-pane {
                animation: fade-in 1000ms;
            }

            .content-pane {
                display: flex;
                flex-direction: column;
                width: var(--content-width);
                margin-top: 10.5vh;
                height: 70vh;
                text-align: center;
                align-items: center;
                justify-content: center;
            }

            .content-pane p {
                max-width: 750px;
            }

            .contacts {
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
            }

            .contact-container {
                margin-top: 2rem;
                text-align: left;
                white-space: nowrap;
            }

            .contact-container p {
                display: flex;
                align-items: center;
            }

            .contact-container svg {
                width: 2rem;
                height: 2rem;
                margin-right: 2rem;
            }

            @keyframes fade-in {
                from {
                    transform: translate(0, 100px);
                    opacity: 0;
                }
            }

            @media only screen and (max-width: 720px) {
                :host {
                    --content-width: 80%;
                }

                .main-pane {
                    height: unset;
                }

                .contact-container {
                    white-space: unset;
                }
            }
        `;
    }
}

if (!customElements.get('simplr-contact-page')) {
    customElements.define('simplr-contact-page', SimplrContactPage);
}

import { LitElement, html, css } from 'lit-element';
import '@simplr-wc/card';
import '@simplr-wc/button';
import './components/app-window';
import './components/highlight-number';
import root from './utils/rootpath';
import { github } from './icons/github';
import { linkedin } from './icons/linkedin';
import { twitter } from './icons/twitter';

export default class SimplrContactPage extends LitElement {
    static get properties() {
        return {};
    }

    constructor() {
        super();
    }

    firstUpdated() { }

    render() {
        return html`
            <h2>Contact</h2>

            <site-footer></site-footer> `;
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
        `;
    }
}

if (!customElements.get('simplr-contact-page')) {
    customElements.define('simplr-contact-page', SimplrContactPage);
}

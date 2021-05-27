import { css, html, LitElement } from 'lit-element';
import { github } from '../icons/github';
import { linkedin } from '../icons/linkedin';
import { simplrWithText } from '../icons/simplr';
import { twitter } from '../icons/twitter';

class Footer extends LitElement {
    render() {
        return html`
            <div class="address-info">
                ${simplrWithText}
                <p>Simplr Oy</p>
                <p>Nuppulantie 35, 20320 Turku</p>
                <p>support@simplr.company</p>
                <p>+358 40 4152119</p>
            </div>
            <div class="footer-socials">
                <a href="https://github.com/Simplr">${github}</a>
                <a href="https://www.linkedin.com/company/simplrcompany/">${linkedin}</a>
                <a href="https://twitter.com/SimplrCompany">${twitter}</a>
            </div>
        `;
    }

    static get styles() {
        return css`
            :host {
                display: flex;
                width: 100%;
                min-height: 4rem;
                color: #232320;
                justify-content: space-between;
                padding: 10rem 20%;
                box-sizing: border-box;
            }

            .address-info p {
                padding-left: 0.25rem;
            }

            .footer-socials {
                display: flex;
                flex-direction: column;
            }

            .footer-socials svg {
                width: 3rem;
                height: 3rem;
                margin-bottom: 2rem;
            }

            svg {
                width: 200px;
                margin-bottom: 2rem;
            }
        `;
    }
}

if (!customElements.get('site-footer')) {
    customElements.define('site-footer', Footer);
}
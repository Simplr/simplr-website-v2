import { LitElement, html, css } from 'lit-element';
import root from '../utils/rootpath';

export default class TopBar extends LitElement {
    static get properties() {
        return {
            mobileopen: { type: Boolean, reflect: true },
        };
    }

    constructor() {
        super();
        this.mobileopen = false;
    }

    toggleMobileMenu() {
        if (this.mobileopen) {
            this.mobileopen = false;
        }
    }

    render() {
        return html`
            <style>
                ${this.getStyles()}
            </style>
            <a @click=${this.toggleMobileMenu} class="logo-link" href="/">
                <img src="${root()}assets/simplr_horisontal_black.svg" />
            </a>
            <nav class="links">
                <a @click=${this.toggleMobileMenu} id="mobile-home" href="${root()}">Home</a>
                <a @click=${this.toggleMobileMenu} href="${root()}development">Development</a>
                <a @click=${this.toggleMobileMenu} href="${root()}consulting">Consulting</a>
                <a @click=${this.toggleMobileMenu} href="${root()}contact">Contact</a>
            </nav>
            <button @click=${() => (this.mobileopen = true)} class="mobile-open">☰</button>
        `;
    }

    getStyles() {
        return css`
            :host {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 6rem;
                /*box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 1px 0px rgb(0 0 0 / 14%),
                    0px 1px 6px 0px rgb(0 0 0 / 12%);*/
                display: flex;
                z-index: 99;
                overflow: visible;
                background: #f0edeb;
                align-items: center;
                justify-content: space-between;
                padding: 2rem 20.5% 0;
                box-sizing: border-box;
            }

            #mobile-home {
                display: none;
            }

            .mobile-open {
                display: none;
            }

            .logo-link {
                height: 60%;
                transition: 200ms linear;
            }

            .logo-link img {
                height: 100%;
            }

            .logo-link:hover {
                filter: invert(53%) sepia(69%) saturate(4551%) hue-rotate(2deg) brightness(104%) contrast(105%);
            }

            nav {
                display: flex;
                justify-content: space-between;
                flex-basis: 60%;
            }

            a {
                color: #232320;
                text-decoration: none;
                font-weight: 700;
                font-size: 1.2rem;
                transition: 300ms ease-in-out;
                background-clip: text;
                text-fill-color: transparent;
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;

                background-image: linear-gradient(to right, #ff6d00, #ff6d00 50%, #232320 50%);
                background-size: 200% 100%;
                background-position: 100%;
            }

            a:hover {
                background-position: 0%;
            }

            @media only screen and (max-width: 720px) {
                .mobile-open {
                    display: flex;
                    background: none;
                    border: none;
                    font-size: 2rem;
                    position: fixed;
                    top: 1rem;
                    right: 1rem;
                }

                :host {
                    background: none;
                }

                :host([mobileopen]) .mobile-open {
                    display: none;
                }

                :host nav,
                :host a {
                    display: none;
                    opacity: 0;
                }

                :host([mobileopen]) nav,
                :host([mobileopen]) a {
                    display: block;
                    opacity: 1;
                }

                :host([mobileopen]) {
                    background: #f0edeb;
                    padding: 2rem 5%;
                    flex-direction: column;
                    height: 100vh;
                    position: fixed;
                    opacity: 1;
                }

                .logo-link {
                    display: flex;
                    justify-content: center;
                    height: unset;
                }

                .logo-link img {
                    height: unset;
                    width: 80%;
                }

                #mobile-home {
                    display: flex;
                }

                nav {
                    flex-basis: 60%;
                    flex-direction: column;
                    justify-content: center;
                }

                nav * {
                    margin: 3rem 0;
                    font-size: 2rem;
                }
            }
        `;
    }
}

if (!customElements.get('top-bar')) {
    customElements.define('top-bar', TopBar);
}

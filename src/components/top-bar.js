import { LitElement, html, css } from 'lit-element';
import root from "../utils/rootpath";

export default class TopBar extends LitElement {
    render() {
        return html`
            <style>
                ${this.getStyles()}
            </style>
            <a class="logo-link" href="#">
                <img src="${root()}assets/simplr_horisontal_black.svg" />
            </a>
            <nav class="links">
                <a href="#">Development</a>
                <a href="#">Consulting</a>
                <a href="#">Contact</a>
            </nav>
        `;
    }

    getStyles() {
        return css`
            :host {
                position: absolute;
                top: 2rem;
                left: 0;
                width: 100%;
                height: 4rem;
                /*box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 1px 0px rgb(0 0 0 / 14%),
                    0px 1px 6px 0px rgb(0 0 0 / 12%);*/
                display: flex;
                z-index: 99;
                overflow: visible;
                /*background: #fff;*/
                align-items: center;
                justify-content: space-between;
                padding: 0 20.5%;
                box-sizing: border-box;
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
                
                background-image: linear-gradient(to right, #ff6d00, #ff6d00 50%,  #232320 50%);
                background-size: 200% 100%;
                background-position: 100%;
            }

            a:hover {
                background-position: 0%;
            }
        `;
    }
}

if (!customElements.get('top-bar')) {
    customElements.define('top-bar', TopBar);
}

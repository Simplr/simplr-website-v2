import { LitElement, html, css } from 'lit-element';

export default class TopBar extends LitElement {
    render() {
        return html`
            <style>
                ${this.getStyles()}
            </style>
            <img src="/assets/simplr_horisontal_black.svg" />
        `;
    }

    getStyles() {
        return css`
            :host {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 4rem;
                box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 1px 0px rgb(0 0 0 / 14%),
                    0px 1px 6px 0px rgb(0 0 0 / 12%);
                display: flex;
                z-index: 99;
                overflow: visible;
                background: #fff;
                align-items: center;
                padding: 0 20%;
            }

            img {
                height: 60%;
            }
        `;
    }
}

if (!customElements.get('top-bar')) {
    customElements.define('top-bar', TopBar);
}

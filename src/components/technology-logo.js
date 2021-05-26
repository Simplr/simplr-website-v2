import { css, html, LitElement } from 'lit-element';

class TechnologyLogo extends LitElement {
    static get properties() {
        return {
            title: { type: String },
            imageUrl: { type: String },
        };
    }

    constructor() {
        super();
        this.title = '';
        this.imageUrl = '';
    }

    firstUpdated() {
        this.realWidth = this.shadowRoot.querySelector('p').clientWidth;
        this.style.setProperty('--tech-elem-title-width', "0");
        this.style.setProperty('--tech-elem-title-hover-width', this.realWidth + "px");
    }

    render() {
        return html`
            <img src="${this.imageUrl}" alt="${this.title}" />
            <p>${this.title}</p>
        `;
    }

    static get styles() {
        return css`
            :host {
                display: flex;
                margin: 0 1rem;
                --tech-elem-title-hover-width: auto;
                --tech-elem-title-width: auto;
                transition: 200ms ease-in-out;
                transform-origin: left;
                align-items: center;
            }

            p {
                padding-left: 1rem;
                transform: scaleX(0);
                width: var(--tech-elem-title-width);
                transition: 200ms ease-in-out;
                transform-origin: left;
                margin: 0;
                white-space: pre;
            }

            img:hover ~ p {
                transform: scaleX(1);
                width: var(--tech-elem-title-hover-width);
            }

            img:hover  {
                transform: scale(1.1);
            }

            img {
                height: 4rem;
                width: 4rem;
                transition: 200ms ease-in-out;
            }
        `;
    }
}

if (!customElements.get('technology-logo')) {
    customElements.define('technology-logo', TechnologyLogo);
}

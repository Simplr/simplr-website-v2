import { css, html, LitElement } from 'lit-element';

class HighlightNumber extends LitElement {
    static get properties() {
        return {
            count: { type: String, reflect: true },
            title: { type: String, reflect: true },
        };
    }

    constructor() {
        super();
        this.count = '0';
        this.title = '';
    }

    render() {
        return html`
            <h2>${this.count}</h2>
            <p>${this.title}</p>
        `;
    }

    static get styles() {
        return css`
            :host {
                display: flex;
                flex-direction: column;
                align-items: center;
            }
            h2 {
                color: var(--primary-color);
            }

            h2,
            p {
                margin: 0.5rem;
            }
        `;
    }
}

if (!customElements.get('highlight-number')) {
    customElements.define('highlight-number', HighlightNumber);
}

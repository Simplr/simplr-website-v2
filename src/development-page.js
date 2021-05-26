import { LitElement, html, css } from 'lit-element';
import '@simplr-wc/card';
import '@simplr-wc/button';
import './components/technology-logo.js';

export default class SimplrDevelopmentPage extends LitElement {
    static get properties() {
        return {};
    }

    constructor() {
        super();
    }

    firstUpdated() { }

    render() {
        return html`
            <div class="content-pane main-pane">
                <h2>Development</h2>
                <p>
                    At Simplr we focus on creating closed- and open source software and developer tooling to best match
                    the requirements of the users.
                </p>
            </div>

            <div class="content-pane technologies-pane">
                <h2>Our technologies:</h2>
                <div class="technologies">
                <technology-logo imageUrl="/assets/javascript-logo.png" title="Javascript"></technology-logo>
                <technology-logo imageUrl="/assets/lit.png" title="Lit"></technology-logo>
                <technology-logo imageUrl="/assets/c-sharp.png" title="C#"></technology-logo>
                <technology-logo imageUrl="/assets/java.png" title="Java"></technology-logo>
                <technology-logo imageUrl="/assets/web-components.png" title="Web Components"></technology-logo>
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

            .content-pane {
                display: flex;
                flex-direction: column;
                width: var(--content-width);
                margin-top: 10.5vh;
                text-align: center;
                align-items: center;
                justify-content: center;
            }

            .content-pane p {
                max-width: 750px;
            }

            .main-pane {
                margin-top: 20vh;
                height: 70vh;
            }

            .technologies-pane {

            }

            .technologies {
                display: flex;
                justify-content: flex-start;
                width: 50%;
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

if (!customElements.get('simplr-development-page')) {
    customElements.define('simplr-development-page', SimplrDevelopmentPage);
}

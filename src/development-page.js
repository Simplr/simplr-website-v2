import { LitElement, html, css } from 'lit-element';
import '@simplr-wc/card';
import '@simplr-wc/button';
import './components/technologies-list.js';
import root from './utils/rootpath.js';
import { scrollToBlock } from './utils/scroller.js';
import { viewCSS } from './style/shared.js';

export default class SimplrDevelopmentPage extends LitElement {
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
                <h2>Development</h2>
                <p>
                    At Simplr we focus on creating closed- and open source software and developer tooling to best match
                    the requirements of the users.
                </p>
            </div>

            <div class="content-pane technologies-pane">
                <h2>Our expertise:</h2>
                <technologies-list></technologies-list>
            </div>

            <div class="content-pane source-pane" id="open">
                <div class="source-pane-content">
                    <h2>Open Source</h2>
                    <p>
                        At Simplr we value open source culture and endorse our employees to create and contribute to
                        projects they use and enjoy.
                    </p>
                    <p>
                        Some of the projects developer by the Simplr developers can be found under the
                        <a target="_blank" href="https://github.com/Simplr">@simplr organization on Github</a>
                    </p>
                </div>
                <div class="source-pane-image">
                    <img src="${root()}assets/open-source.svg" />
                </div>
            </div>

            <div class="content-pane source-pane" id="closed">
                <div class="source-pane-image">
                    <img src="${root()}assets/business-deal.svg" />
                </div>
                <div class="source-pane-content">
                    <h2>Closed Source</h2>
                    <p>
                        On top of working on open source solutions, we deliver high quality closed source projects to
                        our customers matching the needs of the company. We write the software, you keep the ownership.
                    </p>
                </div>
            </div>

            <site-footer></site-footer>
        `;
    }
    static get styles() {
        return [viewCSS, css`
            .main-pane {
                animation: fade-in 1000ms;
            }

            .content-pane {
                display: flex;
                flex-direction: column;
                width: var(--content-width);
                margin-top: 10.5vh;
                height: 60vh;
                text-align: center;
                align-items: center;
                justify-content: center;
            }

            .content-pane p {
                max-width: 750px;
            }

            .source-pane {
                flex-direction: row;
                justify-content: center;
            }

            .source-pane-image {
                flex-basis: 40%;
            }

            .source-pane-content {
                text-align: left;
                flex-basis: 50%;
            }

            .source-pane-image img {
                width: 100%;
            }

            .main-pane {
                margin-top: 15vh;
                height: 72.5vh;
            }

            .technologies-pane h2 {
                margin-bottom: 4rem;
            }

            @media only screen and (max-width: 720px) {
                :host {
                    --content-width: 90%;
                }
                .technologies-pane {
                    height: unset;
                }

                .source-pane {
                    height: unset;
                    flex-direction: column;
                }

                #closed {
                    flex-direction: column-reverse;
                }
            }
        `];
    }
}

if (!customElements.get('simplr-development-page')) {
    customElements.define('simplr-development-page', SimplrDevelopmentPage);
}

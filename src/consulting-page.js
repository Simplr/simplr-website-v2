import { LitElement, html, css } from 'lit-element';
import '@simplr-wc/card';
import '@simplr-wc/button';
import './components/technology-logo.js';
import './components/reference-companies.js';
import root from './utils/rootpath.js';
import { scrollToBlock } from './utils/scroller.js';

export default class SimplrConsultingPage extends LitElement {
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
                <h2>Consulting</h2>
                <p>
                    Simplr provides professionals to aid you in your software development projects, train your employees
                    in modern technologies and to create your next big thing.
                </p>
            </div>

            <div class="content-pane role-pane">
                <div class="consulting-content">
                    <h2>As the leader or as a part of the team</h2>
                    <p>
                        Our consultants are from versatile backgrounds and are skilled in varying technologies and
                        life-skills. Furthermore we are ready to take as much responsibility as you want to give us.
                    </p>
                    <p>
                        Wether it is as a part of a bigger software development team, or in a leading role for your
                        team, We will provide you with the right consultants for the task.
                    </p>
                </div>
                <div class="consulting-image">
                    <img src="${root()}assets/project-team.svg" />
                </div>
            </div>

            <div class="content-pane role-pane">
                <div class="consulting-image">
                    <img src="${root()}assets/satisfaction.svg" />
                </div>
                <div class="consulting-content">
                    <h2>Satisfaction guaranteed</h2>
                    <p>
                        We always aim to give our best when working on your project, and strive to develop not only the
                        software, but the team and best practices in your company.
                    </p>
                    <p>The companies below have used our services so far.</p>
                </div>
            </div>
            <reference-companies></reference-companies>

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

            a {
                color: inherit;
                text-decoration: none;
                font-weight: bold;
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

            .role-pane {
                flex-direction: row;
                text-align: left;
                justify-content: space-between;
            }

            .consulting-image {
                flex-basis: 40%;
            }

            .consulting-content {
                text-align: left;
                flex-basis: 50%;
            }

            .consulting-image img {
                width: 100%;
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

if (!customElements.get('simplr-consulting-page')) {
    customElements.define('simplr-consulting-page', SimplrConsultingPage);
}

import{L as e,h as o,r as t,c as s}from"./router-16da0b9f.js";import"./button-df474c0a.js";import{s as n}from"./scroller-c4cc4269.js";class i extends e{render(){return o`
                <h3>Languages</h3>
                <div class="technologies">
                    <technology-logo
                        imageUrl="${t()}assets/javascript-logo.png"
                        title="Javascript"
                    ></technology-logo>
                    <technology-logo imageUrl="${t()}assets/typescript.png" title="Typescript"></technology-logo>
                    <technology-logo imageUrl="${t()}assets/c-sharp.png" title="C#"></technology-logo>
                    <technology-logo imageUrl="${t()}assets/java.png" title="Java"></technology-logo>
                    <technology-logo imageUrl="${t()}assets/clojure.png" title="Clojure"></technology-logo>
                </div>
                <h3>Technologies</h3>
                <div class="technologies">
                    <technology-logo imageUrl="${t()}assets/aspnet-core.png" title="ASP.NET Core"></technology-logo>
                    <technology-logo imageUrl="${t()}assets/lit.png" title="Lit"></technology-logo>
                    <technology-logo imageUrl="${t()}assets/react.svg" title="React"></technology-logo>
                    <technology-logo
                        imageUrl="${t()}assets/web-components.png"
                        title="Web Components"
                    ></technology-logo>
                    <technology-logo imageUrl="${t()}assets/nodejs.png" title="NodeJS"></technology-logo>
                    <technology-logo imageUrl="${t()}assets/pwa.png" title="Progressive Web Apps"></technology-logo>
                    <technology-logo imageUrl="${t()}assets/quarkus.png" title="Quarkus"></technology-logo>
                </div>
        `}static get styles(){return s`


            .technologies {
                display: flex;
                justify-content: flex-start;
                width: 50%;
                margin-bottom: 2rem;
            }
    `}}customElements.get("technologies-list")||customElements.define("technologies-list",i);class l extends e{static get properties(){return{}}constructor(){super()}firstUpdated(){n(this.shadowRoot)}render(){return o`
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
                    <img src="${t()}assets/open-source.svg" />
                </div>
            </div>

            <div class="content-pane source-pane" id="closed">
                <div class="source-pane-image">
                    <img src="${t()}assets/business-deal.svg" />
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
        `}static get styles(){return s`
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

            @keyframes fade-in {
                from {
                    transform: translate(0, 100px);
                    opacity: 0;
                }
            }
        `}}customElements.get("simplr-development-page")||customElements.define("simplr-development-page",l);export default l;

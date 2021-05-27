import { css, html, LitElement } from "lit-element";
import root from "../utils/rootpath";
import "./technology-logo.js";

class TechnologiesList extends LitElement {

    render() {
        return html`
                <h3>Languages</h3>
                <div class="technologies">
                    <technology-logo
                        imageUrl="${root()}assets/javascript-logo.png"
                        title="Javascript"
                    ></technology-logo>
                    <technology-logo imageUrl="${root()}assets/typescript.png" title="Typescript"></technology-logo>
                    <technology-logo imageUrl="${root()}assets/c-sharp.png" title="C#"></technology-logo>
                    <technology-logo imageUrl="${root()}assets/java.png" title="Java"></technology-logo>
                    <technology-logo imageUrl="${root()}assets/clojure.png" title="Clojure"></technology-logo>
                </div>
                <h3>Technologies</h3>
                <div class="technologies">
                    <technology-logo imageUrl="${root()}assets/aspnet-core.png" title="ASP.NET Core"></technology-logo>
                    <technology-logo imageUrl="${root()}assets/lit.png" title="Lit"></technology-logo>
                    <technology-logo imageUrl="${root()}assets/react.svg" title="React"></technology-logo>
                    <technology-logo
                        imageUrl="${root()}assets/web-components.png"
                        title="Web Components"
                    ></technology-logo>
                    <technology-logo imageUrl="${root()}assets/nodejs.png" title="NodeJS"></technology-logo>
                    <technology-logo imageUrl="${root()}assets/pwa.png" title="Progressive Web Apps"></technology-logo>
                    <technology-logo imageUrl="${root()}assets/quarkus.png" title="Quarkus"></technology-logo>
                </div>
        `;
    }

    static get styles() {
        return css`
            .technologies {
                display: flex;
                justify-content: space-between;
                width: 50%;
                margin-bottom: 2rem;
            }

            @media only screen and (max-width: 720px) {
                .technologies {
                    width: 100%;
                    flex-wrap: wrap;
                }

                    technology-logo {
                        margin-bottom: 2rem;
                    }
            }
    `;
    }
}

if (!customElements.get("technologies-list")) {
    customElements.define("technologies-list", TechnologiesList);
}

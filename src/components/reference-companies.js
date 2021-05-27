import { css, html, LitElement } from 'lit-element';
import root from '../utils/rootpath';
import '@simplr-wc/card';

class ReferenceCompanies extends LitElement {
    render() {
        return html`
            <simplr-card>
                <div>
                    <a target="_blank" href="https://www.fcg.fi/en"><img src="${root()}assets/fcg.svg" /></a>
                    <a target="_blank" href="https://www.visma.fi/tampuuri/"><img src="${root()}assets/visma-tampuuri.jpg" /></a>
                    <a target="_blank" href="https://auranmaanhammaslaakarit.fi/"
                        ><img style="width: 15rem;" src="${root()}assets/alh.png"
                    /></a>
                    <a target="_blank" href="http://thinger.fi"><img style="height: 60%;" src="${root()}assets/thinger.png" /></a>
                </div>
            </simplr-card>
        `;
    }

    static get styles() {
        return css`
            :host {
                width: 80%;
                display: flex;
                justify-content: center;
            }

            simplr-card {
                max-width: unset;
                border-radius: 8px;
            }

            simplr-card div {
                display: flex;
                justify-content: center;
                align-items: center;
            }

            img {
                width: 10rem;
                margin: 0 2rem;
            }

            @media only screen and (max-width: 720px) {

                :host {
                    margin-top: 20vh;
                }

                simplr-card div {
                    flex-direction: column;
                }

                a {
                    margin: 2rem 0;
                }
            }
        `;
    }
}

if (!customElements.get('reference-companies')) {
    customElements.define('reference-companies', ReferenceCompanies);
}

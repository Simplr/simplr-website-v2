import{L as t,h as e,r as s,c as a}from"./router-fffdc7a6.js";import"./button-c759617a.js";class r extends t{render(){return e`
            <simplr-card>
                <div>
                    <a target="_blank" href="https://www.fcg.fi/en"><img src="${s()}assets/fcg.svg" /></a>
                    <a target="_blank" href="https://www.visma.fi/tampuuri/"><img src="${s()}assets/visma-tampuuri.jpg" /></a>
                    <a target="_blank" href="https://auranmaanhammaslaakarit.fi/"
                        ><img style="width: 15rem;" src="${s()}assets/alh.png"
                    /></a>
                    <a target="_blank" href="http://thinger.fi"><img style="height: 60%;" src="${s()}assets/thinger.png" /></a>
                </div>
            </simplr-card>
        `}static get styles(){return a`
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
        `}}customElements.get("reference-companies")||customElements.define("reference-companies",r);

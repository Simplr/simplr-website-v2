import{L as e,h as t,r as s,c as a}from"./router-16da0b9f.js";import"./button-df474c0a.js";import{s as i}from"./scroller-c4cc4269.js";class n extends e{render(){return t`
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
        `}}customElements.get("reference-companies")||customElements.define("reference-companies",n);class r extends e{static get properties(){return{}}constructor(){super()}firstUpdated(){i(this.shadowRoot)}render(){return t`
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
                    <img src="${s()}assets/project-team.svg" />
                </div>
            </div>

            <div class="content-pane role-pane">
                <div class="consulting-image">
                    <img src="${s()}assets/satisfaction.svg" />
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
        `}static get styles(){return a`
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
        `}}customElements.get("simplr-consulting-page")||customElements.define("simplr-consulting-page",r);export default r;

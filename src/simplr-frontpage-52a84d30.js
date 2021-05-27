import{L as t,h as e,c as i,r as n,g as r,l as o,t as s}from"./router-fffdc7a6.js";import"./button-c759617a.js";class a extends t{render(){return e`
            <style>
                ${this.getStyles()}
            </style>

            <div class="topbar">
                <div></div>
                <div></div>
                <div></div>
                <div class="tab"></div>

            </div>
            <div class="window">
                <slot></slot>
            </div>
        `}getStyles(){return i`
            :host {
                width: 100%;
                border-radius: 8px;
                box-shadow: 0px 3px 3px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%),
                    0px 1px 8px 0px rgb(0 0 0 / 12%);
                background: lightgrey;
                display: flex;
                flex-direction: column;
                align-items: center;
            }

            .topbar {
                width: 100%;
                height: 2rem;
                display: flex;
                align-items: center;
                margin-left: 0.4rem;
            }

            .topbar div {
                width: 0.6rem;
                height: 0.6rem;
                border-radius: 50%;
                background: red;
                margin-left: 0.25rem; 
            }

            .topbar div:nth-child(2) {
                background: orange;
            }
            .topbar div:nth-child(3) {
                background: green;
            }

            .topbar .tab {
                background: #FFF;
                height: 82.5%;
                width: 5rem;
                transform: translate(1rem, 17.5%);
                border-radius: 8px 8px 0 0;

            }

            .window {
                width: calc(100% - 1rem);
                background: #fff;
                margin: 0 0 0.5rem;
            }
        `}}customElements.get("app-window")||customElements.define("app-window",a);class c extends t{static get properties(){return{count:{type:String,reflect:!0},title:{type:String,reflect:!0}}}constructor(){super(),this.count="0",this.title=""}render(){return e`
            <h2>${this.count}</h2>
            <p>${this.title}</p>
        `}static get styles(){return i`
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
        `}}customElements.get("highlight-number")||customElements.define("highlight-number",c);class l extends t{static get properties(){return{}}constructor(){super()}firstUpdated(){}render(){return e`
            ${this.getHeroContent()} ${this.getIntroductionContent()} ${this.getContactContent()}

            <site-footer></site-footer>
        `}getHeroContent(){return e`
            <div class="hero-content">
                <h2 class="hero-title">We provide...</h2>
                <div class="hero-cards">
                    <simplr-card id="development-card">
                        <slot name="content">
                            <h2>Full-Stack Development</h2>
                            <app-window>
                                <img src="${n()}assets/search_undraw.svg" />
                            </app-window>
                            <div class="buttons">
                                <a href="${n()}development#closed">
                                    <simplr-button elevated primary>Products</simplr-button>
                                </a>
                                <a href="${n()}development#open">
                                    <simplr-button elevated secondary>Open Source</simplr-button>
                                </a>
                            </div>
                        </slot>
                    </simplr-card>
                    <simplr-card id="consulting-card">
                        <slot name="content">
                            <h2>Consulting</h2>
                            <img src="${n()}assets/consulting_undraw.svg" />
                            <div class="buttons">
                                <a href="${n()}consulting">
                                    <simplr-button outlined primary>Find out more</simplr-button>
                                </a>
                            </div>
                        </slot>
                    </simplr-card>
                </div>
            </div>
        `}getIntroductionContent(){return e` <div class="intro-content">
            <h2 class="intro-title">Simplr in numbers</h2>
            <div>
                <div class="highlight-collection">
                    <highlight-number count="2" title="Professional developers"></highlight-number>
                    <highlight-number count="1" title="Vim user"></highlight-number>
                    <highlight-number count="24" title="Cones of Ice Cream in the freezer"></highlight-number>
                    <highlight-number count="0%" title="Micromanagement"></highlight-number>
                    <highlight-number count="~1200" title="Github Commits in the past year"></highlight-number>
                    <highlight-number count="> 25" title="Published Web Components"></highlight-number>
                    <highlight-number count="> 5" title="Published Javascript libraries"></highlight-number>
                    <highlight-number count="> 10" title="Finished projects"></highlight-number>
                    <highlight-number count="4" title="Satisfied customer companies"></highlight-number>
                </div>
            </div>
        </div>`}getContactContent(){return e`
            <div class="contact-content">
                <h2 class="contact-title">Get in contact with us</h2>

                <div class="contacts">
                    <a href="https://github.com/Simplr">${r}</a>
                    <a href="https://www.linkedin.com/company/simplrcompany/">${o}</a>
                    <a href="https://twitter.com/SimplrCompany">${s}</a>
                </div>
            </div>
        `}static get styles(){return i`
            :host {
                display: flex;
                flex-direction: column;
                width: 100%;
                font-size: 1.5rem;
                align-items: center;
                position: relative;
                --content-width: 80%;
            }

            @keyframes fade-in {
                from {
                    transform: translate(0, 100px);
                    opacity: 0;
                }
            }

            a {
                text-decoration: none;
            }

            simplr-card {
                border-radius: 16px;
                max-width: unset;
            }

            simplr-button {
                white-space: nowrap;
            }

            app-window {
                margin: 2rem 0;
            }

            .contact-title {
                margin-bottom: 4rem;
            }

            .contacts {
                display: flex;
                justify-content: space-between;
            }

            .contacts * {
                margin: 0 1rem;
            }

            .contact-content svg {
                width: 5rem;
                height: 5rem;
            }

            .contact-content a {
                transition: 200ms ease-in-out;
            }

            .contact-content a:hover {
                fill: var(--primary-color);
            }

            .hero-content,
            .intro-content,
            .contact-content {
                display: flex;
                flex-direction: column;
                width: var(--content-width);
                margin-top: 10.5vh;
                height: calc(100vh - 12.5vh);
                text-align: center;
                align-items: center;
                justify-content: center;
            }

            .intro-content,
            .contact-content {
                justify-content: flex-start;
            }

            .contact-content {
                height: calc(100vh - 45vh);
            }

            .hero-content slot[name='content'] {
                height: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-between;
            }

            .hero-content h2 {
                font-weight: 900;
                margin: 0;
            }

            .hero-title {
                animation: fade-in 1000ms;
            }

            .hero-content simplr-card {
                box-sizing: border-box;
            }

            .hero-cards {
                display: flex;
                justify-content: center;
                align-items: center;
                margin-top: 2%;
                width: 100%;
                flex-basis: 75%;
                animation: fade-in 1500ms;
            }

            #development-card img {
                margin: 3rem 0 2rem;
                width: 50%;
                height: auto;
                fill: #ff6d00;
            }

            #development-card .buttons {
                display: flex;
                justify-content: space-between;
                width: 100%;
            }

            #development-card simplr-button {
                --size: 18px;
            }

            #development-card {
                padding: 2rem 3rem;
                max-width: 450px;
            }

            #consulting-card {
                padding: 4rem 3rem;
                background: lightsalmon;
                max-width: 550px;
                margin-left: 1rem;
            }

            #consulting-card img {
                width: 80%;
                margin: 2rem 0;
                filter: drop-shadow(6px 12px 6px rgba(0, 0, 0, 0.12));
            }

            #consulting-card .buttons {
                justify-content: center;
            }

            #consulting-card simplr-button {
                --size: 22px;
                --primary-color: #fff;
                font-weight: 700;
            }

            .highlight-collection {
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                margin-top: 3rem;
            }

            .highlight-collection * {
                flex-basis: 30%;
                margin-bottom: 4rem;
            }
        `}}customElements.get("simplr-frontpage")||customElements.define("simplr-frontpage",l);export default l;

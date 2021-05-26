import{L as t,h as e,c as o}from"./router-650f1d97.js";import"./button-8211d44e.js";class i extends t{static get properties(){return{title:{type:String},imageUrl:{type:String}}}constructor(){super(),this.title="",this.imageUrl=""}firstUpdated(){this.realWidth=this.shadowRoot.querySelector("p").clientWidth,this.style.setProperty("--tech-elem-title-width","0"),this.style.setProperty("--tech-elem-title-hover-width",this.realWidth+"px")}render(){return e`
            <img src="${this.imageUrl}" alt="${this.title}" />
            <p>${this.title}</p>
        `}static get styles(){return o`
            :host {
                display: flex;
                margin: 0 1rem;
                --tech-elem-title-hover-width: auto;
                --tech-elem-title-width: auto;
                transition: 200ms ease-in-out;
                transform-origin: left;
                align-items: center;
            }

            p {
                padding-left: 1rem;
                transform: scaleX(0);
                width: var(--tech-elem-title-width);
                transition: 200ms ease-in-out;
                transform-origin: left;
                margin: 0;
                white-space: pre;
            }

            img:hover ~ p {
                transform: scaleX(1);
                width: var(--tech-elem-title-hover-width);
            }

            img:hover  {
                transform: scale(1.1);
            }

            img {
                height: 4rem;
                width: 4rem;
                transition: 200ms ease-in-out;
            }
        `}}customElements.get("technology-logo")||customElements.define("technology-logo",i);class s extends t{static get properties(){return{}}constructor(){super()}firstUpdated(){}render(){return e`
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
        `}static get styles(){return o`
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
        `}}customElements.get("simplr-development-page")||customElements.define("simplr-development-page",s);export default s;

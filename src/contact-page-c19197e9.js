import{h as t,L as e,c as n}from"./router-b42803a7.js";import"./button-8523e676.js";import{s as i}from"./scroller-84648350.js";import"./reference-companies-15153cee.js";const a=t`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6.176 1.322l2.844-1.322 4.041 7.89-2.724 1.341c-.538 1.259 2.159 6.289 3.297 6.372.09-.058 2.671-1.328 2.671-1.328l4.11 7.932s-2.764 1.354-2.854 1.396c-7.862 3.591-19.103-18.258-11.385-22.281zm1.929 1.274l-1.023.504c-5.294 2.762 4.177 21.185 9.648 18.686l.971-.474-2.271-4.383-1.026.5c-3.163 1.547-8.262-8.219-5.055-9.938l1.007-.497-2.251-4.398z"/></svg>`,s=t`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/></svg>`;class o extends e{static get properties(){return{}}constructor(){super()}firstUpdated(){i(this.shadowRoot)}render(){return t`
            <div class="content-pane main-pane">
                <h2>Contact</h2>
                <p>Get in contact with us!</p>
                <div class="contacts">
                    <div class="contact-container">
                        <p><b>Santeri Wikström, CEO, Software Developer</b></p>
                        <p>${a} +358 40 4152119</p>
                        <p>${s} santeri@simplr.company</p>
                    </div>
                    <div class="contact-container">
                        <p><b>Matias Huhta, CTO, Software Engineer</b></p>
                        <p>${a} +358 44 2065502</p>
                        <p>${s} matias@simplr.company</p>
                    </div>
                </div>
            </div>

            <site-footer></site-footer>
        `}static get styles(){return n`
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

            .contacts {
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
            }

            .contact-container {
                margin-top: 2rem;
                text-align: left;
                white-space: nowrap;
            }

            .contact-container p {
                display: flex;
                align-items: center;
            }

            .contact-container svg {
                width: 2rem;
                height: 2rem;
                margin-right: 2rem;
            }

            @keyframes fade-in {
                from {
                    transform: translate(0, 100px);
                    opacity: 0;
                }
            }

            @media only screen and (max-width: 720px) {
                :host {
                    --content-width: 80%;
                }

                .main-pane {
                    height: unset;
                }

                .contact-container {
                    white-space: unset;
                }
            }
        `}}customElements.get("simplr-contact-page")||customElements.define("simplr-contact-page",o);export default o;

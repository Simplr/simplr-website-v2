import{L as t,h as e,c as s}from"./router-dc99e7c0.js";import"./button-ad9a9021.js";import"./highlight-number-e08380eb.js";class r extends t{static get properties(){return{}}constructor(){super()}firstUpdated(){}render(){return e`
            <h2>Consulting</h2>

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

            @keyframes fade-in {
                from {
                    transform: translate(0, 100px);
                    opacity: 0;
                }
            }

        `}}customElements.get("simplr-consulting-page")||customElements.define("simplr-consulting-page",r);export default r;

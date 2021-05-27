import{L as t,h as e,c as r}from"./router-4dd580c4.js";import"./card-e1020cd0.js";import"@simplr-wc/button";import"./highlight-number-aca89b4f.js";class s extends t{static get properties(){return{}}constructor(){super()}firstUpdated(){}render(){return e`
            <h2>Contact</h2>

            <site-footer></site-footer> `}static get styles(){return r`
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
        `}}customElements.get("simplr-contact-page")||customElements.define("simplr-contact-page",s);export default s;

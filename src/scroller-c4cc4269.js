import{L as t,h as e,c as i}from"./router-16da0b9f.js";class r extends t{static get properties(){return{title:{type:String},imageUrl:{type:String}}}constructor(){super(),this.title="",this.imageUrl=""}firstUpdated(){this.realWidth=this.shadowRoot.querySelector("p").clientWidth,this.style.setProperty("--tech-elem-title-width","0"),this.style.setProperty("--tech-elem-title-hover-width",this.realWidth+"px")}render(){return e`
            <img src="${this.imageUrl}" alt="${this.title}" />
            <p>${this.title}</p>
        `}static get styles(){return i`
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
                transition: 100ms ease-in-out;
                transform-origin: left;
                margin: 0;
                white-space: pre;
            }

            img:hover ~ p {
                transform: scaleX(1);
                width: var(--tech-elem-title-hover-width);
                transition: 200ms ease-in-out;
            }

            img:hover  {
                transform: scale(1.1);
            }

            img {
                height: 4rem;
                width: 4rem;
                transition: 200ms ease-in-out;
            }
        `}}function s(t){const e=window.location.hash;if(!e)return;const i=t.querySelector(e);if(i){const t=document.querySelector("simplr-router-container[entering-view]");t?t.addEventListener("transitionend",(()=>{i.scrollIntoView({behavior:"smooth"})})):i.scrollIntoView({behavior:"smooth"})}}customElements.get("technology-logo")||customElements.define("technology-logo",r);export{s};

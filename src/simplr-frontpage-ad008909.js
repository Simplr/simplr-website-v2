import{r as t,h as e,L as i,c as r,a as o,g as n,l as s,t as a}from"./router-ac8e7279.js";
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function l(t,e,i,r){var o,n=arguments.length,s=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,r);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(n<3?o(s):n>3?o(e,i,s):o(e,i))||s);return n>3&&s&&Object.defineProperty(e,i,s),s}function c(t){return function(e){e._is=t,customElements.get(t)||customElements.define(t,e)}}function d(t){return function(e,i){Object.defineProperty(e,i,{get:function(){return this._properties.get(i)},set:function(e){const r=this._properties.get(i);this._properties.set(i,e),function(t,e,i,r){if(!r||void 0===r)return;const o=e.toLowerCase();switch(typeof i){case"boolean":i?t.setAttribute(o,""):t.removeAttribute(o);break;case"string":null==i?t.removeAttribute(o):t.setAttribute(o,i)}}(this,i.toString(),e,t.reflect),this._queuePropertyUpdate(i.toString(),r)}})}}function h(i){const r=function(t){return e`
        <style>
            ${t.css}
        </style>
        ${t.html}
    `}(i);const o=i.shadowRoot??i;t(r,o)}class p extends HTMLElement{constructor(){super(),this._properties=new Map,this._renderRequested=!1,this._updatedProperties=new Map,this._willUpdate=!1,this.requestRender()}beforeRender(){}afterRender(){}updated(t){}render(){h(this)}attributeChangedCallback(t,e,i){console.log("AttributeChangedCallback",{name:t,oldValue:e,newValue:i})}requestRender(){this._renderRequested||(this._renderRequested=!0,window.requestAnimationFrame((()=>{this.beforeRender(),this.render(),this.afterRender(),this._renderRequested=!1})))}publish(t,e){const i=new CustomEvent(t,{detail:e});this.dispatchEvent(i)}_queuePropertyUpdate(t,e){this._updatedProperties.set(t,e),this._willUpdate||(this._willUpdate=!0,window.requestAnimationFrame((()=>{this.updated(this._updatedProperties),this._updatedProperties=new Map,this.requestRender(),this._willUpdate=!1})))}}function u(t,...e){let i="",r=0;for(;r<e.length;)i+=t[r],i+=String(e[r]),r++;return i+=t[t.length-1],i}p._is=void 0;let m=class extends p{constructor(){super(),this.attachShadow({mode:"open"})}attributeChangedCallback(t,e,i){e!==i&&(this[t]=i)}static get observedAttributes(){return["label","subtitle"]}get html(){return e`
            <slot name="media"></slot>
            <div class="content">
                <h2>${this.label}</h2>
                <p>${this.subtitle}</p>
                <slot></slot>
            </div>
            <slot name="actions"></slot>
        `}get css(){return u`
            :host {
                min-width: 260px;
                width: fit-content;
                max-width: 330px;
                border-radius: 4px;
                box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14),
                    0px 1px 8px 0px rgba(0, 0, 0, 0.12);
                display: flex;
                flex-direction: column;
                background: #fff;
            }

            .content {
                padding: 1rem;
            }

            h2,
            p {
                margin: 0;
            }

            h2 {
                font-size: 1.25rem;
                margin-bottom: 0.25rem;
            }

            p {
                font-size: 0.875rem;
                opacity: 0.6;
            }

            .content {
                height: 100%;
            }

            slot::slotted(p) {
                font-size: 0.875rem;
                opacity: 0.6;
            }

            slot[name='actions']::slotted(div) {
                padding: 1rem;
                border-top: 1px solid #d6d1e0;
            }
        `}};l([d({reflect:!0})],m.prototype,"label",void 0),l([d({reflect:!0})],m.prototype,"subtitle",void 0),m=l([c("simplr-card")],m);let g=class extends p{constructor(){super(),this.disabled=!1,this.outlined=!1,this.contained=!1,this.elevated=!1,this.primary=!1,this.secondary=!1,this.success=!1,this.type="button",this.attachShadow({mode:"open"})}connectedCallback(){this.tabIndex=0,this.createButton(),this.addEventListeners()}updated(){this.updateButtonAttributes()}addEventListeners(){this.addEventListener("keyup",this.handleKeyboardEvent.bind(this)),this.addEventListener("click",(t=>{t.target===this&&(t.stopPropagation(),this.doClick())}),!0)}handleKeyboardEvent(t){" "!==t.key&&"Enter"!==t.key||this.doClick()}doClick(){this.buttonElem?.click()}createButton(){this.buttonElem=document.createElement("button"),this.buttonElem.tabIndex=-1,this.appendChild(this.buttonElem),this.updateButtonAttributes()}updateButtonAttributes(){this.buttonElem&&(this.buttonElem.type=this.type)}attributeChangedCallback(t,e,i){e!==i&&(this[t]=""===i||i)}static get observedAttributes(){return["disabled","type","primary","secondary","success","outlined","contained","elevated"]}get html(){return e`<slot></slot>`}get css(){return u`
            :host {
                --primary-color: #0087d7;
                --secondary-color: #f94416;
                --success-color: #41d888;

                --main-color: transparent;
                --text-color: var(--main-color);
                --ripple-color: var(--main-color);

                --size: 16px;

                position: relative;
                display: flex;
                align-items: center;
                text-align: center;
                font-size: var(--size);

                width: fit-content;
                cursor: pointer;
                line-height: 36px;
                padding: 0 16px;
                border-radius: 4px;
                outline: none;

                transition: 200ms ease-in-out;
                transition-property: background;

                background-color: transparent;
                color: var(--text-color);

                overflow: hidden;
            }

            :host([contained]) {
                background-color: var(--main-color);
                --text-color: #fff;
                --ripple-color: var(--text-color);
                font-weight: 700;
            }

            :host([outlined]) {
                border: 2px solid var(--main-color);
                --ripple-color: var(--text-color);
            }

            :host([elevated]) {
                --text-color: #fff;
                --ripple-color: var(--text-color);
                background-color: var(--main-color);
                font-weight: 700;
                box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14),
                    0px 1px 8px 0px rgba(0, 0, 0, 0.12);
            }

            :host([primary]) {
                --main-color: var(--primary-color);
            }
            :host([secondary]) {
                --main-color: var(--secondary-color);
            }
            :host([success]) {
                --main-color: var(--success-color);
            }

            :host(:focus) {
            }

            :host::after {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: var(--ripple-color);
                opacity: 0;
                transition: 200ms ease-in-out;
                pointer-events: none;
            }

            :host(:hover)::after,
            :host(:focus-visible)::after {
                opacity: 0.3;
            }

            :host::before {
                content: '';
                position: absolute;
                left: 0;
                top: 0;
                bottom: 0;
                right: 0;
                width: 2rem;
                height: 2rem;
                border-radius: 50%;
                margin: auto;
                background: var(--ripple-color);
                opacity: 0;
                transform: scale(8);
                transition: 600ms ease-in-out;
                pointer-events: none;
            }

            :host(:active)::before {
                opacity: 0.5;
                transform: scale(0);
                transition: 0ms;
            }

            ::slotted(svg) {
                fill: var(--text-color);
                height: var(--size);
                width: var(--size);
                padding-right: calc(var(--size) * 0.7);
            }

            ::slotted(button) {
                position: absolute;
                top: 0;
                left: 0;
                height: 0;
                width: 0;
                padding: 0;
                border: 0;
            }
        `}};l([d({reflect:!0})],g.prototype,"disabled",void 0),l([d({reflect:!0})],g.prototype,"outlined",void 0),l([d({reflect:!0})],g.prototype,"contained",void 0),l([d({reflect:!0})],g.prototype,"elevated",void 0),l([d({reflect:!0})],g.prototype,"primary",void 0),l([d({reflect:!0})],g.prototype,"secondary",void 0),l([d({reflect:!0})],g.prototype,"success",void 0),l([d({reflect:!0})],g.prototype,"type",void 0),l([d({})],g.prototype,"buttonElem",void 0),g=l([c("simplr-button")],g);class b extends i{render(){return e`
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
        `}getStyles(){return r`
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
        `}}customElements.get("app-window")||customElements.define("app-window",b);class f extends i{static get properties(){return{count:{type:String,reflect:!0},title:{type:String,reflect:!0}}}constructor(){super(),this.count="0",this.title=""}render(){return e`
            <h2>${this.count}</h2>
            <p>${this.title}</p>
        `}static get styles(){return r`
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
        `}}customElements.get("highlight-number")||customElements.define("highlight-number",f);class v extends i{static get properties(){return{}}constructor(){super()}firstUpdated(){}render(){return e`
            <style>
                ${this.renderStyles()}
            </style>

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
                                <img src="${o()}assets/search_undraw.svg" />
                            </app-window>
                            <div class="buttons">
                                <simplr-button elevated primary>Products</simplr-button>
                                <simplr-button elevated secondary>Open Source</simplr-button>
                            </div>
                        </slot>
                    </simplr-card>
                    <simplr-card id="consulting-card">
                        <slot name="content">
                            <h2>Consulting</h2>
                            <img src="${o()}assets/consulting_undraw.svg" />
                            <div class="buttons">
                                <simplr-button outlined primary>Find out more</simplr-button>
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
                <h2 class="contact-title">Get into contact with us</h2>

                <div class="contacts">
                    <a href="https://github.com/Simplr">${n}</a>
                    <a href="https://www.linkedin.com/company/simplrcompany/">${s}</a>
                    <a href="https://twitter.com/SimplrCompany">${a}</a>
                </div>
            </div>
        `}renderStyles(){return r`
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
                padding-bottom: 20rem;
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
        `}}customElements.get("simplr-frontpage")||customElements.define("simplr-frontpage",v);export default v;

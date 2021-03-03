import{r as t,h as e,L as r,c as o,a as i}from"./router-872ebe35.js";
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
***************************************************************************** */function n(t,e,r,o){var i,n=arguments.length,s=n<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,o);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(n<3?i(s):n>3?i(e,r,s):i(e,r))||s);return n>3&&s&&Object.defineProperty(e,r,s),s}function s(t){return function(e){e._is=t,customElements.get(t)||customElements.define(t,e)}}function a(t){return function(e,r){Object.defineProperty(e,r,{get:function(){return this._properties.get(r)},set:function(e){const o=this._properties.get(r);this._properties.set(r,e),function(t,e,r,o){if(!o||void 0===o)return;const i=e.toLowerCase();switch(typeof r){case"boolean":r?t.setAttribute(i,""):t.removeAttribute(i);break;case"string":null==r?t.removeAttribute(i):t.setAttribute(i,r)}}(this,r.toString(),e,t.reflect),this._queuePropertyUpdate(r.toString(),o)}})}}function d(r){const o=function(t){return e`
        <style>
            ${t.css}
        </style>
        ${t.html}
    `}(r);const i=r.shadowRoot??r;t(o,i)}class l extends HTMLElement{constructor(){super(),this._properties=new Map,this._renderRequested=!1,this._updatedProperties=new Map,this._willUpdate=!1,this.requestRender()}beforeRender(){}afterRender(){}updated(t){}render(){d(this)}attributeChangedCallback(t,e,r){console.log("AttributeChangedCallback",{name:t,oldValue:e,newValue:r})}requestRender(){this._renderRequested||(this._renderRequested=!0,window.requestAnimationFrame((()=>{this.beforeRender(),this.render(),this.afterRender(),this._renderRequested=!1})))}publish(t,e){const r=new CustomEvent(t,{detail:e});this.dispatchEvent(r)}_queuePropertyUpdate(t,e){this._updatedProperties.set(t,e),this._willUpdate||(this._willUpdate=!0,window.requestAnimationFrame((()=>{this.updated(this._updatedProperties),this._updatedProperties=new Map,this.requestRender(),this._willUpdate=!1})))}}function c(t,...e){let r="",o=0;for(;o<e.length;)r+=t[o],r+=String(e[o]),o++;return r+=t[t.length-1],r}l._is=void 0;let p=class extends l{constructor(){super(),this.attachShadow({mode:"open"})}attributeChangedCallback(t,e,r){e!==r&&(this[t]=r)}static get observedAttributes(){return["label","subtitle"]}get html(){return e`
            <slot name="media"></slot>
            <div class="content">
                <h2>${this.label}</h2>
                <p>${this.subtitle}</p>
                <slot></slot>
            </div>
            <slot name="actions"></slot>
        `}get css(){return c`
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
        `}};n([a({reflect:!0})],p.prototype,"label",void 0),n([a({reflect:!0})],p.prototype,"subtitle",void 0),p=n([s("simplr-card")],p);let h=class extends l{constructor(){super(),this.disabled=!1,this.outlined=!1,this.contained=!1,this.elevated=!1,this.primary=!1,this.secondary=!1,this.success=!1,this.type="button",this.attachShadow({mode:"open"})}connectedCallback(){this.tabIndex=0,this.createButton(),this.addEventListeners()}updated(){this.updateButtonAttributes()}addEventListeners(){this.addEventListener("keyup",this.handleKeyboardEvent.bind(this)),this.addEventListener("click",(t=>{t.target===this&&(t.stopPropagation(),this.doClick())}),!0)}handleKeyboardEvent(t){" "!==t.key&&"Enter"!==t.key||this.doClick()}doClick(){this.buttonElem?.click()}createButton(){this.buttonElem=document.createElement("button"),this.buttonElem.tabIndex=-1,this.appendChild(this.buttonElem),this.updateButtonAttributes()}updateButtonAttributes(){this.buttonElem&&(this.buttonElem.type=this.type)}attributeChangedCallback(t,e,r){e!==r&&(this[t]=""===r||r)}static get observedAttributes(){return["disabled","type","primary","secondary","success","outlined","contained","elevated"]}get html(){return e`<slot></slot>`}get css(){return c`
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
        `}};n([a({reflect:!0})],h.prototype,"disabled",void 0),n([a({reflect:!0})],h.prototype,"outlined",void 0),n([a({reflect:!0})],h.prototype,"contained",void 0),n([a({reflect:!0})],h.prototype,"elevated",void 0),n([a({reflect:!0})],h.prototype,"primary",void 0),n([a({reflect:!0})],h.prototype,"secondary",void 0),n([a({reflect:!0})],h.prototype,"success",void 0),n([a({reflect:!0})],h.prototype,"type",void 0),n([a({})],h.prototype,"buttonElem",void 0),h=n([s("simplr-button")],h);class u extends r{render(){return e`
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
        `}getStyles(){return o`
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
        `}}customElements.get("app-window")||customElements.define("app-window",u);class m extends r{static get properties(){return{}}constructor(){super()}firstUpdated(){}render(){return e`
            <style>
                ${this.renderStyles()}
            </style>

            ${this.getHeroContent()} ${this.getIntroductionContent()}
        `}getHeroContent(){return e`
            <div class="hero-content">
                <h2 class="hero-title">We provide...</h2>
                <div class="hero-cards">
                    <simplr-card id="development-card">
                        <slot name="content">
                            <h2>Full-Stack Development</h2>
                            <app-window>
                                <img src="${i()}assets/search_undraw.svg" />
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
                            <img src="${i()}assets/consulting_undraw.svg" />
                            <div class="buttons">
                                <simplr-button outlined primary>Find out more</simplr-button>
                            </div>
                        </slot>
                    </simplr-card>
                </div>
            </div>
        `}getIntroductionContent(){return e` <div class="intro-content">
            <h2 class="intro-title">We are...</h2>
        </div>`}renderStyles(){return o`
            :host {
                display: flex;
                flex-direction: column;
                width: 100%;
                font-size: 1.5rem;
                align-items: center;
                --content-width: 60%;
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

            .hero-content {
                display: flex;
                flex-direction: column;
                width: var(--content-width);
                margin-top: 10.5vh;
                height: calc(100vh - 12.5vh);
                text-align: center;
                align-items: center;
                justify-content: center;
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
                height: 80%;
            }

            #consulting-card {
                padding: 4rem 3rem;
                background: lightsalmon;
                max-width: 550px;
                margin-left: 1rem;
                height: 90%;
            }

            #consulting-card img {
                width: 80%;
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
        `}}customElements.get("simplr-frontpage")||customElements.define("simplr-frontpage",m);export default m;

import{a as t,h as e}from"./router-98dcfa0f.js";
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
***************************************************************************** */function o(t,e,o,r){var i,s=arguments.length,n=s<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,o,r);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(n=(s<3?i(n):s>3?i(e,o,n):i(e,o))||n);return s>3&&n&&Object.defineProperty(e,o,n),n}function r(t){return function(e){e._is=t,customElements.get(t)||customElements.define(t,e)}}function i(t){return function(e,o){Object.defineProperty(e,o,{get:function(){return this._properties.get(o)},set:function(e){const r=this._properties.get(o);this._properties.set(o,e),function(t,e,o,r){if(!r||void 0===r)return;const i=e.toLowerCase();switch(typeof o){case"boolean":o?t.setAttribute(i,""):t.removeAttribute(i);break;case"string":null==o?t.removeAttribute(i):t.setAttribute(i,o)}}(this,o.toString(),e,t.reflect),this._queuePropertyUpdate(o.toString(),r)}})}}function s(o){const r=function(t){return e`
        <style>
            ${t.css}
        </style>
        ${t.html}
    `}(o);const i=o.shadowRoot??o;t(r,i)}class n extends HTMLElement{constructor(){super(),this._properties=new Map,this._renderRequested=!1,this._updatedProperties=new Map,this._willUpdate=!1,this.requestRender()}beforeRender(){}afterRender(){}updated(t){}render(){s(this)}attributeChangedCallback(t,e,o){console.log("AttributeChangedCallback",{name:t,oldValue:e,newValue:o})}requestRender(){this._renderRequested||(this._renderRequested=!0,window.requestAnimationFrame((()=>{this.beforeRender(),this.render(),this.afterRender(),this._renderRequested=!1})))}publish(t,e){const o=new CustomEvent(t,{detail:e});this.dispatchEvent(o)}_queuePropertyUpdate(t,e){this._updatedProperties.set(t,e),this._willUpdate||(this._willUpdate=!0,window.requestAnimationFrame((()=>{this.updated(this._updatedProperties),this._updatedProperties=new Map,this.requestRender(),this._willUpdate=!1})))}}function a(t,...e){let o="",r=0;for(;r<e.length;)o+=t[r],o+=String(e[r]),r++;return o+=t[t.length-1],o}n._is=void 0;let d=class extends n{constructor(){super(),this.attachShadow({mode:"open"})}attributeChangedCallback(t,e,o){e!==o&&(this[t]=o)}static get observedAttributes(){return["label","subtitle"]}get html(){return e`
            <slot name="media"></slot>
            <div class="content">
                <h2>${this.label}</h2>
                <p>${this.subtitle}</p>
                <slot></slot>
            </div>
            <slot name="actions"></slot>
        `}get css(){return a`
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
        `}};o([i({reflect:!0})],d.prototype,"label",void 0),o([i({reflect:!0})],d.prototype,"subtitle",void 0),d=o([r("simplr-card")],d);let l=class extends n{constructor(){super(),this.disabled=!1,this.outlined=!1,this.contained=!1,this.elevated=!1,this.rounded=!1,this.primary=!1,this.secondary=!1,this.success=!1,this.type="button",this.name="",this.label="button",this.attachShadow({mode:"open"})}connectedCallback(){this.tabIndex=0,this.createButton(),this.addEventListeners()}updated(){this.updateButtonAttributes()}addEventListeners(){this.addEventListener("keyup",this.handleKeyboardEvent.bind(this)),this.addEventListener("click",(t=>{t.target===this&&(t.preventDefault(),t.stopPropagation(),this.doClick())}),!0)}handleKeyboardEvent(t){" "!==t.key&&"Enter"!==t.key||this.doClick()}doClick(){this.buttonElem?.click()}createButton(){this.buttonElem||this.querySelector("button")||(this.buttonElem=document.createElement("button"),this.buttonElem.tabIndex=-1,this.appendChild(this.buttonElem),this.updateButtonAttributes())}updateButtonAttributes(){this.buttonElem&&(this.buttonElem.type=this.type,this.buttonElem.name=this.name,this.buttonElem.setAttribute("aria-label",this.label))}attributeChangedCallback(t,e,o){e!==o&&(this[t]=""===o||o)}static get observedAttributes(){return["disabled","type","primary","secondary","success","outlined","contained","elevated","rounded","label","name"]}get html(){return e`<slot></slot>`}get css(){return a`
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

            :host([rounded]) {
                padding: 0.5rem;
                border-radius: 50%;
            }
            :host([rounded])::after {
                border-radius: 50%;
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

            :host([rounded]) ::slotted(svg) {
                padding: 0;
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
        `}};o([i({reflect:!0})],l.prototype,"disabled",void 0),o([i({reflect:!0})],l.prototype,"outlined",void 0),o([i({reflect:!0})],l.prototype,"contained",void 0),o([i({reflect:!0})],l.prototype,"elevated",void 0),o([i({reflect:!0})],l.prototype,"rounded",void 0),o([i({reflect:!0})],l.prototype,"primary",void 0),o([i({reflect:!0})],l.prototype,"secondary",void 0),o([i({reflect:!0})],l.prototype,"success",void 0),o([i({reflect:!0})],l.prototype,"type",void 0),o([i({reflect:!0})],l.prototype,"name",void 0),o([i({reflect:!0})],l.prototype,"label",void 0),o([i({})],l.prototype,"buttonElem",void 0),l=o([r("simplr-button")],l);

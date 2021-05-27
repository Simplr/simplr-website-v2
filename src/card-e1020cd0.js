import{a as e,h as t}from"./router-4dd580c4.js";
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
***************************************************************************** */function r(e,t,r,s){var i,n=arguments.length,o=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,r):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,s);else for(var d=e.length-1;d>=0;d--)(i=e[d])&&(o=(n<3?i(o):n>3?i(t,r,o):i(t,r))||o);return n>3&&o&&Object.defineProperty(t,r,o),o}function s(e){return function(t,r){Object.defineProperty(t,r,{get:function(){return this._properties.get(r)},set:function(t){const s=this._properties.get(r);this._properties.set(r,t),function(e,t,r,s){if(!s||void 0===s)return;const i=t.toLowerCase();switch(typeof r){case"boolean":r?e.setAttribute(i,""):e.removeAttribute(i);break;case"string":null==r?e.removeAttribute(i):e.setAttribute(i,r)}}(this,r.toString(),t,e.reflect),this._queuePropertyUpdate(r.toString(),s)}})}}function i(r){const s=function(e){return t`
        <style>
            ${e.css}
        </style>
        ${e.html}
    `}(r);const i=r.shadowRoot??r;e(s,i)}class n extends HTMLElement{constructor(){super(),this._properties=new Map,this._renderRequested=!1,this._updatedProperties=new Map,this._willUpdate=!1,this.requestRender()}beforeRender(){}afterRender(){}updated(e){}render(){i(this)}attributeChangedCallback(e,t,r){console.log("AttributeChangedCallback",{name:e,oldValue:t,newValue:r})}requestRender(){this._renderRequested||(this._renderRequested=!0,window.requestAnimationFrame((()=>{this.beforeRender(),this.render(),this.afterRender(),this._renderRequested=!1})))}publish(e,t){const r=new CustomEvent(e,{detail:t});this.dispatchEvent(r)}_queuePropertyUpdate(e,t){this._updatedProperties.set(e,t),this._willUpdate||(this._willUpdate=!0,window.requestAnimationFrame((()=>{this.updated(this._updatedProperties),this._updatedProperties=new Map,this.requestRender(),this._willUpdate=!1})))}}function o(e,...t){let r="",s=0;for(;s<t.length;)r+=e[s],r+=String(t[s]),s++;return r+=e[e.length-1],r}n._is=void 0;let d=class extends n{constructor(){super(),this.attachShadow({mode:"open"})}attributeChangedCallback(e,t,r){t!==r&&(this[e]=r)}static get observedAttributes(){return["label","subtitle"]}get html(){return t`
            <slot name="media"></slot>
            <div class="content">
                <h2>${this.label}</h2>
                <p>${this.subtitle}</p>
                <slot></slot>
            </div>
            <slot name="actions"></slot>
        `}get css(){return o`
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
        `}};var a;r([s({reflect:!0})],d.prototype,"label",void 0),r([s({reflect:!0})],d.prototype,"subtitle",void 0),d=r([(a="simplr-card",function(e){e._is=a,customElements.get(a)||customElements.define(a,e)})],d);

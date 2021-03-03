class t{constructor(t){this._parseOptions(t)}_parseOptions(t){this.routes=t.routes,this.rootPath=t.rootPath,this.debugging=t.debugging,this.transitionSpeed=null==t.transitionSpeed?200:t.transitionSpeed,this.notFoundAction=t.notFoundAction,this.forbiddenAction=t.forbiddenAction,this.disableTransition=t.disableTransition}}class e{constructor(t){this.rootPath=t.rootPath?this.handleLeadingAndTrailingSlash(t.rootPath):""}parseRoutes(t){if(!t)throw Error("No routes passed during initialization. \n\nPlease provide the routes in the initialization of Simplr Router.");let e=[],i=[];return this._iterateRoutes(t,e,i),{dynamicRoutes:i,staticRoutes:e}}_iterateRoutes(t,e,i,n){let s=null;for(let r of t){const t=null!=n,o="/"===r.path||""===r.path;if(t&&(r.guard||(r.guard=n.guard),r.path=`${n.path}${this._getRouteSeparator(n.path,r.path)}${r.path}`),r.path=this.buildFullPath(r.path,!t),r.path.includes(":")?i.push(r):e.push(r),o)s={path:r.path,title:r.title},r.crumbs=[s];else{const e=t?n.crumbs:[s];r.crumbs=[...e,{path:r.path,title:r.title}]}r.routes&&this._iterateRoutes(r.routes,e,i,r)}}_needsSlashBetween(t,e){return"/"!==t.charAt(t.length-1)&&"/"!==e.charAt(0,1)}parseViewFromUrl(){return window.location.pathname.split("?")[0]}buildFullPath(t,e=!0){let i=t;return i=this.handleLeadingAndTrailingSlash(i),e&&(i=this._addRootPath(i)),i}buildNeedle(t){return-1===t.indexOf(this.rootPath)?this.buildFullPath(t):this.handleLeadingAndTrailingSlash(t)}handleLeadingAndTrailingSlash(t){return"/"!==t.substring(0,1)&&(t=`/${t}`),"/"===t.substring(t.length-1)&&(t=t.substring(0,t.length-1)),t}splitRouteParts(t){const e=t.split(/\//);return e.shift(),e}mapParametersForRoute(t,e){t.params={};for(let i in t.parts){const n=t.parts[i];n.includes(":")&&(t.params[n.substring(1)]=e[i])}}_getRouteSeparator(t,e){return this._needsSlashBetween(t,e)?"/":""}_addRootPath(t){if("/"===t)return this.rootPath?this.rootPath:"/";const e=`${this.rootPath}${this._getRouteSeparator(this.rootPath,t)}${t}`;return"/"===e.charAt(e.length-1)?e.substring(0,e.length-1):e}}class i{async createComponentElement(t){t.import&&await t.import();const e=document.createElement(t.component);return t.slots&&this._buildSlotElements(t,e),t.params&&Object.keys(t.params).forEach((i=>{e[i]=t.params[i]})),e}createViewContainer(t,e){const i=document.createElement("simplr-router-container");return t.initialView||i.setAttribute(this._determineMovementDirection(t.backwards,e),""),i}_buildSlotElements(t,e){const i=this._getSlotElementProperties();t.slots.forEach((async t=>{t.import&&await t.import();const n=Object.keys(t).filter((t=>!i.includes(t))).pop();if(!n)return;const s=document.createElement(t[n]);s.slot=n,e.appendChild(s)}))}_getSlotElementProperties(){return["import"]}_determineMovementDirection(t,e){return t?e?"leaving-view":"entering-view":e?"entering-view":"leaving-view"}}class n{constructor(t){Object.assign(this,{view:t,backwards:!1,initialView:!1})}}class s{constructor(t){Object.assign(this,{view:t,backwards:!0,initialView:!1})}}class r{constructor(t){Object.assign(this,{view:t,backwards:!1,initialView:!0})}}const o=t=>window.history.pushState(null,"",t);class a{constructor(t){this._setAnchorListener(t),this._setReturnActionListeners(t)}_setAnchorListener(t){document.body.addEventListener("click",(e=>{const i=(s=e).path||s.composedPath&&s.composedPath();var s;let r=i.shift();const a=window.location.origin;do{if(r.href){const i=r.href.replace(a,""),s=t.findViewForRoute(i);if(s){e.preventDefault(),o(i),t.changeView(new n(s));break}}}while(r=i.shift())}))}_setReturnActionListeners(t){window.addEventListener("popstate",(()=>{const e=t.getViewFromUrl();t.changeView(new s(e))}))}}class l{constructor(){this.middlewares=[],this.addViewToContainerOverride=null,this.componentCreationOverride=null}add(t){const e=Object.getOwnPropertyNames(Object.getPrototypeOf(t));if(e.includes("addViewToContainerOverride")){if(this.overridesAddToView)throw Error("A Middleware is already overriding the addViewToContainerOverride -function");this.addViewToContainerOverride=t.addViewToContainerOverride.bind(t)}if(e.includes("createComponentOverride")){if(this.overridesComponentCreation)throw Error("A Middleware is already overriding the createComponentOverride -function");this.componentCreationOverride=t.createComponentOverride.bind(t)}this.middlewares.push(t)}applyNavigatingMiddleware(t){return this.middlewares.forEach((e=>{e.routerNavigating&&(t=e.routerNavigating(t))})),t}applyNavigationCompleteMiddleware(t){this.middlewares.forEach((e=>{e.routerNavigationComplete&&e.routerNavigationComplete(t)}))}applyViewAddedToDOMMiddleware(t){this.middlewares.forEach((e=>{e.newViewAddedToDOM&&e.newViewAddedToDOM(t)}))}}function d(t){window.dispatchEvent(t)}class h{constructor(t){this.parser=new e(t),this.builder=new i,this.observer=new a(this._getObserverFunctions()),this.middlewareHandler=new l,Object.assign(this,this.parser.parseRoutes(t.routes)),this.notFoundAction=t.notFoundAction,this.forbiddenAction=t.forbiddenAction,this.transitionInProgress=!1}_getObserverFunctions(){return{findViewForRoute:this.findViewForRoute.bind(this),changeView:this.changeView.bind(this),getViewFromUrl:this._getViewFromUrl.bind(this)}}get routes(){return[...this.staticRoutes,...this.dynamicRoutes]}async changeView(t){t=this.middlewareHandler.applyNavigatingMiddleware(t),d(new CustomEvent({message:"simplr-router-transition-start",view:t})),this.currentView=t.view;try{await this._checkViewValidity(t.view)}catch(t){return}const e=await this._createComponent(t.view),i=this._wrapViewWithContainer(e,t);this._pushNewViewIntoDom(i,t.initialView)}_createComponent(t){return this.middlewareHandler.componentCreationOverride?this.middlewareHandler.componentCreationOverride(t):this.builder.createComponentElement(t)}getBreadcrumbs(){if(!this.currentView.params)return this.currentView.crumbs;const t=this.currentView.params;return this.currentView.crumbs.map((e=>{const i={...e};return i.path.includes(":")&&Object.keys(t).forEach((e=>{i.path=i.path.replace(`:${e}`,t[e])})),i}))}addMiddleware(t){this.middlewareHandler.add(t)}_wrapViewWithContainer(t,e){const i=this.builder.createViewContainer(e,!0);return i.previousView=this.activeView,i.navigationCompleteCallback=this._handleNavigationComplete.bind(this),this._addViewToContainer(t,i),i}_addViewToContainer(t,e){this.middlewareHandler.addViewToContainerOverride?this.middlewareHandler.addViewToContainerOverride(e,t):e.appendChild(t)}_handleNavigationComplete(t){d(new CustomEvent({message:"simplr-router-transition-end"})),this.middlewareHandler.applyNavigationCompleteMiddleware(t)}_pushNewViewIntoDom(t,e){document.body.appendChild(t),this.activeView=t,e||window.requestAnimationFrame(t.transition.bind(t)),this.middlewareHandler.applyViewAddedToDOMMiddleware(t)}handleUrlPathing(){this.changeView(new r(this._getViewFromUrl()))}findViewForRoute(t,e){const i=e?this.parser.buildNeedle(t):this.parser.handleLeadingAndTrailingSlash(t);let n=this._findViewFromStaticRoutes(i);return n||(n=this._findViewFromDynamicRoutes(i)),n}_checkViewValidity(t){return new Promise((async(e,i)=>{t||(this._handleNotFoundAction(),i()),await this._guardFails(t)&&(this._handleForbiddenAction(),i()),e()}))}async _guardFails(t){return t&&t.guard&&"function"==typeof t.guard&&!await t.guard.call()}_getViewFromUrl(){return this.findViewForRoute(this.parser.parseViewFromUrl())}_findViewFromStaticRoutes(t){let e=null;for(let i of this.staticRoutes)if(i.path===t){e=i;break}return e}_findViewFromDynamicRoutes(t){const e=this.parser.splitRouteParts(t);let i=null;for(let t of this.dynamicRoutes){if(t.parts||(t.parts=this.parser.splitRouteParts(t.path)),t.parts.length!==e.length)continue;let n=!0;for(let i in t.parts){const s=t.parts[i],r=e[i];if(!s.includes(":")&&s!==r){n=!1;break}}if(n){i=t,this.parser.mapParametersForRoute(i,e);break}}return i}_handleNotFoundAction(){if(this.notFoundAction)return void this.notFoundAction.call();const t=this.findViewForRoute("not-found",!0);if(!t)throw Error("No view found and no 'not-found' -route or action set.");this.changeView(new r(t))}_handleForbiddenAction(){if(this.forbiddenAction)return void this.forbiddenAction.call();const t=this.findViewForRoute("forbidden",!0);if(!t)throw Error("Forbidden route and no 'forbidden' -route or action set.");this.changeView(new r(t))}}class c extends HTMLElement{static initialize(t,e){customElements.get("simplr-router-container")||customElements.define("simplr-router-container",c);const i="\n            html, body {\n                overflow-x: hidden;\n            }\n            simplr-router-container { \n                display: block;\n                width: 100%; \n                height: 100%; \n                padding: 0;\n                margin: 0;\n                position: absolute;\n                top: 0;\n                left: 0;\n                background: #FFF;\n                will-change: transform;\n                -webkit-transform: none;\n                transform: none;\n                overflow-y: auto;    \n                transition: linear {transitionSpeed}ms 0s;\n                --leaving-view-transition: translateX(-100%);\n                --entering-view-transition: translateX(100%);\n            }\n            "+(e?"":"\n                    simplr-router-container[leaving-view] {\n                        -webkit-transform: var(--leaving-view-transition);\n                        transform: var(--leaving-view-transition);\n                    }\n\n                    simplr-router-container[entering-view] {\n                        -webkit-transform: var(--entering-view-transition);\n                        transform: var(--entering-view-transition);\n                    }\n\n                ");this.disableTransition=e;const n=document.createElement("style");n.innerHTML=i.replace("{transitionSpeed}",t),document.head.prepend(n)}connectedCallback(){this.tabIndex=0}transition(){let t="leaving-view";this.addEventListener("transitionend",this.navigationCompleteCallback.bind(this),{once:!0}),window.requestAnimationFrame((()=>{this.hasAttribute("leaving-view")&&(this.removeAttribute("leaving-view"),t="entering-view"),this.hasAttribute("entering-view")&&this.removeAttribute("entering-view"),this.previousView&&this.previousView.transitionOut(t)}))}transitionOut(t){this.setAttribute(t,""),this.addEventListener("transitionend",(()=>this.remove()))}}class u{constructor(e){if(void 0===e)throw Error("Cannot initialize SimplrRouter without options.");this.config=new t(e),this.router=new h(this.config),u._instance=this}init(){c.initialize(this.config.transitionSpeed,this.config.disableTransition),this.router.handleUrlPathing(),function(t){d(new CustomEvent({message:"simplr-router-initialized",routes:t}))}(this.routes)}changeView(t){const e=this.router.parser.buildNeedle(t);o(e),this.router.changeView(new n(this.router.findViewForRoute(e)))}use(t){this.router.addMiddleware(t)}getBreadcrumbs(){return this.router.getBreadcrumbs()}}const p=[{path:"/",component:"simplr-frontpage",import:()=>import("./simplr-frontpage-a15b1211.js")},{path:"/foo",component:"simplr-frontpage",import:()=>import("./simplr-frontpage-a15b1211.js")}],m="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,g=(t,e,i=null)=>{for(;e!==i;){const i=e.nextSibling;t.removeChild(e),e=i}},w=`{{lit-${String(Math.random()).slice(2)}}}`,f=`\x3c!--${w}--\x3e`,_=new RegExp(`${w}|${f}`);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */class v{constructor(t,e){this.parts=[],this.element=e;const i=[],n=[],s=document.createTreeWalker(e.content,133,null,!1);let r=0,o=-1,a=0;const{strings:l,values:{length:d}}=t;for(;a<d;){const t=s.nextNode();if(null!==t){if(o++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:i}=e;let n=0;for(let t=0;t<i;t++)y(e[t].name,"$lit$")&&n++;for(;n-- >0;){const e=l[a],i=x.exec(e)[2],n=i.toLowerCase()+"$lit$",s=t.getAttribute(n);t.removeAttribute(n);const r=s.split(_);this.parts.push({type:"attribute",index:o,name:i,strings:r}),a+=r.length-1}}"TEMPLATE"===t.tagName&&(n.push(t),s.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(w)>=0){const n=t.parentNode,s=e.split(_),r=s.length-1;for(let e=0;e<r;e++){let i,r=s[e];if(""===r)i=S();else{const t=x.exec(r);null!==t&&y(t[2],"$lit$")&&(r=r.slice(0,t.index)+t[1]+t[2].slice(0,-"$lit$".length)+t[3]),i=document.createTextNode(r)}n.insertBefore(i,t),this.parts.push({type:"node",index:++o})}""===s[r]?(n.insertBefore(S(),t),i.push(t)):t.data=s[r],a+=r}}else if(8===t.nodeType)if(t.data===w){const e=t.parentNode;null!==t.previousSibling&&o!==r||(o++,e.insertBefore(S(),t)),r=o,this.parts.push({type:"node",index:o}),null===t.nextSibling?t.data="":(i.push(t),o--),a++}else{let e=-1;for(;-1!==(e=t.data.indexOf(w,e+1));)this.parts.push({type:"node",index:-1}),a++}}else s.currentNode=n.pop()}for(const t of i)t.parentNode.removeChild(t)}}const y=(t,e)=>{const i=t.length-e.length;return i>=0&&t.slice(i)===e},b=t=>-1!==t.index,S=()=>document.createComment(""),x=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function C(t,e){const{element:{content:i},parts:n}=t,s=document.createTreeWalker(i,133,null,!1);let r=V(n),o=n[r],a=-1,l=0;const d=[];let h=null;for(;s.nextNode();){a++;const t=s.currentNode;for(t.previousSibling===h&&(h=null),e.has(t)&&(d.push(t),null===h&&(h=t)),null!==h&&l++;void 0!==o&&o.index===a;)o.index=null!==h?-1:o.index-l,r=V(n,r),o=n[r]}d.forEach((t=>t.parentNode.removeChild(t)))}const P=t=>{let e=11===t.nodeType?0:1;const i=document.createTreeWalker(t,133,null,!1);for(;i.nextNode();)e++;return e},V=(t,e=-1)=>{for(let i=e+1;i<t.length;i++){const e=t[i];if(b(e))return i}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const A=new WeakMap,N=t=>"function"==typeof t&&A.has(t),E={},T={};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class O{constructor(t,e,i){this.__parts=[],this.template=t,this.processor=e,this.options=i}update(t){let e=0;for(const i of this.__parts)void 0!==i&&i.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const t=m?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=[],i=this.template.parts,n=document.createTreeWalker(t,133,null,!1);let s,r=0,o=0,a=n.nextNode();for(;r<i.length;)if(s=i[r],b(s)){for(;o<s.index;)o++,"TEMPLATE"===a.nodeName&&(e.push(a),n.currentNode=a.content),null===(a=n.nextNode())&&(n.currentNode=e.pop(),a=n.nextNode());if("node"===s.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(a.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(a,s.name,s.strings,this.options));r++}else this.__parts.push(void 0),r++;return m&&(document.adoptNode(t),customElements.upgrade(t)),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const k=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:t=>t}),R=` ${w} `;class F{constructor(t,e,i,n){this.strings=t,this.values=e,this.type=i,this.processor=n}getHTML(){const t=this.strings.length-1;let e="",i=!1;for(let n=0;n<t;n++){const t=this.strings[n],s=t.lastIndexOf("\x3c!--");i=(s>-1||i)&&-1===t.indexOf("--\x3e",s+1);const r=x.exec(t);e+=null===r?t+(i?R:f):t.substr(0,r.index)+r[1]+r[2]+"$lit$"+r[3]+w}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");let e=this.getHTML();return void 0!==k&&(e=k.createHTML(e)),t.innerHTML=e,t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const U=t=>null===t||!("object"==typeof t||"function"==typeof t),M=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class L{constructor(t,e,i){this.dirty=!0,this.element=t,this.name=e,this.strings=i,this.parts=[];for(let t=0;t<i.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new $(this)}_getValue(){const t=this.strings,e=t.length-1,i=this.parts;if(1===e&&""===t[0]&&""===t[1]){const t=i[0].value;if("symbol"==typeof t)return String(t);if("string"==typeof t||!M(t))return t}let n="";for(let s=0;s<e;s++){n+=t[s];const e=i[s];if(void 0!==e){const t=e.value;if(U(t)||!M(t))n+="string"==typeof t?t:String(t);else for(const e of t)n+="string"==typeof e?e:String(e)}}return n+=t[e],n}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class ${constructor(t){this.value=void 0,this.committer=t}setValue(t){t===E||U(t)&&t===this.value||(this.value=t,N(t)||(this.committer.dirty=!0))}commit(){for(;N(this.value);){const t=this.value;this.value=E,t(this)}this.value!==E&&this.committer.commit()}}class j{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(S()),this.endNode=t.appendChild(S())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=S()),t.__insert(this.endNode=S())}insertAfterPart(t){t.__insert(this.startNode=S()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){if(null===this.startNode.parentNode)return;for(;N(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=E,t(this)}const t=this.__pendingValue;t!==E&&(U(t)?t!==this.value&&this.__commitText(t):t instanceof F?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):M(t)?this.__commitIterable(t):t===T?(this.value=T,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,i="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=i:this.__commitNode(document.createTextNode(i)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof O&&this.value.template===e)this.value.update(t.values);else{const i=new O(e,t.processor,this.options),n=i._clone();i.update(t.values),this.__commitNode(n),this.value=i}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let i,n=0;for(const s of t)i=e[n],void 0===i&&(i=new j(this.options),e.push(i),0===n?i.appendIntoPart(this):i.insertAfterPart(e[n-1])),i.setValue(s),i.commit(),n++;n<e.length&&(e.length=n,this.clear(i&&i.endNode))}clear(t=this.startNode){g(this.startNode.parentNode,t.nextSibling,this.endNode)}}class H{constructor(t,e,i){if(this.value=void 0,this.__pendingValue=void 0,2!==i.length||""!==i[0]||""!==i[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=i}setValue(t){this.__pendingValue=t}commit(){for(;N(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=E,t(this)}if(this.__pendingValue===E)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=E}}class z extends L{constructor(t,e,i){super(t,e,i),this.single=2===i.length&&""===i[0]&&""===i[1]}_createPart(){return new I(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class I extends ${}let q=!1;(()=>{try{const t={get capture(){return q=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}})();class D{constructor(t,e,i){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=i,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;N(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=E,t(this)}if(this.__pendingValue===E)return;const t=this.__pendingValue,e=this.value,i=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),n=null!=t&&(null==e||i);i&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),n&&(this.__options=B(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=E}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const B=t=>t&&(q?{capture:t.capture,passive:t.passive,once:t.once}:t.capture)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */;function W(t){let e=J.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},J.set(t.type,e));let i=e.stringsArray.get(t.strings);if(void 0!==i)return i;const n=t.strings.join(w);return i=e.keyString.get(n),void 0===i&&(i=new v(t,t.getTemplateElement()),e.keyString.set(n,i)),e.stringsArray.set(t.strings,i),i}const J=new Map,X=new WeakMap,G=(t,e,i)=>{let n=X.get(e);void 0===n&&(g(e,e.firstChild),X.set(e,n=new j(Object.assign({templateFactory:W},i))),n.appendInto(e)),n.setValue(t),n.commit()};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const K=new
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class{handleAttributeExpressions(t,e,i,n){const s=e[0];if("."===s){return new z(t,e.slice(1),i).parts}if("@"===s)return[new D(t,e.slice(1),n.eventContext)];if("?"===s)return[new H(t,e.slice(1),i)];return new L(t,e,i).parts}handleTextExpression(t){return new j(t)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.3.0");const Q=(t,...e)=>new F(t,e,"html",K)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */,Y=(t,e)=>`${t}--${e}`;let Z=!0;void 0===window.ShadyCSS?Z=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),Z=!1);const tt=t=>e=>{const i=Y(e.type,t);let n=J.get(i);void 0===n&&(n={stringsArray:new WeakMap,keyString:new Map},J.set(i,n));let s=n.stringsArray.get(e.strings);if(void 0!==s)return s;const r=e.strings.join(w);if(s=n.keyString.get(r),void 0===s){const i=e.getTemplateElement();Z&&window.ShadyCSS.prepareTemplateDom(i,t),s=new v(e,i),n.keyString.set(r,s)}return n.stringsArray.set(e.strings,s),s},et=["html","svg"],it=new Set,nt=(t,e,i)=>{it.add(t);const n=i?i.element:document.createElement("template"),s=e.querySelectorAll("style"),{length:r}=s;if(0===r)return void window.ShadyCSS.prepareTemplateStyles(n,t);const o=document.createElement("style");for(let t=0;t<r;t++){const e=s[t];e.parentNode.removeChild(e),o.textContent+=e.textContent}(t=>{et.forEach((e=>{const i=J.get(Y(e,t));void 0!==i&&i.keyString.forEach((t=>{const{element:{content:e}}=t,i=new Set;Array.from(e.querySelectorAll("style")).forEach((t=>{i.add(t)})),C(t,i)}))}))})(t);const a=n.content;i?function(t,e,i=null){const{element:{content:n},parts:s}=t;if(null==i)return void n.appendChild(e);const r=document.createTreeWalker(n,133,null,!1);let o=V(s),a=0,l=-1;for(;r.nextNode();)for(l++,r.currentNode===i&&(a=P(e),i.parentNode.insertBefore(e,i));-1!==o&&s[o].index===l;){if(a>0){for(;-1!==o;)s[o].index+=a,o=V(s,o);return}o=V(s,o)}}(i,o,a.firstChild):a.insertBefore(o,a.firstChild),window.ShadyCSS.prepareTemplateStyles(n,t);const l=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)e.insertBefore(l.cloneNode(!0),e.firstChild);else if(i){a.insertBefore(o,a.firstChild);const t=new Set;t.add(o),C(i,t)}};window.JSCompiler_renameProperty=(t,e)=>t;const st={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},rt=(t,e)=>e!==t&&(e==e||t==t),ot={attribute:!0,type:String,converter:st,reflect:!1,hasChanged:rt};class at extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach(((e,i)=>{const n=this._attributeNameForProperty(i,e);void 0!==n&&(this._attributeToPropertyMap.set(n,i),t.push(n))})),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach(((t,e)=>this._classProperties.set(e,t)))}}static createProperty(t,e=ot){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const i="symbol"==typeof t?Symbol():`__${t}`,n=this.getPropertyDescriptor(t,i,e);void 0!==n&&Object.defineProperty(this.prototype,t,n)}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(n){const s=this[t];this[e]=n,this.requestUpdateInternal(t,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this._classProperties&&this._classProperties.get(t)||ot}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty("finalized")||t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const i of e)this.createProperty(i,t[i])}}static _attributeNameForProperty(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,i=rt){return i(t,e)}static _propertyValueFromAttribute(t,e){const i=e.type,n=e.converter||st,s="function"==typeof n?n:n.fromAttribute;return s?s(t,i):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const i=e.type,n=e.converter;return(n&&n.toAttribute||st.toAttribute)(t,i)}initialize(){this._updateState=0,this._updatePromise=new Promise((t=>this._enableUpdatingResolver=t)),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach(((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}}))}_applyInstanceProperties(){this._instanceProperties.forEach(((t,e)=>this[e]=t)),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,i){e!==i&&this._attributeToProperty(t,i)}_propertyToAttribute(t,e,i=ot){const n=this.constructor,s=n._attributeNameForProperty(t,i);if(void 0!==s){const t=n._propertyValueToAttribute(e,i);if(void 0===t)return;this._updateState=8|this._updateState,null==t?this.removeAttribute(s):this.setAttribute(s,t),this._updateState=-9&this._updateState}}_attributeToProperty(t,e){if(8&this._updateState)return;const i=this.constructor,n=i._attributeToPropertyMap.get(t);if(void 0!==n){const t=i.getPropertyOptions(n);this._updateState=16|this._updateState,this[n]=i._propertyValueFromAttribute(e,t),this._updateState=-17&this._updateState}}requestUpdateInternal(t,e,i){let n=!0;if(void 0!==t){const s=this.constructor;i=i||s.getPropertyOptions(t),s._valueHasChanged(this[t],e,i.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==i.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,i))):n=!1}!this._hasRequestedUpdate&&n&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(t,e){return this.requestUpdateInternal(t,e),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(t){}const t=this.performUpdate();return null!=t&&await t,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{t=this.shouldUpdate(e),t?this.update(e):this._markUpdated()}catch(e){throw t=!1,this._markUpdated(),e}t&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach(((t,e)=>this._propertyToAttribute(e,this[e],t))),this._reflectingProperties=void 0),this._markUpdated()}updated(t){}firstUpdated(t){}}at.finalized=!0;
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const lt=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,dt=Symbol();class ht{constructor(t,e){if(e!==dt)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(lt?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const ct=(t,...e)=>{const i=e.reduce(((e,i,n)=>e+(t=>{if(t instanceof ht)return t.cssText;if("number"==typeof t)return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(i)+t[n+1]),t[0]);return new ht(i,dt)};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.4.0");const ut={};class pt extends at{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const t=this.getStyles();if(Array.isArray(t)){const e=(t,i)=>t.reduceRight(((t,i)=>Array.isArray(i)?e(i,t):(t.add(i),t)),i),i=e(t,new Set),n=[];i.forEach((t=>n.unshift(t))),this._styles=n}else this._styles=void 0===t?[]:[t];this._styles=this._styles.map((t=>{if(t instanceof CSSStyleSheet&&!lt){const e=Array.prototype.slice.call(t.cssRules).reduce(((t,e)=>t+e.cssText),"");return new ht(String(e),dt)}return t}))}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?lt?this.renderRoot.adoptedStyleSheets=t.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map((t=>t.cssText)),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){const e=this.render();super.update(t),e!==ut&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach((t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)})))}render(){return ut}}pt.finalized=!0,pt.render=(t,e,i)=>{if(!i||"object"!=typeof i||!i.scopeName)throw new Error("The `scopeName` option is required.");const n=i.scopeName,s=X.has(e),r=Z&&11===e.nodeType&&!!e.host,o=r&&!it.has(n),a=o?document.createDocumentFragment():e;if(G(t,a,Object.assign({templateFactory:tt(n)},i)),o){const t=X.get(a);X.delete(a);const i=t.value instanceof O?t.value.template:void 0;nt(n,a,i),g(e,e.firstChild),e.appendChild(a),X.set(e,t)}!s&&r&&window.ShadyCSS.styleElement(e.host)};class mt extends pt{render(){return Q`
            <style>
                ${this.getStyles()}
            </style>
            <a class="logo-link" href="#">
                <img src="/assets/simplr_horisontal_black.svg" />
            </a>
            <nav class="links">
                <a href="#">Development</a>
                <a href="#">Consulting</a>
                <a href="#">Contact</a>
            </nav>
        `}getStyles(){return ct`
            :host {
                position: absolute;
                top: 2rem;
                left: 0;
                width: 100%;
                height: 4rem;
                /*box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 1px 0px rgb(0 0 0 / 14%),
                    0px 1px 6px 0px rgb(0 0 0 / 12%);*/
                display: flex;
                z-index: 99;
                overflow: visible;
                /*background: #fff;*/
                align-items: center;
                justify-content: space-between;
                padding: 0 20.5%;
                box-sizing: border-box;
            }

            .logo-link {
                height: 60%;
                transition: 200ms linear;
            }

            .logo-link img {
                height: 100%;
            }

            .logo-link:hover {
                filter: invert(53%) sepia(69%) saturate(4551%) hue-rotate(2deg) brightness(104%) contrast(105%);
            }

            nav {
                display: flex;
                justify-content: space-between;
                flex-basis: 60%;
            }

            a {
                color: #232320;
                text-decoration: none;
                font-weight: 700;
                font-size: 1.2rem;
                transition: 300ms ease-in-out;
                background-clip: text;
                text-fill-color: transparent;
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                
                background-image: linear-gradient(to right, #ff6d00, #ff6d00 50%,  #232320 50%);
                background-size: 200% 100%;
                background-position: 100%;
            }

            a:hover {
                background-position: 0%;
            }
        `}}customElements.get("top-bar")||customElements.define("top-bar",mt);new u({routes:p,rootPath:"/simplr-website-v2"}).init();export{pt as L,ct as c,Q as h,G as r};

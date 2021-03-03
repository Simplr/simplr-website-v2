class t{constructor(t){this._parseOptions(t)}_parseOptions(t){this.routes=t.routes,this.rootPath=t.rootPath,this.debugging=t.debugging,this.transitionSpeed=null==t.transitionSpeed?200:t.transitionSpeed,this.notFoundAction=t.notFoundAction,this.forbiddenAction=t.forbiddenAction,this.disableTransition=t.disableTransition}}class e{constructor(t){this.rootPath=t.rootPath?this.handleLeadingSlash(t.rootPath):""}parseRoutes(t){if(!t)throw Error("No routes passed during initialization. \n\nPlease provide the routes in the initialization of Simplr Router.");let e=[],i=[];return this._iterateRoutes(t,e,i),{dynamicRoutes:i,staticRoutes:e}}_iterateRoutes(t,e,i,s){let n=null;for(let r of t){const t=null!=s,o="/"===r.path||""===r.path;if(t&&(r.guard||(r.guard=s.guard),r.path=`${s.path}${this._getRouteSeparator(s.path,r.path)}${r.path}`),r.path=this.buildFullPath(r.path,!t),r.path.includes(":")?i.push(r):e.push(r),o)n={path:r.path,title:r.title},r.crumbs=[n];else{const e=t?s.crumbs:[n];r.crumbs=[...e,{path:r.path,title:r.title}]}r.routes&&this._iterateRoutes(r.routes,e,i,r)}}_needsSlashBetween(t,e){return"/"!==t.charAt(t.length-1)&&"/"!==e.charAt(0,1)}parseViewFromUrl(){return window.location.pathname.split("?")[0]}buildFullPath(t,e=!0){let i=t;return i=this.handleLeadingSlash(i),e&&(i=this._addRootPath(i)),i}buildNeedle(t){return-1===t.indexOf(this.rootPath)?this.buildFullPath(t):this.handleLeadingSlash(t)}handleLeadingSlash(t){return"/"!==t.substring(0,1)&&(t=`/${t}`),t}splitRouteParts(t){const e=t.split(/\//);return e.shift(),e}mapParametersForRoute(t,e){t.params={};for(let i in t.parts){const s=t.parts[i];s.includes(":")&&(t.params[s.substring(1)]=e[i])}}_getRouteSeparator(t,e){return this._needsSlashBetween(t,e)?"/":""}_addRootPath(t){if("/"===t)return this.rootPath?this.rootPath:"/";const e=`${this.rootPath}${this._getRouteSeparator(this.rootPath,t)}${t}`;return"/"===e.charAt(e.length-1)?e.substring(0,e.length-1):e}}class i{async createComponentElement(t){t.import&&await t.import();const e=document.createElement(t.component);return t.slots&&this._buildSlotElements(t,e),t.params&&Object.keys(t.params).forEach((i=>{e[i]=t.params[i]})),e}createViewContainer(t,e){const i=document.createElement("simplr-router-container");return t.initialView||i.setAttribute(this._determineMovementDirection(t.backwards,e),""),i}_buildSlotElements(t,e){const i=this._getSlotElementProperties();t.slots.forEach((async t=>{t.import&&await t.import();const s=Object.keys(t).filter((t=>!i.includes(t))).pop();if(!s)return;const n=document.createElement(t[s]);n.slot=s,e.appendChild(n)}))}_getSlotElementProperties(){return["import"]}_determineMovementDirection(t,e){return t?e?"leaving-view":"entering-view":e?"entering-view":"leaving-view"}}class s{constructor(t){Object.assign(this,{view:t,backwards:!1,initialView:!1})}}class n{constructor(t){Object.assign(this,{view:t,backwards:!0,initialView:!1})}}class r{constructor(t){Object.assign(this,{view:t,backwards:!1,initialView:!0})}}const o=t=>window.history.pushState(null,"",t);class a{constructor(t){this._setAnchorListener(t),this._setReturnActionListeners(t)}_setAnchorListener(t){document.body.addEventListener("click",(e=>{const i=(n=e).path||n.composedPath&&n.composedPath();var n;let r=i.shift();const a=window.location.origin;do{if(r.href){const i=r.href.replace(a,""),n=t.findViewForRoute(i);if(n){e.preventDefault(),o(i),t.changeView(new s(n));break}}}while(r=i.shift())}))}_setReturnActionListeners(t){window.addEventListener("popstate",(()=>{const e=t.getViewFromUrl();t.changeView(new n(e))}))}}class l{constructor(){this.middlewares=[],this.addViewToContainerOverride=null,this.componentCreationOverride=null}add(t){const e=Object.getOwnPropertyNames(Object.getPrototypeOf(t));if(e.includes("addViewToContainerOverride")){if(this.overridesAddToView)throw Error("A Middleware is already overriding the addViewToContainerOverride -function");this.addViewToContainerOverride=t.addViewToContainerOverride.bind(t)}if(e.includes("createComponentOverride")){if(this.overridesComponentCreation)throw Error("A Middleware is already overriding the createComponentOverride -function");this.componentCreationOverride=t.createComponentOverride.bind(t)}this.middlewares.push(t)}applyNavigatingMiddleware(t){return this.middlewares.forEach((e=>{e.routerNavigating&&(t=e.routerNavigating(t))})),t}applyNavigationCompleteMiddleware(t){this.middlewares.forEach((e=>{e.routerNavigationComplete&&e.routerNavigationComplete(t)}))}applyViewAddedToDOMMiddleware(t){this.middlewares.forEach((e=>{e.newViewAddedToDOM&&e.newViewAddedToDOM(t)}))}}function d(t){window.dispatchEvent(t)}class h{constructor(t){this.parser=new e(t),this.builder=new i,this.observer=new a(this._getObserverFunctions()),this.middlewareHandler=new l,Object.assign(this,this.parser.parseRoutes(t.routes)),this.notFoundAction=t.notFoundAction,this.forbiddenAction=t.forbiddenAction,this.transitionInProgress=!1}_getObserverFunctions(){return{findViewForRoute:this.findViewForRoute.bind(this),changeView:this.changeView.bind(this),getViewFromUrl:this._getViewFromUrl.bind(this)}}get routes(){return[...this.staticRoutes,...this.dynamicRoutes]}async changeView(t){t=this.middlewareHandler.applyNavigatingMiddleware(t),d(new CustomEvent({message:"simplr-router-transition-start",view:t})),this.currentView=t.view;try{await this._checkViewValidity(t.view)}catch(t){return}const e=await this._createComponent(t.view),i=this._wrapViewWithContainer(e,t);this._pushNewViewIntoDom(i,t.initialView)}_createComponent(t){return this.middlewareHandler.componentCreationOverride?this.middlewareHandler.componentCreationOverride(t):this.builder.createComponentElement(t)}getBreadcrumbs(){if(!this.currentView.params)return this.currentView.crumbs;const t=this.currentView.params;return this.currentView.crumbs.map((e=>{const i={...e};return i.path.includes(":")&&Object.keys(t).forEach((e=>{i.path=i.path.replace(`:${e}`,t[e])})),i}))}addMiddleware(t){this.middlewareHandler.add(t)}_wrapViewWithContainer(t,e){const i=this.builder.createViewContainer(e,!0);return i.previousView=this.activeView,i.navigationCompleteCallback=this._handleNavigationComplete.bind(this),this._addViewToContainer(t,i),i}_addViewToContainer(t,e){this.middlewareHandler.addViewToContainerOverride?this.middlewareHandler.addViewToContainerOverride(e,t):e.appendChild(t)}_handleNavigationComplete(t){d(new CustomEvent({message:"simplr-router-transition-end"})),this.middlewareHandler.applyNavigationCompleteMiddleware(t)}_pushNewViewIntoDom(t,e){document.body.appendChild(t),this.activeView=t,e||window.requestAnimationFrame(t.transition.bind(t)),this.middlewareHandler.applyViewAddedToDOMMiddleware(t)}handleUrlPathing(){this.changeView(new r(this._getViewFromUrl()))}findViewForRoute(t,e){const i=e?this.parser.buildNeedle(t):this.parser.handleLeadingSlash(t);let s=this._findViewFromStaticRoutes(i);return s||(s=this._findViewFromDynamicRoutes(i)),s}_checkViewValidity(t){return new Promise((async(e,i)=>{t||(this._handleNotFoundAction(),i()),await this._guardFails(t)&&(this._handleForbiddenAction(),i()),e()}))}async _guardFails(t){return t&&t.guard&&"function"==typeof t.guard&&!await t.guard.call()}_getViewFromUrl(){return this.findViewForRoute(this.parser.parseViewFromUrl())}_findViewFromStaticRoutes(t){let e=null;for(let i of this.staticRoutes)if(i.path===t){e=i;break}return e}_findViewFromDynamicRoutes(t){const e=this.parser.splitRouteParts(t);let i=null;for(let t of this.dynamicRoutes){if(t.parts||(t.parts=this.parser.splitRouteParts(t.path)),t.parts.length!==e.length)continue;let s=!0;for(let i in t.parts){const n=t.parts[i],r=e[i];if(!n.includes(":")&&n!==r){s=!1;break}}if(s){i=t,this.parser.mapParametersForRoute(i,e);break}}return i}_handleNotFoundAction(){if(this.notFoundAction)return void this.notFoundAction.call();const t=this.findViewForRoute("not-found",!0);if(!t)throw Error("No view found and no 'not-found' -route or action set.");this.changeView(new r(t))}_handleForbiddenAction(){if(this.forbiddenAction)return void this.forbiddenAction.call();const t=this.findViewForRoute("forbidden",!0);if(!t)throw Error("Forbidden route and no 'forbidden' -route or action set.");this.changeView(new r(t))}}class c extends HTMLElement{static initialize(t,e){customElements.get("simplr-router-container")||customElements.define("simplr-router-container",c);const i="\n            html, body {\n                overflow-x: hidden;\n            }\n            simplr-router-container { \n                display: block;\n                width: 100%; \n                height: 100%; \n                padding: 0;\n                margin: 0;\n                position: absolute;\n                top: 0;\n                left: 0;\n                background: #FFF;\n                will-change: transform;\n                -webkit-transform: none;\n                transform: none;\n                overflow-y: auto;    \n                transition: linear {transitionSpeed}ms 0s;\n                --leaving-view-transition: translateX(-100%);\n                --entering-view-transition: translateX(100%);\n            }\n            "+(e?"":"\n                    simplr-router-container[leaving-view] {\n                        -webkit-transform: var(--leaving-view-transition);\n                        transform: var(--leaving-view-transition);\n                    }\n\n                    simplr-router-container[entering-view] {\n                        -webkit-transform: var(--entering-view-transition);\n                        transform: var(--entering-view-transition);\n                    }\n\n                ");this.disableTransition=e;const s=document.createElement("style");s.innerHTML=i.replace("{transitionSpeed}",t),document.head.prepend(s)}connectedCallback(){this.tabIndex=0}transition(){let t="leaving-view";this.addEventListener("transitionend",this.navigationCompleteCallback.bind(this),{once:!0}),window.requestAnimationFrame((()=>{this.hasAttribute("leaving-view")&&(this.removeAttribute("leaving-view"),t="entering-view"),this.hasAttribute("entering-view")&&this.removeAttribute("entering-view"),this.previousView&&this.previousView.transitionOut(t)}))}transitionOut(t){this.setAttribute(t,""),this.addEventListener("transitionend",(()=>this.remove()))}}class u{constructor(e){if(void 0===e)throw Error("Cannot initialize SimplrRouter without options.");this.config=new t(e),this.router=new h(this.config),u._instance=this}init(){c.initialize(this.config.transitionSpeed,this.config.disableTransition),this.router.handleUrlPathing(),function(t){d(new CustomEvent({message:"simplr-router-initialized",routes:t}))}(this.routes)}changeView(t){const e=this.router.parser.buildNeedle(t);o(e),this.router.changeView(new s(this.router.findViewForRoute(e)))}use(t){this.router.addMiddleware(t)}getBreadcrumbs(){return this.router.getBreadcrumbs()}}const p=[{path:"/",component:"simplr-frontpage",import:()=>import("./simplr-frontpage-63862dcc.js")}],m="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,g=(t,e,i=null)=>{for(;e!==i;){const i=e.nextSibling;t.removeChild(e),e=i}},w=`{{lit-${String(Math.random()).slice(2)}}}`,f=`\x3c!--${w}--\x3e`,_=new RegExp(`${w}|${f}`);
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
 */class v{constructor(t,e){this.parts=[],this.element=e;const i=[],s=[],n=document.createTreeWalker(e.content,133,null,!1);let r=0,o=-1,a=0;const{strings:l,values:{length:d}}=t;for(;a<d;){const t=n.nextNode();if(null!==t){if(o++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:i}=e;let s=0;for(let t=0;t<i;t++)y(e[t].name,"$lit$")&&s++;for(;s-- >0;){const e=l[a],i=x.exec(e)[2],s=i.toLowerCase()+"$lit$",n=t.getAttribute(s);t.removeAttribute(s);const r=n.split(_);this.parts.push({type:"attribute",index:o,name:i,strings:r}),a+=r.length-1}}"TEMPLATE"===t.tagName&&(s.push(t),n.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(w)>=0){const s=t.parentNode,n=e.split(_),r=n.length-1;for(let e=0;e<r;e++){let i,r=n[e];if(""===r)i=S();else{const t=x.exec(r);null!==t&&y(t[2],"$lit$")&&(r=r.slice(0,t.index)+t[1]+t[2].slice(0,-"$lit$".length)+t[3]),i=document.createTextNode(r)}s.insertBefore(i,t),this.parts.push({type:"node",index:++o})}""===n[r]?(s.insertBefore(S(),t),i.push(t)):t.data=n[r],a+=r}}else if(8===t.nodeType)if(t.data===w){const e=t.parentNode;null!==t.previousSibling&&o!==r||(o++,e.insertBefore(S(),t)),r=o,this.parts.push({type:"node",index:o}),null===t.nextSibling?t.data="":(i.push(t),o--),a++}else{let e=-1;for(;-1!==(e=t.data.indexOf(w,e+1));)this.parts.push({type:"node",index:-1}),a++}}else n.currentNode=s.pop()}for(const t of i)t.parentNode.removeChild(t)}}const y=(t,e)=>{const i=t.length-e.length;return i>=0&&t.slice(i)===e},b=t=>-1!==t.index,S=()=>document.createComment(""),x=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function C(t,e){const{element:{content:i},parts:s}=t,n=document.createTreeWalker(i,133,null,!1);let r=V(s),o=s[r],a=-1,l=0;const d=[];let h=null;for(;n.nextNode();){a++;const t=n.currentNode;for(t.previousSibling===h&&(h=null),e.has(t)&&(d.push(t),null===h&&(h=t)),null!==h&&l++;void 0!==o&&o.index===a;)o.index=null!==h?-1:o.index-l,r=V(s,r),o=s[r]}d.forEach((t=>t.parentNode.removeChild(t)))}const P=t=>{let e=11===t.nodeType?0:1;const i=document.createTreeWalker(t,133,null,!1);for(;i.nextNode();)e++;return e},V=(t,e=-1)=>{for(let i=e+1;i<t.length;i++){const e=t[i];if(b(e))return i}return-1};
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
const N=new WeakMap,A=t=>"function"==typeof t&&N.has(t),E={},T={};
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
class O{constructor(t,e,i){this.__parts=[],this.template=t,this.processor=e,this.options=i}update(t){let e=0;for(const i of this.__parts)void 0!==i&&i.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const t=m?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=[],i=this.template.parts,s=document.createTreeWalker(t,133,null,!1);let n,r=0,o=0,a=s.nextNode();for(;r<i.length;)if(n=i[r],b(n)){for(;o<n.index;)o++,"TEMPLATE"===a.nodeName&&(e.push(a),s.currentNode=a.content),null===(a=s.nextNode())&&(s.currentNode=e.pop(),a=s.nextNode());if("node"===n.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(a.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(a,n.name,n.strings,this.options));r++}else this.__parts.push(void 0),r++;return m&&(document.adoptNode(t),customElements.upgrade(t)),t}}
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
 */const k=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:t=>t}),R=` ${w} `;class F{constructor(t,e,i,s){this.strings=t,this.values=e,this.type=i,this.processor=s}getHTML(){const t=this.strings.length-1;let e="",i=!1;for(let s=0;s<t;s++){const t=this.strings[s],n=t.lastIndexOf("\x3c!--");i=(n>-1||i)&&-1===t.indexOf("--\x3e",n+1);const r=x.exec(t);e+=null===r?t+(i?R:f):t.substr(0,r.index)+r[1]+r[2]+"$lit$"+r[3]+w}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");let e=this.getHTML();return void 0!==k&&(e=k.createHTML(e)),t.innerHTML=e,t}}
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
 */const U=t=>null===t||!("object"==typeof t||"function"==typeof t),M=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class L{constructor(t,e,i){this.dirty=!0,this.element=t,this.name=e,this.strings=i,this.parts=[];for(let t=0;t<i.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new $(this)}_getValue(){const t=this.strings,e=t.length-1,i=this.parts;if(1===e&&""===t[0]&&""===t[1]){const t=i[0].value;if("symbol"==typeof t)return String(t);if("string"==typeof t||!M(t))return t}let s="";for(let n=0;n<e;n++){s+=t[n];const e=i[n];if(void 0!==e){const t=e.value;if(U(t)||!M(t))s+="string"==typeof t?t:String(t);else for(const e of t)s+="string"==typeof e?e:String(e)}}return s+=t[e],s}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class ${constructor(t){this.value=void 0,this.committer=t}setValue(t){t===E||U(t)&&t===this.value||(this.value=t,A(t)||(this.committer.dirty=!0))}commit(){for(;A(this.value);){const t=this.value;this.value=E,t(this)}this.value!==E&&this.committer.commit()}}class j{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(S()),this.endNode=t.appendChild(S())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=S()),t.__insert(this.endNode=S())}insertAfterPart(t){t.__insert(this.startNode=S()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){if(null===this.startNode.parentNode)return;for(;A(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=E,t(this)}const t=this.__pendingValue;t!==E&&(U(t)?t!==this.value&&this.__commitText(t):t instanceof F?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):M(t)?this.__commitIterable(t):t===T?(this.value=T,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,i="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=i:this.__commitNode(document.createTextNode(i)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof O&&this.value.template===e)this.value.update(t.values);else{const i=new O(e,t.processor,this.options),s=i._clone();i.update(t.values),this.__commitNode(s),this.value=i}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let i,s=0;for(const n of t)i=e[s],void 0===i&&(i=new j(this.options),e.push(i),0===s?i.appendIntoPart(this):i.insertAfterPart(e[s-1])),i.setValue(n),i.commit(),s++;s<e.length&&(e.length=s,this.clear(i&&i.endNode))}clear(t=this.startNode){g(this.startNode.parentNode,t.nextSibling,this.endNode)}}class H{constructor(t,e,i){if(this.value=void 0,this.__pendingValue=void 0,2!==i.length||""!==i[0]||""!==i[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=i}setValue(t){this.__pendingValue=t}commit(){for(;A(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=E,t(this)}if(this.__pendingValue===E)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=E}}class z extends L{constructor(t,e,i){super(t,e,i),this.single=2===i.length&&""===i[0]&&""===i[1]}_createPart(){return new I(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class I extends ${}let q=!1;(()=>{try{const t={get capture(){return q=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}})();class D{constructor(t,e,i){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=i,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;A(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=E,t(this)}if(this.__pendingValue===E)return;const t=this.__pendingValue,e=this.value,i=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),s=null!=t&&(null==e||i);i&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),s&&(this.__options=B(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=E}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const B=t=>t&&(q?{capture:t.capture,passive:t.passive,once:t.once}:t.capture)
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
 */;function W(t){let e=J.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},J.set(t.type,e));let i=e.stringsArray.get(t.strings);if(void 0!==i)return i;const s=t.strings.join(w);return i=e.keyString.get(s),void 0===i&&(i=new v(t,t.getTemplateElement()),e.keyString.set(s,i)),e.stringsArray.set(t.strings,i),i}const J=new Map,X=new WeakMap,G=(t,e,i)=>{let s=X.get(e);void 0===s&&(g(e,e.firstChild),X.set(e,s=new j(Object.assign({templateFactory:W},i))),s.appendInto(e)),s.setValue(t),s.commit()};
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
class{handleAttributeExpressions(t,e,i,s){const n=e[0];if("."===n){return new z(t,e.slice(1),i).parts}if("@"===n)return[new D(t,e.slice(1),s.eventContext)];if("?"===n)return[new H(t,e.slice(1),i)];return new L(t,e,i).parts}handleTextExpression(t){return new j(t)}};
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
 */,Y=(t,e)=>`${t}--${e}`;let Z=!0;void 0===window.ShadyCSS?Z=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),Z=!1);const tt=t=>e=>{const i=Y(e.type,t);let s=J.get(i);void 0===s&&(s={stringsArray:new WeakMap,keyString:new Map},J.set(i,s));let n=s.stringsArray.get(e.strings);if(void 0!==n)return n;const r=e.strings.join(w);if(n=s.keyString.get(r),void 0===n){const i=e.getTemplateElement();Z&&window.ShadyCSS.prepareTemplateDom(i,t),n=new v(e,i),s.keyString.set(r,n)}return s.stringsArray.set(e.strings,n),n},et=["html","svg"],it=new Set,st=(t,e,i)=>{it.add(t);const s=i?i.element:document.createElement("template"),n=e.querySelectorAll("style"),{length:r}=n;if(0===r)return void window.ShadyCSS.prepareTemplateStyles(s,t);const o=document.createElement("style");for(let t=0;t<r;t++){const e=n[t];e.parentNode.removeChild(e),o.textContent+=e.textContent}(t=>{et.forEach((e=>{const i=J.get(Y(e,t));void 0!==i&&i.keyString.forEach((t=>{const{element:{content:e}}=t,i=new Set;Array.from(e.querySelectorAll("style")).forEach((t=>{i.add(t)})),C(t,i)}))}))})(t);const a=s.content;i?function(t,e,i=null){const{element:{content:s},parts:n}=t;if(null==i)return void s.appendChild(e);const r=document.createTreeWalker(s,133,null,!1);let o=V(n),a=0,l=-1;for(;r.nextNode();)for(l++,r.currentNode===i&&(a=P(e),i.parentNode.insertBefore(e,i));-1!==o&&n[o].index===l;){if(a>0){for(;-1!==o;)n[o].index+=a,o=V(n,o);return}o=V(n,o)}}(i,o,a.firstChild):a.insertBefore(o,a.firstChild),window.ShadyCSS.prepareTemplateStyles(s,t);const l=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)e.insertBefore(l.cloneNode(!0),e.firstChild);else if(i){a.insertBefore(o,a.firstChild);const t=new Set;t.add(o),C(i,t)}};window.JSCompiler_renameProperty=(t,e)=>t;const nt={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},rt=(t,e)=>e!==t&&(e==e||t==t),ot={attribute:!0,type:String,converter:nt,reflect:!1,hasChanged:rt};class at extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach(((e,i)=>{const s=this._attributeNameForProperty(i,e);void 0!==s&&(this._attributeToPropertyMap.set(s,i),t.push(s))})),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach(((t,e)=>this._classProperties.set(e,t)))}}static createProperty(t,e=ot){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const i="symbol"==typeof t?Symbol():`__${t}`,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const n=this[t];this[e]=s,this.requestUpdateInternal(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this._classProperties&&this._classProperties.get(t)||ot}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty("finalized")||t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const i of e)this.createProperty(i,t[i])}}static _attributeNameForProperty(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,i=rt){return i(t,e)}static _propertyValueFromAttribute(t,e){const i=e.type,s=e.converter||nt,n="function"==typeof s?s:s.fromAttribute;return n?n(t,i):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const i=e.type,s=e.converter;return(s&&s.toAttribute||nt.toAttribute)(t,i)}initialize(){this._updateState=0,this._updatePromise=new Promise((t=>this._enableUpdatingResolver=t)),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach(((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}}))}_applyInstanceProperties(){this._instanceProperties.forEach(((t,e)=>this[e]=t)),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,i){e!==i&&this._attributeToProperty(t,i)}_propertyToAttribute(t,e,i=ot){const s=this.constructor,n=s._attributeNameForProperty(t,i);if(void 0!==n){const t=s._propertyValueToAttribute(e,i);if(void 0===t)return;this._updateState=8|this._updateState,null==t?this.removeAttribute(n):this.setAttribute(n,t),this._updateState=-9&this._updateState}}_attributeToProperty(t,e){if(8&this._updateState)return;const i=this.constructor,s=i._attributeToPropertyMap.get(t);if(void 0!==s){const t=i.getPropertyOptions(s);this._updateState=16|this._updateState,this[s]=i._propertyValueFromAttribute(e,t),this._updateState=-17&this._updateState}}requestUpdateInternal(t,e,i){let s=!0;if(void 0!==t){const n=this.constructor;i=i||n.getPropertyOptions(t),n._valueHasChanged(this[t],e,i.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==i.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,i))):s=!1}!this._hasRequestedUpdate&&s&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(t,e){return this.requestUpdateInternal(t,e),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(t){}const t=this.performUpdate();return null!=t&&await t,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{t=this.shouldUpdate(e),t?this.update(e):this._markUpdated()}catch(e){throw t=!1,this._markUpdated(),e}t&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach(((t,e)=>this._propertyToAttribute(e,this[e],t))),this._reflectingProperties=void 0),this._markUpdated()}updated(t){}firstUpdated(t){}}at.finalized=!0;
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
const lt=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,dt=Symbol();class ht{constructor(t,e){if(e!==dt)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(lt?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const ct=(t,...e)=>{const i=e.reduce(((e,i,s)=>e+(t=>{if(t instanceof ht)return t.cssText;if("number"==typeof t)return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(i)+t[s+1]),t[0]);return new ht(i,dt)};
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
(window.litElementVersions||(window.litElementVersions=[])).push("2.4.0");const ut={};class pt extends at{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const t=this.getStyles();if(Array.isArray(t)){const e=(t,i)=>t.reduceRight(((t,i)=>Array.isArray(i)?e(i,t):(t.add(i),t)),i),i=e(t,new Set),s=[];i.forEach((t=>s.unshift(t))),this._styles=s}else this._styles=void 0===t?[]:[t];this._styles=this._styles.map((t=>{if(t instanceof CSSStyleSheet&&!lt){const e=Array.prototype.slice.call(t.cssRules).reduce(((t,e)=>t+e.cssText),"");return new ht(String(e),dt)}return t}))}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?lt?this.renderRoot.adoptedStyleSheets=t.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map((t=>t.cssText)),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){const e=this.render();super.update(t),e!==ut&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach((t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)})))}render(){return ut}}pt.finalized=!0,pt.render=(t,e,i)=>{if(!i||"object"!=typeof i||!i.scopeName)throw new Error("The `scopeName` option is required.");const s=i.scopeName,n=X.has(e),r=Z&&11===e.nodeType&&!!e.host,o=r&&!it.has(s),a=o?document.createDocumentFragment():e;if(G(t,a,Object.assign({templateFactory:tt(s)},i)),o){const t=X.get(a);X.delete(a);const i=t.value instanceof O?t.value.template:void 0;st(s,a,i),g(e,e.firstChild),e.appendChild(a),X.set(e,t)}!n&&r&&window.ShadyCSS.styleElement(e.host)};class mt extends pt{render(){return Q`
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
        `}}customElements.get("top-bar")||customElements.define("top-bar",mt);new u({routes:p}).init();export{pt as L,ct as c,Q as h,G as r};

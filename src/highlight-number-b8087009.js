import{L as t,h as e,c as r}from"./router-16da0b9f.js";class i extends t{render(){return e`
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
        `}}customElements.get("app-window")||customElements.define("app-window",i);class s extends t{static get properties(){return{count:{type:String,reflect:!0},title:{type:String,reflect:!0}}}constructor(){super(),this.count="0",this.title=""}render(){return e`
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
        `}}customElements.get("highlight-number")||customElements.define("highlight-number",s);

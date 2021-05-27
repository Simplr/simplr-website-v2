import { css } from "lit-element";

export const viewCSS = css`
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

            a {
                color: inherit;
                text-decoration: none;
                font-weight: bold;
            }

`;

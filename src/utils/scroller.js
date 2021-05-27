
export function scrollToBlock(elem) {
    const hash = window.location.hash;
    if (!hash) return;
    const elemToFocus = elem.querySelector(hash);
    if (elemToFocus) {
        const container = document.querySelector("simplr-router-container[entering-view]");
        if (container) {
            container.addEventListener("transitionend", () => {
                elemToFocus.scrollIntoView({ behavior: "smooth" });
            });
        } else {
            elemToFocus.scrollIntoView({ behavior: "smooth" });
        }
    }
}

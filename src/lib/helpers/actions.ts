// addClass to any element
function addClass(node: HTMLElement, classes: string[]) {
    node.classList.add(...classes);
}

function addBadge(node: HTMLElement, badge: string) {
    if (badge) {
        node.classList.add('badge');
        badge.length && node.setAttribute("data-badge", badge);
    }
}

export { addClass, addBadge };

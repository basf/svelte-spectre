export default function addBadge(node: HTMLElement, badge: string) {
    if (!badge && badge !== '0') return destroy();
    function update(badge: string) {
        node.classList.add('badge');
        badge.length && node.setAttribute('data-badge', badge);
    }
    function destroy() {
        node.classList.remove('badge');
        node.removeAttribute('data-badge');
    }
    update(badge);
    return { update, destroy };
}

export default function addBadge(node: HTMLElement, badge: string) {
    function update(badge: string) {
        if (!badge && !badge?.length) return destroy();
        node.classList.add('badge');
        badge.length > 0
            ? node.setAttribute('data-badge', badge)
            : node.removeAttribute('data-badge');
    }
    function destroy() {
        node.classList.remove('badge');
        node.removeAttribute('data-badge');
    }
    update(badge);
    return { update, destroy };
}

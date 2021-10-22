export default function addBadge(node, badge) {
	if (!badge && badge !== '0') return destroy();
	function update(badge) {
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

export default function addBadge(node, badge) {
	function update(badge) {
		if (!badge && !(badge === null || badge === void 0 ? void 0 : badge.length))
			return destroy();
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

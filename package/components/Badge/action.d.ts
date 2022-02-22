export default function addBadge(
    node: HTMLElement,
    badge: string
): {
    update: (badge: string) => void;
    destroy: () => void;
};

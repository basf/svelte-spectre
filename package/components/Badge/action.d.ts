export default function addBadge(
    node: HTMLElement,
    badge: string
): void | {
    update: (badge: string) => void;
    destroy: () => void;
};

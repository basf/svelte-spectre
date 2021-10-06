// addClass to any element
function addClass(node: HTMLElement, classes: string[]) {
    node.classList.add(...classes)
}

export { addClass }

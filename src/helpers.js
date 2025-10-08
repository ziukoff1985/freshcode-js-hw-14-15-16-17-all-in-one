export function createElementWithClassAndAttributes(
    tag,
    className,
    parent,
    attributes = null
) {
    const element = document.createElement(tag);

    if (className) {
        if (Array.isArray(className)) {
            element.classList.add(...className);
        } else {
            element.classList.add(className);
        }
    }

    if (parent) {
        parent.append(element);
    }

    if (attributes) {
        Object.entries(attributes).forEach(([key, value]) => {
            element.setAttribute(key, value);
        });
    }
    return element;
}

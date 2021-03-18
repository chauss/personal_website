const setCssVariables = (node: HTMLElement, variables: Object) => {
    for (const [name, value] of Object.entries(variables)) {
        node.style.setProperty(`--${name}`, value);
    }
};

const cssVariables = (node: HTMLElement, variables: Object) => {
    setCssVariables(node, variables);

    return {
        update(variables: Object) {
            setCssVariables(node, variables);
        },
    };
};

export default cssVariables;

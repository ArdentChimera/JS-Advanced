function editElement(element, string, replacer) {
    let content = element.textContent;
    let matcher = new RegExp(string, 'g');
    const edited = content.replace(matcher, replacer);
    element.textContent = edited;
}
function extractText() {
    const items = document.querySelectorAll("ul#items li");
    const result = document.querySelector("#result");

    for (const item of items) {
        result.value += item.textContent + "\n";
    }

}
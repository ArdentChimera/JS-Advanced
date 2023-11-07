function solve() {
  let textInput = document.getElementById("input").value;
  let result = document.getElementById("output");

  let splittedText = textInput.trim().split(". ");
  console.log(splittedText.length);
  console.log(splittedText);
  if (splittedText.length < 3) {
    result.innerHTML += `<p>${splittedText.join(". ")}</p>`;
    return;
  }
  const chunkSize = 3;
  const chunks = [];

  for (let i = 0; i < splittedText.length; i += chunkSize) {
    const chunk = splittedText.slice(i, i + chunkSize);
    console.log(chunk);
    result.innerHTML += `<p>${chunk.join(". ")}</p>`;
  }
} 
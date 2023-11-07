function solve() {
  let text = document.getElementById('text').value;
  let currentCase = document.getElementById('naming-convention').value;

  let textArr = text.toLowerCase().split(' ');
  console.log(textArr);
  let index = 0;
  if (currentCase === 'Camel Case') {
    index = 1;
  }else if (currentCase === 'Pascal Case') {
    index = 0;
  }else {
    document.getElementById('result').textContent = "Error!";
    return;
  }
  console.log(index);
  let resultArr = [];
  for (index; index < textArr.length; index++) {
    let formated = textArr[index].charAt(0).toUpperCase() + textArr[index].slice(1);
    resultArr.push(formated);
  }

  console.log(resultArr);

  let result = resultArr.join('');
  document.getElementById('result').textContent = result;
}
const inputText = document.getElementById('carta-texto');
// console.log(inputText);
const buttonInput = document.getElementById('criar-carta');
// console.log(buttonInput);
const text = document.getElementById('carta-gerada');
// console.log(text);

function texter() {
  const spliter = inputText.value.trim().split(/\s+/); // trim() remove os espaços do início e do final de uma string e .split(/\s+/) separa a string por 1 ou mais espaços;
  let spliterSpan = '';
  for (let i = 0; i < spliter.length; i += 1) {
    spliterSpan += `<span>${spliter[i]}</span> `;
  }
  text.innerHTML = spliterSpan;
  if (text.innerText === '') {
    text.innerText = 'Por favor, digite o conteúdo da carta.';
  }
}

buttonInput.addEventListener('click', texter);

const inputText = document.getElementById('carta-texto');
// console.log(inputText);
const buttonInput = document.getElementById('criar-carta');
// console.log(buttonInput);
const text = document.getElementById('carta-gerada');
// console.log(text);

// function texter() {
//   const spliter = inputText.value.trim().split(/\s+/); // trim() remove os espaços do início e do final de uma string e .split(/\s+/) separa a string por 1 ou mais espaços;
//   let spliterSpan = '';
//   for (let i = 0; i < spliter.length; i += 1) {
//     spliterSpan += `<span>${spliter[i]}</span> `;
//   }
//   text.innerHTML = spliterSpan;
//   if (text.innerText === '') {
//     text.innerText = 'Por favor, digite o conteúdo da carta.';
//   }
// }

function classG1() {
  const classNum = Math.floor(Math.random() * 3);
  switch (classNum) {
  case 1:
    return 'newspaper';
  case 2:
    return 'magazine1';
  default:
    return 'magazine2';
  }
}

function classG2() {
  const classNum = Math.floor(Math.random() * 3);
  switch (classNum) {
  case 1:
    return 'medium';
  case 2:
    return 'big';
  default:
    return 'reallybig';
  }
}

function classG3() {
  const classNum = Math.floor(Math.random() * 2);
  switch (classNum) {
  case 1:
    return 'rotateleft';
  default:
    return 'rotateright';
  }
}

function classG4() {
  const classNum = Math.floor(Math.random() * 2);
  switch (classNum) {
  case 1:
    return 'skewleft';
  default:
    return 'skewright';
  }
}

function spanRndClass(event) {
  const alvo = event.target;
  alvo.className = '';
  alvo.classList.add(classG1());
  alvo.classList.add(classG2());
  alvo.classList.add(classG3());
  alvo.classList.add(classG4());
}

function classRnd() {
  const spans = document.querySelectorAll('span');
  for (let i = 0; i < spans.length; i += 1) {
    spans[i].classList.add(classG1());
    spans[i].classList.add(classG2());
    spans[i].classList.add(classG3());
    spans[i].classList.add(classG4());
    spans[i].addEventListener('click', spanRndClass);
  }
}

function texter() {
  const spliter = inputText.value.trim().split(/\s+/); // trim() remove os espaços do início e do final de uma string e .split(/\s+/) separa a string por 1 ou mais espaços;
  const cartaContador = spliter.length;
  const pCartacontador = document.getElementById('carta-contador');
  pCartacontador.innerText = cartaContador;
  let spliterSpan = '';
  for (let i = 0; i < spliter.length; i += 1) {
    spliterSpan += `<span>${spliter[i]}</span> `;
  }
  text.innerHTML = spliterSpan;
  if (text.innerText === '') {
    text.innerText = 'Por favor, digite o conteúdo da carta.';
    pCartacontador.innerText = '';
  }
  classRnd();
}

buttonInput.addEventListener('click', texter);

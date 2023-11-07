const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const cookie1 = document.querySelector("#cookie1");
const btnReset = document.querySelector("#btnReset");
const frasesDaSorte = [
  "A sorte favorece os audazes.",
  "Acredite na sua sorte e ela virá.",
  "A sorte é o que acontece quando a preparação encontra a oportunidade.",
  "A sorte é o resultado de escolhas bem feitas.",
  "A sorte está sempre do lado de quem trabalha duro.",
  "A sorte é o que acontece quando o planejamento encontra a oportunidade.",
  "A sorte acompanha os corajosos.",
  "A sorte é uma questão de preparação atendendo à oportunidade.",
  "Sorte e destino são irmãos gêmeos.",
  "A sorte é a desculpa dos fracassados."
];


cookie1.addEventListener('click', handleTryClick);
btnReset.addEventListener('click', handleResetClick);
document.addEventListener('keypress', handleKeypress);

function toggleScreen() {
  screen1.classList.add("hide");
  screen2.classList.remove("hide");
}

function handleTryClick() {
  toggleScreen();
  
  const randomIndex = Math.floor(Math.random() * frasesDaSorte.length);
  const randomFrase = frasesDaSorte[randomIndex];
  
  const fraseElement = document.querySelector(".screen2 p");
  fraseElement.textContent = `"${randomFrase}"`;
}

function handleResetClick() {
  screen1.classList.remove("hide");
  screen2.classList.add("hide");
}

function handleKeypress(e) {
  if (e.key === 'Enter') {
    if (!screen1.classList.contains('hide')) {
      handleTryClick(); // Tela 1
    } else if (!screen2.classList.contains('hide')) {
      handleResetClick(); // Tela 2
    }
  }
}
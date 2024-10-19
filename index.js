const question = document.querySelector('.question');
const answers = document.querySelector('.answers');
const container = document.querySelector('.container');
const msg = document.querySelector('.msg');

import questions from "./questions.js";

let flag = 0;
let lang = '';
let area = '';

function nextQuestion(e) {
  if(e.target.innerText == 'Back-End') {
    flag = 2;
    area = e.target.innerText
    loadQuestion();
  }
  if(e.target.innerText == 'Front-End') {
    flag = 1;
    area = e.target.innerText
    loadQuestion();
  }
  if(e.target.innerText == 'React') {
    flag+=2
    lang = e.target.innerText;
    loadQuestion();
  }
  if(e.target.innerText == 'Vue') {
    flag+=2
    lang = e.target.innerText;
    loadQuestion();
  }
  if(e.target.innerText == 'Java') {
    flag++;
    lang = e.target.innerText;
    loadQuestion();
  }
  if(e.target.innerText == 'C#') {
    flag++;
    lang = e.target.innerText;
    loadQuestion();
  }
  if(e.target.innerText == 'Continuar Especializando') {
    specializing();
  }
  if(e.target.innerText == 'Me tornar FullStack') {
    flag = 4;
    loadQuestion();
  }
  if(e.target.innerText == 'Sim') {
    fullStack();
  }
  if(e.target.innerText == 'Não') {
    finish(false);
  }
}

function loadQuestion(){
  const item = questions[flag];
  answers.innerHTML = "";
  question.innerHTML = item.question;

  item.answers.forEach(answer => {
    const div = document.createElement('div');

    div.innerHTML = `<button class="answer">${answer}</button>`
    answers.appendChild(div);
  });

  document.querySelectorAll(".answer").forEach((item) => {
    item.addEventListener("click", nextQuestion);
  });
}

function specializing(){
  answers.innerHTML = "";
  question.innerHTML = '';
  const div = document.createElement('div');
  div.innerHTML = `<h2>Continue se especializando em ${lang} para dominar a área de ${area}!</h2>`
  answers.appendChild(div);
}

function fullStack(){
  answers.innerHTML = "";
  question.innerHTML = 'Quais linguagens?';
  let newLangs = [];
  const div = document.createElement('div');
  div.innerHTML = `<input type="text" class="langs"><br><button class="add">Adicionar</button><button class="exit">Sair</button>`
  answers.appendChild(div);
  let langs = document.querySelector('.langs');
  document.addEventListener('click', e => {
    if(e.target.classList.contains('add')){
      newLangs.push(langs.value);
      msg.innerHTML = `<strong>${langs.value}</strong> é muito legal de se aprender !!`
      langs.value = '';
    }
    if(e.target.classList.contains('exit')){
      finish(true, newLangs);
    }
  })
}

function learnLangs(newLangs){
  answers.innerHTML = "";
  question.innerHTML = "";
  msg.innerHTML = "";
  const h2 = document.createElement('h2');
  h2.innerText = 'Hora de aprender as linguagens que você escolheu ! Boa sorte !';
  container.appendChild(h2);
  const ol = document.createElement('ol');
  for(let lang of newLangs) {
    const li = document.createElement('li');
    li.innerText = lang;
    ol.appendChild(li);
  }
  container.appendChild(ol);
}

function finish(value, newLangs){
  if(value){
    learnLangs(newLangs)
  } else {
    answers.innerHTML = "";
    question.innerHTML = "";
    msg.innerHTML = "";
    const h2 = document.createElement('h2');
    h2.innerText = 'Continue estudando que você alcançará todos os seus objetivos!!';
    container.appendChild(h2);
  }
}

loadQuestion();
























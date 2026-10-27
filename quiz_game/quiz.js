'use strict'
// 1行目に記載している 'use strict' は削除しないでください

const currentQuestion = document.querySelector("#current-question");

const currentNums = document.querySelector("#current-nums");
const choices = document.getElementsByClassName("choice");
const quizMain = document.querySelector(".quiz-main");

const submit = document.querySelector("#submit-button");
const feedback = document.querySelector("#feedback");
const next = document.querySelector("#next-button");

const result = document.querySelector("#result-screen");
const retry = document.querySelector("#retry-button");

let correctCount = 0;
let count = 0;
let currentQuiz = null;
let selectIndex = null;
let usedQuestions = [];

if (count === 0) {
  showQuestions();
}

//ランダムに問題を取り出す関数
function selectQuestion(questions) {
  //選ばれた問題以外を格納した配列
  const unusedQuestions = questions.filter( q => ! usedQuestions.includes(q));
  const selected = unusedQuestions[Math.floor(Math.random() * (unusedQuestions.length - 1))];
  usedQuestions.push(selected);
  console.log(selected);
  return selected;
}

//問題を表示させる関数
function showQuestions() {
  result.classList.add("hidden");
  quizMain.classList.remove("hidden");

  count++;
  currentNums.textContent = count + "/10 問目";

  currentQuiz = selectQuestion(questions);
  currentQuestion.textContent = currentQuiz.question;

  for (let i = 0; i < choices.length; i++) {
    choices[i].textContent = currentQuiz.choices[i];
  }

}

//選択肢をクリックしたときの処理
for (let i = 0; i < choices.length; i++) {
  choices[i].addEventListener("click", () => {
    selectIndex = Number(choices[i].dataset.index);
    //  console.log(selectIndex);
    // すべての選択状態を解除
    for (let j = 0; j < choices.length; j++) {
      choices[j].classList.remove("selected");
    }
    // クリックした選択肢を選択状態にする
    choices[i].classList.add("selected");

  })
}

//回答が送信されたときの処理(解説表示)
submit.addEventListener("click", () => {

  // 選択されていなければ処理を止める
  if (selectIndex === null) {
    alert("選択肢を選んでください！");
    return;
  }

  const resultMessage = document.querySelector("#result-message");
  const explanationCard = document.querySelector(".explanation-card");
  explanationCard.classList.remove("correct", "incorrect");
  if (selectIndex === currentQuiz.answer) {
    correctCount++;
    resultMessage.textContent = "✅　正解！";
    explanationCard.classList.add("correct");
    // console.log(correctCount);
  } else {
    resultMessage.textContent = "❌　不正解！";
    explanationCard.classList.add("incorrect");
  }

  // 解説を表示
  const explanationText = document.querySelector("#explanation-text");
  explanationText.textContent = currentQuiz.explanation;

  feedback.classList.remove("hidden");
  submit.classList.add("hidden");

  // 回答後は選択肢を変更できないようにする
  for (let i = 0; i < choices.length; i++) {
    choices[i].disabled = true;
  }
})

//次の問題に移る処理
next.addEventListener("click", () => {
  selectIndex = null;

  for (let i = 0; i < choices.length; i++) {
    choices[i].disabled = false;
  }

  feedback.classList.add("hidden");
  submit.classList.remove("hidden");

  for (let j = 0; j < choices.length; j++) {
    choices[j].classList.remove("selected");
  }
  if (count < 10) {
    showQuestions();
  } else {
    showResult();
  }
})

//結果画面の表示
function showResult() {
  quizMain.classList.add("hidden");
  result.classList.remove("hidden");

  const score = document.querySelector("#final-score");
  const comment = document.querySelector("#final-comment");
  score.innerHTML = `<strong>${correctCount}</strong> / <small>10問</small>`;

  if (correctCount === 10) {
    comment.textContent = '素晴らしい🙌\n完璧ですね！！';
  } else if (correctCount >= 7) {
    comment.textContent = "よくできました！🎉\nあと少しで満点！間違えた問題を復習しよう。";
  } else {
    comment.textContent = "ナイストライ！\n繰り返し挑戦して知識を身に着けよう。";
  }
}

//再挑戦
retry.addEventListener("click", () => {
  count = 0;
  correctCount = 0;
  showQuestions();
})


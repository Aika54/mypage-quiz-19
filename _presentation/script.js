'use strict'
// 1行目に記載している 'use strict' は削除しないでください

const loginForm = document.querySelector("#login-form");
const nicknameInput = document.querySelector("#nickname");

const welcomeScreen = document.querySelector("#welcome-screen");
const mypage = document.querySelector("#mypage");

const displayName = document.querySelector("#display-name");
const profileName = document.querySelector("#profile-name");
const logoutButton = document.querySelector("#logout-button");

// MyPageを表示する関数
function showMyPage(name) {
  displayName.textContent = name;
  profileName.textContent = name;

  // ログイン画面を非表示に
  welcomeScreen.classList.add("hidden");
  mypage.classList.remove("hidden");
}

// ログインの処理、名前の取得
loginForm.addEventListener("submit", function (event) {
  //フォームの送信をキャンセル
  event.preventDefault();
  //trim : 空白や改行を取り除く
  const nickname = nicknameInput.value.trim();

  //空だったらページを移動させない
  if (nickname === "") {
    alert("ニックネームを入力してください！");
    return;
  }

  // ブラウザ内にニックネームを保存
  localStorage.setItem("mypageNickname", nickname);

  showMyPage(nickname);
});

// 前回のニックネームがあれば情報を復元
const savedNickname = localStorage.getItem("mypageNickname");

if (savedNickname) {
  showMyPage(savedNickname);
}

// 退出ボタンが押されたときにログインに戻る
logoutButton.addEventListener("click", function () {
  localStorage.removeItem("mypageNickname");

  // マイページを非表示に
  mypage.classList.add("hidden");
  welcomeScreen.classList.remove("hidden");

  nicknameInput.value = "";
});
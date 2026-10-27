'use strict'
// 1行目に記載している 'use strict' は削除しないでください

const questions = [
  {
    question: "Webページの見た目を整える言語は？",
    choices: ["HTML", "CSS", "JavaScript", "Python"],
    answer: 1,
    explanation: "CSSは文字色、余白、レイアウトなどの見た目を整えます。"
  },
  {
    question: "HTMLでリンクを作るときに使うタグは？",
    choices: ["<p>", "<img>", "<a>", "<h1>"],
    answer: 2,
    explanation: "aタグはhref属性と組み合わせてリンクを作ります。"
  },
  {
    question: "JavaScriptで変数を宣言するキーワードはどれ？",
    choices: ["let", "style", "href", "body"],
    answer: 0,
    explanation: "letはJavaScriptで変数を宣言するキーワードの1つです。"
  },
  {
    question: "CSSで文字色を指定するプロパティは？",
    choices: ["font-style", "background", "text-align", "color"],
    answer: 3,
    explanation: "colorプロパティで文字の色を指定できます。"
  },
  {
    question: "HTMLで画像を表示するタグは？",
    choices: ["<image>", "<img>", "<picture-text>", "<src>"],
    answer: 1,
    explanation: "imgタグのsrc属性で画像ファイルの場所を指定します。"
  },
  {
    question: "JavaScriptで等しいかどうかを厳密に比較する演算子は？",
    choices: ["=", "==", "===", "!="],
    answer: 2,
    explanation: "===は値と型の両方を比較する厳密等価演算子です。"
  },
  {
    question: "HTMLで最も大きな見出しを表す標準的なタグは？",
    choices: ["<h6>", "<head>", "<heading>", "<h1>"],
    answer: 3,
    explanation: "h1はh1〜h6の中で最も重要度の高い見出しを表します。"
  },
  {
    question: "CSSで要素の外側の余白を指定するプロパティは？",
    choices: ["padding", "margin", "border", "width"],
    answer: 1,
    explanation: "marginは要素の外側の余白を指定します。paddingは内側の余白です。"
  },
  {
    question: "JavaScriptでボタンのクリックを検知する代表的な方法は？",
    choices: [
      "addEventListener('click', ...)",
      "color = click",
      "href('click')",
      "margin.click()"
    ],
    answer: 0,
    explanation: "addEventListenerを使うと、clickなどのイベントに処理を登録できます。"
  },
  {
    question: "HTMLで別のHTMLファイルを読み込むとき、通常のページ遷移に使うものは？",
    choices: [
      "CSSのcolorプロパティ",
      "JavaScriptのletキーワード",
      "aタグのhref属性",
      "imgタグのalt属性"
    ],
    answer: 2,
    explanation: "aタグのhref属性に遷移先のURLやファイル名を指定します。"
  },
  {
    question: "JavaScriptで、配列の各要素に対して処理を実行するメソッドは？",
    choices: [
      "filter()",
      "forEach()",
      "push()",
      "join()"
    ],
    answer: 1,
    explanation: "forEach()は配列の各要素に対して、指定した関数を順番に実行するメソッドです。"
  },
  {
    question: "CSSで、要素の幅や高さを指定するときに使うプロパティは？",
    choices: [
      "margin",
      "padding",
      "width / height",
      "font-size"
    ],
    answer: 2,
    explanation: "widthは要素の幅、heightは要素の高さを指定するプロパティです。"
  },
  {
    question: "HTMLで、Webページ内の特定の要素を一意に識別するために使う属性は？",
    choices: [
      "class",
      "style",
      "name",
      "id"
    ],
    answer: 3,
    explanation: "id属性は要素を識別するための一意な名前を指定します。CSSやJavaScriptから特定の要素を参照するときにも使います。"
  },
  {
    question: "JavaScriptで、条件が真である間、処理を繰り返す構文は？",
    choices: [
      "if",
      "while",
      "switch",
      "return"
    ],
    answer: 1,
    explanation: "while文は指定した条件が真である間、処理を繰り返します。条件がいつまでも真だと無限ループになることがあるため注意が必要です。"
  },
  {
    question: "HTMLのDOMとは、何を意味する用語？",
    choices: [
      "Webページの構造をオブジェクトとして扱う仕組み",
      "Webページの色を管理するCSSの機能",
      "JavaScriptの変数を保存するデータベース",
      "Webサイトの通信速度を測定する仕組み"
    ],
    answer: 0,
    explanation: "DOM（Document Object Model）は、HTML文書をツリー状のオブジェクトとして表現し、JavaScriptなどから要素や内容を操作できるようにする仕組みです。"
  },
  
  {
    question: "次のコードを実行したとき、resultの値はどれ？\n\nconst nums = [1, 2, 3];\nconst result = nums.map(n => n * 2);",
    choices: [
      "[1, 2, 3]",
      "[2, 4, 6]",
      "[2, 3, 4]",
      "6"
    ],
    answer: 1,
    explanation: "map()は配列の各要素に処理を実行し、その結果から新しい配列を作ります。ここでは各要素を2倍にするので、[2, 4, 6]になります。"
  },
  {
    question: "次のコードを実行したとき、resultの値はどれ？\n\nconst nums = [1, 2, 3, 4];\nconst result = nums.filter(n => n > 2);",
    choices: [
      "[1, 2]",
      "[2, 3, 4]",
      "[3, 4]",
      "true"
    ],
    answer: 2,
    explanation: "filter()は、指定した条件を満たす要素だけを取り出して新しい配列を作ります。n > 2を満たすのは3と4です。"
  },
  {
    question: "次の式の評価結果として正しいものはどれ？\n\n5 === \"5\"",
    choices: [
      "true",
      "false",
      "5",
      "エラーになる"
    ],
    answer: 1,
    explanation: "===は値と型の両方を比較します。左は数値の5、右は文字列の\"5\"なので、型が異なりfalseになります。"
  },
  {
    question: "次のコードで、ボタンをクリックしたときに表示される文字はどれ？\n\nbutton.addEventListener(\"click\", () => {\n  message.textContent = \"完了！\";\n});",
    choices: [
      "クリックする前から「完了！」と表示される",
      "クリックすると「完了！」と表示される",
      "クリックすると文字が消える",
      "クリックしても何も起こらない"
    ],
    answer: 1,
    explanation: "addEventListener()はイベントが発生したときに実行する処理を登録します。この例では、buttonがクリックされるとmessageの文字が「完了！」に変わります。"
  },
  {
    question: "次のCSSセレクタが対象にする要素はどれ？\n\n.card p { color: red; }",
    choices: [
      "pというクラスを持つすべての要素",
      "cardというIDを持つ要素",
      "cardクラスの中にあるp要素",
      "cardクラスとpクラスを両方持つ要素"
    ],
    answer: 2,
    explanation: ".card pは、cardクラスの要素の内側にあるp要素を指定します。子孫セレクタなので、直接の子要素だけでなく、さらに内側にあるp要素も対象です。"
  },
  {
    question: "次のCSSを適用した要素の横幅は、通常何pxになる？\n\n.box {\n  width: 200px;\n  padding: 20px;\n  border: 2px solid black;\n}",
    choices: [
      "200px",
      "220px",
      "240px",
      "244px"
    ],
    answer: 3,
    explanation: "標準のbox-sizing: content-boxでは、指定したwidthに左右のpaddingとborderが加わります。200 + 20×2 + 2×2 = 244pxです。"
  },
  {
    question: "次のCSSで、子要素を横方向の中央に配置するにはどれが適切？\n\n.container {\n  display: flex;\n}",
    choices: [
      "justify-content: center;",
      "align-items: left;",
      "text-align: flex;",
      "position: center;"
    ],
    answer: 0,
    explanation: "flexの初期設定では主軸が横方向です。justify-content: centerを指定すると、子要素を主軸方向、つまり横方向の中央に配置できます。"
  },
  {
    question: "position: fixed; を指定した要素の配置基準は、通常どれ？",
    choices: [
      "直前の兄弟要素",
      "ページ内の通常の配置位置",
      "ブラウザの表示領域（ビューポート）",
      "親要素の文字サイズ"
    ],
    answer: 2,
    explanation: "position: fixedは通常、ビューポートを基準に配置されます。スクロールしても同じ画面位置に表示させたい場合などに使います。"
  },
  {
    question: "HTML要素に文字列「<strong>Hello</strong>」を、HTMLタグとして解釈させず文字として表示するには、どれを使う？",
    choices: [
      "element.style",
      "element.innerHTML",
      "element.textContent",
      "element.classList"
    ],
    answer: 2,
    explanation: "textContentに代入した文字列はHTMLとして解析されず、テキストとして扱われます。innerHTMLはHTMLとして解析するため、用途に応じて使い分けます。"
  },
  {
    question: "次のコードについて正しい説明はどれ？\n\nbutton.addEventListener(\"click\", handleClick);",
    choices: [
      "handleClickをその場ですぐに実行する",
      "クリックされたときにhandleClickを実行するよう登録する",
      "buttonをHTMLから削除する",
      "クリックイベントを無効にする"
    ],
    answer: 1,
    explanation: "関数名handleClickを括弧なしで渡すことで、クリック時に実行する関数として登録します。handleClick()と書くと、その場で関数を呼び出すことになるので注意しましょう。"
  }
];
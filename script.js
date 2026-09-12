// ================================
// 花の仕事診断
// ================================

// 4つの実際の求人ページ
const JOB_LINKS = {
  site_transport: "https://thancs.net/recruiment_list/2540/?2026_09_2",
  delivery: "https://thancs.net/recruiment_list/2326/?2026_09_2",
  buyer: "https://thancs.net/recruiment_list/2349/?2026_09_2",
  production: "https://thancs.net/recruiment_list/2330/?2026_09_2"
};


// ================================
// 診断結果
// ================================

const results = {

  operation: {
    icon: "🚚",
    title: "段取りマスタータイプ",
    catch: "効率よく動くことが得意！",
    description:
      "時間や順番を考えながら、テキパキ仕事を進めるのが得意なタイプ。周りの状況を見ながら、次に何をするかを考えられるあなたは、現場をスムーズに動かす力があります。",
    jobKey: "site_transport",
    jobName: "敷地内運搬スタッフ",
    jobDescription: "花や商品の運搬、荷下ろし、在庫管理など、現場を支える仕事"
  },

  communication: {
    icon: "🤝",
    title: "お店のパートナータイプ",
    catch: "人と話すことが好き！",
    description:
      "人とコミュニケーションを取ることが得意なタイプ。お店のスタッフと話したり、相手の希望を聞きながら仕事をすることにやりがいを感じられます。",
    jobKey: "delivery",
    jobName: "スーパーへのルート配送・売場管理スタッフ",
    jobDescription: "スーパーへの配送から、花の陳列・売場づくりまで担当する仕事"
  },

  store: {
    icon: "🛒",
    title: "売場プロデューサータイプ",
    catch: "売場を見るのが得意！",
    description:
      "『どうしたらもっと商品が見やすくなる？』『どこに置いたら手に取ってもらえる？』と考えるのが得意なタイプ。花と売場の両方を楽しめるあなたに向いています。",
    jobKey: "delivery",
    jobName: "スーパーへのルート配送・売場管理スタッフ",
    jobDescription: "配送だけでなく、花の陳列や売場づくりにも関わる仕事"
  },

  buyer: {
    icon: "🌸",
    title: "花の目利きタイプ",
    catch: "花を見る目には自信あり！",
    description:
      "商品の違いや魅力を見つけるのが得意なタイプ。『これは良い花だな』『この花を使ってみたい』という感覚を大切にできるあなたは、花の仕入れや商品選びで力を発揮できます。",
    jobKey: "buyer",
    jobName: "生花バイヤー",
    jobDescription: "市場で花を選び、自分の目利きで商品を仕入れる仕事"
  },

  production: {
    icon: "⚙️",
    title: "現場コントローラータイプ",
    catch: "全体を見るのが得意！",
    description:
      "一つの作業だけでなく、全体の流れを見ながら動くのが得意なタイプ。『今どこが忙しい？』『次は何をすればいい？』と考えながら、現場を動かす力があります。",
    jobKey: "production",
    jobName: "お花の生産管理スタッフ",
    jobDescription: "生産ライン全体を見ながら、製造現場を管理する仕事"
  },

  quality: {
    icon: "🔍",
    title: "品質チェックタイプ",
    catch: "細かいところまで見逃さない！",
    description:
      "丁寧に確認することが得意なタイプ。商品の状態や作業のミスなど、小さな違いにも気づけるあなたは、品質を守る仕事で力を発揮できます。",
    jobKey: "production",
    jobName: "お花の生産管理スタッフ",
    jobDescription: "商品の品質や生産工程をチェックし、現場を支える仕事"
  }

};


// ================================
// 15問の診断
// ================================

const questions = [

  {
    question: "予定を立てて行動するのは？",
    answers: [
      { text: "かなり得意", type: "operation" },
      { text: "まあまあ得意", type: "store" },
      { text: "その場で考える", type: "communication" },
      { text: "あまり気にしない", type: "buyer" }
    ]
  },

  {
    question: "人と話すことは？",
    answers: [
      { text: "かなり好き", type: "communication" },
      { text: "どちらかというと好き", type: "store" },
      { text: "必要なら話せる", type: "operation" },
      { text: "一人の方が楽", type: "quality" }
    ]
  },

  {
    question: "花屋さんやスーパーで花を見ると？",
    answers: [
      { text: "つい売場を見てしまう", type: "store" },
      { text: "花の種類が気になる", type: "buyer" },
      { text: "値段や売れ方が気になる", type: "store" },
      { text: "あまり気にしない", type: "operation" }
    ]
  },

  {
    question: "仕事で大切だと思うのは？",
    answers: [
      { text: "スピード", type: "operation" },
      { text: "人との関係", type: "communication" },
      { text: "見た目やセンス", type: "buyer" },
      { text: "正確さ", type: "quality" }
    ]
  },

  {
    question: "何かミスを見つけたら？",
    answers: [
      { text: "すぐに直す", type: "quality" },
      { text: "原因を考える", type: "production" },
      { text: "周りに伝える", type: "communication" },
      { text: "次から気をつける", type: "operation" }
    ]
  },

  {
    question: "複数の仕事を頼まれたら？",
    answers: [
      { text: "優先順位を決める", type: "operation" },
      { text: "一つずつ確実にやる", type: "quality" },
      { text: "周りと相談する", type: "communication" },
      { text: "とりあえず始める", type: "buyer" }
    ]
  },

  {
    question: "売場を見るとき、気になるのは？",
    answers: [
      { text: "商品の並び方", type: "store" },
      { text: "花の状態", type: "quality" },
      { text: "お客さんの動き", type: "store" },
      { text: "花そのものの魅力", type: "buyer" }
    ]
  },

  {
    question: "新しい花を見つけたら？",
    answers: [
      { text: "どこで売れるか考える", type: "store" },
      { text: "どんな花なのか調べる", type: "buyer" },
      { text: "誰かに教えたくなる", type: "communication" },
      { text: "特に気にしない", type: "operation" }
    ]
  },

  {
    question: "決められた時間までに仕事を終えるなら？",
    answers: [
      { text: "計画を立てて進める", type: "operation" },
      { text: "早めに終わらせたい", type: "operation" },
      { text: "丁寧に確認しながら進める", type: "quality" },
      { text: "状況を見ながら進める", type: "production" }
    ]
  },

  {
    question: "周りから言われることが多いのは？",
    answers: [
      { text: "しっかりしている", type: "quality" },
      { text: "話しやすい", type: "communication" },
      { text: "センスがいい", type: "buyer" },
      { text: "行動が早い", type: "operation" }
    ]
  },

  {
    question: "チームで仕事をするときは？",
    answers: [
      { text: "全体の進み具合を見る", type: "production" },
      { text: "周りと協力する", type: "communication" },
      { text: "自分の仕事に集中する", type: "quality" },
      { text: "効率よく進める", type: "operation" }
    ]
  },

  {
    question: "商品を作るなら？",
    answers: [
      { text: "きれいに仕上げたい", type: "quality" },
      { text: "センスを活かしたい", type: "buyer" },
      { text: "早くたくさん作りたい", type: "production" },
      { text: "決められた通り正確に作りたい", type: "quality" }
    ]
  },

  {
    question: "仕事で困っている人がいたら？",
    answers: [
      { text: "声をかける", type: "communication" },
      { text: "自分が手伝う", type: "communication" },
      { text: "どうすれば効率的か考える", type: "operation" },
      { text: "まず自分の仕事を終わらせる", type: "quality" }
    ]
  },

  {
    question: "『もっと良くできそう』と思ったら？",
    answers: [
      { text: "すぐ改善する", type: "production" },
      { text: "アイデアを出す", type: "buyer" },
      { text: "周りに相談する", type: "communication" },
      { text: "ミスがないか確認する", type: "quality" }
    ]
  },

  {
    question: "あなたが一番やりがいを感じそうなのは？",
    answers: [
      { text: "現場をスムーズに動かす", type: "operation" },
      { text: "人に喜んでもらう", type: "communication" },
      { text: "魅力的な商品・売場を作る", type: "store" },
      { text: "良い商品を見極める", type: "buyer" }
    ]
  }

];


// ================================
// HTMLの要素を取得
// ================================

const startScreen = document.getElementById("start-screen");
const startButton = document.getElementById("start-btn");

const quizScreen = document.getElementById("quiz-screen");
const questionNumber = document.getElementById("question-number");
const questionText = document.getElementById("question");
const answersContainer = document.getElementById("answers");
const progressBar = document.getElementById("progress");

const resultScreen = document.getElementById("result-screen");
const resultIcon = document.getElementById("result-icon");
const resultTitle = document.getElementById("result-title");
const resultDescription = document.getElementById("result-description");
const resultJob = document.getElementById("result-job");
const jobLink = document.getElementById("job-link");

const restartButton = document.getElementById("restart-btn");


// ================================
// 診断用データ
// ================================

let currentQuestion = 0;

let scores = {
  operation: 0,
  communication: 0,
  store: 0,
  buyer: 0,
  production: 0,
  quality: 0
};


// ================================
// スタート
// ================================

startButton.addEventListener("click", () => {

  currentQuestion = 0;

  scores = {
    operation: 0,
    communication: 0,
    store: 0,
    buyer: 0,
    production: 0,
    quality: 0
  };

  startScreen.classList.remove("active");
  resultScreen.classList.remove("active");
  quizScreen.classList.add("active");

  showQuestion();

});


// ================================
// 質問を表示
// ================================

function showQuestion() {

  const current = questions[currentQuestion];

  questionNumber.textContent =
    `Q${currentQuestion + 1} / ${questions.length}`;

  questionText.textContent = current.question;

  answersContainer.innerHTML = "";

  // 進捗バー
  const progress =
    ((currentQuestion) / questions.length) * 100;

  progressBar.style.width = `${progress}%`;


  // 選択肢を作成
  current.answers.forEach((answer) => {

    const button = document.createElement("button");

    button.textContent = answer.text;

    button.classList.add("answer-btn");

    button.addEventListener("click", () => {

      scores[answer.type]++;

      currentQuestion++;

      if (currentQuestion < questions.length) {

        showQuestion();

      } else {

        showResult();

      }

    });

    answersContainer.appendChild(button);

  });

}


// ================================
// 診断結果を表示
// ================================

function showResult() {

  quizScreen.classList.remove("active");
  resultScreen.classList.add("active");

  // 進捗100%
  progressBar.style.width = "100%";


  // 一番点数が高いタイプを取得
  let resultType = Object.keys(scores).reduce((best, type) => {

    if (scores[type] > scores[best]) {
      return type;
    }

    return best;

  }, Object.keys(scores)[0]);


  const result = results[resultType];

  const jobUrl = JOB_LINKS[result.jobKey];


  // 結果表示
  resultIcon.textContent = result.icon;

  resultTitle.textContent = result.title;

  resultDescription.textContent =
    `${result.catch} ${result.description}`;

  resultJob.textContent =
    `おすすめの仕事：${result.jobName}｜${result.jobDescription}`;


  // 求人ページへのリンク
  jobLink.href = jobUrl;

  jobLink.target = "_blank";
  jobLink.rel = "noopener noreferrer";

  jobLink.textContent =
    `「${result.jobName}」の求人を見る`;

}


// ================================
// もう一度診断
// ================================

restartButton.addEventListener("click", () => {

  currentQuestion = 0;

  scores = {
    operation: 0,
    communication: 0,
    store: 0,
    buyer: 0,
    production: 0,
    quality: 0
  };

  resultScreen.classList.remove("active");
  quizScreen.classList.remove("active");
  startScreen.classList.add("active");

});

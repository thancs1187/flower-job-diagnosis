// ===============================
// Google Analytics 4
// ===============================

const GA_MEASUREMENT_ID = "G-8GR3Q3FF7Q";

// Google Analytics 用の設定
window.dataLayer = window.dataLayer || [];

function gtag() {
  dataLayer.push(arguments);
}

gtag("js", new Date());
gtag("config", GA_MEASUREMENT_ID);

// Google Analytics の読み込み
const gaScript = document.createElement("script");
gaScript.async = true;
gaScript.src =
  "https://www.googletagmanager.com/gtag/js?id=" + GA_MEASUREMENT_ID;

document.head.appendChild(gaScript);


// ===============================
// GA4 イベント送信用
// ===============================

function trackEvent(eventName, eventParams = {}) {
  if (typeof gtag === "function") {
    gtag("event", eventName, eventParams);
  }
}


// ===============================
// 求人リンク
// ===============================

const JOB_LINKS = {
  site_transport:
    "https://thancs.net/recruiment_list/2540/?2026_09_2",

  delivery:
    "https://thancs.net/recruiment_list/2326/?2026_09_2",

  buyer:
    "https://thancs.net/recruiment_list/2349/?2026_09_2",

  production:
    "https://thancs.net/recruiment_list/2330/?2026_09_2"
};


// ===============================
// 診断結果
// ===============================

const RESULTS = {

  operation: {
    icon: "🚚",
    title: "段取りマスタータイプ",
    description:
      "効率よく物事を進めるのが得意なあなた。正確さや段取り力を活かして、チームを支える仕事に向いています。",
    jobKey: "site_transport",
    jobName: "敷地内運搬スタッフ"
  },

  communication: {
    icon: "🤝",
    title: "お店のパートナータイプ",
    description:
      "人と話すことが好きで、相手の立場に立って考えられるあなた。お店の方とのコミュニケーションを大切にする仕事に向いています。",
    jobKey: "delivery",
    jobName: "スーパーへのルート配送・売場管理スタッフ"
  },

  store: {
    icon: "🛒",
    title: "売場プロデューサータイプ",
    description:
      "売場を見ながら「どうしたらもっと花が売れるか？」を考えるのが得意なあなた。観察力やアイデアを活かせる仕事に向いています。",
    jobKey: "delivery",
    jobName: "スーパーへのルート配送・売場管理スタッフ"
  },

  buyer: {
    icon: "🌸",
    title: "花の目利きタイプ",
    description:
      "花を見る目とこだわりを持っているあなた。市場で自分の目で花を選び、商品の価値をつくる仕事に向いています。",
    jobKey: "buyer",
    jobName: "生花バイヤー"
  },

  production: {
    icon: "⚙️",
    title: "現場コントローラータイプ",
    description:
      "全体を見ながら人やモノの流れを管理するのが得意なあなた。現場をスムーズに動かす仕事に向いています。",
    jobKey: "production",
    jobName: "お花の生産管理スタッフ"
  },

  quality: {
    icon: "🔍",
    title: "品質チェックタイプ",
    description:
      "細かいところまでしっかり確認できるあなた。花の品質や仕上がりにこだわる仕事に向いています。",
    jobKey: "production",
    jobName: "お花の生産管理スタッフ"
  }

};


// ===============================
// 質問
// ===============================

const QUESTIONS = [

  {
    question: "あなたはどんなことをするのが好き？",
    answers: [
      {
        text: "効率よく作業する",
        type: "operation"
      },
      {
        text: "人と話す",
        type: "communication"
      },
      {
        text: "売場を考える",
        type: "store"
      },
      {
        text: "花をじっくり見る",
        type: "buyer"
      }
    ]
  },

  {
    question: "仕事をするとき、どんなことを大切にしたい？",
    answers: [
      {
        text: "段取りよく進める",
        type: "operation"
      },
      {
        text: "周りと協力する",
        type: "communication"
      },
      {
        text: "お客様の目線で考える",
        type: "store"
      },
      {
        text: "自分のこだわりを大切にする",
        type: "buyer"
      }
    ]
  },

  {
    question: "あなたが得意なのは？",
    answers: [
      {
        text: "計画を立てる",
        type: "operation"
      },
      {
        text: "人とすぐ仲良くなる",
        type: "communication"
      },
      {
        text: "アイデアを出す",
        type: "store"
      },
      {
        text: "違いを見つける",
        type: "buyer"
      }
    ]
  },

  {
    question: "花を見たとき、気になるのは？",
    answers: [
      {
        text: "作業しやすさ",
        type: "operation"
      },
      {
        text: "誰に贈るか",
        type: "communication"
      },
      {
        text: "どう並べるか",
        type: "store"
      },
      {
        text: "品質や状態",
        type: "buyer"
      }
    ]
  },

  {
    question: "チームで仕事をするとしたら？",
    answers: [
      {
        text: "全体の進み具合を確認する",
        type: "operation"
      },
      {
        text: "みんなと声を掛け合う",
        type: "communication"
      },
      {
        text: "より良くする方法を考える",
        type: "store"
      },
      {
        text: "細かいところをチェックする",
        type: "quality"
      }
    ]
  },

  {
    question: "あなたはどんな作業が好き？",
    answers: [
      {
        text: "決まった手順で進める",
        type: "operation"
      },
      {
        text: "人と関わる作業",
        type: "communication"
      },
      {
        text: "工夫しながら進める",
        type: "store"
      },
      {
        text: "細かい作業",
        type: "quality"
      }
    ]
  },

  {
    question: "仕事で困っている人がいたら？",
    answers: [
      {
        text: "効率のいい方法を教える",
        type: "operation"
      },
      {
        text: "話を聞いてあげる",
        type: "communication"
      },
      {
        text: "別の方法を提案する",
        type: "store"
      },
      {
        text: "原因を調べる",
        type: "quality"
      }
    ]
  },

  {
    question: "あなたが魅力を感じるのは？",
    answers: [
      {
        text: "スムーズに仕事が進むこと",
        type: "operation"
      },
      {
        text: "人からありがとうと言われること",
        type: "communication"
      },
      {
        text: "自分のアイデアが形になること",
        type: "store"
      },
      {
        text: "良い商品を作ること",
        type: "quality"
      }
    ]
  },

  {
    question: "花を扱うならどんな仕事がしたい？",
    answers: [
      {
        text: "花を運ぶ",
        type: "operation"
      },
      {
        text: "お店の人と関わる",
        type: "communication"
      },
      {
        text: "売場をつくる",
        type: "store"
      },
      {
        text: "花を選ぶ",
        type: "buyer"
      }
    ]
  },

  {
    question: "あなたが仕事で感じる「達成感」は？",
    answers: [
      {
        text: "予定通り終わったとき",
        type: "operation"
      },
      {
        text: "誰かに喜んでもらえたとき",
        type: "communication"
      },
      {
        text: "売場がきれいにできたとき",
        type: "store"
      },
      {
        text: "良い花を見つけたとき",
        type: "buyer"
      }
    ]
  },

  {
    question: "あなたはどちらかというと？",
    answers: [
      {
        text: "コツコツタイプ",
        type: "operation"
      },
      {
        text: "人と一緒にやるタイプ",
        type: "communication"
      },
      {
        text: "ひらめきタイプ",
        type: "store"
      },
      {
        text: "こだわりタイプ",
        type: "buyer"
      }
    ]
  },

  {
    question: "仕事を覚えるなら？",
    answers: [
      {
        text: "手順を覚える",
        type: "operation"
      },
      {
        text: "人から教えてもらう",
        type: "communication"
      },
      {
        text: "実際にやってみる",
        type: "store"
      },
      {
        text: "自分で研究する",
        type: "quality"
      }
    ]
  },

  {
    question: "あなたが大切にしたいのは？",
    answers: [
      {
        text: "正確さ",
        type: "operation"
      },
      {
        text: "コミュニケーション",
        type: "communication"
      },
      {
        text: "アイデア",
        type: "store"
      },
      {
        text: "品質",
        type: "quality"
      }
    ]
  },

  {
    question: "将来、どんな仕事がしたい？",
    answers: [
      {
        text: "チームを支える仕事",
        type: "operation"
      },
      {
        text: "人と関わる仕事",
        type: "communication"
      },
      {
        text: "商品をつくる仕事",
        type: "production"
      },
      {
        text: "花のプロになる仕事",
        type: "buyer"
      }
    ]
  },

  {
    question: "最後に、あなたに一番近いのは？",
    answers: [
      {
        text: "段取り・効率を重視する",
        type: "operation"
      },
      {
        text: "人との関係を大切にする",
        type: "communication"
      },
      {
        text: "工夫して良くするのが好き",
        type: "store"
      },
      {
        text: "花や商品の品質にこだわる",
        type: "quality"
      }
    ]
  }

];


// ===============================
// 状態管理
// ===============================

let currentQuestion = 0;

let scores = {
  operation: 0,
  communication: 0,
  store: 0,
  buyer: 0,
  production: 0,
  quality: 0
};


// ===============================
// HTML要素
// ===============================

const startScreen = document.getElementById("start-screen");
const startBtn = document.getElementById("start-btn");

const quizScreen = document.getElementById("quiz-screen");
const questionNumber = document.getElementById("question-number");
const questionText = document.getElementById("question");
const answersContainer = document.getElementById("answers");
const progress = document.getElementById("progress");

const resultScreen = document.getElementById("result-screen");
const resultIcon = document.getElementById("result-icon");
const resultTitle = document.getElementById("result-title");
const resultDescription = document.getElementById("result-description");
const resultJob = document.getElementById("result-job");
const jobLink = document.getElementById("job-link");

const restartBtn = document.getElementById("restart-btn");


// ===============================
// 診断スタート
// ===============================

startBtn.addEventListener("click", () => {

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
  quizScreen.classList.add("active");

  // GA4
  trackEvent("diagnosis_start");

  showQuestion();

});


// ===============================
// 質問表示
// ===============================

function showQuestion() {

  const q = QUESTIONS[currentQuestion];

  questionNumber.textContent =
    `Q${currentQuestion + 1} / ${QUESTIONS.length}`;

  questionText.textContent = q.question;

  answersContainer.innerHTML = "";

  q.answers.forEach((answer) => {

    const button = document.createElement("button");

    button.className = "answer-btn";

    button.textContent = answer.text;

    button.addEventListener("click", () => {

      scores[answer.type]++;

      currentQuestion++;

      if (currentQuestion < QUESTIONS.length) {

        showQuestion();

      } else {

        showResult();

      }

    });

    answersContainer.appendChild(button);

  });

  const percentage =
    ((currentQuestion) / QUESTIONS.length) * 100;

  progress.style.width = `${percentage}%`;

}


// ===============================
// 診断結果
// ===============================

function showResult() {

  quizScreen.classList.remove("active");
  resultScreen.classList.add("active");

  let resultType = Object.keys(scores).reduce((a, b) =>
    scores[a] >= scores[b] ? a : b
  );

  const result = RESULTS[resultType];

  resultIcon.textContent = result.icon;

  resultTitle.textContent = result.title;

  resultDescription.textContent =
    result.description;

  resultJob.textContent =
    `おすすめの仕事：${result.jobName}`;

  jobLink.href =
    JOB_LINKS[result.jobKey];

  // GA4
  trackEvent("diagnosis_complete", {
    result_type: resultType,
    result_title: result.title,
    job_key: result.jobKey,
    job_name: result.jobName
  });

}


// ===============================
// 求人ページクリック
// ===============================

jobLink.addEventListener("click", () => {

  const resultTitleText =
    resultTitle.textContent;

  const result = Object.values(RESULTS).find(
    (item) => item.title === resultTitleText
  );

  if (result) {

    trackEvent("job_click", {
      result_type: resultTitleText,
      job_key: result.jobKey,
      job_name: result.jobName
    });

  }

});


// ===============================
// もう一度診断
// ===============================

restartBtn.addEventListener("click", () => {

  resultScreen.classList.remove("active");

  startScreen.classList.add("active");

});

// ==============================
// 質問データ
// ==============================

const questions = [

    {
        question: "予定を立てて、その通りに進めるのは得意？",
        answers: [
            { text: "かなり得意！", scores: { route: 3, management: 2 } },
            { text: "まあまあ得意", scores: { route: 2 } },
            { text: "どちらとも言えない", scores: {} },
            { text: "その時の気分で動きたい", scores: { creative: 2 } }
        ]
    },

    {
        question: "車を運転して、いろんな場所を回る仕事は？",
        answers: [
            { text: "楽しそう！", scores: { route: 3, drive: 2 } },
            { text: "まあ興味ある", scores: { route: 2 } },
            { text: "ちょっと苦手かも", scores: { manufacturing: 2 } },
            { text: "できれば避けたい", scores: { manufacturing: 3 } }
        ]
    },

    {
        question: "人と話したり、コミュニケーションを取るのは？",
        answers: [
            { text: "好き！", scores: { communication: 3 } },
            { text: "普通かな", scores: { communication: 1 } },
            { text: "少し苦手", scores: { solo: 2 } },
            { text: "かなり苦手", scores: { solo: 3 } }
        ]
    },

    {
        question: "決められた手順やルールを守るのは？",
        answers: [
            { text: "得意！", scores: { quality: 2, management: 2 } },
            { text: "苦ではない", scores: { quality: 1 } },
            { text: "あまり好きじゃない", scores: { creative: 2 } },
            { text: "自由にやりたい！", scores: { creative: 3 } }
        ]
    },

    {
        question: "小さな違いやミスによく気づく？",
        answers: [
            { text: "めっちゃ気づく", scores: { quality: 3 } },
            { text: "結構気づく", scores: { quality: 2 } },
            { text: "あまり気づかない", scores: { creative: 1 } },
            { text: "気にしないタイプ", scores: { route: 1 } }
        ]
    },

    {
        question: "同じような作業をコツコツ続けるのは？",
        answers: [
            { text: "得意！", scores: { manufacturing: 3, craft: 2 } },
            { text: "まあ得意", scores: { manufacturing: 2 } },
            { text: "ちょっと苦手", scores: { route: 2 } },
            { text: "飽きちゃう", scores: { creative: 2 } }
        ]
    },

    {
        question: "「もっとこうしたら良くなるのに」と考えることがある？",
        answers: [
            { text: "よくある！", scores: { management: 3, creative: 1 } },
            { text: "たまにある", scores: { management: 2 } },
            { text: "あまりない", scores: {} },
            { text: "言われたことをやる方が好き", scores: { craft: 1 } }
        ]
    },

    {
        question: "花の色や形のバランスを見るのは好き？",
        answers: [
            { text: "大好き！", scores: { design: 3, creative: 2 } },
            { text: "好き", scores: { design: 2 } },
            { text: "普通", scores: {} },
            { text: "あまり興味ない", scores: { route: 1 } }
        ]
    },

    {
        question: "仕事では「早さ」と「丁寧さ」、どちらを重視する？",
        answers: [
            { text: "早さ！", scores: { route: 2, management: 2 } },
            { text: "どちらかと言えば早さ", scores: { route: 1 } },
            { text: "どちらかと言えば丁寧さ", scores: { quality: 2 } },
            { text: "絶対に丁寧さ！", scores: { quality: 3, craft: 1 } }
        ]
    },

    {
        question: "予定変更があったとき、すぐ対応できる？",
        answers: [
            { text: "全然大丈夫！", scores: { flexibility: 3, route: 2 } },
            { text: "まあ対応できる", scores: { flexibility: 2 } },
            { text: "ちょっと苦手", scores: { quality: 1 } },
            { text: "かなり苦手", scores: { craft: 1 } }
        ]
    },

    {
        question: "仕事をするなら、どちらが好き？",
        answers: [
            { text: "いろんな人と関わりたい", scores: { communication: 3 } },
            { text: "少人数で働きたい", scores: { manufacturing: 2 } },
            { text: "一人で集中したい", scores: { solo: 3, craft: 2 } },
            { text: "どちらでもOK", scores: {} }
        ]
    },

    {
        question: "完成した商品の「見た目」にこだわる方？",
        answers: [
            { text: "かなりこだわる！", scores: { design: 3, craft: 2 } },
            { text: "そこそこ気にする", scores: { design: 2 } },
            { text: "最低限でOK", scores: { management: 1 } },
            { text: "見た目より効率！", scores: { route: 2 } }
        ]
    },

    {
        question: "誰かに「ありがとう」と言われる仕事って魅力的？",
        answers: [
            { text: "めっちゃ魅力的！", scores: { communication: 3 } },
            { text: "まあ嬉しい", scores: { communication: 1 } },
            { text: "あまり気にしない", scores: { solo: 1 } },
            { text: "自分が納得できればOK", scores: { craft: 2 } }
        ]
    },

    {
        question: "自分で花を組み合わせて商品を作るなら？",
        answers: [
            { text: "センスを活かしたい！", scores: { design: 3, creative: 3 } },
            { text: "きれいに作りたい", scores: { craft: 3 } },
            { text: "効率よくたくさん作りたい", scores: { manufacturing: 3, management: 2 } },
            { text: "誰かと相談しながら作りたい", scores: { communication: 2 } }
        ]
    },

    {
        question: "一番やってみたいのは？",
        answers: [
            { text: "🚚 お店を回って花を届ける", scores: { route: 5 } },
            { text: "🤝 お店の人と話しながら売場を作る", scores: { route: 4, communication: 3 } },
            { text: "💐 花束や商品を作る", scores: { manufacturing: 5 } },
            { text: "🎨 センスを活かして花をデザインする", scores: { manufacturing: 4, design: 4 } }
        ]
    }

];


// ==============================
// 結果タイプ
// ==============================

const results = {

    route_drive: {
        icon: "🚚",
        title: "運行・効率タイプ",
        description:
            "段取りを考えながら、テキパキ動くのが得意なあなた。効率よく仕事を進める力が武器になりそう！",
        job:
            "ルート配送・店舗への商品納品・売場メンテナンスなど",
        link:
            "#"
    },

    route_communication: {
        icon: "🤝",
        title: "店舗コミュニケーションタイプ",
        description:
            "人と話すことが好きで、相手の気持ちを考えられるあなた。店舗の方との関係づくりで力を発揮できそう！",
        job:
            "店舗巡回・売場提案・店舗スタッフとのコミュニケーションなど",
        link:
            "#"
    },

    route_management: {
        icon: "📋",
        title: "商品・売場管理タイプ",
        description:
            "細かいところまでよく見て、改善を考えられるあなた。売場をより良くする仕事に向いていそう！",
        job:
            "商品管理・売場管理・在庫管理・売場改善など",
        link:
            "#"
    },

    manufacturing_craft: {
        icon: "💐",
        title: "商品制作タイプ",
        description:
            "コツコツ丁寧に作業することが得意なあなた。手を動かして商品を作る仕事で力を発揮できそう！",
        job:
            "花束制作・パック花制作・商品加工など",
        link:
            "#"
    },

    manufacturing_design: {
        icon: "🎨",
        title: "アレンジ・センス特化タイプ",
        description:
            "色や形のバランスを見るのが得意なあなた。あなたのセンスを花の商品に活かせそう！",
        job:
            "アレンジ制作・花束制作・商品企画など",
        link:
            "#"
    },

    manufacturing_quality: {
        icon: "🔍",
        title: "品質・こだわりタイプ",
        description:
            "細かいところまで妥協せず、丁寧に仕上げるあなた。品質を守る仕事で才能を発揮できそう！",
        job:
            "商品チェック・品質管理・制作・加工など",
        link:
            "#"
    }

};


// ==============================
// 診断処理
// ==============================

let currentQuestion = 0;

let scores = {};


// 画面取得
const startScreen =
    document.getElementById("start-screen");

const quizScreen =
    document.getElementById("quiz-screen");

const resultScreen =
    document.getElementById("result-screen");


// スタート
document.getElementById("start-btn").addEventListener("click", () => {

    currentQuestion = 0;

    scores = {};

    startScreen.classList.remove("active");

    quizScreen.classList.add("active");

    showQuestion();

});


// 質問表示
function showQuestion() {

    const q = questions[currentQuestion];

    document.getElementById("question-number").textContent =
        currentQuestion + 1;

    document.getElementById("question").textContent =
        q.question;


    // プログレス
    const progress =
        ((currentQuestion + 1) / questions.length) * 100;

    document.getElementById("progress").style.width =
        progress + "%";


    const answers =
        document.getElementById("answers");

    answers.innerHTML = "";


    q.answers.forEach(answer => {

        const button =
            document.createElement("button");

        button.className = "answer-btn";

        button.textContent = answer.text;


        button.addEventListener("click", () => {

            addScores(answer.scores);

            currentQuestion++;


            if (currentQuestion < questions.length) {

                showQuestion();

            } else {

                showResult();

            }

        });


        answers.appendChild(button);

    });

}


// スコア追加
function addScores(answerScores) {

    Object.keys(answerScores).forEach(key => {

        if (!scores[key]) {
            scores[key] = 0;
        }

        scores[key] += answerScores[key];

    });

}


// ==============================
// 結果判定
// ==============================

function showResult() {

    quizScreen.classList.remove("active");

    resultScreen.classList.add("active");


    // 配送 or 制作
    const routeScore =
        (scores.route || 0) +
        (scores.drive || 0) +
        (scores.communication || 0) +
        (scores.management || 0);


    const manufacturingScore =
        (scores.manufacturing || 0) +
        (scores.design || 0) +
        (scores.craft || 0) +
        (scores.quality || 0) +
        (scores.creative || 0);


    let resultKey;


    if (routeScore >= manufacturingScore) {

        // 配送タイプ

        const communication =
            scores.communication || 0;

        const management =
            scores.management || 0;

        const drive =
            scores.drive || 0;


        if (
            communication >= management &&
            communication >= drive
        ) {

            resultKey = "route_communication";

        } else if (management >= drive) {

            resultKey = "route_management";

        } else {

            resultKey = "route_drive";

        }

    } else {

        // 制作タイプ

        const design =
            (scores.design || 0) +
            (scores.creative || 0);

        const craft =
            scores.craft || 0;

        const quality =
            scores.quality || 0;


        if (design >= craft && design >= quality) {

            resultKey = "manufacturing_design";

        } else if (quality >= craft) {

            resultKey = "manufacturing_quality";

        } else {

            resultKey = "manufacturing_craft";

        }

    }


    const result =
        results[resultKey];


    document.getElementById("result-icon").textContent =
        result.icon;

    document.getElementById("result-title").textContent =
        result.title;

    document.getElementById("result-description").textContent =
        result.description;

    document.getElementById("result-job").textContent =
        result.job;

    document.getElementById("job-link").href =
        result.link;

}


// ==============================
// もう一度診断
// ==============================

document.getElementById("restart-btn").addEventListener("click", () => {

    resultScreen.classList.remove("active");

    startScreen.classList.add("active");

});
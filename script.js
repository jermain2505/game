```javascript
/* ==========================================
   COUPLE RANDOM GAME
========================================== */


/* ==========================================
   QUESTIONS
========================================== */

const questions = [

  /* FUN */

  {
    category: "fun",
    question:
      "Kalau aku jadi makanan, menurutmu aku bakal jadi makanan apa? 🍜"
  },

  {
    category: "fun",
    question:
      "Siapa yang lebih mungkin tersesat walaupun pakai Google Maps?"
  },

  {
    category: "fun",
    question:
      "Kalau kita ikut reality show, menurutmu kita terkenal karena apa?"
  },

  {
    category: "fun",
    question:
      "Apa kebiasaan kecilku yang sebenarnya lucu tapi mungkin aku tidak sadar?"
  },

  {
    category: "fun",
    question:
      "Kalau punya Rp100 juta dan harus dihabiskan hari ini, kamu mau ngapain?"
  },

  {
    category: "fun",
    question:
      "Kalau hubungan kita punya soundtrack, lagu apa yang cocok?"
  },

  {
    category: "fun",
    question:
      "Siapa yang lebih mungkin ketiduran saat video call?"
  },

  {
    category: "fun",
    question:
      "Kalau kita bertukar kehidupan selama sehari, apa hal pertama yang kamu lakukan?"
  },

  {
    category: "fun",
    question:
      "Kalau aku menjadi karakter kartun, aku cocok jadi siapa?"
  },

  {
    category: "fun",
    question:
      "Kalau kita buka bisnis bersama, bisnis apa yang paling cocok?"
  },

  {
    category: "fun",
    question:
      "Apa nickname paling absurd yang cocok untukku?"
  },

  {
    category: "fun",
    question:
      "Kalau kita terjebak di mall semalaman, apa yang bakal kita lakukan?"
  },

  {
    category: "fun",
    question:
      "Siapa yang lebih mungkin membeli sesuatu hanya karena lucu?"
  },

  {
    category: "fun",
    question:
      "Kalau kita punya channel YouTube, kira-kira isinya apa?"
  },

  {
    category: "fun",
    question:
      "Kalau aku tiba-tiba terkenal, menurutmu aku terkenal karena apa?"
  },


  /* DEEP */

  {
    category: "deep",
    question:
      "Apa satu hal tentang dirimu yang ingin lebih aku pahami?"
  },

  {
    category: "deep",
    question:
      "Kapan terakhir kali kamu merasa benar-benar bangga pada dirimu sendiri?"
  },

  {
    category: "deep",
    question:
      "Apa ketakutanmu tentang masa depan yang jarang kamu ceritakan?"
  },

  {
    category: "deep",
    question:
      "Menurutmu apa arti 'dicintai dengan benar'?"
  },

  {
    category: "deep",
    question:
      "Kalau kamu bisa mengulang satu momen dalam hidupmu, momen apa?"
  },

  {
    category: "deep",
    question:
      "Apa bentuk perhatian sederhana yang paling berarti buatmu?"
  },

  {
    category: "deep",
    question:
      "Apa hal yang paling sulit kamu ungkapkan kepada orang lain?"
  },

  {
    category: "deep",
    question:
      "Apa versi dirimu yang ingin kamu capai beberapa tahun ke depan?"
  },

  {
    category: "deep",
    question:
      "Apa hal yang paling membuatmu merasa aman bersama seseorang?"
  },

  {
    category: "deep",
    question:
      "Apa pengalaman yang paling banyak mengubah cara pandangmu tentang hidup?"
  },

  {
    category: "deep",
    question:
      "Apa hal yang kamu harap orang lain lebih mengerti tentang dirimu?"
  },

  {
    category: "deep",
    question:
      "Apa arti rumah menurutmu?"
  },

  {
    category: "deep",
    question:
      "Apa sesuatu yang sedang kamu perjuangkan diam-diam?"
  },

  {
    category: "deep",
    question:
      "Kalau kamu bisa memberikan satu nasihat kepada dirimu 5 tahun lalu, apa?"
  },

  {
    category: "deep",
    question:
      "Apa hal kecil yang sebenarnya bisa membuat harimu jauh lebih baik?"
  },


  /* COUPLE */

  {
    category: "couple",
    question:
      "Apa first impression-mu tentang aku? Dan apakah ternyata benar? 👀"
  },

  {
    category: "couple",
    question:
      "Momen kecil apa bersama aku yang paling kamu ingat sampai sekarang?"
  },

  {
    category: "couple",
    question:
      "Apa hal yang paling kamu suka dari cara aku memperlakukanmu?"
  },

  {
    category: "couple",
    question:
      "Kalau kita bisa pergi berdua besok tanpa memikirkan biaya, kamu mau ke mana?"
  },

  {
    category: "couple",
    question:
      "Apa satu hal yang ingin kita lakukan bersama sebelum tahun ini selesai?"
  },

  {
    category: "couple",
    question:
      "Menurutmu, apa yang membuat hubungan kita berbeda?"
  },

  {
    category: "couple",
    question:
      "Apa momen bersamaku yang ingin kamu ulang?"
  },

  {
    category: "couple",
    question:
      "Apa hal kecil yang aku lakukan tapi sebenarnya berarti buatmu?"
  },

  {
    category: "couple",
    question:
      "Kalau kita punya satu hari tanpa kewajiban, kamu mau menghabiskannya bagaimana?"
  },

  {
    category: "couple",
    question:
      "Apa tempat yang ingin kamu kunjungi bersamaku?"
  },

  {
    category: "couple",
    question:
      "Apa hal pertama yang kamu notice dari aku?"
  },

  {
    category: "couple",
    question:
      "Apa sifatku yang paling kamu suka?"
  },

  {
    category: "couple",
    question:
      "Apa sifatku yang kadang bikin kamu gemas?"
  },

  {
    category: "couple",
    question:
      "Apa kegiatan sederhana yang ingin lebih sering kita lakukan?"
  },

  {
    category: "couple",
    question:
      "Kalau kita membuat bucket list bersama, apa isi nomor satunya?"
  },


  /* CHAOS */

  {
    category: "chaos",
    question:
      "Kalau aku tiba-tiba botak, apakah kamu masih mau jalan sama aku? 😭"
  },

  {
    category: "chaos",
    question:
      "Siapa yang lebih drama kalau sedang ngambek?"
  },

  {
    category: "chaos",
    question:
      "Kalau HP kita ditukar selama 10 menit, siapa yang paling panik?"
  },

  {
    category: "chaos",
    question:
      "Apa satu hal yang pernah kamu pikirkan tentang aku tapi tidak pernah berani bilang?"
  },

  {
    category: "chaos",
    question:
      "Kalau aku punya satu red flag yang harus kamu sebutkan sekarang, apa?"
  },

  {
    category: "chaos",
    question:
      "Siapa yang paling susah minta maaf duluan?"
  },

  {
    category: "chaos",
    question:
      "Siapa yang lebih mungkin stalking mantan?"
  },

  {
    category: "chaos",
    question:
      "Kalau kita bertengkar dan aku bilang 'terserah', sebenarnya aku mau apa?"
  },

  {
    category: "chaos",
    question:
      "Apa kebiasaan paling menyebalkan dariku?"
  },

  {
    category: "chaos",
    question:
      "Kalau aku menjadi villain, apa alasan aku berubah jahat?"
  },

  {
    category: "chaos",
    question:
      "Siapa yang paling mungkin cemburu duluan?"
  },

  {
    category: "chaos",
    question:
      "Kalau kita lomba siapa yang paling gengsi, siapa yang menang?"
  },

  {
    category: "chaos",
    question:
      "Apa satu pertanyaan yang takut kamu tanyakan kepadaku?"
  },

  {
    category: "chaos",
    question:
      "Kalau aku tidak membalas chat selama 5 jam, apa pikiran pertamamu?"
  },

  {
    category: "chaos",
    question:
      "Siapa yang paling mungkin pura-pura tidak marah padahal jelas marah?"
  },

  {
    category: "chaos",
    question:
      "Kalau aku harus kamu roast selama 30 detik, apa yang kamu bilang?"
  },

  {
    category: "chaos",
    question:
      "Apa hal paling random yang membuatmu pernah cemburu?"
  },

  {
    category: "chaos",
    question:
      "Siapa yang lebih mungkin memenangkan silent treatment?"
  },


  /* EXTRA RANDOM */

  {
    category: "fun",
    question:
      "Kalau kita punya pulau sendiri, apa nama pulaunya?"
  },

  {
    category: "deep",
    question:
      "Apa yang paling kamu syukuri dari hidupmu sekarang?"
  },

  {
    category: "couple",
    question:
      "Apa hal yang ingin kamu lakukan bersamaku minimal sekali seumur hidup?"
  },

  {
    category: "fun",
    question:
      "Kalau kita menjadi duo superhero, siapa yang jadi otak dan siapa yang jadi tenaga?"
  },

  {
    category: "deep",
    question:
      "Apa yang membuatmu merasa benar-benar didengarkan?"
  },

  {
    category: "couple",
    question:
      "Apa panggilan sayang yang paling kamu suka?"
  },

  {
    category: "chaos",
    question:
      "Kalau aku tiba-tiba bilang 'kita perlu ngobrol', apa yang langsung kamu pikirkan?"
  },

  {
    category: "fun",
    question:
      "Kalau kita punya restoran, makanan andalan kita apa?"
  },

  {
    category: "deep",
    question:
      "Apa satu keputusan dalam hidupmu yang paling kamu syukuri?"
  },

  {
    category: "couple",
    question:
      "Menurutmu, kapan kita paling terlihat seperti pasangan yang cocok?"
  },

  {
    category: "chaos",
    question:
      "Kalau aku tiba-tiba tidak membalas chat seharian, apa yang akan kamu lakukan?"
  },

  {
    category: "fun",
    question:
      "Kalau kita harus hidup tanpa internet selama seminggu, siapa yang paling tersiksa?"
  },

  {
    category: "deep",
    question:
      "Apa yang membuatmu merasa dicintai tanpa harus mengatakannya?"
  },

  {
    category: "couple",
    question:
      "Apa satu foto kita yang paling kamu suka?"
  },

  {
    category: "fun",
    question:
      "Kalau kita punya hewan peliharaan, kamu mau kasih nama apa?"
  },

  {
    category: "deep",
    question:
      "Apa hal yang sedang kamu pelajari tentang dirimu sendiri?"
  },

  {
    category: "couple",
    question:
      "Apa satu tradisi kecil yang ingin kamu buat bersama?"
  },

  {
    category: "chaos",
    question:
      "Siapa yang lebih mungkin bilang 'aku nggak marah' padahal jelas marah?"
  },

  {
    category: "fun",
    question:
      "Kalau kisah kita dijadikan film, judulnya apa?"
  }

];


/* ==========================================
   VARIABLES
========================================== */

let currentCategory = "all";

let availableQuestions = [];

let currentQuestion = null;

let answered = 0;

let skipped = 0;

let streak = 0;


/* ==========================================
   ELEMENTS
========================================== */

const questionEl =
  document.getElementById("question");

const nextBtn =
  document.getElementById("nextBtn");

const skipBtn =
  document.getElementById("skipBtn");

const honestBtn =
  document.getElementById("honestBtn");

const hintEl =
  document.getElementById("hint");

const counterEl =
  document.getElementById("counter");

const progressBar =
  document.getElementById("progressBar");

const answeredEl =
  document.getElementById("answered");

const skippedEl =
  document.getElementById("skipped");

const streakEl =
  document.getElementById("streak");

const categoryNameEl =
  document.getElementById("categoryName");

const gameArea =
  document.getElementById("gameArea");

const result =
  document.getElementById("result");

const finalScore =
  document.getElementById("finalScore");

const resultTitle =
  document.getElementById("resultTitle");

const resultText =
  document.getElementById("resultText");

const resultEmoji =
  document.getElementById("resultEmoji");

const restartBtn =
  document.getElementById("restartBtn");


/* ==========================================
   CATEGORY
========================================== */

const categoryButtons =
  document.querySelectorAll(".category");


categoryButtons.forEach(button => {

  button.addEventListener("click", () => {

    categoryButtons.forEach(btn => {

      btn.classList.remove("active");

    });

    button.classList.add("active");

    currentCategory =
      button.dataset.category;

    resetQuestions();

    updateCategoryName();

    nextQuestion();

  });

});


function updateCategoryName() {

  const names = {

    all: "Random Questions",

    fun: "😂 Fun Questions",

    deep: "💭 Deep Questions",

    couple: "💕 Couple Questions",

    chaos: "🌶️ Chaos Questions"

  };

  categoryNameEl.textContent =
    names[currentCategory];

}


/* ==========================================
   RESET QUESTIONS
========================================== */

function resetQuestions() {

  availableQuestions =
    questions.filter(question => {

      if (currentCategory === "all") {

        return true;

      }

      return (
        question.category ===
        currentCategory
      );

    });

  shuffle(availableQuestions);

}


/* ==========================================
   SHUFFLE
========================================== */

function shuffle(array) {

  for (
    let i = array.length - 1;
    i > 0;
    i--
  ) {

    const j =
      Math.floor(
        Math.random() * (i + 1)
      );

    [
      array[i],
      array[j]
    ] = [
      array[j],
      array[i]
    ];

  }

}


/* ==========================================
   NEXT QUESTION
========================================== */

function nextQuestion() {

  if (
    availableQuestions.length === 0
  ) {

    showResult();

    return;

  }

  currentQuestion =
    availableQuestions.pop();

  questionEl.classList.remove(
    "animate"
  );

  void questionEl.offsetWidth;

  questionEl.classList.add(
    "animate"
  );

  questionEl.textContent =
    currentQuestion.question;

  hintEl.classList.remove("show");

  updateUI();

}


/* ==========================================
   HONEST ANSWER
========================================== */

honestBtn.addEventListener(
  "click",
  () => {

    if (!currentQuestion) {

      return;

    }

    answered++;

    streak++;

    hintEl.innerHTML =
      "💌 <strong>Jawab dengan jujur.</strong><br>" +
      "Tidak boleh menghindar. Tidak boleh jawab 'terserah'. 😌";

    hintEl.classList.add("show");

    updateUI();

  }
);


/* ==========================================
   SKIP
========================================== */

skipBtn.addEventListener(
  "click",
  () => {

    skipped++;

    streak = 0;

    nextQuestion();

  }
);


/* ==========================================
   NEXT BUTTON
========================================== */

nextBtn.addEventListener(
  "click",
  () => {

    nextQuestion();

  }
);


/* ==========================================
   UPDATE UI
========================================== */

function updateUI() {

  const total =
    questions.filter(question => {

      if (
        currentCategory === "all"
      ) {

        return true;

      }

      return (
        question.category ===
        currentCategory
      );

    }).length;

  const remaining =
    availableQuestions.length;

  const completed =
    total - remaining;

  counterEl.textContent =
    Math.min(
      completed + 1,
      total
    )
    + " / "
    + total;

  const percentage =
    total === 0
      ? 0
      : (
          completed /
          total
        ) * 100;

  progressBar.style.width =
    Math.min(
      percentage,
      100
    ) + "%";

  answeredEl.textContent =
    answered;

  skippedEl.textContent =
    skipped;

  streakEl.textContent =
    streak;

}


/* ==========================================
   RESULT
========================================== */

function showResult() {

  gameArea.style.display =
    "none";

  result.classList.add("show");

  finalScore.textContent =
    answered;

  let title;

  let emoji;

  let text;


  if (answered >= 15) {

    emoji = "💖";

    title =
      "You two really talk!";

    text =
      "Kalian berhasil menjawab banyak pertanyaan. " +
      "Berarti bukan cuma ngobrol... " +
      "kalian benar-benar saling mengenal. 🥹";

  }

  else if (answered >= 8) {

    emoji = "💕";

    title =
      "Getting closer!";

    text =
      "Lumayan! Tapi masih banyak hal " +
      "yang bisa kalian temukan satu sama lain. " +
      "Lanjut ngobrol sampai lupa waktu. 😌";

  }

  else {

    emoji = "👀";

    title =
      "You skipped too much!";

    text =
      "Hmm... kayaknya masih banyak jawaban " +
      "yang disembunyikan. 👀 " +
      "Coba main lagi dan jangan terlalu sering skip.";

  }


  resultEmoji.textContent =
    emoji;

  resultTitle.textContent =
    title;

  resultText.textContent =
    text;

}


/* ==========================================
   RESTART
========================================== */

restartBtn.addEventListener(
  "click",
  () => {

    answered = 0;

    skipped = 0;

    streak = 0;

    result.classList.remove(
      "show"
    );

    gameArea.style.display =
      "block";

    resetQuestions();

    nextQuestion();

  }
);


/* ==========================================
   FLOATING HEARTS
========================================== */

function createHeart() {

  const heart =
    document.createElement("div");

  heart.className =
    "heart";

  const emojis = [
    "💕",
    "💗",
    "💖",
    "✨",
    "♡"
  ];

  heart.textContent =
    emojis[
      Math.floor(
        Math.random() *
        emojis.length
      )
    ];

  heart.style.left =
    Math.random() * 100 + "vw";

  heart.style.fontSize =
    (
      14 +
      Math.random() * 18
    ) + "px";

  heart.style.animationDuration =
    (
      7 +
      Math.random() * 8
    ) + "s";

  document.body.appendChild(
    heart
  );

  setTimeout(() => {

    heart.remove();

  }, 16000);

}


setInterval(
  createHeart,
  1500
);


/* ==========================================
   START GAME
========================================== */

resetQuestions();

updateCategoryName();

nextQuestion();
```

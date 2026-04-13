import confetti from "canvas-confetti";

const STORAGE_KEY = "xiaonanniang-quiz-progress-v2";

const quizData = {
  questions: [
    {
      title: "朋友临时叫你出门，你第一反应是？",
      description: "不要想太严肃，选最像你平时状态的那个就行。",
      answers: [
        { text: "先照镜子，发型不对今天不出门", hint: "仪式感大于行动力", score: 4 },
        { text: "十分钟后楼下见，主打一个速度", hint: "随时可切换战斗模式", score: 1 },
        { text: "先问去哪，再决定穿什么风格", hint: "搭配和场景强关联", score: 3 },
        { text: "如果太晒太挤，那还是线上见吧", hint: "精致回避型选手", score: 2 }
      ]
    },
    {
      title: "买衣服时，你最容易被什么击中？",
      description: "审美倾向经常会偷偷暴露你的气质分布。",
      answers: [
        { text: "蝴蝶结、荷叶边、软绵绵材质", hint: "看到可爱元素自动减速", score: 4 },
        { text: "黑白灰基础款，怎么搭都不出错", hint: "稳定压倒一切", score: 1 },
        { text: "剪裁特别、版型显气质", hint: "你在意氛围大于标签", score: 3 },
        { text: "便宜、耐穿、懒得选", hint: "服装只是功能层", score: 0 }
      ]
    },
    {
      title: "自拍的时候你通常会？",
      description: "这题很关键，镜头感往往比嘴硬更诚实。",
      answers: [
        { text: "找角度、补光、挑滤镜，一条龙", hint: "审美控制台已启动", score: 4 },
        { text: "拍一张能用就行", hint: "记录派，不讲究", score: 1 },
        { text: "嘴上说不拍，拍完其实会偷偷存", hint: "傲娇影像学", score: 3 },
        { text: "很少自拍，除非被逼", hint: "镜头恐惧轻度发作", score: 0 }
      ]
    },
    {
      title: "别人夸你“好可爱”时，你会？",
      description: "不要选理想中的自己，选真实反应。",
      answers: [
        { text: "嘴上说没有啦，心里已经转圈", hint: "高敏感夸夸接收器", score: 4 },
        { text: "谢谢，你也挺会说话", hint: "成熟接招，情绪稳定", score: 2 },
        { text: "立刻反驳：明明是帅", hint: "标签争夺战开始", score: 1 },
        { text: "表面镇定，回去复盘三遍", hint: "延迟心动型", score: 3 }
      ]
    },
    {
      title: "以下哪种生活场景最像你的理想周末？",
      description: "想象你完全自由，没有人催你。",
      answers: [
        { text: "窝在房间里，点香氛，慢慢收拾自己", hint: "精致宅学核心", score: 4 },
        { text: "运动、打游戏、吃顿猛的", hint: "能量外放型", score: 1 },
        { text: "逛街、喝饮料、顺便看喜欢的小东西", hint: "轻盈巡游模式", score: 3 },
        { text: "补觉，其他都随缘", hint: "睡眠至上主义", score: 1 }
      ]
    },
    {
      title: "你的聊天风格更接近？",
      description: "网络人格也算人格的一部分。",
      answers: [
        { text: "会发颜文字、波浪号、可爱表情包", hint: "文字也要软绵绵", score: 4 },
        { text: "有事说事，句号都嫌多", hint: "效率压缩型交流", score: 0 },
        { text: "看对象切换风格，可盐可甜", hint: "适应力很强", score: 3 },
        { text: "经常回“哈哈”“行”“OK”", hint: "极简应答机器人", score: 1 }
      ]
    },
    {
      title: "如果衣柜里突然出现一套很好看的裙装，你会？",
      description: "纯 hypothetical，不必紧张。",
      answers: [
        { text: "先摸面料，再想怎么搭", hint: "审美脑自动上线", score: 4 },
        { text: "偷偷试一下，看看效果", hint: "好奇心压过嘴硬", score: 3 },
        { text: "拍给朋友看，让他们先试毒", hint: "谨慎围观派", score: 2 },
        { text: "立刻塞回去，假装没看见", hint: "拒绝接受任何支线剧情", score: 0 }
      ]
    },
    {
      title: "你对“被照顾”和“照顾别人”的态度是？",
      description: "气质不只看穿搭，也看互动方式。",
      answers: [
        { text: "都喜欢，最好互相贴贴照顾", hint: "柔软关系型选手", score: 4 },
        { text: "更习惯自己扛，麻烦别人不自在", hint: "独立惯性太强", score: 1 },
        { text: "熟了之后会变得很黏", hint: "社交解锁后形态变化", score: 3 },
        { text: "我负责嘴硬，对方负责看穿", hint: "傲娇合作机制", score: 3 }
      ]
    },
    {
      title: "下面哪句最像你的自我描述？",
      description: "这是气质收尾题，认真选。",
      answers: [
        { text: "我只是长得/活得比较精致而已", hint: "定义权掌握在自己手里", score: 4 },
        { text: "我很普通，别给我加设定", hint: "设定抗拒型", score: 1 },
        { text: "我分人，状态到了什么都可能", hint: "流动人格体质", score: 3 },
        { text: "我其实很好懂，就是嘴硬一点", hint: "反差感制造机", score: 2 }
      ]
    },
    {
      title: "如果这份测试说你‘浓度偏高’，你会？",
      description: "最后一题，选你第一秒的内心弹幕。",
      answers: [
        { text: "截图发群里：都不许笑", hint: "嘴硬分享型", score: 4 },
        { text: "再测一遍，怀疑算法偏心", hint: "不服但会继续玩", score: 3 },
        { text: "哦，那也挺有意思", hint: "平静接受支线设定", score: 2 },
        { text: "关闭网页，当无事发生", hint: "你甚至不想留痕", score: 0 }
      ]
    }
  ],
  results: [
    {
      min: 0,
      max: 12,
      tone: "tone-cool",
      badge: "钢铁直线型",
      title: "你的气质主打一个“别乱给我加设定”",
      summary:
        "你的整体风格偏直接、务实、低调，对可爱气场的接受度不算高。你更像是围观群众，不太像主动往这个标签里走的人。",
      traits: ["嘴硬防御高", "效率优先", "设定免疫", "稳定输出"]
    },
    {
      min: 13,
      max: 23,
      tone: "tone-balance",
      badge: "隐性摇摆型",
      title: "你有点像，但平时藏得很好",
      summary:
        "你不是那种高调张扬的类型，但某些审美、社交和自我表达方式，已经悄悄透露出一些柔软气质。属于“嘴上不认，行为有点诚实”。",
      traits: ["反差感", "轻微傲娇", "风格可切换", "偶尔精致"]
    },
    {
      min: 24,
      max: 32,
      tone: "tone-pink",
      badge: "高浓度预备役",
      title: "你已经很接近这个频道了",
      summary:
        "你对氛围感、可爱感、精致表达都有明显偏好，而且这种偏好不是偶发，是稳定存在的。你可能不会天天把它挂嘴边，但气质已经快藏不住了。",
      traits: ["审美在线", "表达柔软", "镜头感不错", "氛围拿捏"]
    },
    {
      min: 33,
      max: 40,
      tone: "tone-sparkle",
      badge: "满级小男娘雷达",
      title: "别测了，你的隐藏属性已经在发光",
      summary:
        "从审美到互动，从反应到自我描述，你都带着相当完整的相关气质。这个标签对你来说更像是一种风格完成度，而不是突发奇想。",
      traits: ["可爱浓度高", "精致度拉满", "反差魅力强", "自带节目效果"]
    }
  ]
};

const state = {
  started: false,
  index: 0,
  answers: Array(quizData.questions.length).fill(null),
  lastResult: null
};

const introCard = document.getElementById("intro-card");
const quizCard = document.getElementById("quiz-card");
const resultCard = document.getElementById("result-card");
const questionTitle = document.getElementById("question-title");
const questionDescription = document.getElementById("question-description");
const answersWrap = document.getElementById("answers");
const progressText = document.getElementById("progress-text");
const progressDetail = document.getElementById("progress-detail");
const progressFill = document.getElementById("progress-fill");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const resultBadge = document.getElementById("result-badge");
const resultTitle = document.getElementById("result-title");
const resultScore = document.getElementById("result-score");
const resultSummary = document.getElementById("result-summary");
const resultTraits = document.getElementById("result-traits");
const startBtn = document.getElementById("start-btn");
const resumeBtn = document.getElementById("resume-btn");
const restartBtn = document.getElementById("restart-btn");
const backHomeBtn = document.getElementById("back-home-btn");
const shareBtn = document.getElementById("share-btn");
const shareFeedback = document.getElementById("share-feedback");

function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return null;
    }

    const parsed = JSON.parse(raw);
    const isValidAnswers =
      Array.isArray(parsed.answers) &&
      parsed.answers.length === quizData.questions.length &&
      parsed.answers.every((value, questionIndex) => {
        if (value === null) {
          return true;
        }

        return Number.isInteger(value) && value >= 0 && value < quizData.questions[questionIndex].answers.length;
      });

    const isValidIndex =
      Number.isInteger(parsed.index) &&
      parsed.index >= 0 &&
      parsed.index < quizData.questions.length;

    if (!isValidAnswers || !isValidIndex) {
      return null;
    }

    return {
      index: parsed.index,
      answers: parsed.answers,
      started: Boolean(parsed.started)
    };
  } catch (error) {
    console.warn("Failed to load progress:", error);
    return null;
  }
}

function updateResumeVisibility() {
  const saved = loadProgress();
  const hasProgress = Boolean(saved && saved.answers.some((value) => value !== null));
  resumeBtn.classList.toggle("hidden", !hasProgress);
}

function getAnsweredCount() {
  return state.answers.filter((value) => value !== null).length;
}

function saveProgress() {
  const payload = {
    index: state.index,
    answers: state.answers,
    started: state.started
  };

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  } catch (error) {
    console.warn("Failed to save progress:", error);
  }

  updateResumeVisibility();
}

function clearProgress() {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.warn("Failed to clear progress:", error);
  }

  updateResumeVisibility();
}

function switchView(view) {
  introCard.classList.toggle("hidden", view !== "intro");
  quizCard.classList.toggle("hidden", view !== "quiz");
  resultCard.classList.toggle("hidden", view !== "result");
}

function renderQuestion() {
  const current = quizData.questions[state.index];
  const selected = state.answers[state.index];
  const answeredCount = getAnsweredCount();

  questionTitle.textContent = current.title;
  questionDescription.textContent = current.description;
  progressText.textContent = `第 ${state.index + 1} 题 / 共 ${quizData.questions.length} 题`;
  progressDetail.textContent = `已完成 ${answeredCount} 题`;
  progressFill.style.width = `${(answeredCount / quizData.questions.length) * 100}%`;
  answersWrap.innerHTML = "";

  current.answers.forEach((answer, idx) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "answer-btn entering";
    button.setAttribute("role", "radio");
    button.setAttribute("aria-checked", String(selected === idx));
    button.setAttribute("aria-label", `${answer.text}，${answer.hint}`);

    if (selected === idx) {
      button.classList.add("selected");
    }

    button.innerHTML = `
      <strong>${answer.text}</strong>
      <span>${answer.hint}</span>
    `;

    button.addEventListener("click", () => {
      state.answers[state.index] = idx;
      saveProgress();
      renderQuestion();
    });

    answersWrap.appendChild(button);
  });

  prevBtn.disabled = state.index === 0;
  nextBtn.disabled = selected === null;
  nextBtn.textContent = state.index === quizData.questions.length - 1 ? "查看结果" : "下一题";
}

function getTotalScore() {
  return state.answers.reduce((sum, answerIndex, questionIndex) => {
    if (answerIndex === null) {
      return sum;
    }

    const answer = quizData.questions[questionIndex].answers[answerIndex];
    return sum + answer.score;
  }, 0);
}

function getResult(totalScore) {
  return (
    quizData.results.find((item) => totalScore >= item.min && totalScore <= item.max) ||
    quizData.results[quizData.results.length - 1]
  );
}

function buildShareText(result, totalScore) {
  return [
    "我刚测了一个《你是小男娘吗？》趣味测试",
    `结果：${result.badge}`,
    `标题：${result.title}`,
    `得分：${totalScore} / 40`,
    `关键词：${result.traits.join(" / ")}`,
    "你也可以来测测看。"
  ].join("\n");
}

function burstConfetti(result) {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reducedMotion) {
    return;
  }

  const particleCount = result.badge === "满级小男娘雷达" ? 180 : 110;
  const spread = result.badge === "钢铁直线型" ? 55 : 75;
  const colors =
    result.tone === "tone-cool"
      ? ["#9ddfd3", "#d9f8f2", "#ffffff"]
      : result.tone === "tone-balance"
        ? ["#ffd6a4", "#ffb0b8", "#ffffff"]
        : result.tone === "tone-pink"
          ? ["#ff7db2", "#ffd6e8", "#ffffff"]
          : ["#ff7db2", "#f0d9ff", "#ffd6a4", "#ffffff"];

  confetti({
    particleCount,
    spread,
    startVelocity: 32,
    origin: { y: 0.62 },
    colors
  });
}

function showResult() {
  const totalScore = getTotalScore();
  const result = getResult(totalScore);

  state.lastResult = {
    result,
    totalScore
  };

  resultCard.classList.remove("tone-cool", "tone-balance", "tone-pink", "tone-sparkle");
  resultCard.classList.add(result.tone);

  resultBadge.textContent = result.badge;
  resultTitle.textContent = result.title;
  resultScore.textContent = `你的气质得分：${totalScore} / 40`;
  resultSummary.textContent = result.summary;
  resultTraits.innerHTML = result.traits
    .map((trait) => `<span class="trait">${trait}</span>`)
    .join("");
  shareFeedback.classList.add("hidden");
  shareFeedback.textContent = "";

  clearProgress();
  switchView("result");
  burstConfetti(result);
  resultCard.scrollIntoView({ behavior: "smooth", block: "start" });
}

function beginQuiz({ resume = false } = {}) {
  state.started = true;

  if (!resume) {
    state.index = 0;
    state.answers = Array(quizData.questions.length).fill(null);
    saveProgress();
  }

  switchView("quiz");
  renderQuestion();
}

function resetQuiz() {
  state.started = false;
  state.index = 0;
  state.answers = Array(quizData.questions.length).fill(null);
  state.lastResult = null;
  shareFeedback.classList.add("hidden");
  shareFeedback.textContent = "";
  clearProgress();
}

async function copyShareText() {
  if (!state.lastResult) {
    return;
  }

  const text = buildShareText(state.lastResult.result, state.lastResult.totalScore);

  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
    } else {
      const textArea = document.createElement("textarea");
      textArea.value = text;
      textArea.setAttribute("readonly", "true");
      textArea.style.position = "absolute";
      textArea.style.left = "-9999px";
      document.body.appendChild(textArea);
      textArea.select();
      const copied = document.execCommand("copy");
      document.body.removeChild(textArea);

      if (!copied) {
        throw new Error("execCommand copy failed");
      }
    }

    shareFeedback.textContent = "结果文案已经复制好了，直接去发给朋友就行。";
    shareFeedback.classList.remove("hidden");
  } catch (error) {
    shareFeedback.textContent = "复制失败了，不过结果已经显示在页面上，可以手动复制。";
    shareFeedback.classList.remove("hidden");
  }
}

startBtn.addEventListener("click", () => {
  beginQuiz();
});

resumeBtn.addEventListener("click", () => {
  const saved = loadProgress();
  if (!saved) {
    resumeBtn.classList.add("hidden");
    beginQuiz();
    return;
  }

  state.index = saved.index;
  state.answers = saved.answers;
  state.started = saved.started;
  beginQuiz({ resume: true });
});

prevBtn.addEventListener("click", () => {
  if (state.index > 0) {
    state.index -= 1;
    saveProgress();
    renderQuestion();
  }
});

nextBtn.addEventListener("click", () => {
  const hasSelected = state.answers[state.index] !== null;
  if (!hasSelected) {
    return;
  }

  if (state.index < quizData.questions.length - 1) {
    state.index += 1;
    saveProgress();
    renderQuestion();
    return;
  }

  showResult();
});

restartBtn.addEventListener("click", () => {
  resetQuiz();
  beginQuiz();
});

backHomeBtn.addEventListener("click", () => {
  resetQuiz();
  switchView("intro");
  window.scrollTo({ top: 0, behavior: "smooth" });
});

shareBtn.addEventListener("click", () => {
  copyShareText();
});

document.addEventListener("keydown", (event) => {
  if (quizCard.classList.contains("hidden")) {
    return;
  }

  const keyNumber = Number(event.key);
  if (!Number.isNaN(keyNumber) && keyNumber >= 1 && keyNumber <= 4) {
    const optionIndex = keyNumber - 1;
    if (quizData.questions[state.index].answers[optionIndex]) {
      state.answers[state.index] = optionIndex;
      saveProgress();
      renderQuestion();
    }
  }

  if (event.key === "ArrowLeft" && !prevBtn.disabled) {
    prevBtn.click();
  }

  if (event.key === "ArrowRight" && !nextBtn.disabled) {
    nextBtn.click();
  }
});

function init() {
  updateResumeVisibility();
  switchView("intro");
}

init();

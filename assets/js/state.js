(function(){
  const ARTIFACTS = [
    {
      id: "1",
      name: "縄文深鉢",
      site: "佐知遺跡",
      owner: "大分県立埋蔵文化財センター所蔵",
      period:"縄文時代",
      //modelUrl: "assets/3d-model/inu.glb",
      rarity: {
        stars: 5,
        text: "とてもレア"
      },
      potColor: "#C0763A",
      imageUrl:"assets/img/sinenhukabati.png",
      description: "縄文時代後期中葉の磨消縄文土器であるが、巻貝を回転させて縄文風の文様効果を出している。こうした縄文原体以外のもので縄文に似せた文様を擬似縄文といい、巻甲貝の回転やハイガイなどの二枚貝の背面押圧、二枚貝の貝殻腹縁の刺突などがある。",
      question: {
        text: "縄文深鉢は何を回転させて縄文風の模様効果を出しているか？",
        choices: [
          "巻貝",
          "こま",
          "骨"
        ],
        correctIndex: 0
      },
      explanation:"縄文時代後期中葉の土器。線を引いた模様の周りに縄目模様を付けているが、画像の土器は縄ではなく巻貝を転がして縄目風の効果を出している。こうした縄文に似せた文様を擬似（ぎじ）縄文といい、巻貝を転がしたりハイガイなどの二枚貝を押し付けたりしたものがある。",
    },
    {
      id: "2",
      name: "柄付石斧",
      site: "下群桑苗遺跡",
      owner: "大分県立埋蔵文化財センター所蔵",
      period:"弥生時代",
      modelUrl: "assets/3d-model/etukiisiono.glb", // ←変更
      rarity: {
        stars: 4,
        text: "とてもレア"
      },
      potColor: "#A6623A",
      imageUrl:"assets/img/etukiisiono.png",
      description: "柄付石斧(太形蛤刃石斧)は、木の伐採に用いられた。「蛤刃」とは、刃部を正面から見た場合に、口を閉じたハマグリの姿に似ていることからこの名称がつけられた。",
      explanation:"画像の石斧は石を磨いて作った「磨製石斧（ませいせきふ）」で、主に木の伐採に用いられた。この斧は木製の柄にはめ込んだ状態で発見された。木製の柄は土中で腐ってしまうため残ることはめったになく、非常にめずらしいものである。",
      question: {
        text: "柄付石斧はどんな用途で使用されたか？",
        choices: [
          "お守り",
          "木の伐採",
          "飾り"
        ],
        correctIndex: 1
      }
    },
    {
      id: "3",
      name: "馬具",
      site: "飛山横穴墓群",
      owner: "大分県立埋蔵文化財センター所蔵",
      period:"古墳時代",
      modelUrl: "assets/3d-model/bagu.glb", // ←変更
      rarity: {
        stars: 4,
        text: "とてもレア"
      },
      potColor: "#C0763A",
      imageUrl:"assets/img/bagu.png",
      description: "馬具(杏葉)は尻繋や胸繋の革帯に垂下する装飾で、本品は鉄製の心葉形である。表面には心葉形の透かしと鋲による縁取りが施され、蕨手文の地文や金張の痕跡が一部に残る。",
      explanation:"馬具（ばぐ）とは、馬の体を飾る装飾のための道具。画像は「杏葉（ぎょうよう）」で、馬の胸や尻尾の近くを飾り付けるもの。薄い鉄板をハートの形に裁断し、鋲（びょう＝ビス）で留め合わせて作られている。",
      question: {
        text: "本品の馬具は何で作られているか？",
        choices: [
          "木",
          "鉄",
          "ダイヤモンド"
        ],
        correctIndex: 1
      }
    },
    {
      id: "4",
      name: "青磁唾壺",
      site: "四日市遺跡",
      owner: "大分県立埋蔵文化財センター所蔵",
      period:"奈良時代",
      modelUrl: "assets/3d-model/dako.glb", // ←変更
      rarity: {
        stars: 5,
        text: "とてもレア"
      },
      potColor: "#A6623A",
      imageUrl:"assets/img/dako.png",
      description: "唾壺は日本で貴重品として室内装飾などに重用されたものである。本品は口縁部を打ち欠いて墓に納められていたが、本来は唾や痰を入れるため口縁部が大きくラッパ状に開いていた。",
      explanation:"唾壺（だこ）は古代中国で唾（つば）や痰（たん）を入れるために貴族等が用いたもので、日本は古代の都があった奈良や京都、大宰府（だざいふ）などから発見される。日本では貴重品として室内の飾りとして用いられた。",
      question: {
        text: "この壺は本来どんな用途で使われていた？",
        choices: [
          "唾や痰を入れる",
          "料理をする",
          "物を貯蔵する"
        ],
        correctIndex: 0
      }
    },
    {
      id: "5",
      name: "金箔土師器",
      site: "中世大友府内町跡",
      owner: "大分県立埋蔵文化財センター所蔵",
      period:"安土桃山時代",
      modelUrl: "assets/3d-model/kinpakuhazikidou.glb", // ←変更
      rarity: {
        stars: 5,
        text: "とてもレア"
      },
      potColor: "#C0763A",
      imageUrl:"assets/img/kinpakuhaziki.png",
      description: "中世では、土でこねて作った素焼きのうつわを「かわらけ」と呼んでいた。「かわらけ」は日本で大量に生産され、日常に用いる以外に、宴会や儀礼の場で消費された。",
      explanation:"中世では、土でこねて作った素焼きのうつわを「かわらけ」と呼ぶ。「かわらけ」は日本で大量に生産され、宴会やまつりの場で使われた。金箔を貼った「かわらけ」は、大名の館などから見つかることがあり、画像のかわらけも武士の儀式に用いられたと考えられている。",
      question: {
        text: "中世大友府内町跡で出土した金箔土師器などの「かわらけ」は何に使われた？",
        choices: [
          "武士たちの特別な儀式",
          "村のおまつり",
          "日常の食器として"
        ],
        correctIndex: 0
      }
    },
    {
      id: "6",
      name: "さし銭",
      site: "中世大友府内町跡",
      owner: "大分県立埋蔵文化財センター所蔵",
      period:"安土桃山時代",
      modelUrl: "assets/3d-model/sasizeni.glb", // ←変更
      rarity: {
        stars: 4,
        text: "とてもレア"
      },
      potColor: "#C0763A",
      imageUrl:"assets/img/sasizeni.png",
      description:"銅銭を孔に紐を通し、百文の単位で纏めた物をさし銭と言う。これは300文のさし銭で、建物の柱の穴から出土しており、建物を建てる際に、土地の神に捧げた地鎮の儀式に使われたものである。",
      explanation:"銅銭（どうせん）のあなに紐を通し、百文（約100枚）の単位でまとめたものを「さし銭」と言う。画像は三百文のさし銭で、建物の柱の穴から出土した。建物を建てる時に、土地の神に捧げた地鎮（じちん）祭に使われたものと考えられている。",
      question: {
        text: "この銭は、なぜまとまって見つかったのか？",
        choices: [
          "土の圧力でくっついたから",
          "調査で見つかった銭を同じ場所にあつめたから",
          "もともとは銭がひもでたばねられていたから"
        ],
        correctIndex: 2
      }
    },
    {
      id: "7",
      name: "犬型土製品",
      site: "中世大友府内町跡",
      owner: "大分県立埋蔵文化財センター所蔵",
      period:"安土桃山時代",
      modelUrl: "assets/3d-model/inugatadoseihin.glb", // ←変更
      rarity: {
        stars: 1,
        text: "とてもレア"
      },
      potColor: "#C0763A",
      imageUrl:"assets/img/inugatadoseihin.png",
      description: "一度にたくさん子どもを産む犬にあやかり、安産や多産を祈るものであろうと言われる。耳が立ち、尾が巻いており柴犬のような形で統一されている。なかには表面に赤彩を行ったものもあり、子どもの疱瘡除け、魔除けの効果があるといわれている。",
      explanation:"犬をかたどった土製の人形で、耳が立ち、尾が巻いており柴犬のような形をしている。犬は一度にたくさん子どもを産むことから、犬にあやかって安産や多産を祈るものと考えられている。中には表面を赤く塗ったものもあり、子どもの病気除けの目的があったとも言われている。",
      question: {
        text: "この土製品はそのような目的で作られたか？",
        choices: [
          "安産や多産を祈って作られた",
          "狩猟が上手くいくように作られた",
          "死んだ愛犬の代わりに人形として作られた"
        ],
        correctIndex: 0
      }
    },
    {
      id: "8",
      name: "鬼瓦",
      site: "中世大友府内町跡",
      owner: "大分県立埋蔵文化財センター所蔵",
      period:"安土桃山時代",
      modelUrl: "assets/3d-model/onigawara.glb", // ←変更
      rarity: {
        stars: 2,
        text: "とてもレア"
      },
      potColor: "#C0763A",
      imageUrl:"assets/img/onigawara.png",
      description: "中世の寺院には、屋根に多くの瓦が葺かれました。屋根の一番高い部分の先には、鬼の顔をした平たい瓦「鬼瓦」がみられた。",
      explanation:"寺院の屋根には多くの瓦が葺（ふ）かれるが、屋根の隅には、鬼のあしらった「鬼瓦」が飾られた。鬼瓦の鬼の多くは恐ろしい表情をしているが、画像の鬼は舌を出した愛嬌のある表情をしている。鬼が睨みをきかせることで、魔除けや建物を火災や災害などから守る目的があったとみられている",
      question: {
        text: "鬼瓦は建物のどこに設置されたもの？",
        choices: [
          "台所",
          "棟の先端",
          "玄関"
        ],
        correctIndex: 1
      }
    },
  ];

  function defaultWelcomeKey(){
    const path = location.pathname.replace(/^\//, "");
    if (!path) return "index";
    if (path.endsWith("/")) return path.slice(0, -1) || "index";
    return path.replace(/\.html$/, "");
  }

  // expose
  window.JomonQuiz = {
    ARTIFACTS,
    getArtifact(id){ return ARTIFACTS.find(a => a.id === id) || null; },
    all(){ return ARTIFACTS.slice(); },
    isSolved(id){ return localStorage.getItem("jomon:solved:"+id) === "1"; },
    setSolved(id, v=true){ localStorage.setItem("jomon:solved:"+id, v ? "1":""); },
    isSeen(key){ return localStorage.getItem("jomon:seen:"+key) === "1"; },
    setSeen(key, v=true){ localStorage.setItem("jomon:seen:"+key, v ? "1":""); },
    clearAll(){ ARTIFACTS.forEach(a => localStorage.removeItem("jomon:solved:"+a.id)); },
    solvedCount(){ return ARTIFACTS.filter(a => window.JomonQuiz.isSolved(a.id)).length; },
    qs(sel, root=document){ return root.querySelector(sel); },
    qsa(sel, root=document){ return Array.from(root.querySelectorAll(sel)); },
    param(name){ return new URLSearchParams(location.search).get(name); },
    potIMG({src, solved=false, alt="縄文土器"}) {
      const size = solved ? "large" : "small";
      const cls = `pot ${size} ${solved ? 'solved' : 'unsolved'}`;
      return `<img class="${cls}" src="${src}" alt="${alt}" loading="eager" decoding="async">`;
    },
    showWelcomeOnce(opts = {}){
      const key = opts.key || defaultWelcomeKey();
      const legacyKeys = Array.isArray(opts.legacyKeys) ? opts.legacyKeys : [];
      const title = opts.title || "初めての方へ";
      const desc = opts.desc || "この図鑑は、クイズに正解すると土器に色がつきます。気になる資料からクイズに挑戦してみよう。  ※プライベートブラウザで開かないでください     ※しょうがくせいいかのおこさまは、ほごしゃのかたとちょうせんしてね。";
      const buttonText = opts.buttonText || "はじめる";

      const hasCurrent = this.isSeen(key);
      const hasLegacy = legacyKeys.some((legacyKey) => this.isSeen(legacyKey));
      if (!hasCurrent && hasLegacy) {
        this.setSeen(key, true);
      }
      if (hasLegacy && opts.cleanupLegacy) {
        legacyKeys.forEach((legacyKey) => {
          localStorage.removeItem("jomon:seen:"+legacyKey);
        });
      }
      if (hasCurrent || hasLegacy) return;

      if (!document.body) return;
      let modal = document.getElementById("welcomeModal");
      if (!modal) {
        modal = document.createElement("div");
        modal.id = "welcomeModal";
        modal.className = "modal hidden";
        modal.setAttribute("role", "dialog");
        modal.setAttribute("aria-modal", "true");
        modal.setAttribute("aria-labelledby", "welcomeTitle");
        modal.setAttribute("aria-describedby", "welcomeDesc");
        modal.innerHTML = `
          <div class="modal-content welcome">
            <button class="close" id="welcomeClose" aria-label="閉じる">×</button>
            <h3 id="welcomeTitle"></h3>
            <p id="welcomeDesc"></p>
            <div class="modal-actions">
              <button class="primary" id="welcomeStart" type="button"></button>
            </div>
          </div>
        `;
        document.body.appendChild(modal);
      }

      const titleEl = modal.querySelector("#welcomeTitle");
      const descEl = modal.querySelector("#welcomeDesc");
      const startEl = modal.querySelector("#welcomeStart");
      if (titleEl) titleEl.textContent = title;
      if (descEl) descEl.textContent = desc;
      if (startEl) startEl.textContent = buttonText;

      if (!modal.dataset.bound) {
        const hide = () => { modal.classList.add("hidden"); };
        const closeBtn = modal.querySelector("#welcomeClose");
        if (closeBtn) closeBtn.addEventListener("click", hide);
        if (startEl) startEl.addEventListener("click", hide);
        modal.addEventListener("click", (event) => {
          if (event.target === modal) hide();
        });
        modal.dataset.bound = "1";
      }

      if (!this.isSeen(key)) {
        this.setSeen(key, true);
        modal.classList.remove("hidden");
      }
    }
  };
})();
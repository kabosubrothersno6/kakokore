(function(){
  const ARTIFACTS = [
    {
      id: "1",
      name: "巴型銅器",
      site: "大分市、雄乗台遺跡",
      potColor: "#C0763A",
      imageUrl:"assets/img/id6.png",
      description: "盾や矢筒に取り付けられていた装飾金具。魔除けの意味合いがあるとも言われている。弥生期の北部九州を中心に関東まで点在している。",
      question: {
        text: "巴型土器の最も一般的な用途解釈はどれ？",
        choices: [
          "装飾品",
          "投擲武器",
          "貨幣"
        ],
        correctIndex: 0
      },
      explanation:"大分市の雄城台遺跡（県指定有形文化財の巴形銅器が知られる）。同遺跡では第9次調査で柱穴内から出土.ぐるぐると渦を巻く巴文が外周に伸びる円盤状金具。作例は4～8枚程度の「脚（羽）」、中央に半球状または円錐状の座（ボス）をもつ。",
    },
    {
      id: "2",
      name: "深鉢形土器",
      site: "東北地方の縄文遺跡",
      potColor: "#A6623A",
      imageUrl:"assets/img/kaen.webp",
      description: "深い鉢形で、煮炊きに適したと考えられる土器。縄目文様のパターンや焼成の色ムラが見どころです。",
      explanation:"解説",
      question: {
        text: "深鉢形土器の“深い”形は主に何に向いていたと考えられる？",
        choices: [
          "長距離の運搬",
          "煮炊き・調理",
          "音を鳴らす楽器"
        ],
        correctIndex: 1
      }
    },
     {
      id: "3",
      name: "動物型の土偶",
      site: "明野アクロスタウン",
      potColor: "#C0763A",
      imageUrl:"assets/img/id5.png",
      description: "カボスbrothers第六世代が作った土偶。この土偶を作りチームみんなの指揮が高まった。",
      explanation:"この土偶は明野Brothers第６世代の高学年組が、日本大会に出られるように皆で作られたものである。",
      question: {
        text: "この土偶の特徴として最も適切なのはどれ？",
        choices: [
          "狩猟が上手くいくことを祈って作られた",
          "亡くなったペットのために作られた",
          "集団の指揮を高めるために作られた"
        ],
        correctIndex: 2
      }
    },
        {
      id: "4",
      name: "壺型土器",
      site: "東北地方",
      potColor: "#A6623A",
      imageUrl:"assets/img/kaen.webp",
      description: "貯蔵用や再葬墓の容器として使われた。",
      explanation:"解説",
      question: {
        text: "壺型土器は何のために使わていた？",
        choices: [
          "漬物等を作るため",
          "食料を貯蔵するため",
          "料理用に使われていた"
        ],
        correctIndex: 1
      }

    }
  ];


  // expose
 window.JomonQuiz = {
    ARTIFACTS,
    getArtifact(id){ return ARTIFACTS.find(a => a.id === id) || null; },
    all(){ return ARTIFACTS.slice(); },
    isSolved(id){ return localStorage.getItem("jomon:solved:"+id) === "1"; },
    setSolved(id, v=true){ localStorage.setItem("jomon:solved:"+id, v ? "1":""); },
    clearAll(){ ARTIFACTS.forEach(a => localStorage.removeItem("jomon:solved:"+a.id)); },
    //solvedCount(){ return ARTIFACTS.filter(a => this.isSolved(a.id)).length; },
    solvedCount(){ return ARTIFACTS.filter(a => window.JomonQuiz.isSolved(a.id)).length; },
    // tiny util
    qs(sel, root=document){ return root.querySelector(sel); },
    qsa(sel, root=document){ return Array.from(root.querySelectorAll(sel)); },
    param(name){ return new URLSearchParams(location.search).get(name); },
    potIMG({src, solved=false, alt="縄文土器"}) {
      const cls = solved ? "pot solved" : "pot unsolved";
      return `<img class="${cls}" src="${src}" alt="${alt}" loading="eager" decoding="async">`;
    }
  };
})();

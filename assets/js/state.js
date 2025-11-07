(function(){
  const ARTIFACTS = [
    {
      id: "1",
      name: "火焔型土器",
      site: "（サンプル）新潟県周辺の縄文遺跡",
      potColor: "#C0763A",
      imageUrl:"assets/img/id3.webp",
      description: "（サンプル）口縁部に炎のような装飾が見られる豪壮な土器。展示では造形のリズムと左右対称の美しさに注目してみましょう。",
      question: {
        text: "火焔型土器の特徴として最も適切なのはどれ？",
        choices: [
          "肩から口縁にかけて炎のような突起が巡る",
          "底が三脚になっていて自立しない",
          "表面に金箔が貼られている"
        ],
        correctIndex: 0
      }
    },
    {
      id: "2",
      name: "深鉢形土器",
      site: "（サンプル）東北地方の縄文遺跡",
      potColor: "#A6623A",
      imageUrl:"assets/img/kaen.webp",
      description: "（サンプル）深い鉢形で、煮炊きに適したと考えられる土器。縄目文様のパターンや焼成の色ムラが見どころです。",
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
      imageUrl:"assets/img/id4.png",
      description: "カボスbrothers第六世代が作った土偶。この土偶を作りチームみんなの指揮が高まった。",
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

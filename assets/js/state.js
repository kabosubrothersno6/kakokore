/**
 * Jomon Quiz Rally - shared state & helpers
 * Stores progress in localStorage under key: jomon:solved:<artifactId>
 */
(function(){
  const ARTIFACTS = [
    {
      id: "1",
      name: "火焔型土器",
      site: "（サンプル）新潟県周辺の縄文遺跡",
      potColor: "#C0763A",
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
      name: "愛絆土器",
      site: "（サンプル）大分県内の大分市周辺",
      potColor: "#C0763A",
      description: "（サンプル）ほかのものと比べて形が大きい。よく出土する場所はゲームセンター、カラオケ等。",
      question: {
        text: "愛絆土器の特徴として最も適切なのはどれ？",
        choices: [
          "五月蠅い",
          "太鼓の達人が得意",
          "ほかの土器と比べて大きい"
        ],
        correctIndex: 2
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
    // Inline SVG for a simple pot. If solved: filled with a terracotta color; else: dark silhouette.
    potSVG({color="#C0763A", solved=false}={}){
      const fill = solved ? color : "#222";
      const stroke = solved ? "#00000020" : "#00000000";
      const deco = solved ? "#00000010" : "none";
      return `


<svg class="pot" viewBox="0 0 200 200" role="img" aria-label="縄文土器">
  <defs>
    <linearGradient id="shine" x1="0" x2="0" y1="0" y2="1">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="${solved ? 0.20 : 0}"/>
      <stop offset="100%" stop-color="#000000" stop-opacity="${solved ? 0.10 : 0}"/>
    </linearGradient>
  </defs>
  <!-- simplified pot silhouette -->
  <path d="M30,45 Q60,35 80,35 L120,35 Q140,35 170,45 Q165,60 150,70 Q150,75 150,80 Q150,90 155,100 Q160,110 160,120 Q160,150 140,170 Q120,190 100,190 Q80,190 60,170 Q40,150 40,120 Q40,110 45,100 Q50,90 50,80 Q50,75 50,70 Q35,60 30,45 Z"
        fill="${fill}" stroke="${stroke}" stroke-width="2"/>
  <!-- rim decoration (subtle) -->
  <path d="M35,55 C60,46 90,46 100,46 C110,46 140,46 165,55" fill="none" stroke="${deco}" stroke-width="8" stroke-linecap="round"/>
  <rect x="60" y="24" width="80" height="12" rx="6" fill="${fill}"/>
  <path d="M55,80 C65,70 75,85 85,80 C95,75 105,85 115,80 C125,75 135,85 145,80"
        stroke="${deco}" stroke-width="6" fill="none" stroke-linecap="round"/>
  ${solved ? `<rect x="0" y="0" width="200" height="200" fill="url(#shine)" />` : ``}
</svg>`;
    }
  };
})();



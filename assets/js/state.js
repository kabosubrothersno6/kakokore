(function(){
  const ARTIFACTS = [
    {
      id: "1",
      name: "巴型銅器",
      site: "大分市、雄乗台遺跡",
      potColor: "#C0763A",
      imageUrl:"assets/img/id1.png",
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
      explanation:"ぐるぐると渦を巻く巴文が外周に伸びる円盤状金具。4～8枚程度の「脚（羽）」、中央に半球状または円錐状の座をもつ。",
    },
    {
      id: "2",
      name: "深鉢形土器",
      site: "東北地方の縄文遺跡",
      potColor: "#A6623A",
      imageUrl:"assets/img/id2.png",
      description: "深い鉢形で、煮炊きに適したと考えられる土器。縄目文様のパターンや焼成の色ムラが見どころです。",
      explanation:"この土偶は明野Brothers第６世代の高学年組が、日本大会に出られるように皆で作られたものである。",
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
      imageUrl:"assets/img/id3.png",
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
      imageUrl:"assets/img/id4.png",
      description: "貯蔵用や再葬墓の容器として使われた。",
      explanation:"この土偶は明野Brothers第６世代の高学年組が、日本大会に出られるように皆で作られたものである。",
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

    },
    {
      id: "5",
      name: "玉類",
      site: "大分市大在浜遺跡",
      potColor: "#C0763A",
      imageUrl:"assets/img/id5.png",
      description: "作成時、金属等で穴をあけるのではなく、動物の骨で穴をあけていた。",
      explanation:"玉類の穴は今より簡単に作れるものではなく、当時は最高級の贈り物だとされている。",
      question: {
        text: "この遺物はどのように作られた？",
        choices: [
          "動物の骨などで穴をあけた",
          "金属の針で穴をあけた",
          "砂浜で拾った"
        ],
        correctIndex: 0
      }
    },
         {
      id: "6",
      name: "緡銭",
      site: "大分市内",
      potColor: "#C0763A",
      imageUrl:"assets/img/id6.png",
      description:"戦国時代、寺院が財力を持っており、土の中に銭を隠していて、寺が燃えて銭も焼けたと考えられている。",
      explanation:"一束１００枚にまとめられており、今の価格で一枚千円の価値がある。",
      question: {
        text: "この遺物はどうして溶けているのか？",
        choices: [
          "チョコレートだから",
          "太陽で焼けたから",
          "寺院と一緒に焼けたから"
        ],
        correctIndex: 2
      }
    },
         {
      id: "7",
      name: "中広型銅矛",
      site: "元畑遺跡",
      potColor: "#C0763A",
      imageUrl:"assets/img/id7.png",
      description: "中国から伝えられ、武器から祭器に代わり、祈りや祈願のために使われていたと考えられる。",
      explanation:"この遺物は刃部に刃がついておらず、柄も無くなっている。",
      question: {
        text: "この遺物は何に使われていたか？",
        choices: [
          "かっこいい置物として",
          "祈願などの祭具として",
          "戦いの道具として"
        ],
        correctIndex: 1
      }
    },
         {
      id: "8",
      name: "名称不明",
      site: "出土場所不明",
      potColor: "#C0763A",
      imageUrl:"assets/img/id8.png",
      description: "この時代、細部を細かく作るための技術が無かった為,作れなかった。",
      explanation:"取っ手等は、縄文時代には作られていた。",
      question: {
        text: "この土器は何故小さい穴が空いているのか？",
        choices: [
          "ゴミ箱だから",
          "落として割れたから",
          "水を注ぐため"
        ],
        correctIndex: 2
      }
    },
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

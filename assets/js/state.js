(function(){
  const ARTIFACTS = [
    {
      id: "1",
      name: "巴形銅器",
      site: "大分市、雄城台遺跡",
      period:"縄文時代",
      modelUrl: "assets/3d-model/inu.glb",
      rarity: {
      stars: 5,
      text: "とてもレア"
        },
      potColor: "#C0763A",
      imageUrl:"assets/img/id1.png",
      description: "盾や矢筒に取り付けられていた装飾金具。魔除けの意味合いがあるとも言われている。弥生期の北部九州を中心に関東まで点在している。",
      question: {
        text: "巴形銅器の使われ方として、最もいわれているものはどれ？",
        choices: [
          "装飾品",
          "投げる武器",
          "お金"
        ],
        correctIndex: 0
      },
      explanation:"ぐるぐると渦を巻く巴文が外周に伸びる円盤状金具。4～8枚程度の「脚（羽）」、中央に半球状または円錐状の座をもつ。",
    },
    /*{
      id: "2",
      name: "深鉢形土器",
      site: "新潟県、笹山遺跡",
      period:"縄文時代",
      price: {
        text: "数百万円以上",
        value: 3000000
      },
      potColor: "#A6623A",
      imageUrl:"assets/img/id2.png",
      description: "縄文時代の土器で、深い鉢形をしている土器。縄目文様のパターンや焼成の色ムラが見どころです。",
      explanation:"この深鉢型土器は、火焔型土器(かえんがたどき)と呼ばれ、大きく立ち上がる突起が、燃え盛る炎のように見えることから命名されました。",
      question: {
        text: "深淵型土器の深い形は、主にどういった使い方に向いていたでしょうか？",
        choices: [
          "長距離の運搬",
          "煮炊き・調理",
          "音が鳴る楽器"
        ],
        correctIndex: 1
      }
    },*/
     {
      id: "3",
      name: "犬型の土製品",
      site: "明野アクロスタウン",
      period:"弥生時代",
      modelUrl: "assets/3d-model/inu.glb",
        rarity: {
          stars: 4,
          text: "とてもレア"
        },
      potColor: "#C0763A",
      imageUrl:"assets/img/id3.png",
      description: "カボスbrothers第六世代が作った土製品。この土製品を作り、チームみんなの士気が高まった。",
      explanation:"この土製品はカボスBrothers第６世代の高学年組が、日本大会に出られるように皆で作られたものである。",
      question: {
        text: "この犬の特徴として最も正しいのはどれ？",
        choices: [
          "狩猟が上手くいくことを祈って作られた",
          "亡くなったペットのために作られた",
          "集団の士気を高めるために作られた"
        ],
        correctIndex: 2
      }
    },
       /* {
      id: "4",
      name: "壺型土器",
      site: "東京都　上野公園",
      period:"鎌倉時代",
      price: {
        text: "数百万円以上",
        value: 3000000
      },
      potColor: "#A6623A",
      imageUrl:"assets/img/id4.png",
      description: "縄文時代から弥生時代にかけて作られた口がせまく丸みを帯びた土器",
      explanation:"壺型土器は、縄文時代から弥生時代にかけて、水や食べ物を貯めたり、祭祀(さいし)に使ったり、人骨を納めるために使ったりと幅広く使われていました。なお、1番目の器は高坏(たかつき)、3番目の器は甕(かめ)の説明です。",
      question: {
        text: "壺型土器は何のために使われていた？",
        choices: [
          "食べ物を盛り付ける器につかうため",
          "水や食料を貯蔵するため",
          "火にかけてお米を炊くため"
        ],
        correctIndex: 1
      }

    },*/
    {
      id: "5",
      name: "玉類",
      site: "大分市大在浜遺跡",
      period:"奈良時代",
      modelUrl: "assets/3d-model/inu.glb",
    rarity: {
      stars: 5,
      text: "とてもレア"
    },
      potColor: "#C0763A",
      imageUrl:"assets/img/id5.png",
      description: "首飾りとして、きれいな石やガラスの加工品をたくさんつないだもの。",
      explanation:"金属がない時代、玉類に穴をあけるのは難しく、最初は動物の骨をつかって穴をあけていた。やがて、硬い石をつかって穴をあけるようになった。玉類の穴は今より簡単に作られるものではなく、当時は最高級の贈り物だったとされている。",
      question: {
        text: "これらの玉にはひもを通す小さな穴があいていますが、どうやって穴をあけた？",
        choices: [
          "動物の骨や硬い石などを使って穴をあけた",
          "雨水や滝の水を使って穴をあけた",
          "砂浜で穴の開いた石をひたすら拾い集めた"
        ],
        correctIndex: 0
      }
    },
         {
      id: "6",
      name: "備蓄銭",
      site: "大分市　中世大友府内町跡",
      period:"平安時代",
      modelUrl: "assets/3d-model/inu.glb",
        rarity: {
            stars: 4,
            text: "とてもレア"
        },
      potColor: "#C0763A",
      imageUrl:"assets/img/id6.png",
      description:"たくさんの銭が束になってできたかたまり。およそ1万枚の銭があるとされている。",
      explanation:"およそ500年前、この場所には万寿寺(まんじゅじ)という大きなお寺があり、その地下からでてきたもの。もともとはひもで束になっていたけれど、長い年月の間にひもはなくなった。お寺が焼けてなくなっても持ち出されずに、ずっと地面の中にあった。",
      question: {
        text: "この銭は、どうやってくっついているのか？",
        choices: [
          "土の圧力でくっついた",
          "中に磁石が入っていてそれにくっついた",
          "もともとは銭がひもでたばねられていた"
        ],
        correctIndex: 2
      }
    },
         {
      id: "7",
      name: "中広型銅矛",
      site: "玖珠町　元畑遺跡",
      period:"室町時代",
      modelUrl: "assets/3d-model/inu.glb",
        rarity: {
          stars: 1,
          text: "とてもレア"
        },
          potColor: "#C0763A",
      imageUrl:"assets/img/id7.png",
      description: "青銅で作られた武器で、中国大陸から朝鮮半島経由で日本に伝わった。北部九州で多く見られる。",
      explanation:"中国大陸から伝わったころは武器として使われていましたが、やがて祭祀をする道具として、大型化していった。お墓に入り、お祭りに使い埋められたりしたものが発掘調査で出てきている。",
      question: {
        text: "これらの銅矛は日本では武器以外にどのように使われたか？",
        choices: [
          "祭祀をする道具として使われた",
          "農具として使われた",
          "楽器として使われた"
        ],
        correctIndex: 1
      }
    },
         {
      id: "8",
      name: "注口土器",
      site: "大分県立埋蔵文化財センター",
      period:"江戸時代",
      modelUrl: "assets/3d-model/inu.glb",
        rarity: {
          stars: 2,
          text: "とてもレア"
        },
      potColor: "#C0763A",
      imageUrl:"assets/img/id8.png",
      description: "土器の側面に小さな穴が開いている土器",
      explanation:"水などの液体を少しずつ注ぐために開けられたと考えられています。現在もお茶を注ぐやかんや急須(きゅうす)なども同じような使われ方をします。",
      question: {
        text: "この土器はなぜ穴が開いているのか？",
        choices: [
          "土器の失敗作",
          "水などを注ぐための穴",
          "中のものを味見するための穴"
        ],
        correctIndex: 1
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
      const size = solved ? "large" : "small";
      const cls = `pot ${size} ${solved ? 'solved' : 'unsolved'}`;

      return `<img class="${cls}" src="${src}" alt="${alt}" loading="eager" decoding="async">`;
    }
  };
})();
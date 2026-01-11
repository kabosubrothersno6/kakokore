(function(){
  const ARTIFACTS = [
    {
      id: "1",
      name: "縄文深鉢",
      site: "佐知遺跡",
      owner: "大分県立埋蔵文化財センター所蔵",
      period:"縄文時代",
      modelUrl: "assets/3d-model/inu.glb",
      rarity: {
      stars: 5,
      text: "とてもレア"
        },
      potColor: "#C0763A",
      imageUrl:"assets/img/sinenhukabati.png",
      description: "縄文時代後期中葉の磨消縄文土器であるが、巻貝を回転させて縄文風の文様効果を出している。こうした縄文原体以外のもので縄文に似せた文様を擬似縄文といい、巻甲貝の回転やハイガイなどの二枚貝の背面押圧、二枚貝の貝殻腹縁の刺突などがある。",
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
    {
      id: "2",
      name: "柄付石斧",
      site: "下群桑苗遺跡",
     owner: "大分県立埋蔵文化財センター所蔵",
      period:"弥生時代",
      modelUrl: "assets/3d-model/inu.glb",
         rarity: {
          stars: 4,
          text: "とてもレア"
        },
      potColor: "#A6623A",
      imageUrl:"assets/img/etukiisiono.png",
      description: "柄付石斧(太形蛤刃石斧)は、木の伐採に用いられた。「蛤刃」とは、刃部を正面から見た場合に、口を閉じたハマグリの姿に似ていることからこの名称がつけられた。",
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
    },
     {
      id: "3",
      name: "馬具",
      site: "飛山横穴墓群",
    　owner: "大分県立埋蔵文化財センター所蔵",
      period:"古墳時代",
      modelUrl: "assets/3d-model/inu.glb",
        rarity: {
          stars: 4,
          text: "とてもレア"
        },
      potColor: "#C0763A",
      imageUrl:"assets/img/bagu.png",
      description: "杏葉は尻繋や胸繋の革帯に垂下する装飾で、本品は鉄製の心葉形である。表面には心葉形の透かしと鋲による縁取りが施され、蕨手文の地文や金張の痕跡が一部に残る。",
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
     {
      id: "4",
      name: "唾壺",
      site: "四日市遺跡",
    　 owner: "大分県立埋蔵文化財センター所蔵",
      period:"奈良時代",
      modelUrl: "assets/3d-model/inu.glb",
     rarity: {
          stars: 5,
          text: "とてもレア"
        },
      potColor: "#A6623A",
      imageUrl:"assets/img/dako.png",
      description: "唾壺は日本で貴重品として室内装飾などに重用されたものである。本品は口縁部を打ち欠いて墓に納められていたが、本来は唾や痰を入れるため口縁部が大きくラッパ状に開いていた。",
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

    },
    {
      id: "5",
      name: "金箔土師器",
      site: "中世大友府内遺跡",
      owner: "大分県立埋蔵文化財センター所蔵",
      period:"安土桃山時代",
      modelUrl: "assets/3d-model/inu.glb",
    rarity: {
      stars: 5,
      text: "とてもレア"
    },
      potColor: "#C0763A",
      imageUrl:"assets/img/dako.png",
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
      name: "さし銭",
      site: "中世大友府内町跡",
      owner: "大分県立埋蔵文化財センター所蔵",
      period:"安土桃山時代",
      modelUrl: "assets/3d-model/inu.glb",
        rarity: {
            stars: 4,
            text: "とてもレア"
        },
      potColor: "#C0763A",
      imageUrl:"assets/img/sasizeni.png",
      description:"銅銭を孔に紐を通し、百文の単位で纏めた物をさし銭と言う。これは300文のさし銭で、建物の柱の穴から出土しており、建物を建てる際に、土地の神に捧げた地鎮の儀式に使われたものである。",
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
      name: "犬型土製品",
      site: "中世大友府内遺跡",
      owner: "大分県立埋蔵文化財センター所蔵",
      period:"安土桃山時代",
      modelUrl: "assets/3d-model/inu.glb",
        rarity: {
          stars: 1,
          text: "とてもレア"
        },
          potColor: "#C0763A",
      imageUrl:"assets/img/inugatadoseihin.png",
      description: "一度にたくさん子どもを産む犬にあやかり、安産や多産を祈るものであろうと言われる。耳が立ち、尾が巻いており柴犬のような形で統一されている。なかには表面に赤彩を行ったものもあり、子どもの疱瘡除け、魔除けの効果があるといわれている。",
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
      name: "鬼瓦",
      site: "万寿寺跡",
      owner: "大分県立埋蔵文化財センター所蔵",
      period:"安土桃山時代",
      modelUrl: "assets/3d-model/inu.glb",
        rarity: {
          stars: 2,
          text: "とてもレア"
        },
      potColor: "#C0763A",
      imageUrl:"assets/img/bagu.png",
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
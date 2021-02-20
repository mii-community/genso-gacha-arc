class Element {
    constructor(number, initial, name) {
        this.number = number;
        this.initial = initial;
        this.name = name;
    }
}

const   air=[new Element("","N₂","窒素"),
            new Element("","O₂","酸素"),
            new Element("","Ar","アルゴン"),
            new Element("","CO₂","二酸化炭素"),
            new Element("","Ne","ネオン"),
            new Element("","He","ヘリウム"),
            new Element("","Kr","クリプトン"),
            new Element("","H₂","水素"),
            new Element("","O₃","オゾン"),
            new Element("","I₂","ヨウ素")];

const metal=[new Element("3","Li","リチウム"),
            new Element("4","Be","ベリリウム"),
            new Element("11","Na","ナトリウム"),
            new Element("12","Mg","マグネシウム"),
            new Element("13","Al","アルミニウム"),
            new Element("19","K","カリウム"),
            new Element("20","Ca","カルシウム"),
            new Element("21","Sc","スカンジウム"),
            new Element("22","Ti","チタン"),
            new Element("23","V","バナジウム"),
            new Element("24","Cr","クロム"),
            new Element("25","Mn","マンガン"),
            new Element("26","Fe","鉄"),
            new Element("27","Co","コバルト"),
            new Element("28","Ni","ニッケル"),
            new Element("29","Cu","銅"),
            new Element("30","Zn","亜鉛"),
            new Element("31","Ga","ガリウム"),
            new Element("37","Rb","ルビジウム"),
            new Element("38","Sr","ストロンチウム"),
            new Element("39","Y","イットリウム"),
            new Element("40","Zr","ジルコニウム"),
            new Element("41","Nb","ニオブ"),
            new Element("42","Mo","モリブデン"),
            new Element("43","Tc","テクネチウム"),
            new Element("44","Ru","ルテニウム"),
            new Element("45","Rh","ロジウム"),
            new Element("46","Pd","パラジウム"),
            new Element("47","Ag","銀"),
            new Element("48","Cd","カドミウム"),
            new Element("49","In","インジウム"),
            new Element("50","Sn","錫"),
            new Element("55","Cs","セシウム"),
            new Element("56","Ba","バリウム"),
            new Element("72","Hf","ハフニウム"),
            new Element("73","Ta","タンタル"),
            new Element("74","W","タングステン"),
            new Element("75","Re","レニウム"),
            new Element("76","Os","オスミウム"),
            new Element("77","Ir","イリジウム"),
            new Element("78","Pt","プラチナ"),
            new Element("79","Au","金"),
            new Element("80","Hg","水銀"),
            new Element("81","Tl","タリウム"),
            new Element("82","Pb","鉛"),
            new Element("83","Bi","ビスマス"),
            new Element("87","Fr","フランシウム"),
            new Element("88","Ra","ラジウム"),
            new Element("104","Rf","ラザホージウム"),
            new Element("105","Db","ドブニウム"),
            new Element("106","Sg","シーボーギウム"),
            new Element("107","Bh","ボーリウム"),
            new Element("108","Hs","ハッシウム"),
            new Element("112","Cn","コペルニシウム"),
            new Element("114","Fl","フレロビウム")];

const  rare=[new Element("57","La","ランタン"),
            new Element("58","Ce","セシウム"),
            new Element("59","Pr","プラセオジム"),
            new Element("60","Nd","ネオジム"),
            new Element("61","Pm","プロメチウム"),
            new Element("62","Sm","サマリウム"),
            new Element("63","Eu","ユーロピウム"),
            new Element("64","Gd","ガドリニウム"),
            new Element("65","Tb","テルビウム"),
            new Element("66","Dy","ジスプロシウム"),
            new Element("67","Ho","ホルミウム"),
            new Element("68","Er","エルビウム"),
            new Element("69","Tm","ツリウム"),
            new Element("70","Yb","イッテルビウム"),
            new Element("71","Lu","ルテニウム"),
            new Element("89","Ac","アクチニウム"),
            new Element("90","Th","トリウム"),
            new Element("91","Pa","プロトアクチニウム"),
            new Element("92","U","ウラン"),
            new Element("93","Np","ネプツニウム"),
            new Element("94","Pu","プルトニウム"),
            new Element("95","Am","アメリシウム"),
            new Element("96","Cm","キュリウム"),
            new Element("97","Bk","バークリウム"),
            new Element("98","Cf","カリフォルニウム"),
            new Element("99","Es","アインスタニウム"),
            new Element("100","Fm","フェルミウム"),
            new Element("101","Md","メンデレビウム"),
            new Element("102","No","ノーベリウム"),
            new Element("103","Lr","ローレンシウム")];

const other=[new Element("1","H","水素"),
            new Element("2","He","ヘリウム"),
            new Element("5","B","ホウ素"),
            new Element("6","C","炭素"),
            new Element("7","窒素"),
            new Element("8","O","酸素"),
            new Element("9","F","フッ素"),
            new Element("10","Ne","ネオン"),
            new Element("14","Si","ケイ素"),
            new Element("15","P","リン"),
            new Element("16","硫黄"),
            new Element("17","Cl","塩素"),
            new Element("18","Ar","アルゴン"),
            new Element("32","Ge","ゲルマニウム"),
            new Element("33","As","ヒ素"),
            new Element("34","Se","セレン"),
            new Element("35","Br","臭素"),
            new Element("36","Kr","クリプトン"),
            new Element("51","Sb","アンチモン"),
            new Element("52","Te","テルル"),
            new Element("53","I","ヨウ素"),
            new Element("54","Xe","キセノン"),
            new Element("84","Po","ポロニウム"),
            new Element("85","At","アスタチン"),
            new Element("86","Rn","ラドン"),
            new Element("109","Mt","マイトネリウム"),
            new Element("110","Ds","ジスプロシウム"),
            new Element("111","Rg","レントゲニウム"),
            new Element("113","Nh","ニホニウム"),
            new Element("115","Mc","モスコビウム"),
            new Element("116","Lv","リバモリウム"),
            new Element("117","Ts","テネシン"),
            new Element("118","Og","オガネソン")];

const und_g=[new Element("121","Ubu","ウンビウニウム"),
            new Element("122","Ubb","ウンビビウム"),
            new Element("123","Ubt","ウンビトリウム"),
            new Element("124","Ubq","ウンビクアジウム"),
            new Element("125","Ubp","ウンビペンチウム"),
            new Element("126","Ubh","ウンビヘキシウム"),
            new Element("127","Ubs","ウンビセプチウム"),
            new Element("128","Ubo","ウンビオクチウム"),
            new Element("129","Ube","ウンビエンニウム"),
            new Element("130","Utn","ウントリニリウム"),
            new Element("131","Utu","ウントリウニウム"),
            new Element("132","Utb","ウントリビウム"),
            new Element("133","Utt","ウントリトリウム"),
            new Element("134","Utq","ウントリクアジウム"),
            new Element("135","Utp","ウントリペンチウム"),
            new Element("136","Uth","ウントリヘキシウム"),
            new Element("137","Uts","ウントリセプチウム"),
            new Element("138","Uto","ウントリオクチウム")]

const und_f=[new Element("139","Ute","ウントリエンニウム"),
            new Element("140","Uqn","ウンクアドニリウム"),
            new Element("141","Uqu","ウンクアドウニウム"),
            new Element("142","Uqb","ウンクアドビウム"),
            new Element("143","Uqt","ウンクアドトリウム"),
            new Element("144","Uqq","ウンクアドクアジウム"),
            new Element("145","Uqp","ウンクアドペンチウム"),
            new Element("146","Uqh","ウンクアドヘキシウム"),
            new Element("147","Uqs","ウンクアドセプチウム"),
            new Element("148","Uqo","ウンクアドオクチウム"),
            new Element("149","Uqe","ウンクアドエンニウム"),
            new Element("150","Upn","ウンペントニリウム"),
            new Element("151","Upu","ウンペントウニウム"),
            new Element("152","Upb","ウンペントビウム")]

const und_d=[new Element("153","Upt","ウンペントトリウム"),
            new Element("154","Upq","ウンペンクアジウム"),
            new Element("155","Upp","ウンペントペンチウム"),
            new Element("156","Uph","ウンペントヘキシウム"),
            new Element("157","Ups","ウンペントセプチウム"),
            new Element("158","Upo","ウンペントオクチウム"),
            new Element("159","Upe","ウンペントエンニウム"),
            new Element("160","Uhn","ウンヘキスニリウム"),
            new Element("161","Uhu","ウンヘキスウニウム"),
            new Element("Uhb","162","ウンヘキスビウム")]

const und_p=[new Element("163","Uht","ウンヘキストリウム"),
            new Element("164","Uhq","ウンヘキスクアジウム"),
            new Element("165","Uhp","ウンヘキスペンチウム"),
            new Element("165","Uhh","ウンヘキスヘキシウム"),
            new Element("167","Uhs","ウンヘキスセプチウム"),
            new Element("168","Uho","ウンヘキスオクチウム")]

const und_s=[new Element("119","Uue","ウンウンエンニウム"),
            new Element("120","Ubn","ウンビニリウム")]

function loopSleep(_loopLimit,_interval, _mainFunc){
    var loopLimit = _loopLimit;
    var interval = _interval;
    var mainFunc = _mainFunc;
    var i = 0;
    var loopFunc = function () {
        var result = mainFunc(i);
        if (result === false) {
        return;
        }
        i = i + 1;
        if (i < loopLimit) {
        setTimeout(loopFunc, interval);
        }
    }
    loopFunc();
}

function resetGachaResult(){
    document.querySelectorAll(".result-item").forEach(e => e.remove());
}

function openAir(){
    document.querySelector(".air-gacha-screen").classList.toggle("hide");
}

function openElement(){
    document.querySelector(".element-gacha-screen").classList.toggle("hide");
}

function openUnd(){
    document.querySelector(".und-gacha-screen").classList.toggle("hide");
}

function randomFromList(list){
    return list[Math.floor(Math.random()*list.length)]
}

// N - ノーマル(30↑~100↓)
// R - レア(0.1↑~30↓)
// S - スーパーレア(0.0001↑~0.1↓)
// SS - ハイパーレア(0.000001↑~0.0001↓)
// SSS - ハイエストレア(0.000001↓)
// ↓...以下 ↑...それを含めない以上

function dropAir(amount){
    loopSleep(amount, 10, () => {
        var n=Math.random()*100;
        var r=new Element();
        var rank = "";
        if(n<0.000001){r=air[9];rank="SSS"}      // 1/10000000
        else if(n<0.000007){r=air[8];rank="SS"} // 7/10000000
        else if(n<0.00005){r=air[7];rank="SS"}  // 1/2000000
        else if(n<0.000114){r=air[6];rank="S"} // 57/50000000
        else if(n<0.000524){r=air[5];rank="S"} // 131/25000000
        else if(n<0.001818){r=air[4];rank="S"} // 909/50000000
        else if(n<0.041){r=air[3];rank="S"}    // 41/100000
        else if(n<0.934){r=air[2];rank="R"}    // 467/50000
        else if(n<20.9476){r=air[1];rank="R"}  // 52369/250000
        else if(n<100){r=air[0];rank="N"}      // 1/1
        document.querySelector(".result-air").insertAdjacentHTML("afterbegin","<div class='result-item result-air-item'></div>");
        document.querySelector(".result-air-item").textContent="<"+rank+"> "+r.initial+" - "+r.name;
    });
};

function dropElement(amount){
    loopSleep(amount, 10, () => {
        var n=Math.random()*100;
        var r=new Element();
        var rank = "";
        if(n<0.1){r=randomFromList(rare);rank="S"}       // 1/1000
        else if(n<5){r=randomFromList(metal);rank="R"}   // 1/20
        else if(n<100){r=randomFromList(other);rank="N"} // 1/1
        document.querySelector(".result-element").insertAdjacentHTML("afterbegin","<div class='result-item result-element-item'></div>");
        document.querySelector(".result-element-item").textContent="<"+rank+"> "+"No."+r.number+" "+r.initial+" - "+ r.name;
    });
}

function dropUnd(amount){
    loopSleep(amount, 10, () => {
        var n=Math.random()*100;
        var r=new Element();
        var rank="";
        if(n<0.0001){r=randomFromList(und_s);rank="SS"}    // 1/1000000
        else if(n<0.002){r=randomFromList(und_p);rank="S"} // 1/50000
        else if(n<20){r=randomFromList(und_d);rank="R"}    // 1/5
        else if(n<60){r=randomFromList(und_f);rank="N"}    // 3/5
        else if(n<100){r=randomFromList(und_g);rank="N"}   // 1/1
        document.querySelector(".result-und").insertAdjacentHTML("afterbegin","<div class='result-item result-und-item'></div>");
        document.querySelector(".result-und-item").textContent="<"+rank+"> "+"No."+r.number+" "+r.initial+" - "+ r.name;
    });
}

class Element {
    constructor(number, initial, name) {
        this.number = number;
        this.initial = initial;
        this.name = name;
    }
}

const air=[new Element("","N₂","窒素"),new Element("","O₂","酸素"),new Element("","Ar","アルゴン"),new Element("","CO₂","二酸化炭素"),new Element("","Ne","ネオン"),new Element("","He","ヘリウム"),new Element("","Kr","クリプトン"),new Element("","H₂","水素"),new Element("","O₃","オゾン"),new Element("","I₂","ヨウ素")];
const metal=[new Element("3","Li","リチウム"),new Element("4","Be","ベリリウム"),new Element("11","Na","ナトリウム"),new Element("12","Mg","マグネシウム"),new Element("13","Al","アルミニウム"),new Element("19","K","カリウム"),new Element("20","Ca","カルシウム"),new Element("21","Sc","スカンジウム"),new Element("22","Ti","チタン"),new Element("23","V","バリウム"),new Element("24","Cr","クロム"),new Element("25","Mn","マンガン"),new Element("26","Fe","鉄"),new Element("27","Co","コバルト"),new Element("28","Ni","ニッケル"),new Element("29","Cu","銅"),new Element("30","Zn","亜鉛"),new Element("31","Ga","ガリウム"),new Element("37","Rb","ルビジウム"),new Element("38","Sr","ストロンチウム"),new Element("39","Y","イットリウム"),new Element("40","Zr","ジルコニウム"),new Element("41","Nb","ニオブ"),new Element("42","Mo","モリブデン"),new Element("43","Tc","テクネチウム"),new Element("44","Ru","ルテニウム"),new Element("45","Rh","ロジウム"),new Element("46","Pd","パラジウム"),new Element("47","Ag","銀"),new Element("48","Cd","カドミウム"),new Element("49","In","インジウム"),new Element("50","Sn","錫"),new Element("55","Cs","セシウム"),new Element("56","Ba","バリウム"),new Element("72","Hf","ハフニウム"),new Element("73","Ta","タンタル"),new Element("74","W","タングステン"),new Element("75","Re","レニウム"),new Element("76","Os","オスミウム"),new Element("77","Ir","イリジウム"),new Element("78","Pt","プラチナ"),new Element("79","Au","金"),new Element("80","Hg","水銀"),new Element("81","Tl","タリウム"),new Element("82","Pb","鉛"),new Element("83","Bi","ビスマス"),new Element("87","Fr","フランシウム"),new Element("88","Ra","ラジウム"),new Element("104","Rf","ラザホージウム"),new Element("105","Db","ドブニウム"),new Element("106","Sg","シーボーギウム"),new Element("107","Bh","ボーリウム"),new Element("108","Hs","ハッシウム"),new Element("112","Cn","コペルニシウム"),new Element("114","Fl","フレロビウム")];
const rare=[new Element("57","La","ランタン"),new Element("58","Ce","セシウム"),new Element("59","Pr","プラセオジム"),new Element("60","Nd","ネオジム"),new Element("61","Pm","プロメチウム"),new Element("62","Sm","サマリウム"),new Element("63","Eu","ユーロピウム"),new Element("64","Gd","ガドリニウム"),new Element("65","Tb","テルビウム"),new Element("66","Dy","ジスプロシウム"),new Element("67","Ho","ホルミウム"),new Element("68","Er","エルビウム"),new Element("69","Tm","ツリウム"),new Element("70","Yb","イッテルビウム"),new Element("71","Lu","ルテニウム"),new Element("89","Ac","アクチニウム"),new Element("90","Th","トリウム"),new Element("91","Pa","プロトアクチニウム"),new Element("92","U","ウラン"),new Element("93","Np","ネプツニウム"),new Element("94","Pu","プルトニウム"),new Element("95","Am","アメリシウム"),new Element("96","Cm","キュリウム"),new Element("97","Bk","バークリウム"),new Element("98","Cf","カリフォルニウム"),new Element("99","Es","アインスタニウム"),new Element("100","Fm","フェルミウム"),new Element("101","Md","メンデレビウム"),new Element("102","No","ノーベリウム"),new Element("103","Lr","ローレンシウム")];
const element=[new Element("","H",""),new Element("","He",""),new Element("","Li",""),new Element("","Be",""),new Element("","B",""),new Element("","C",""),new Element("","N",""),new Element("","O",""),new Element("","F",""),new Element("","Ne",""),new Element("","Na",""),new Element("","Mg",""),new Element("","Al","アルミニウム",""),new Element("","Si",""),new Element("","P",""),new Element("","S",""),new Element("","Cl",""),new Element("","Ar",""),new Element("","K","カリウム",""),new Element("","Ca","カルシウム",""),new Element("","Sc","スカンジウム",""),new Element("","Ti","チタン",""),new Element("","V","バリウム",""),new Element("","Cr","クロム",""),new Element("","Mn",""),new Element("","Fe",""),new Element("","Co",""),new Element("","Ni",""),new Element("","Cu",""),new Element("","Zn",""),new Element("","Ga",""),new Element("","Ge",""),new Element("","As",""),new Element("","Se",""),new Element("","Br",""),new Element("","Kr",""),new Element("","Rb",""),new Element("","Sr",""),new Element("","Y",""),new Element("","Zr",""),new Element("41","Nb","ニオブ"),new Element("42","Mo","モリブデン"),new Element("","Tc",""),new Element("","Ru",""),new Element("","Rh",""),new Element("","Pd",""),new Element("","Ag",""),new Element("","Cd",""),new Element("","In",""),new Element("","Sn",""),new Element("","Sb",""),new Element("","Te",""),new Element("","I",""),new Element("","Xe",""),new Element("","Cs",""),new Element("","Ba",""),new Element("","Hf",""),new Element("","Ta",""),new Element("","W",""),new Element("","Re",""),new Element("","Os",""),new Element("","Ir",""),new Element("","Pt",""),new Element("","Au",""),new Element("","Hg",""),new Element("","Tl",""),new Element("","Pb",""),new Element("","Bi",""),new Element("","Po",""),new Element("","At",""),new Element("","Rn",""),new Element("87","Fr","フランシウム"),new Element("","Ra",""),new Element("","Rf",""),new Element("","Db",""),new Element("","Sg",""),new Element("","Bh",""),new Element("","Hs",""),new Element("","Mt",""),new Element("","Ds",""),new Element("","Rg",""),new Element("","Cn",""),new Element("","Nh",""),new Element("","Fl",""),new Element("","Mc",""),new Element("","Lv",""),new Element("","Ts",""),new Element("","Og",""),new Element("","La",""),new Element("","Ce",""),new Element("","Pr",""),new Element("","Nd",""),new Element("","Pm",""),new Element("","Sm",""),new Element("","Eu",""),new Element("","Gd",""),new Element("","Tb",""),new Element("","Dy",""),new Element("","Ho",""),new Element("","Er",""),new Element("","Tm",""),new Element("","Yb",""),new Element("","Lu",""),new Element("","Ac",""),new Element("","Th",""),new Element("","Pa",""),new Element("","U",""),new Element("","Np",""),new Element("","Pu",""),new Element("","Am",""),new Element("","Cm",""),new Element("","Bk",""),new Element("","Cf",""),new Element("","Es",""),new Element("","Fm",""),new Element("","Md",""),new Element("","No",""),new Element("","Lr","")];
const ranking="material";

function loopSleep(_loopLimit,_interval, _mainFunc){
    var loopLimit = _loopLimit;
    var interval = _interval;
    var mainFunc = _mainFunc;
    var i = 0;
    var loopFunc = function () {
        var result = mainFunc(i);
        if (result === false) {
        // break機能
        return;
        }
        i = i + 1;
        if (i < loopLimit) {
        setTimeout(loopFunc, interval);
        }
    }
    loopFunc();
}

function openAir(){
    document.querySelector(".air-gacha-screen").classList.toggle("hide");
}

function openElement(){
    document.querySelector(".element-gacha-screen").classList.toggle("hide");
}

function openMetal(){
    document.querySelector(".metal-gacha-screen").classList.toggle("hide");
}

function openRare(){
    document.querySelector(".rare-gacha-screen").classList.toggle("hide");
}

function openRanking(){
    document.querySelector(".ranking-screen").classList.toggle("hide");
}

function setRanking(mode){
    ranking=mode;
}

function getRanking(){
    return ranking
}

function dropAir(amount){
    loopSleep(amount, 10, () => {
        var n=Math.random()*100;
        var r=new Element();
        if(n<0.000001){r=air[9];}
        else if(n<0.000007){r=air[8];}
        else if(n<0.00005){r=air[7];}
        else if(n<0.000114){r=air[6];}
        else if(n<0.000524){r=air[5];}
        else if(n<0.001818){r=air[4];}
        else if(n<0.041){r=air[3];}
        else if(n<0.934){r=air[2];}
        else if(n<20.9476){r=air[1];}
        else if(n<100){r=air[0];}
        document.querySelector(".result-air").insertAdjacentHTML("afterbegin", "<div class='result-item result-air-item'></div>");
        document.querySelector(".result-air-item").textContent = r.initial + " - " + r.name;
    });
};

function dropMetal(amount){
    loopSleep(amount, 10, () => {
        var r="";
        r=metal[Math.floor(Math.random()*metal.length)];
        document.querySelector(".result-metal").insertAdjacentHTML("afterbegin", "<div class='result-item result-metal-item'></div>");
        document.querySelector(".result-metal-item").textContent = "No." + r.number + " " + r.initial + " - " + r.name;
    });
};

function dropElement(amount){
    loopSleep(amount, 10, () => {
        var r="";
        r=element[Math.floor(Math.random()*element.length)];
        document.querySelector(".result-element").insertAdjacentHTML("afterbegin", "<div class='result-item result-element-item'></div>");
        document.querySelector(".result-element-item").textContent = "No." + r.number + " " + r.initial + " - " + r.name;
    });
};

function dropRare(amount){
    loopSleep(amount, 10, () => {
        var r="";
        r=rare[Math.floor(Math.random()*rare.length)];
        document.querySelector(".result-rare").insertAdjacentHTML("afterbegin", "<div class='result-item result-rare-item'></div>");
        document.querySelector(".result-rare-item").textContent = "No." + r.number + " " + r.initial + " - " + r.name;
    });
};

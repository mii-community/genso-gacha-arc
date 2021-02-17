class Element {
    constructor(rank, number, initial, name) {
        this.rank = rank;
        this.number = number;
        this.initial = initial;
        this.name = name;
    }
}

const   air=[new Element("N","","N₂","窒素"),new Element("R","","O₂","酸素"),new Element("R","","Ar","アルゴン"),new Element("SR","","CO₂","二酸化炭素"),new Element("SR","","Ne","ネオン"),new Element("SSR","","He","ヘリウム"),new Element("SSR","","Kr","クリプトン"),new Element("SSR","","H₂","水素"),new Element("SSR","","O₃","オゾン"),new Element("HR","","I₂","ヨウ素")];
const metal=[new Element("R","3","Li","リチウム"),new Element("R","4","Be","ベリリウム"),new Element("R","11","Na","ナトリウム"),new Element("R","12","Mg","マグネシウム"),new Element("R","13","Al","アルミニウム"),new Element("R","19","K","カリウム"),new Element("R","20","Ca","カルシウム"),new Element("R","21","Sc","スカンジウム"),new Element("R","22","Ti","チタン"),new Element("R","23","V","バナジウム"),new Element("R","24","Cr","クロム"),new Element("R","25","Mn","マンガン"),new Element("R","26","Fe","鉄"),new Element("R","27","Co","コバルト"),new Element("R","28","Ni","ニッケル"),new Element("R","29","Cu","銅"),new Element("R","30","Zn","亜鉛"),new Element("R","31","Ga","ガリウム"),new Element("R","37","Rb","ルビジウム"),new Element("R","38","Sr","ストロンチウム"),new Element("R","39","Y","イットリウム"),new Element("R","40","Zr","ジルコニウム"),new Element("R","41","Nb","ニオブ"),new Element("R","42","Mo","モリブデン"),new Element("R","43","Tc","テクネチウム"),new Element("R","44","Ru","ルテニウム"),new Element("R","45","Rh","ロジウム"),new Element("R","46","Pd","パラジウム"),new Element("R","47","Ag","銀"),new Element("R","48","Cd","カドミウム"),new Element("R","49","In","インジウム"),new Element("R","50","Sn","錫"),new Element("R","55","Cs","セシウム"),new Element("R","56","Ba","バリウム"),new Element("R","72","Hf","ハフニウム"),new Element("R","73","Ta","タンタル"),new Element("R","74","W","タングステン"),new Element("R","75","Re","レニウム"),new Element("R","76","Os","オスミウム"),new Element("R","77","Ir","イリジウム"),new Element("R","78","Pt","プラチナ"),new Element("R","79","Au","金"),new Element("R","80","Hg","水銀"),new Element("R","81","Tl","タリウム"),new Element("R","82","Pb","鉛"),new Element("R","83","Bi","ビスマス"),new Element("R","87","Fr","フランシウム"),new Element("R","88","Ra","ラジウム"),new Element("R","104","Rf","ラザホージウム"),new Element("R","105","Db","ドブニウム"),new Element("R","106","Sg","シーボーギウム"),new Element("R","107","Bh","ボーリウム"),new Element("R","108","Hs","ハッシウム"),new Element("R","112","Cn","コペルニシウム"),new Element("R","114","Fl","フレロビウム")];
const  rare=[new Element("SR","57","La","ランタン"),new Element("SR","58","Ce","セシウム"),new Element("SR","59","Pr","プラセオジム"),new Element("SR","60","Nd","ネオジム"),new Element("SR","61","Pm","プロメチウム"),new Element("SR","62","Sm","サマリウム"),new Element("SR","63","Eu","ユーロピウム"),new Element("SR","64","Gd","ガドリニウム"),new Element("SR","65","Tb","テルビウム"),new Element("SR","66","Dy","ジスプロシウム"),new Element("SR","67","Ho","ホルミウム"),new Element("SR","68","Er","エルビウム"),new Element("SR","69","Tm","ツリウム"),new Element("SR","70","Yb","イッテルビウム"),new Element("SR","71","Lu","ルテニウム"),new Element("SR","89","Ac","アクチニウム"),new Element("SR","90","Th","トリウム"),new Element("SR","91","Pa","プロトアクチニウム"),new Element("SR","92","U","ウラン"),new Element("SR","93","Np","ネプツニウム"),new Element("SR","94","Pu","プルトニウム"),new Element("SR","95","Am","アメリシウム"),new Element("SR","96","Cm","キュリウム"),new Element("SR","97","Bk","バークリウム"),new Element("SR","98","Cf","カリフォルニウム"),new Element("SR","99","Es","アインスタニウム"),new Element("SR","100","Fm","フェルミウム"),new Element("SR","101","Md","メンデレビウム"),new Element("SR","102","No","ノーベリウム"),new Element("SR","103","Lr","ローレンシウム")];
const other=[new Element("N","1","H","水素"),new Element("N","2","He","ヘリウム"),new Element("N","5","B","ホウ素"),new Element("N","6","C","炭素"),new Element("N","7","N","窒素"),new Element("N","8","O","酸素"),new Element("N","9","F","フッ素"),new Element("N","10","Ne","ネオン"),new Element("N","14","Si","ケイ素"),new Element("N","15","P","リン"),new Element("N","16","S","硫黄"),new Element("N","17","Cl","塩素"),new Element("N","18","Ar","アルゴン"),new Element("N","32","Ge","ゲルマニウム"),new Element("N","33","As","ヒ素"),new Element("N","34","Se","セレン"),new Element("N","35","Br","臭素"),new Element("N","36","Kr","クリプトン"),new Element("N","51","Sb","アンチモン"),new Element("N","52","Te","テルル"),new Element("N","53","I","ヨウ素"),new Element("N","54","Xe","キセノン"),new Element("N","84","Po","ポロニウム"),new Element("N","85","At","アスタチン"),new Element("N","86","Rn","ラドン"),new Element("N","109","Mt","マイトネリウム"),new Element("N","110","Ds","ジスプロシウム"),new Element("N","111","Rg","レントゲニウム"),new Element("N","113","Nh","ニホニウム"),new Element("N","115","Mc","モスコビウム"),new Element("N","116","Lv","リバモリウム"),new Element("N","117","Ts","テネシン"),new Element("N","118","Og","オガネソン")];
const und_g=[]
const und_f=[]
const und_d=[]
const und_p=[]
const und_s=[]

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

function openUnd(){
    document.querySelector(".und-gacha-screen").classList.toggle("hide");
}

function randomFromList(list){
    return list[Math.floor(Math.random()*list.length)]
}

// N - ノーマル(30%↑~100%↓)
// R - レア(0.1%↑~30%↓)
// SR - スーパーレア(0.0001%↑~0.1%↓)
// SSR - ハイパーレア(0.000001%↑~0.0001%↓)
// HR - ハイエストレア(0.000001%↓)
// ↓...以下 ↑...それを含めない以上

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
        document.querySelector(".result-air-item").textContent =  "<" + r.rank + "> " + r.initial + " - " + r.name;
    });
};

function dropElement(amount){
    loopSleep(amount, 10, () => {
        var n=Math.random()*100;
        var r=new Element();
        if(n<0.01){r=randomFromList(rare);}
        else if(n<5){r=randomFromList(metal);}
        else if(n<100){r=randomFromList(other);}
        document.querySelector(".result-element").insertAdjacentHTML("afterbegin", "<div class='result-item result-element-item'></div>");
        document.querySelector(".result-element-item").textContent = "<" + r.rank + "> " + "No." + r.number + " " + r.initial + " - " + r.name;
    });
}

function dropUnd(amount){
    loopSleep(amount, 10, () => {
        var n=Math.random()*100;
        var r=new Element();
        if(n<0.01){r=randomFromList(und_s);}
        else if(n<0.02){r=randomFromList(und_p);}
        else if(n<40){r=randomFromList(und_d);}
        else if(n<60){r=randomFromList(und_f);}
        else if(n<100){r=randomFromList(und_g);}
        document.querySelector(".result-und").insertAdjacentHTML("afterbegin", "<div class='result-item result-und-item'></div>");
        document.querySelector(".result-und-item").textContent = "<" + r.rank + "> " + "No." + r.number + " " + r.initial + " - " + r.name;
    });
}

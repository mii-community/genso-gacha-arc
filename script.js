const air=["N₂","O₂","Ar","CO₂","Ne","He","Kr","H₂","O₃","I₂"];
const metal=["Li","Be","Na","Mg","Al","K","Ca","Sc","Ti","V","Cr","Mn","Fe","Co","Ni","Cu","Zn","Ga","Rb","Sr","Y","Zr","Nb","Mo","Tc","Ru","Rh","Pd","Ag","Cd","In","Sn","Cs","Ba","Hf","Ta","W","Re","Os","Ir","Pt","Au","Hg","Tl","Pb","Bi","Fr","Ra","Rf","Db","Sg","Bh","Hs","Cn","Fl"];
const rare=["La","Ce","Pr","Nd","Pm","Sm","Eu","Gd","Tb","Dy","Ho","Er","Tm","Yb","Lu","Ac","Th","Pa","U","Np","Pu","Am","Cm","Bk","Cf","Es","Fm","Md","No","Lr"];
const element=["H","He","Li","Be","B","C","N","O","F","Ne","Na","Mg","Al","Si","P","S","Cl","Ar","K","Ca","Sc","Ti","V","Cr","Mn","Fe","Co","Ni","Cu","Zn","Ga","Ge","As","Se","Br","Kr","Rb","Sr","Y","Zr","Nb","Mo","Tc","Ru","Rh","Pd","Ag","Cd","In","Sn","Sb","Te","I","Xe","Cs","Ba","Hf","Ta","W","Re","Os","Ir","Pt","Au","Hg","Tl","Pb","Bi","Po","At","Rn","Fr","Ra","Rf","Db","Sg","Bh","Hs","Mt","Ds","Rg","Cn","Nh","Fl","Mc","Lv","Ts","Og","La","Ce","Pr","Nd","Pm","Sm","Eu","Gd","Tb","Dy","Ho","Er","Tm","Yb","Lu","Ac","Th","Pa","U","Np","Pu","Am","Cm","Bk","Cf","Es","Fm","Md","No","Lr"];

function openResult(amount){
    document.querySelector(".result-screen")
}

function dropAir(amount){
    var result=[];
    for(var i=0;i<amount;i++){
        var n=Math.random()*100;
        if(n<0.000001){result.push(air[9]);}
        else if(n<0.000007){result.push(air[8]);}
        else if(n<0.00005){result.push(air[7]);}
        else if(n<0.000114){result.push(air[6]);}
        else if(n<0.000524){result.push(air[5]);}
        else if(n<0.001818){result.push(air[4]);}
        else if(n<0.041){result.push(air[3]);}
        else if(n<0.934){result.push(air[2]);}
        else if(n<20.9476){result.push(air[1]);}
        else if(n<100){result.push(air[0]);}}
    return result;
};

function dropMetal(amount){
    var result=[];
    for(var i=0;i<amount;i++){
        result.push(metal[Math.floor(Math.random()*metal.length)]);};
    return result;
};

function dropElement(amount){
    var result=[];
    for(var i=0;i<amount;i++){
        result.push(element[Math.floor(Math.random()*element.length)]);};
    return result;
};

function dropRare(amount){
    var result=[];
    for(var i=0;i<amount;i++){
        result.push(rare[Math.floor(Math.random()*rare.length)]);};
    return result;
};

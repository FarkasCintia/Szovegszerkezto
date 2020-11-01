//Elemek kigyűjtése

let buttonH1 = document.getElementById('buttonH1');
let buttonH2 = document.getElementById('buttonH2');
let buttonH3 = document.getElementById('buttonH3');
let buttonH4 = document.getElementById('buttonH4');
let buttonH5 = document.getElementById('buttonH5');
let buttonH6 = document.getElementById('buttonH6');
let buttonItalic = document.getElementById('buttonItalic');
let buttonUnderline = document.getElementById('buttonUnderline');
let buttonStrikethrough = document.getElementById('buttonStrikethrough');
let buttonalsóindex = document.getElementById('buttonalsóindex');
let buttonfelsőindex = document.getElementById('buttonfelsőindex');
let buttonközépreigazítás = document.getElementById('buttonközépreigazítás');
let buttonjobraigazít = document.getElementById('buttonjobraigazít');
let buttonbalraigazít = document.getElementById('buttonbalraigazít');
let buttonP = document.getElementById('buttonP');
let buttonStrong = document.getElementById('buttonStrong');
let input = document.getElementById('input');
let output = document.getElementById('output');

RenderOutput();

//Események és eseménykezelők
buttonH1.addEventListener('click', function(){onclickTag("h1")});
buttonH2.addEventListener('click', function(){onclickTag("h2")});
buttonH3.addEventListener('click', function(){onclickTag("h3")});
buttonH4.addEventListener('click', function(){onclickTag("h4")});
buttonH5.addEventListener('click', function(){onclickTag("h5")});
buttonH6.addEventListener('click', function(){onclickTag("h6")});
buttonItalic.addEventListener('click', function(){onclickTag("i")});
buttonUnderline.addEventListener('click', function(){onclickTag("u")});
buttonStrikethrough.addEventListener('click', function(){onclickTag("strike")});
buttonalsóindex.addEventListener('click', function(){onclickTag("sub")});
buttonfelsőindex.addEventListener('click', function(){onclickTag("sup")});
buttonközépreigazítás.addEventListener('click', function(){onclickTag("center")});
buttonjobraigazít.addEventListener('click', function(){onClickStyle("div", "text-align: right")});
buttonbalraigazít.addEventListener('click', function(){onClickStyle("div", "text-align: left")});
buttonP.addEventListener('click', OnClickP);
buttonStrong.addEventListener('click', OnClickStrong);
red.addEventListener('click', function(){onClickStyle("span", "color: red; font-weight: bold")});
input.addEventListener('keyup', RenderOutput);


function GetWrappedSelection(text, start, end, statTag, endTag) {
    let left = text.slice(0, start);
    let middle = text.slice(start, end);
    let right = text.slice(end);
    let newText = `${left}${statTag}${middle}${endTag}${right}`;
    return newText;
}

function onclickTag(tag) {
    Changer(
        "<" + tag + ">",
        "</" + tag +  ">"
    );
}

function OnClickP() {
    let statTag = "<p>";
    let endTag = "</p>";
    Changer(statTag, endTag);
}

function OnClickStrong() {
    let statTag = "<strong>";
    let endTag = "</strong>";
    Changer(statTag, endTag);
}

function onClickStyle(tag, style) {
    let statTag = "<" + tag + " style='" + style + "'>";
    const endTag = "</" + tag +  ">"
    Changer(statTag, endTag);
}

function Changer(statTag, endTag) {
    let text = input.value;
    let start = input.selectionStart;
    let end = input.selectionEnd;
    input.value = GetWrappedSelection(text, start, end, statTag, endTag);
    RenderOutput();
}

function RenderOutput() {
    let html = input.value;
    output.innerHTML = html;
}
var buffs = document.getElementsByClassName("buffs");
var scoreDisplay = document.getElementById("score");
var resetButton = document.getElementById("reset");
var firstSpell = document.getElementsByClassName("firstSpell");
var secondSpell = document.getElementsByClassName("secondSpell");
var body = document.querySelector("body");
var orbArray = ["nospell", "nospell", "nospell"];
var spellImg = document.getElementById("spellImg");

// game vars
var scorePoints = 0;
var currentSpell = -1;
var previousSpell = -1;
var spellArray = [
    "q,q,q", "e,q,q", "q,q,w",
    "w,w,w", "q,w,w", "e,w,w", 
    "e,e,e", "e,e,w", "e,e,q",
    "e,q,w"
];

init();

// keydown event on body
body.addEventListener("keydown", function (e) {

    if (e.key === "q" || e.key === "w" || e.key === "e") {
        orbArray.shift();
        orbArray.push(e.key);
        $("#orb1").fadeIn(3000);
        document.getElementById("orb1").src = `resources/${orbArray[0]}.png`;
        document.getElementById("orb2").src = `resources/${orbArray[1]}.png`;
        document.getElementById("orb3").src = `resources/${orbArray[2]}.png`;
    } else if (e.key === "r") {
        invoke(orbArray);
    } else if (e.key === "d") {
        if(firstSpell[0].getElementsByTagName("img")[0].src.endsWith("nospell.png")){
            // if no invoke, fail and reset
            init();
        }else if(firstSpell[0].getElementsByTagName("img")[0].src === spellImg.src){
            // if correct, score
            scorePoints++;
            scoreDisplay.textContent = scorePoints;
            giveNewSpell();
            currentSpell++;
        } else {
            // wrong spell fail and reset
            init();
        }
    } else if (e.key === "f") {
        if(secondSpell[0].getElementsByTagName("img")[0].src.endsWith("nospell.png")){
            // if no invoke, fail and reset
            init();
        }else if(secondSpell[0].getElementsByTagName("img")[0].src === spellImg.src){
            // if correct, score
            scorePoints++;
            scoreDisplay.textContent = scorePoints;
            giveNewSpell();
            currentSpell++;
        } else {
            // wrong spell fail and reset
            init();
        }
    };
});

function giveNewSpell() {

    shuffle();

    switch (currentSpell) {
        case 0:
            spellImg.src = "resources/coldsnap.png";
            break;
        case 1:
            spellImg.src = "resources/icewall.png";
            break;
        case 2:
            spellImg.src = "resources/ghostwalk.png";
            break;
        case 3:
            spellImg.src = "resources/emp.png";
            break;
        case 4:
            spellImg.src = "resources/tornado.png";
            break;
        case 5:
            spellImg.src = "resources/alacrity.png";
            break;
        case 6:
            spellImg.src = "resources/sunstrike.png";
            break;
        case 7:
            spellImg.src = "resources/meteor.png";
            break;
        case 8:
            spellImg.src = "resources/spirit.png";
            break;
        case 9:
            spellImg.src = "resources/deafblast.png";
            break;
        default:
            break;
    };

    previousSpell = currentSpell;
};

function init() {
    firstSpell[0].getElementsByTagName("img")[0].src = "resources/nospell.png";
    secondSpell[0].getElementsByTagName("img")[0].src = "resources/nospell.png";
    scorePoints = 0;
    scoreDisplay.textContent = scorePoints;
    orbArray = ["nospell", "nospell", "nospell"];
    document.getElementById("orb1").src = "resources/nospell.png";
    document.getElementById("orb2").src = "resources/nospell.png";
    document.getElementById("orb3").src = "resources/nospell.png";
    giveNewSpell();
};

resetButton.addEventListener("click", function() {
    init();
});

function shuffle() {
    do {
        var spell = Math.floor(Math.random()*10);
        currentSpell = spell;
    } while(currentSpell === previousSpell);
};

function spellCompare(spell) {
    if (firstSpell[0].getElementsByTagName("img")[0].src.endsWith(`${spell}.png`)) {
        // do nothing
    } else {
        // set the second spell (f) to the first spell
        secondSpell[0].getElementsByTagName("img")[0].src = firstSpell[0].getElementsByTagName("img")[0].src;
        // set the first spell (d) to the new spell
        firstSpell[0].getElementsByTagName("img")[0].src = `resources/${spell}.png`;
    };
};

function invoke(queue) {
    switch (queue.sort().toString()) {
        case "q,q,q":
            spellCompare("coldsnap");
            break;
        case "e,q,q":
            spellCompare("icewall");
            break;
        case "q,q,w":
            spellCompare("ghostwalk");
            break;
        case "w,w,w":
            spellCompare("emp");
            break;
        case "q,w,w":
            spellCompare("tornado");
            break;
        case "e,w,w":
            spellCompare("alacrity");
            break;
        case "e,e,e":
            spellCompare("sunstrike");
            break;
        case "e,e,w":
            spellCompare("meteor");
            break;
        case "e,e,q":
            spellCompare("spirit");
            break;
        case "e,q,w":
            spellCompare("deafblast");
            break;
        default:
            break;
    }
};
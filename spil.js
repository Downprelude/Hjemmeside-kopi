let myRand;
let points = 0;
let life = 3;
let speed;

const god1 = document.querySelector("#buttplug_container");
const god2 = document.querySelector("#glasdildo_container");
const god3 = document.querySelector("#satisfyer_container");
const god4 = document.querySelector("#toarmetdildo_container");

const ond1 = document.querySelector("#kaktusbuttplug_container");
const ond2 = document.querySelector("#kaktusdildo_container");
const ond3 = document.querySelector("#satisfyerkaktus_container");
const ond4 = document.querySelector("#toarmetdildokaktus_container");

window.addEventListener("load", sidenVises);

function sidenVises() {
  console.log("sidenVises");
  window.addEventListener("resize", windowResize);
  windowResize();
  //Skjul andre skærme
  document.querySelector("#game_over").classList.add("hide");
  document.querySelector("#level_complete").classList.add("hide");
  document.querySelector("#info_screen").classList.add("hide");

  //Vis start skærm
  document.querySelector("#start").classList.remove("hide");

  //Klik på start_knap
  document.querySelector("#start_knap").addEventListener("click", info_screen);
}

function windowResize() {
  console.log("windowResize");
  let widthScreen = document.querySelector("#screen").clientWidth;
  let myFontInProcent1 = 5;
  let myFont1 = (widthScreen / 100) * myFontInProcent1;
  document.querySelector("#score_board").style.fontSize = myFont1 + "px";
  let myFontInProcent2 = 4;
  let myFont2 = (widthScreen / 100) * myFontInProcent2;
  document.querySelector("#level_complete").style.fontSize = myFont2 + "px";
  document.querySelector("#game_over").style.fontSize = myFont2 + "px";
  document.querySelector("#start").style.fontSize = myFont2 + "px";
}

function info_screen() {
  console.log("info_screen");

  //Skjul andre skærme
  document.querySelector("#game_over").classList.add("hide");
  document.querySelector("#level_complete").classList.add("hide");
  document.querySelector("#start").classList.add("hide");

  //Vis start skærm
  document.querySelector("#info_screen").classList.remove("hide");

  //Klik på start_knap
  document.querySelector("#start_knap2").addEventListener("click", startGame);
}

function startGame() {
  console.log("startGame");

  //musik starter
  document.querySelector("#sounds").currentTime = 30;
  document.querySelector("#spil_sang").play();

  //Skjul andre skærme
  document.querySelector("#game_over").classList.add("hide");
  document.querySelector("#level_complete").classList.add("hide");
  document.querySelector("#info_screen").classList.add("hide");

  document.querySelector("#start").classList.add("hide");

  //nustil point og udskriv
  points = 0;
  document.querySelector("#score").innerHTML = points;
  document.querySelector("#score").innerHTML = points;

  //reset liv til 3
  document.querySelector("#liv1").classList.remove("hide");
  document.querySelector("#liv2").classList.remove("hide");
  document.querySelector("#liv3").classList.remove("hide");

  life = 3;

  //reset speed
  speed = 1;

  document.querySelector("#fyld").classList.add("timer");
  document
    .querySelector("#time_board")
    .addEventListener("animationend", stopSpillet);

  //Jeg giver min container en position, delay og en speed
  god1.classList.add("pos1", "delay1", "speed1");
  god2.classList.add("pos3", "delay2", "speed2");
  god3.classList.add("pos5", "delay3", "speed3");
  god4.classList.add("pos7", "delay4", "speed4");

  ond1.classList.add("pos2", "delay1", "speed1");
  ond2.classList.add("pos4", "delay2", "speed2");
  ond3.classList.add("pos6", "delay3", "speed3");
  ond4.classList.add("pos8", "delay4", "speed4");

  //Jeg starter "falling"-animationer på alle elementer
  god1.classList.add("falling");
  god2.classList.add("falling");
  god3.classList.add("falling");
  god4.classList.add("falling");

  ond1.classList.add("falling");
  ond2.classList.add("falling");
  ond3.classList.add("falling");
  ond4.classList.add("falling");

  //Lyt efter falling-animationer er færdig
  god1.addEventListener("animationiteration", goodReset);
  god2.addEventListener("animationiteration", goodReset);
  god3.addEventListener("animationiteration", goodReset);
  god4.addEventListener("animationiteration", goodReset);

  ond1.addEventListener("animationiteration", badReset);
  ond2.addEventListener("animationiteration", badReset);
  ond3.addEventListener("animationiteration", badReset);
  ond4.addEventListener("animationiteration", badReset);

  //Lyt efter "mousedown" på alle elementer
  god1.addEventListener("mousedown", clickGood);
  god2.addEventListener("mousedown", clickGood);
  god3.addEventListener("mousedown", clickGood);
  god4.addEventListener("mousedown", clickGood);

  ond1.addEventListener("mousedown", clickBad);
  ond2.addEventListener("mousedown", clickBad);
  ond3.addEventListener("mousedown", clickBad);
  ond4.addEventListener("mousedown", clickBad);
}

function clickGood() {
  console.log("clickGood");

  points++;
  document.querySelector("#score").textContent = points;

  //Jeg rydder op, så man ikke kan kilkke på den samme flere gange
  document;
  this.removeEventListener("mousedown", clickGood);

  //frys (pause), flyv-animationen
  this.classList.add("frys");

  //Start drej-animationer på sprite element (firstElementChild er sprite elementet)
  this.firstElementChild.classList.add("drejforsvind");

  //Lyt efter flyv-animationer er færdig
  this.addEventListener("animationend", goodReset);

  //lyde:

  if (Math.random() < 0.5) {
    document.querySelector("#sounds").currentTime = 0;
    document.querySelector("#dyb_moan").play();
  } else {
    document.querySelector("#sounds").currentTime = 0;
    document.querySelector("#lys_moan").play();
  }

  if (Math.random() < 0.5) {
    document.querySelector("#sounds").currentTime = 0;
    document.querySelector("#okay_moan").play();
  } else {
    document.querySelector("#sounds").currentTime = 0;
    document.querySelector("#masc_moan").play();
  }
}

function goodReset() {
  console.log("goodReset");
  //ryd op, fjern alt er på container og sprite

  this.classList = "";
  this.firstElementChild.classList = "";

  //For at kunne genstarte "falling" animationen, da vi fjener og tilføjer den i samme function
  this.offsetLeft;

  //sæt variablen lig med et tilfældigt tal mellem 1 og 4

  myRand = Math.floor(Math.random() * 9) + 1;
  this.classList.add("pos" + myRand);
  myRand = Math.floor(Math.random() * 6) + 1;
  this.classList.add("delay" + myRand);
  this.classList.add("speed" + myRand);

  //Start flyv-animationer på element
  this.classList.add("falling");

  //Lyt efter klik på element
  this.addEventListener("mousedown", clickGood);
}

function clickBad() {
  console.log("clickBad");
  //ryd op, så man ikke kan kilkke på den samme flere gange
  document.querySelector("#liv" + life).classList.add("hide");

  life--;

  points--;
  document.querySelector("#score").textContent = points;
  this.removeEventListener("mousedown", clickBad);

  //frys (pause), falling-animationen
  this.classList.add("frys");

  //Start forsvind-animationer på sprite element (firstElementChild er sprite elementet)
  this.firstElementChild.classList.add("drejforsvind");

  //Lyt efter flyv-animationer er færdig
  this.addEventListener("animationend", badReset);

  document.querySelector("#sounds").currentTime = 0;
  document.querySelector("#av_moan").play();

  if (life <= 0) {
    console.log("du har ingen liv");
    stopSpillet();
  }
}

function badReset() {
  console.log("badReset");
  //ryd op, fjern alt er på container og sprite
  this.classList = "";
  this.firstElementChild.classList = "";

  //For at kunne genstarte flyv animationen, da vi fjener og tilføjer den i samme function
  this.offsetLeft;

  //sæt variablen lig med et tilfældigt tal mellem 1 og 4
  myRand = Math.floor(Math.random() * 4) + 1;

  //Giv en position til container
  this.classList.add("pos" + myRand);

  //sæt variablen lig med et tilfældigt tal mellem 1 og 3
  myRand = Math.floor(Math.random() * 3) + 1;

  //giv container en ny tilfældig speed
  this.classList.add("speed" + myRand);

  //Start flyv-animationer på element
  this.classList.add("falling");

  //Lyt efter klik på element
  this.addEventListener("mousedown", clickBad);
}

function stopSpillet() {
  console.log(stopSpillet);

  this.classList = "";
  document.querySelector("#buttplug_sprite").classList = ""; //fjern alle event listener på alle containere
  this.removeEventListener("animationiteration", goodReset);
  this.removeEventListener("animationend", goodReset);
  this.removeEventListener("mousedown", clickGood);

  //genstart timer:
  document.querySelector("#fyld").classList.remove("timer");
  document
    .querySelector("#fyld")
    .removeEventListener("animationend", stopSpillet);

  if (life <= 0) {
    gameOver();
  } else if (points >= 10) {
    levelComplete();
  } else {
    gameOver();
  }
}
function gameOver() {
  console.log("Du har tabt!");

  //Vis gameover skærm
  document.querySelector("#game_over").classList.remove("hide");

  //udskriv point
  document.querySelector("#game_over_points").textContent =
    "You only got " + points + " moans!";

  //Klik på genstart1
  document.querySelector("#genstart_1").addEventListener("click", startGame);
}
//Vis gameover skærm

//Klik på genstart1

function levelComplete() {
  console.log("Du vandt!");

  document.querySelector("#level_complete").classList.remove("hide");

  //Vis levelComplete skærm

  //udskriv point
  document.querySelector("#level_complete_points").textContent = +points;

  //Klik på genstart2
  document.querySelector("#genstart_2").addEventListener("click", startGame);
}

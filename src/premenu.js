function nextClick() {
    var next = document.getElementById("nextClick");
    var cont = document.getElementById("contClick");
    var begin = document.getElementById("beginClick");
    var three = document.getElementById("InstructMeThree");
    var one = document.getElementById("InstructMeOne");
    var two = document.getElementById("InstructMeTwo");

    one.style.display = "none";
    three.style.display = "none";
    two.style.display = "flex";

    next.style.display = "none";
    begin.style.display = "none";
    cont.style.display = "flex";

}

function contClick() {
    var next = document.getElementById("nextClick");
    var cont = document.getElementById("contClick");
    var begin = document.getElementById("beginClick");
    var three = document.getElementById("InstructMeThree");
    var one = document.getElementById("InstructMeOne");
    var two = document.getElementById("InstructMeTwo");

    one.style.display = "none";
    two.style.display = "none";
    three.style.display = "flex";

    next.style.display = "none";
    cont.style.display = "none";
    begin.style.display = "flex";

}

var caller;
var ender;
// //review later
function beginClick() {
    // var put = document.getElementById("username").value;
    var put = document.myForm.username.value;
    if(put.length <= 1 ) {
        alert("Please fill in a name so I know who are. Thank you!")
        return;
    }

    sessionStorage.setItem("username", put);
    document.getElementById("indicator").value = "T1";
    document.getElementById("text-fill").disabled = true;
    document.getElementById("text").disabled = true;
    document.getElementById("loadSync").style.display = "none";
    document.getElementById("instructMe").style.display = "none";
    document.getElementById("container").style.display = "flex";

    caller = setTimeout(loadSession, 500);
    ender = setInterval(clear, 5000);
}

// function effect(){
//     // var doMe = document.3("doMe");
//     // // doMe.addEventListener("click", saveContent, false);
//     // var user = document.getElementById("username").value;
//     // sessionStorage.setItem("username", user);
// }

// function saveContent(){
//     var user = document.getElementById("username").value;
//     sessionStorage.setItem(username, user);
// }

function loadSession() {    

    let userName = sessionStorage.getItem("username");
    const authorName = document.getElementById('authorName');

    authorName.innerText = userName;
    
    document.getElementById('popupContain').style.display = 'flex';

    // window.stop();

}

function clear() {
    // clearInterval(caller);

    document.getElementById('popupContain').style.display = 'none';
}
// function onSession(){
//     // var user = document.getElementById("username").value;
//     let pick = sessionStorage.getItem("username");
//     alert(pick);

// }


function loadingSyncOne() {
    var controlOne = document.getElementById("controlOne");
    var controlTwo = document.getElementById("controlTwo");
    var indicate = document.getElementById("indicator");
    var instructionOne = document.getElementById("instructionBoxOne");
    var instructionTwo = document.getElementById("instructionBoxTwo");
    var resultBoxOne = document.getElementById("resultBoxOne");
    var resultBoxTwo = document.getElementById("resultBoxTwo");

    document.getElementById("instructionBoxOne").innerHTML = " For test one: Your test is disabled. To enable test, please select from any of the levels below ie. Easy, Medium, Hard. Then ... ";
    controlOne.style.display = "flex";
    resultBoxOne.style.display = "block";
    controlTwo.style.display = "none";
    resultBoxTwo.style.display = "none";
    indicate.value = "T1";
    instructionOne.style.display = "flex";
    instructionTwo.style.display = "none";
    document.getElementById("text-fill").value = null;
    document.getElementById("text-fill").disabled = true;

    return Two();

}


function Two() {
    clearInterval(setTheTime);
    var mins = document.getElementById("mins");
    var secs = document.getElementById("secs");
    var Min = document.getElementById("min");
    var Sec = document.getElementById("sec");
    var circle = document.getElementById("circleBG");
    var reader = document.getElementById("reader");
    var wpt = document.getElementById("wdPerTime");
    // var reload = document.getElementById("cancel");
    var form = document.getElementById("loadTextValue");
    var checker = document.getElementById("checkForm");
    var text = document.getElementById("text");
    var word = document.getElementById("wordAmount");
    var minusW = document.getElementById("minusW");
    var plusW = document.getElementById("plusW");
    var instructionTwo = document.getElementById("instructionBoxTwo");
    var apply = document.getElementById("apply");
    var start = document.getElementById("start");
    var stopping = document.getElementById("stopping");


    mins.value = null;
    secs.value = null;
    mins.style.border = "none";
    secs.style.border = "none";
    Min.value = null;
    Sec.value = null;
    Min.style.border = "none";
    Sec.style.border = "none";
    circle.style.border = "2.4px solid dimgray";
    text.disabled = true;
    word.disabled = true;
    form.value = null;
    text.value = null;
    checker.placeholder = "Word Checker";
    text.placeholder = " ";
    checker.value = null;
    reader.value = null;
    word.value = null;
    word.style.border = "none";
    plusW.style.display = "none";
    minusW.style.display = "none";
    apply.style.color = "gray";
    apply.style.border = "2.2px solid gray";
    start.style.color = "gray";
    start.style.border = "2.2px solid gray";
    stopping.style.color = "gray";
    stopping.style.border = "2.2px solid gray";
    instructionTwo.innerHTML = "For Test two. Your test is been disabled. To enable test, set your test value. First input a time duration (Mins & Secs).. ";

    // document.getElementById("word").disabled = true;
    document.getElementById("text").disabled = true;
    document.getElementById("wordAmount").disabled = true;
    document.getElementById("wordAmount").value = null;
    document.getElementById("apply").disabled = true;
    document.getElementById("start").disabled = true;
    // document.getElementById("stop").disabled = true;

}

function loadingSyncTwo() {
    var controlOne = document.getElementById("controlOne");
    var controlTwo = document.getElementById("controlTwo");
    var indicate = document.getElementById("indicator");
    var instructionOne = document.getElementById("instructionBoxOne");
    var instructionTwo = document.getElementById("instructionBoxTwo");
    var resultBoxOne = document.getElementById("resultBoxOne");
    var resultBoxTwo = document.getElementById("resultBoxTwo");
    // document.getElementById("instructionBoxTwo").innerHTML = "For Test two. Your test is been disabled. To enable test, set your test value. First input a time duration (Mins & Secs)..";
    controlOne.style.display = "none"
    resultBoxOne.style.display = "none";
    controlTwo.style.display = "flex";
    resultBoxTwo.style.display = "block";
    indicate.value = "T2";
    instructionOne.style.display = "none";
    instructionTwo.style.display = "flex";

    document.getElementById("text-fill").value = null;
    document.getElementById("text-fill").disabled = true;
    document.getElementById("apply").disabled = true;
    document.getElementById("start").disabled = true;
    document.getElementById("stop").disabled = true;

    return One();
}


function One() {
    var mins = document.getElementById("minute");
    var secs = document.getElementById("second");
    var timeDown = document.getElementById("timeCountdown");
    var minSecHand = document.getElementById("timeDuration");
    var target = document.getElementById("target");
    var noOfW = document.getElementById("wpm");
    var wpm = document.getElementById("noW");
    var form = document.getElementById("form-fill");
    var check = document.getElementById("form-check");
    var typed = document.getElementById("text-fill");
    var lightThree = document.getElementById("easy");
    var lightTwo = document.getElementById("medium");
    var light = document.getElementById("hard");
    var grandSelect = document.getElementById("grandSelect");
    var grandLevel = document.getElementById("grandLevel");
    var grandLevelOne = document.getElementById("grandLevelOne");
    var grandLevelTwo = document.getElementById("grandLevelTwo");
    var grandLevelThree = document.getElementById("grandLevelThree");
    var grandKeySpace = document.getElementById("grandKeySpace");
    // var wpmOne = document.getElementById("noW-one");

    clearInterval(setTheTime);

    document.getElementById("play").style.color = "white";
    document.getElementById("stop").style.color = "white";


    lightThree.style.color = "#24001b";
    lightTwo.style.color = "#24001b";
    light.style.color = "#24001b";
    lightThree.style.border = "1.4px solid #24001b";
    lightTwo.style.border = "1.4px solid #24001b";
    light.style.border = "1.4px solid #24001b";
    form.value = null;
    typed.value = null;
    check.value = null;
    mins.value = null;
    secs.value = null;
    grandKeySpace.value = 0;
    // wpmOne.value = null;
    grandSelect.value = null;
    grandLevel.value = null;
    grandLevelOne.value = null;
    grandLevelTwo.value = null;
    grandLevelThree.value = null;
    mins.placeholder = "00";
    secs.placeholder = "00";
    mins.style.border = "2px solid dimgray";
    secs.style.border = "2px solid dimgray";
    timeDown.value = "00";
    minSecHand.innerHTML = "min";
    timeDown.style.border = "1.2px solid gray";
    minSecHand.style.border = "2px solid black";
    timeDown.style.color = "gray";
    minSecHand.style.color = "gray";
    timeDown.style.padding = "5.1px";
    minSecHand.style.padding = "5.1px ";
    timeDown.style.fontSize = "30px";
    minSecHand.style.fontSize = "20px";
    noOfW.value = null;
    target.value = null
    noOfW.placeholder = "Word per min";
    target.placeholder = "Word Target";
    target.style.border = "1.6px solid gray";
    noOfW.style.border = "1.6px solid gray";
    target.style.color = "gray";
    noOfW.style.color = "gray";
    wpm.value = null;
    // wpm.placeholder = "number of words";
    // wpm.style.border = "none";
    // wpm.style.backgroundColor = "white";
    // circle.style.border = "2.4px solid dimgray";


    document.getElementById("text-fill").disabled = true;
}


// window.addEventListener('load', () => {
//     // myVar = setInterval(myShow, 2300);
//     // return myVar;
// })

// function myShow(){
//     document.getElementById("loadSync").style.display = "none";
//     document.getElementById("container").style.display = "flex";
// }
// window.onload = function(){
//     var mins = document.getElementById("mins");
//     var min = document.getElementById("minute");
//     var indicate = document.getElementById("indicator");

//     indicate.value = "T1";

//     if (min.value == 0  ||  mins.value == 0  ) {
//         document.getElementById("text-fill").disabled = true;
//         document.getElementById("text").disabled = true;
//         document.getElementById("word").disabled = true;
//         // document.getElementById("instructionBoxOne").innerHTML = " For test one: Your test has disabled. To enable test, please select from any of the levels below ie. Easy, Medium, Hard. Then ... ";

//     }
//     if(!mins.value || !mins.value){
//         document.getElementById("text-fill").disabled = true;
//         document.getElementById("text").disabled = true;
//         document.getElementById("word").disabled = true;
//     }
// }


function apply() {
    var Mins = document.getElementById("min");
    var Secs = document.getElementById("sec");
    var EnterMin = document.getElementById("mins");
    var EnterSec = document.getElementById("secs");
    var circle = document.getElementById("circleBG");
    var form = document.getElementById("loadTextValue");
    var typed = document.getElementById("wordOne");
    var wordCorrect = document.getElementById("wordCorrect");
    var wordWrong = document.getElementById("wordWrong");
    var stopped = document.getElementById("stopping");
    var start = document.getElementById("start");

    typed.value = "0";
    wordCorrect.value = "0";
    wordWrong.value = "0";

    // if (Mins.value >= 60) { EnterMin.value = 0 };
    if (Mins.value && Secs.value) {
        if (Mins.value <= 9) { EnterMin.value = "0" + Mins.value };
        // if (Mins.value <= 9) { EnterMin.value = Mins.value };
        if (Mins.value > 9) { EnterMin.value = Mins.value };
        if (Secs.value <= 9) { EnterSec.value = "0" + Secs.value };
        // if (Secs.value <= 9) { EnterSec.value = Secs.value };
        if (Secs.value > 9) { EnterSec.value = Secs.value };
    } else if (Mins.value && !Secs.value) {
        // return;
        if (Mins.value <= 9) { EnterMin.value = "0" + Mins.value };
        // if (Mins.value <= 9) { EnterMin.value = Mins.value };
        if (Mins.value > 9) { EnterMin.value = Mins.value };
        EnterSec.value = "00";
    } else if (!Mins.value && Secs.value) {
        if (Secs.value <= 9) { EnterSec.value = "0" + Secs.value };
        // if (Secs.value <= 9) { EnterSec.value = Secs.value };
        if (Secs.value > 9) { EnterSec.value = Secs.value };
        EnterMin.value = "00";
        // return;
    }

    if (!Secs.value && !Mins.value) {
        EnterMin.style.border = "2px black solid";
        EnterSec.style.border = "2px black solid";
        form.value = null;
        Secs.value = null;
        Mins.value = null;
        // so as to disable the entire page
        EnterSec = 0;
        EnterMin = 0;
        // alert("A");
    }
    // if(Secs.value){
    //     return;
    // }

    Mins.style.border = "2px solid black";
    Mins.style.border = "2px solid black";
    circle.style.border = "3px solid black";
    EnterMin.style.border = "2px black solid";
    EnterSec.style.border = "2px black solid";
    EnterMin.style.color = "black";
    EnterSec.style.color = "black";
    start.style.color = 'darkgray'
    start.style.backgroundColor = "#5443de"
    stopped.style.BackgroundColor = "#5443de";
    document.getElementById("checkForm").placeholder = "Press space or enter to bring next word";
    document.getElementById("instructionBoxTwo").innerHTML = " .. Press 'Start' to begin test two! ";

    document.getElementById("start").disabled = false;
    document.getElementById("stop").disabled = false;
    return secondName();

    // x.value = EnterMin.value;
    // y.value = EnterSec.value;
    // var pass = PickUpHere(EnterMin, EnterSec);
    // var x = EnterMin;
    // var y = EnterSec;

}

// To set the "set timer"
function plusM() {
    var mins = document.getElementById("min"); //passes mins as the value of min 
    var secs = document.getElementById("sec");
    document.getElementById("plusW").style.display = "flex";
    document.getElementById("minusW").style.display = "flex";
    var word = document.getElementById("wordAmount");

    word.value = 0; // passes words as 0
    mins.value++; // Increases the value by 1
    if (mins.value <= 15) { secs.value = 0 };
    if (mins.value >= 16) { mins.value = 0 };
    if (mins.value < 10) { mins.value = mins.value };
    // mins.style.border = "2px solid #24001b";
    // secs.style.border = "2px solid #24001b";
    document.getElementById("instructionBoxTwo").innerHTML = ".. then set the number of words to be displayed in the 'Words' box ie. Words..";
    // document.getElementById("wordAmount").disabled = false;
    document.getElementById("wdPerTime").value = "words per min";
};


function minusM() {
    var mins = document.getElementById("min");
    var secs = document.getElementById("sec");
    document.getElementById("plusW").style.display = "flex";
    document.getElementById("minusW").style.display = "flex";
    var word = document.getElementById("wordAmount");

    word.value = 0;
    if (mins.value <= 0) { mins.value = 16 };
    mins.value--;
    if (mins.value <= 15) { secs.value = 0 };
    if (mins.value >= 16) { mins.value = 0 };
    if (mins.value < 10) { mins.value = mins.value };
    // mins.style.border = "2px solid #24001b";
    // secs.style.border = "2px solid #24001b";
    document.getElementById("instructionBoxTwo").innerHTML = ".. then set the number of words to be displayed in the 'Words' box ie. Words..";
    // document.getElementById("wordAmount").disabled = false;
    document.getElementById("wdPerTime").value = "words per min";
};

// count for the second hand
// function plusS() {
//     var mins = document.getElementById("min");
//     var secs = document.getElementById("sec");
//     secs.value++;
//     if(mins.value == 15){secs.value = 0};
//     if (secs.value >= 60) { secs.value = 0 };
//     if (secs.value < 10) { secs.value = secs.value };
//     // mins.style.border = "2px solid #24001b";
//     secs.style.border = "2px solid #24001b";
//     document.getElementById("instructionBox").innerHTML = ".. then set the number of words to be displayed in the Random Words box ie. Words..";
//     document.getElementById("word").disabled = false;
// };

// function minusS() {
//     var mins = document.getElementById("min");
//     var secs = document.getElementById("sec");
//     if (secs.value <= 0) { secs.value = 60 };
//     secs.value--;
//     if(mins.value == 15){secs.value = 0};
//     if (secs.value >= 60) { secs.value = 0 };
//     if (secs.value < 10) { secs.value = secs.value };
//     // mins.style.border = "2px solid #24001b";
//     secs.style.border = "2px solid #24001b";
//     document.getElementById("instructionBox").innerHTML = ".. then set the number of words to be displayed in the Random Words box ie. Words..";
//     document.getElementById("word").disabled = false;
// };

function plusW() {
    var word = document.getElementById("wordAmount");
    var apply = document.getElementById("apply");

    // apply.style.color = "#24001b";
    apply.style.color = 'darkgray'
    apply.style.backgroundColor = '#5443de'
    // word.value++;
    word.value = parseFloat(word.value) + 10;
    if (word.value > 1000) { word.value = 0 };
    if (word.value < 10) { word.value = word.value };
    word.style.color = "#24001b";
    document.getElementById("instructionBoxTwo").innerHTML = ".. now press 'apply' to initiate the start button.. ";
    document.getElementById("apply").disabled = false;
};

function minusW() {
    var word = document.getElementById("wordAmount");
    var apply = document.getElementById("apply");

    apply.style.color = 'darkgray'
    apply.style.backgroundColor = '#5443de'
    word.value = parseFloat(word.value) - 10;
    if (word.value < 0) { word.value = 1000 };
    // word.value--;
    if (word.value >= 1001) { word.value = 0 };
    if (word.value < 10) { word.value = word.value };
    word.style.color = "#24001b";
    document.getElementById("instructionBoxTwo").innerHTML = ".. now press 'apply' to initiate the start button.. ";
    document.getElementById("apply").disabled = false;
};


// function wordsInTime(event) {
//     // const key = event.code;
//     // const keyBack = event.key;
//     event = (event) ? event : Window.event;
//     var charCode = (event.which) ? event.which : event.keyCode;
//     var word = document.getElementById("wordAmount");
//     var apply = document.getElementById("apply");

//     apply.style.color = "#24001b";
//     apply.style.border = "2.2px solid #24001b";
//     // if (word.value <= 0) { word.value = 1001 };
//     if((charCode >= 48 && charCode <= 57) || charCode == 42 ){    

//     // word.value--;
//     if (word.value >= 1001) { 
//         word.value = 1000;
//         document.getElementById("wordAmount").disabled = true;
//      };
//     // if (word.value < 10) { word.value = word.value };
//     word.style.border = "2px solid #24001b";
//     document.getElementById("instructionBoxTwo").innerHTML = ".. now press 'apply' to initiate the start button.. ";
//     }else{
//         return;
//     }
// };


// To set the countdown timer

var setTheTime;

function cancelButtonTwo() {
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
    var firstTest = document.getElementById("firstTest");
    var plusW = document.getElementById("plusW");
    var instructionTwo = document.getElementById("instructionBoxTwo");
    var apply = document.getElementById("apply");
    var start = document.getElementById("start");
    var stopping = document.getElementById("stopping");
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
    checker.value = null;
    reader.value = null;
    word.value = null;
    word.style.border = "none";
    plusW.style.display = "none";
    minusW.style.display = "none";
    apply.style.backgroundColor = "#efefef";
    apply.style.color = "gray";
    apply.style.border = "2.2px solid gray";
    start.style.backgroundColor = "#efefef";
    start.style.color = "gray";
    start.style.border = "2.2px solid gray";
    stopping.style.backgroundColor = "#efefef";
    stopping.style.color = "gray";
    stopping.style.border = "2.2px solid gray";
    firstTest.style.color = " #24001b";
    firstTest.style.border = "2.2px solid #24001b";
    firstTest.disabled = false;
    instructionTwo.innerHTML = "For Test two. Your test has been disabled. To enable test, set your test value. First input a time duration (Mins).. ";

    // document.getElementById("word").disabled = true;
    document.getElementById("text").disabled = true;
    document.getElementById("wordAmount").disabled = true;
    document.getElementById("wordAmount").value = null;
    document.getElementById("apply").disabled = true;
    document.getElementById("start").disabled = true;
    document.getElementById("stop").disabled = true;
    document.getElementById("wordCountAmount").value = "0";
    document.getElementById("wordOne").value = "0";
    document.getElementById("wordCorrect").value = "0";
    document.getElementById("wordWrong").value = "0";
    document.getElementById("testingOneTwo").value = "0";
    document.getElementById("resultTwo").value = "0";

    // vOne.value = "0";
    // vTwo.value = "0";
    // vThree.value = "0";
    // vFour.value = "0";
    // vFive.value = "0";
    // vSix.value = "0";


}


function start() {
    var mins = document.getElementById("mins");
    var secs = document.getElementById("secs");
    var Min = document.getElementById("min");
    var Sec = document.getElementById("sec");
    var firstTest = document.getElementById("firstTest");
    var result = document.getElementById("resultTwo");
    var apply = document.getElementById("apply");
    var start = document.getElementById("start");
    var stop = document.getElementById("stopping");

    // Initiates the program
    document.getElementById("start").disabled = true;
    document.getElementById("apply").disabled = true;
    apply.style.color = "gray";
    apply.style.backgroundColor = "#efefef";
    apply.style.border = "2.2px solid gray";
    start.style.color = "gray";
    start.style.backgroundColor = "#efefef";
    start.style.border = "2.2px solid gray";
    stop.style.backgroundColor = "#fc0000";
    stop.style.color = "#ffffff";
    stop.style.border = "2.2px solid white";
    result.value = "0";

    // Stops the program after countdown
    if ((mins.value == 0 && secs.value == 0) || secs.value > 0) {
        document.getElementById("text").disabled = false;
        document.getElementById("text").focus();
        return;
    } else {
        setTheTime = setInterval(countingTwo, 1000);
        firstTest.style.color = "gray";
        firstTest.style.border = "2.2px solid gray";
        document.getElementById("firstTest").disabled = true;
        document.getElementById("text").disabled = false;
        document.getElementById("text").focus();
        document.getElementById("text").placeholder = "Begin typing test!";
        document.getElementById("checkForm").placeholder = "Press space or enter to bring next word";
        document.getElementById("instructionBoxTwo").innerHTML = "Press 'Enter' or 'Space' on your keyboard to change set of words. Press 'Stop' to end Test Two!";


    }
    if (mins.value <= Min.value || secs.value <= Sec.value) {
        return;
    }
    // if(mins.value > 0 || secs.value > 0){
    //     // document.getElementById("text").disabled = false;
    //     alert("hello!");
    // }
    // if(){
    //     return;
    // }
}

function countingTwo() {
    var Min = document.getElementById("min");
    var Sec = document.getElementById("sec");
    var mins = document.getElementById("mins");
    var secs = document.getElementById("secs");
    var circle = document.getElementById("circleBG");
    var result = document.getElementById("resultTwo");
    var wordCorrect = document.getElementById("wordCorrect");
    var wordWrong = document.getElementById("wordWrong");
    var actualWord = document.getElementById("wordAmount");
    var reader = document.getElementById("reader");

    secs.value--;
    if (secs.value < 0) {
        mins.value--;
        secs.value = 59;
        if (mins.value < 10) {
            mins.value = "0" + mins.value;
            // mins.value = mins.value;
        };
    }
    if (secs.value < 10) {
        secs.value = "0" + secs.value;
        // secs.value = secs.value;

    };
    if (mins.value == 0 && secs.value == 0) {
        // To calculate the actual score
        var aWd = actualWord.value;
        var word = aWd / parseFloat(Min.value);

        // Type in the codes for results
        var resultOne = reader.value / word;
        var finalResultOne = resultOne * 100; // calculate the percentage result

        result.value = finalResultOne.toFixed(1);

        clearInterval(setTheTime);
        navigator.vibrate(2000);
        document.getElementById("text").disabled = true;
        Min.value = null;
        Sec.value = null;
        circle.style.border = "2px solid red";
        mins.style.border = "2px red solid";
        secs.style.border = "2px red solid";
        mins.style.color = "red ";
        secs.style.color = "red ";
        Min.style.border = "none";
        Sec.style.border = "none";
        document.getElementById("text").disabled = true;
        document.getElementById("word").disabled = true;
        document.getElementById("apply").disabled = true;
        document.getElementById("instructionBoxTwo").innerHTML = "Please, click the reload button to refresh.";
    }

    // if(wordWrong.value > 0){
    //     var resultOne = wordError() / Math.round(word);
    //     var finalResultOne = resultOne * 100; // calculate the percentage result

    //     result.value = finalResultOne.toFixed(1);
    // }
    // if(wordWrong.value == 0 && wordCorrect.value > 0){
    //     var resultTwo = calculate() / Math.round(word);
    //     var finalResultTwo = resultTwo * 100;

    //     result.value = finalResultTwo.toFixed(1);
    // }

    // };


};

function endStop() {
    clearInterval(setTheTime);
    var mins = document.getElementById("mins");
    var secs = document.getElementById("secs");
    var Min = document.getElementById("min");
    var Sec = document.getElementById("sec");
    var circle = document.getElementById("circleBG");
    var result = document.getElementById("resultTwo");
    var wordCorrect = document.getElementById("wordCorrect");
    var wordWrong = document.getElementById("wordWrong");
    var actualWord = document.getElementById("wordAmount");
    var stop = document.getElementById("stopping");
    var reader = document.getElementById("reader");


    // return sumUpOne();
    // To calculate the actual score
    var aWd = actualWord.value;
    var word = aWd / parseFloat(Min.value);

    // Type in the codes for results
    var resultOne = reader.value / word;
    var finalResultOne = resultOne * 100; // calculate the percentage result

    result.value = finalResultOne.toFixed(0);

    mins.value = null;
    secs.value = null;
    mins.style.border = "none";
    secs.style.border = "none";
    Min.value = null;
    Sec.value = null;
    circle.style.border = "2px solid red";
    stop.style.color = "gray";

    document.getElementById("text").disabled = true;
    document.getElementById("instructionBoxTwo").innerHTML = "You ended the game. Press 'Reset' to refresh the game";

    // if(wordWrong.value > 0){
    //     var resultOne = wordError() / word;
    //     var finalResultOne = resultOne * 100; // calculate the percentage result

    //     result.value = finalResultOne.toFixed(1);
    // }
    // if(wordWrong.value == 0 && wordCorrect.value > 0){
    //     var resultTwo = calculate() / word;
    //     var finalResultTwo = resultTwo * 100;

    //     result.value = finalResultTwo.toFixed(1);
    // }

};


// The typing code for the second test
// var counter;
// for the keyboard press
function typingOne(event) {
    const key = event.code;
    const keyBack = event.key;
    event = (event) ? event : Window.event;
    var charCode = (event.which) ? event.which : event.keyCode;
    // var present = document.getElementById("present");
    // var num = document.getElementById("wordOne");
    var speed = document.getElementById("reader");
    var form = document.getElementById("loadTextValue"); // note
    var typed = document.getElementById("text"); //note
    let chart = typed.value.length;
    var checked = document.getElementById("checkForm"); // To check value display
    var wordCorrect = document.getElementById("wordCorrect");
    var wordWrong = document.getElementById("wordWrong");
    // let chart = typed.innerHTML.length;
    var testing = document.getElementById("testingOneTwo");
    var wordsTyped = document.getElementById("wordOne");
    var words = document.getElementById("wordCountAmount");
    var wordsAmount = document.getElementById("wordAmount");

    if (((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) || (charCode === 46)) {
       
        document.getElementById("instructionBoxTwo").innerHTML = "Press 'Enter' or 'Space' on your keyboard to change set of words. Press 'Stop' to end Test Two!";

        wordsTyped.value++;
        const formVal = form.value; //parse form array as var
        const formArray = Array.from(formVal); //Parse form inside an array
        const typedVal = typed.value; //parse text(typed) array as var
        var typedArray = Array.from(typedVal); //Parse text(typed) inside an array 
        const typedEach = typedArray.at(-1); // get the last item(element)
        const lentCount = typedArray.length; //to get the index of the typedArray

        // const typedEachh = typedVal.at(-1); // get the last item(element)
        // var check = checked.value;
        // var checkEach = check.at(-1); //get the last item(on checking) 

        // var wordCounted = wordsTyped.value / 5;
        let wordChecking = wordsTyped.value % 5;
        if (wordChecking == 0) {
            words.value++;
            // alert("tick");
        }

        var item = formArray[lentCount - 1];
        var second = typedArray[lentCount - 1];


        if (second === item) {
            checked.value += typedEach;
            checked.style.color = "green";
            wordCorrect.value++;
            // noW.value++; //Note
            // document.getElementById("Tnow").value = checked.length;
        } else {
            checked.value += "*";
            checked.style.color = "red";
            wordWrong.value++;
            // noW.value -= 1;
        }

        // to limit the number of typed in words
        if(typedArray.length === formArray.length){
            typed.value = null
            return secondName();
        }
        // speed.value = wordError();

        // var passedSpeed = parseFloat(speed.value);

        // to calculate points
        if (wordWrong.value > 0) {
            speed.value = wordError();
        } else if (wordWrong.value == 0 && wordCorrect.value > 0) {
            speed.value = calculate();
        }
        if (wordWrong.value > 0 && wordCorrect.value == 0) {
            document.getElementById("text").value = null;
            document.getElementById("checkForm").value = null;
            document.getElementById("reader").value = null;
            document.getElementById("wordWrong").value = 0;
        }

        // still in work
        // error message
        // Should letters wrong be equal to letters right
        // pass error message
        // if(wordCorrect.value == wordWrong.value){
        //     return endGame();
        // }


        if (words.value === wordsAmount.value) {
            return completeTest();
        }
        
        console.log(words.value)
        console.log(wordsAmount.value)
        // if(speed.value <= 0){
        //     document.getElementById("text").disabled = true;
        //     return stop();
        // }
        // present.style.backgroundColor = "cadetblue";
        // present.value = " Number of words";
    }

    if (key === "Space") {
        typed.value = null;
        return secondName();
        // alert(Working);
    }


    if (key === "Enter") {
        typed.value = null;
        return secondName();
        // alert(Working);
    }

    // writeUp.style.color =  (light.style.backgroundColor == "green") ? "white" : "green";
    // If backspace is pressed, the number of words reduces
    //  Fix the backspace to no of words
    if (keyBack === "Backspace") {
        // alert(Working);
        // testing.value++;
    };


    // var passedSpeeds = parseFloat(speed.value);
    // var lastSpeed = passedSpeeds.toFixed(2);
    // speedVar.value = lastSpeed;
    // To parsee
}

// to prevent backspace from working
function typingClear(event){
    const keyBack = event.key;
    if(keyBack === "Backspace"){
        event.preventDefault()
        document.getElementById("instructionBoxTwo").innerHTML = "Can not clear value";
    
    }
}
// A random function to be called by other functions
function secondName() {
    var Mins = document.getElementById("min");
    var Secs = document.getElementById("sec");
    var form = document.getElementById("loadTextValue");

    // lIST THE ARRAY
    var namesOne = ['aNd', 'Ink', 'taP', 'TAP', 'Lap', 'LAG', 'fee', 'FEE', 'fEe', 'gAG', 'pAY', 'jAr', 'TAr', 'cHI', 'yAm', 'ReD', 'ORE', 'ore', 'oIL', 'oil', 'oWl', 'OWL', 'oWl', 'DaB', 'ink', 'GOD', 'key', 'EAR', 'EyE', 'jAR', 'Red', 'War', 'Pot', 'taR', 'POT'];
    // CALL EACH ITEM IN ARRAY RANDOMLY 
    var intOne = Math.floor(Math.random() * namesOne.length);
    var namesTwo = ['HaNd', 'PInk', 'taPe', 'TAPe', 'LaMp', 'LeGo', 'fRee', 'FrEE', 'fREe', 'gArG', 'pAYe', 'jUrY', 'TApE', 'cHIn', 'dAmE', 'ReeD', 'cORE', 'Pore', 'mANe', 'LaMp', 'LiOn', 'iRoN', 'iron', 'BaBe', 'Pink', 'gooD', 'keEp', 'dEAR', 'rEyE', 'bLUe', 'ReAd', 'WEar', 'lAND', 'tEaR', 'roAD'];
    var intTwo = Math.floor(Math.random() * namesTwo.length);
    var namesThree = ['trUTH', 'paGES', 'gOOds', 'TAPes', 'DatE', 'LAGos', 'feeLS', 'FEEls', 'fEeLs', 'lAGos', 'pAYes', 'tHRee', 'whITE', 'cHeeK', 'riCHs', 'ReaDs', 'cOREs', 'coreS', 'droIL', 'droll', 'BASIC', 'lAMPs', 'vaLUE', 'CHECK', 'check', 'GOoDs', 'apply', 'wORDS', 'EyinG', 'wears', 'boXES', 'WareS', 'kenYA', 'WHEAT', 'POTin'];
    var intThree = Math.floor(Math.random() * namesThree.length);
    var namesFour = ['aBROAd', 'cannOt', 'cAMEra', 'CenTRE', 'LapseS', 'buTTON', 'BROKen', 'chanCE', 'Career', 'defeat', 'debate', 'deCIDE', 'deVICE', 'EFFECT', 'Energy', 'father', 'FINIsh', 'folloW', 'FOUght', 'freNCH', 'GAther', 'growth', 'GROWth', 'DaBbLE', 'impaCT', 'INtend', 'joseph', 'EARING', 'INVest', 'cookie', 'SaddLE', 'RulING', 'rEsult', 'MAKing', 'MANner'];
    var intFour = Math.floor(Math.random() * namesFour.length);
    var namesFive = ['aBROAd', 'cannOt', 'cAMEra', 'CenTRE', 'LapseS', 'buTTON', 'cHI', 'LAGos', 'feeLS', 'FEEls', 'fEeLs', 'lAGos', 'pAYes', 'ink', 'GOD', 'key', 'EAR', 'pAYe', 'jUrY', 'TApE', 'cHIn', 'dAmE', 'ReeD', 'cORE', 'Pore', 'mANe', 'LaMp', 'lIOn', 'freNCH', 'GAther', 'growth', 'GROWth', 'DaBbLE', 'impaCT', 'GOoDs', 'apply', 'wORDS', 'EyinG', 'wears', 'boXES', 'WareS', 'kenYA', 'WHEAT'];
    var intFive = Math.floor(Math.random() * namesFive.length);


    if ((Mins.value <= 3 || !Mins.value) && (Secs.value >= 1 || Secs.value < 60)) {
        form.value = namesOne[intOne];
        document.getElementById("text").placeholder = "Please type here";
    } else if ((Mins.value >= 3 && Mins.value < 6) && (Secs.value >= 0 && Secs.value < 60)) {
        form.value = namesTwo[intTwo];
        document.getElementById("text").placeholder = "Please type here";
    } else if ((Mins.value >= 6 && Mins.value < 9) && (Secs.value >= 0 && Secs.value < 60)) {
        form.value = namesThree[intThree];
        document.getElementById("text").placeholder = "Please type here";
    } else if ((Mins.value >= 9 && Mins.value < 12) && (Secs.value >= 0 && Secs.value < 60)) {
        form.value = namesFour[intFour];
        document.getElementById("text").placeholder = "Please type here";
    } else if ((Mins.value >= 12 && Mins.value <= 15) && (Secs.value >= 0 && Secs.value < 60)) {
        form.value = namesFive[intFive];
        document.getElementById("text").placeholder = "Please type here";
    }

}



function wordError() {
    var gross = document.getElementById("wordCorrect");
    // var forErr = document.getElementById("checkForm");
    var mins = document.getElementById("min");
    var secs = document.getElementById("sec");
    var wordWrong = document.getElementById("wordWrong");
    var num = document.getElementById("wordOne");
    // var actualWord = document.getElementById("wordAmount");
    // var testing = document.getElementById("testingOneTwo");

    //To calculate the time progress with errors
    var x = num.value;
    var u = wordWrong.value;
    var minSec = secs.value / 60;
    var min = mins.value;
    var time = parseFloat(min) + minSec;
    var i = parseFloat(x) - parseFloat(u);
    var error = i / 5;
    // actualWord.value = error;
    var u = error / time;
    // var result = Math.round(u);
    var result = u.toFixed(2);
    return result;
}


// function wordError(){
//     var gross = document.getElementById("wordCorrect");
//     // var forErr = document.getElementById("checkForm");
//     var mins = document.getElementById("min");
//     var secs = document.getElementById("sec");
//     var wordWrong = document.getElementById("wordWrong");
//     var num = document.getElementById("wordOne");
//     // var actualWord = document.getElementById("wordAmount");
//     // var testing = document.getElementById("testingOneTwo");

//     //To calculate the time progress with errors
//     var x = num.value;
//     var u = wordWrong.value;
//     var minSec = secs.value / 60;
//     var min = mins.value;
//     var time = parseFloat(min) + minSec;
//     var i = parseFloat(x) - parseFloat(u);
//     var error = i / 5;
//     // actualWord.value = error;
//     var u = error / time;
//     var result = u.toFixed(2);
//     return result;
// }

function calculate() {
    var num = document.getElementById("wordOne");
    var mins = document.getElementById("min");
    var secs = document.getElementById("sec");
    // var actualWord = document.getElementById("wordAmount");
    // var checkedWrong = document.getElementById("checkForm");
    // var presentWords = document.getElementById("wordCorrect");

    //To calculate the time progress without errors
    var x = num.value;
    var minSec = secs.value / 60;
    var min = mins.value;
    var time = parseFloat(min) + minSec;
    var numerator = parseFloat(x) / 5;
    // actualWord.value = numerator;
    var gross = numerator / time;
    var result = gross.toFixed(2);
    // var result = Math.round(gross);
    return result;
}

// Another end program button
// Active when there is an error
// Number of letters typed should not be equal to letters wrong
// function endGame() {
//     clearInterval(setTheTime);
//     var mins = document.getElementById("mins");
//     var secs = document.getElementById("secs");
//     var Min = document.getElementById("min");
//     var Sec = document.getElementById("sec");
//     var circle = document.getElementById("circleBG");
//     var stop = document.getElementById("stopping");

//     mins.value = null;
//     secs.value = null;
//     mins.style.border = "none";
//     secs.style.border = "none";
//     Min.value = null;
//     Sec.value = null;
//     circle.style.border = "2px solid red";
//     stop.style.color = "gray";

//     document.getElementById("text").disabled = true;
//     document.getElementById("stopping").disabled = true;
//     document.getElementById("instructionBoxTwo").innerHTML = "Press 'Reload to restart game";
//     document.getElementById("text").value = "Test error!! Please reload";
//     document.getElementById("checkForm").value = "Wrong letters cannot be equal to Right letters";
//     // return sumUpOne();

// };



function completeTest() {
    clearInterval(setTheTime);
    var mins = document.getElementById("mins");
    var secs = document.getElementById("secs");
    var Min = document.getElementById("min");
    var Sec = document.getElementById("sec");
    var circle = document.getElementById("circleBG");
    var result = document.getElementById("resultTwo");
    // var wordCorrect = document.getElementById("wordCorrect");
    // var wordWrong = document.getElementById("wordWrong");
    var actualWord = document.getElementById("wordAmount");
    var stop = document.getElementById("stopping");
    var reader = document.getElementById("reader");

    // To calculate the actual score
    var aWd = actualWord.value;
    var word = aWd / parseFloat(Min.value);

    // Type in the codes for results
    // Type in the codes for results
    var resultOne = reader.value / word;
    var finalResultOne = resultOne * 100; // calculate the percentage result

    result.value = finalResultOne.toFixed(1);
    // if(wordWrong.value > 0){
    //     var resultOne = Math.round(wordError()) / Math.round(word);
    //     var finalResultOne = resultOne * 100; // calculate the percentage result

    //     result.value = finalResultOne.toFixed(1);
    // }
    // if(wordWrong.value == 0 && wordCorrect.value > 0){
    //     var resultTwo = Math.round(calculate()) / Math.round(word);
    //     var finalResultTwo = resultTwo * 100;

    //     result.value = finalResultTwo.toFixed(1);
    // }

    mins.value = null;
    secs.value = null;
    mins.style.border = "none";
    secs.style.border = "none";
    Min.value = null;
    Sec.value = null;
    circle.style.border = "2px solid red";
    stop.style.color = "gray";

    document.getElementById("text").disabled = true;
    document.getElementById("instructionBoxTwo").innerHTML = "You ended the game. Press 'Reset' to refresh the game";

    // return sumUpOne();

};
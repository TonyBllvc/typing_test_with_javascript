// function noOfWords{
//     if(easy && !medium && !hard){
//         var TotalNoOfW = document.getElementById("TnoW");
        
//         TotalNoOfW.value = form.value.length;
//     }else if(!easy && medium && !hard){
//         var TotalNoOfW = document.getElementById("TnoW");
        
//         TotalNoOfW.value = form.value.length;
//     }else if(!easy && !medium && hard){
//         var TotalNoOfW = document.getElementById("TnoW");
        
//         TotalNoOfW.value = form.value.length;
//     }
// }

// window.onload = function(){
//     document.getElementById("text-fill").focus();
// }
// For test one
// window.onload = function() {
//     // var mins = document.getElementById("mins");
//     // var min = document.getElementById("minute");
//     var indicate = document.getElementById("indicator");
    
//     indicate.value = "T1";
    
//     document.getElementById("text-fill").disabled = true;
//     document.getElementById("text").disabled = true;

    // if (min.value == 0  ||  mins.value == 0  ) {
    //     document.getElementById("text-fill").disabled = true;
    //     document.getElementById("text").disabled = true;
    //     document.getElementById("word").disabled = true;
    //     // document.getElementById("instructionBoxOne").innerHTML = " For test one: Your test has disabled. To enable test, please select from any of the levels below ie. Easy, Medium, Hard. Then ... ";

    // }
    // if(!mins.value || !mins.value){
    //     document.getElementById("text-fill").disabled = true;
    //     document.getElementById("text").disabled = true;
    //     document.getElementById("word").disabled = true;
    // }
// }

function easy(){
    var wt = document.getElementById("target");
    // var wpm = document.getElementById("wpm");
    var min = document.getElementById("minute");
    var sec = document.getElementById("second");
    // var noW = document.getElementById("noW");
    // var text = document.getElementById("text");
    var countdown = document.getElementById("timeCountdown");
    var duration = document.getElementById("timeDuration");
    // var type = document.getElementById("wordsToTyp");
    var form = document.getElementById("form-fill");
    var light = document.getElementById("easy");
    var lightTwo = document.getElementById("medium");    
    var lightThree = document.getElementById("hard");
    var text = document.getElementById("text-fill");
    var noOfWords = document.getElementById("noW");
    var noOne = document.getElementById("noW-one");
    var noWTwo = document.getElementById("noW-two");
    var wc = document.getElementById("grandLevelOne");
    var wl = document.getElementById("grandLevelTwo");

    document.getElementById("medium").disabled = true;
    document.getElementById("hard").disabled = true;

    noOfWords.value = null;

    document.getElementById("instructionBoxOne").innerHTML = ".. press 'play' to begin test, 'reload' to reset the board ..";
    
    
    // Displays the words to be typed 
    text.value = null;
    form.value = easyForm();  
    form.style.color = "darkcyan";
    form.style.fontSize = "25px";

    lightThree.style.color = "grey";
    lightTwo.style.color = "grey";
    light.style.color = "#5443de";
    lightThree.style.border = "1.4px solid grey";
    lightTwo.style.border = "1.4px solid grey";
    light.style.border = "1.4px solid #5443de";
    // light.style.backgroundColor = "limegreen";

    // text.style.color = "blue";
    wt.value = "30 Words";
    noOne.value = "30";
    noWTwo.value = "30";
    min.value = "30";
    sec.value = "00";
    wc.value = 0;
    wl.value = 0;
    countdown.value = "30";
    duration.innerHTML = "Mins";
    // type.innerHTML = "This me Her this wAy in do lean GO come just HeR tYpE me you here thiS";
    // type.style.border = "solid blue 5px ";
    // type.style.padding = "6px";

    
    // wt.style.color = "darkcyan";
    wpm.style.color = "darkcyan";
    min.style.color = "darkcyan";
    sec.style.color = "darkcyan";
    countdown.style.color = "darkcyan";
    duration.style.color = "darkcyan";
    duration.style.border = "2px darkcyan solid";

    // var compare = "aNd ink GOD key EAR EyE jAR Red War Pot";
    // };
};


function easyForm(){
    var name = [
        ["TO maKe BLue WiDTH LigHT maKe"],
        ["WOuLD HaS loT WiDTH LigHT fly"],
        ["RanGE WiDTH LigHT Made RanGE"]
    ];
    var int = Math.floor(Math.random() * name.length);
    return name[int];
}
// function press(){
//     var text = document.getElementById("text").value;
//     alert("text");
// }

function medium(){
    var wt = document.getElementById("target");
    // var wpm = document.getElementById("wpm");
    var min = document.getElementById("minute");
    var sec = document.getElementById("second");
    // var noW = document.getElementById("noW");
    var countdown = document.getElementById("timeCountdown");
    var duration = document.getElementById("timeDuration");
    // var type = document.getElementById("wordsToTyp");
    var form = document.getElementById("form-fill");
    var lightTwo = document.getElementById("easy");
    var light = document.getElementById("medium");    
    var lightThree = document.getElementById("hard");
    var text = document.getElementById("text-fill");
    var noOfWords = document.getElementById("noW");
    var noOne = document.getElementById("noW-one");
    var noWTwo = document.getElementById("noW-two");
    var wc = document.getElementById("grandLevelOne");
    var wl = document.getElementById("grandLevelTwo");

    
    document.getElementById("easy").disabled = true;
    document.getElementById("hard").disabled = true;

    noOfWords.value = null;
    
    document.getElementById("instructionBoxOne").innerHTML = ".. press 'play' to begin test, 'stop' to end test  ..";
    
    // Displays the words to be typed 
    text.value = null;

    form.value = mediumForm(); 
    lightThree.style.color = "gray";
    lightTwo.style.color = "gray";
    light.style.color = "#5443de";
    lightThree.style.border = "1.4px solid gray";
    lightTwo.style.border = "1.4px solid gray";
    light.style.border = "1.4px solid #5443de";
    // light.style.backgroundColor = "limegreen";
    wt.value = "50 Words";
    noOne.value = "50";
    noWTwo.value = "25";
    min.value = "25";
    sec.value = "00";
    wc.value = 0;
    wl.value = 0;
    countdown.value = "25";
    duration.innerHTML = "Mins";
    form.style.color = "darkcyan";
    form.style.fontSize = "25px";
    // form.style.padding = "29px";
    // form.style.width = "100%";

    wt.style.color = "brown";
    // wpm.style.color = "brown";
    min.style.color = "brown";
    sec.style.color = "brown";
    countdown.style.color = "brown";
    duration.style.color = "brown";
    duration.style.border = "2px brown solid";

};


function mediumForm(){
    var name = [
        ["ThnDEHaSES ue80rcLgHT YPlankTOnT"],
        ["YPlankTOnT fid0EUOuLD i9098RIf4f"],
        ["maK093yTae MadAMRanGE BLeWiDTHfI"],
        ["gri096KSlc PloTedlfwc nr490sj890"]
    ];
    var int = Math.floor(Math.random() * name.length);
    return name[int];
}


//  display the arrays in random figures 
// function words(){
//     var testOne = [
//         "me", "you", "Them", "go", "lamp"
//     ];
//     var lentThree = testOne.length - 1;
//     var lengthThree = testOne.length

//     for ( i = 0; i < lengthThree; i++){
//         var valueThree = testOne[Math.floor(Math.random()*lentThree)];
//         // document.write(valueThree + "<br />");
//     }
// }

function hard(){
    var wt = document.getElementById("target");
    // var wpm = document.getElementById("wpm");
    var min = document.getElementById("minute");
    var sec = document.getElementById("second");
    // var type = document.getElementById("wordsToTyp");
    var form = document.getElementById("form-fill");
    var noWTwo = document.getElementById("noW-two");
    // var forHard = ["kinDLEs", "laNtern", "UmbreLLA", "POliTE", "HapPY", "GoTTEn", "fire", "YatCH", "kEybOARDS", "MOuse", "ColumNBOx", "railwAY", "iMMaCulATE"];
    var countdown = document.getElementById("timeCountdown");
    var duration = document.getElementById("timeDuration");    
    var lightThree = document.getElementById("easy");
    var lightTwo = document.getElementById("medium");    
    var light = document.getElementById("hard");
    var text = document.getElementById("text-fill");
    var noOfWords = document.getElementById("noW");
    var noOne = document.getElementById("noW-one");
    var wc = document.getElementById("grandLevelOne");
    var wl = document.getElementById("grandLevelTwo");

    document.getElementById("medium").disabled = true;
    document.getElementById("easy").disabled = true;

    noOfWords.value = null;    
    // Displays the words to be typed 
    text.value = null;

    document.getElementById("instructionBoxOne").innerHTML = ".. press 'play' to begin test, 'stop' to end test ..";

    // var lentThree = forHard.length - 1;
    // var lengthThree = forHard.length;

    // for ( i = 0; i < lengthThree; i++){
    //     var valueThree = forHard[Math.floor(Math.random()*lentThree)];
    //     // document.write(valueThree + "<br />");
    //     type.innerHTML = valueThree;
    // }
     
    form.value = hardForm(); 
    form.style.color = "darkcyan";
    form.style.fontSize = "25px";

    lightThree.style.color = "grey";
    lightTwo.style.color = "grey";
    light.style.color = "#5443de";
    lightThree.style.border = "1.4px solid grey";
    lightTwo.style.border = "1.4px solid grey";
    light.style.border = "1.4px solid #5443de";
    // light.style.backgroundColor = "limegreen";
    wt.value = "100 Words";
    noOne.value = "100";
    noWTwo.value = "20";
    min.value = "20";
    sec.value = "00";
    wc.value = 0;
    wl.value = 0;
    countdown.value = "20";
    duration.innerHTML = "Mins";

    
    wt.style.color = "red";
    // wpm.style.color = "red";
    min.style.color = "red";
    sec.style.color = "red";
    countdown.style.color = "red";
    duration.style.color = "red";
    duration.style.border = "2px red solid";

};

function hardForm(){
    var name = [
        ["HnPiJ90JEkc0DSv rO92yp70DLkWouLD"],
        ["RanGEepDyEVftph WiDvlPldkf036TH"],
        ["p203C4CUpatiON5 pUllU03ksplancP"]
    ];
    var int = Math.floor(Math.random() * name.length);
    return name[int];
}

var setTheTime;
// console.log("301: " + setTheTime)
function cancelButtonOne(){
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
    var noOne = document.getElementById("noW-one");
    var noWTwo = document.getElementById("noW-two");
    var grandSelect = document.getElementById("grandSelect");
    var grandLevel = document.getElementById("grandLevel");
    var grandLevelOne = document.getElementById("grandLevelOne");
    var grandLevelTwo = document.getElementById("grandLevelTwo");
    var grandLevelThree = document.getElementById("grandLevelThree");
    var grandKeySpace = document.getElementById("grandKeySpace");

    clearInterval(setTheTime); 

    document.getElementById("instructionBoxOne").innerHTML = "For test one: Your test is disabled. To enable test, please select from any of the levels below ie. Easy, Medium, Hard. Then ...";

    document.getElementById("text-fill").disabled = true;
    document.getElementById("medium").disabled = false;
    document.getElementById("easy").disabled = false;
    document.getElementById("hard").disabled = false;
    
    document.getElementById("play").style.color = "white";
    document.getElementById("play").style.backgroundColor = "green";
    document.getElementById("stop").style.backgroundColor = "red";
    
    
    lightThree.style.color = "#5443de";
    lightTwo.style.color = "#5443de";
    light.style.color = "#5443de";
    lightThree.style.border = "1.4px solid #5443de";
    lightTwo.style.border = "1.4px solid #5443de";
    light.style.border = "1.4px solid #5443de";
    form.value = null;
    typed.value = null;
    check.value = null;
    mins.value = null;
    secs.value = null;
    noOne.value = null;
    noWTwo.value = null;
    noOne.placeholder = "w/t";
    grandLevel.placeholder = "w/c";
    noWTwo.placeholder = "time";
    grandKeySpace.value = 0;
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
    target.placeholder = "Word Target";
    noOfW.value = null;
    target.value = null
    noOfW.placeholder = "Word per min";
    target.placeholder = "Word Target";
    target.style.border = "1.6px solid gray";
    noOfW.style.border = "1.6px solid gray";
    target.style.color = "gray";
    noOfW.style.color = "gray";
    wpm.value = null;
    wpm.placeholder = "number of words";
    wpm.style.border = "none";
    wpm.style.backgroundColor = "white";
    // circle.style.border = "2.4px solid dimgray";




}


// For countdown (write this down in your note)

// Count stops once i press play
function play(){
    var mins = document.getElementById("minute");
    var secs = document.getElementById("second");
    var form = document.getElementById("form-fill");
  
    var grandSelect = document.getElementById("grandSelect");


    var chartForm = form.value.length;

    // document.getElementById("text-fill").disabled = false;
    // document.getElementById("text-fill").focus();

    // Original play button code
    // To stop the play function from replay every time there is a click event on the button
    if ((mins.value == 0 && secs.value == 0) || ( secs.value > 0) ) {
        return false;
    }else {
        setTheTime = setInterval(countingOne, 1000);
        document.getElementById("text-fill").disabled = false;
        document.getElementById("text-fill").focus();
        document.getElementById("instructionBoxOne").innerHTML = " .. now you can begin test. Press 'stop' to stop the test! Make sure to type correctly, to gain more points";
        grandSelect.value = chartForm;
    };
    if(mins.value > 0){ 
        // document.getElementById("play").style.color = "#5443de";
        document.getElementById("play").style.backgroundColor = "#7cfc80";
        document.getElementById("stop").style.color = "white";
        document.getElementById("medium").disabled = true;
        document.getElementById("easy").disabled = true;
        document.getElementById("hard").disabled = true;
        document.getElementById("text-fill").focus();
    }


    // // Under construction
    // if (mins.value == 0 && secs.value == 0) {
    //     return;
    // } else if(secs.value >= 1 && secs.value <= 59){ 
    //     return;
    // }else if(mins.value >= 30 || mins.value >= 25 || mins.value >= 20){
    //     setTheTime = setInterval(counting, 1000);
    // // }else if(mins.value > 0 ){
    // //     setTheTime = setInterval(counting, 1000);
    // }else if(!setTheTime){ //Testing
    //     setTheTime = setInterval(counting, 1000);
    // }
};



function countingOne(){
    var mins = document.getElementById("minute");
    var secs = document.getElementById("second");
    // var typing = document.getElementById("text");
    var alerter = document.getElementById("text-fill"); 
    secs.value--;
    if (secs.value < 0) {
        mins.value--;
        secs.value = 59;
        if (mins.value < 10) {
            mins.value = "0" + mins.value;
        };
    };
    if (secs.value < 10) {
        secs.value = "0" + secs.value;

    };
    if(mins.value == 0 && secs.value == 59){
        mins.value = "00";
    };
    if (mins.value == 0 && secs.value == 0) {
        clearInterval(setTheTime);
        navigator.vibrate(2000);
        alerter.value = "Your session has ENDED!";
        document.getElementById("text-fill").disabled = true;
        alerter.style.fontSize = "20px";
        return accuracy();
    };
};

// Remove afterwords (because pause is no longer needed)
// function pause() {
//     clearInterval(setTheTime);
// };

let timeStamp

function stopGame() {
    // alert('I work')
    var mins = document.getElementById("minute");
    var secs = document.getElementById("second");
    // var timeDown = document.getElementById("timeCountdown"); //*
    // var minSecHand = document.getElementById("timeDuration"); //*
    var target = document.getElementById("target");
    // var noOfW = document.getElementById("wpm"); //*
    var wpm = document.getElementById("noW");
    var form = document.getElementById("form-fill");
    var check = document.getElementById("form-check");
    var typed = document.getElementById("text-fill");    
    var lightThree = document.getElementById("easy");
    var lightTwo = document.getElementById("medium");    
    var light = document.getElementById("hard");
    var wordCount = document.getElementById("grandLevel"); // typed words
    // var text = document.getElementById("text");

    if(!wordCount.value){
        alert("Please ensure you typed something")
        return
    }
    clearInterval(setTheTime); 
    
    document.getElementById("play").style.backgroundColor = "green";
    document.getElementById("stop").style.backgroundColor = "orangered";   

    document.getElementById("instructionBoxOne").innerHTML = "You ended the test. Press 'Reset' to refresh test..";

    timeStamp = mins.value;
    lightThree.style.color = "#5443de";
    lightTwo.style.color = "#5443de";
    light.style.color = "#5443de";
    form.value = null;
    typed.value = null;
    check.value = null;
    mins.value = null;
    secs.value = null;
    mins.placeholder = "00";
    secs.placeholder = "00";
    mins.style.border = "2px solid dimgray";
    secs.style.border = "2px solid dimgray";
    // timeDown.value = "00";
    // minSecHand.innerHTML = "min";
    // timeDown.style.border = "1.2px solid gray";
    // minSecHand.style.border = "2px solid black";
    // timeDown.style.color = "gray";
    // minSecHand.style.color = "gray";
    // timeDown.style.padding = "5.1px";
    // minSecHand.style.padding = "5.1px ";
    // timeDown.style.fontSize = "30px";
    // minSecHand.style.fontSize = "20px";
    // noOfW.value = null;
    target.value = null
    // noOfW.placeholder = "Word per min";
    target.placeholder = "Word Target";
    target.style.border = "1.6px solid gray";
    // noOfW.style.border = "1.6px solid gray";
    target.style.color = "gray";
    // noOfW.style.color = "gray";
    wpm.value = 0;
    // wpm.placeholder = "number of words";
    // wpm.style.border = "none";
    // wpm.style.backgroundColor = "white";
    // circle.style.border = "2.4px solid dimgray";
    document.getElementById("medium").disabled = true;
    document.getElementById("easy").disabled = true;
    document.getElementById("hard").disabled = true;
    return accuracy()
}



function del(){
    document.getElementById("instructionBoxOne").innerHTML = "Can not clear value";// var noW = document.getElementById("noW");
    // var noOfWords = document.getElementById("text-fill");
    // var grandLevel = document.getElementById("grandLevel");
    // var grandKeySpace = document.getElementById("grandKeySpace");

    // var Size = noOfWords.value.length;
    // if (Size > 0) {
    //     const no = noW.value; 
    //     var backSpacer = parseFloat(no) / 5;
    //     noW.value--;
    //     document.getElementById("text-fill").value = document.getElementById("text-fill").value.slice(0, -1);
    //     grandLevel.value = parseInt(backSpacer);
    //     document.getElementById("form-check").value = document.getElementById("form-check").value.slice(0, -1);
    // } else if( Size === 0){
    //     // Size = 46;
    //     // alert(Size);
    //     noW.value = null;
    // }
};

function keyCl(evt){
    const key = evt.code;
    const keyBack = evt.key;
    evt = (evt) ? evt : Window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    var writeUp = document.getElementById("word");
    var form = document.getElementById("form-fill"); // note // to get length value of the form fill
    var typed = document.getElementById("text-fill"); //note
    let chart = typed.value.length;
    var checked = document.getElementById("form-check"); // To check value display
    var noW = document.getElementById("noW");
    var grandSelection = document.getElementById("grandSelect");
    var grandLevel = document.getElementById("grandLevel");
    var grandLevelOne = document.getElementById("grandLevelOne");
    var grandLevelTwo = document.getElementById("grandLevelTwo");
    var grandLevelThree = document.getElementById("grandLevelThree");
    var grandKeySpace = document.getElementById("grandKeySpace");
    // var groundSelection = document.getElementById("groundSelection");
    var noWOne = document.getElementById("noW-one");

    if((( charCode >= 65 && charCode <= 90 ) || ( charCode >= 97 && charCode <= 122 ) || ( charCode >= 48 && charCode <= 57 )) || (charCode === 44) || (charCode === 46)){    
        document.getElementById("instructionBoxOne").innerHTML = ".. now you can begin test. Press 'stop' to stop the test! Make sure to type correctly, to gain more points"
        

        noW.value++; //Note
        // TotalNoOfW.value = form.value.length;
        const no = noW.value;  //get the no of words

        // const indexNo = no - 1;

        // To count the number of words
        var mod = parseFloat(no) % 5;
        var backSpacer = parseFloat(no) / 5;
        // if(mod == 0){
        //     grandLevel.value++;
        // } 
        grandLevel.value = parseInt(backSpacer);

        if(grandLevel.value ===  noWOne.value){   
            return stopGame();
        }
        // if(second === item){
        //     checked.value = typedVal;
        //     checked.style.color = "green";
        // }else{
        //     checked.value = typedVal;
        //     checked.style.color = "red";
        // } 
        
        
    }
    
    if(((charCode >= 65 && charCode <= 90 ) || ( charCode >= 97 && charCode <= 122 ) || ( charCode >= 48 && charCode <= 57 )) || (chart === 45 ) || (charCode === 44) || (charCode === 46) || (key === "Space")){
        const formVal = form.value; //parse form array as var
        const formArray = Array.from(formVal); //Parse form inside an array
        const typedVal = typed.value; //parse text(typed) array as var
        var typedArray = Array.from(typedVal); //Parse text(typed) inside an array 
        const typedEach = typedArray.at(-1); // get the last item(element)  
        const lentCount = typedArray.length ; //to get the index of the typedArray
        
        // const typedEachh = typedVal.at(-1); // get the last item(element)
        var check = checked.value;
        // var checkEach = check.at(-1); //get the last item(on checking) 

        var item = formArray[lentCount-1];
        var second = typedArray[lentCount-1];

        if(second === item){
            checked.value += typedEach;
            checked.style.color = "green";
            grandLevelOne.value++;
        }else{
            checked.value += "+";
            checked.style.color = "red";
            grandLevelTwo.value++;
        }

        grandKeySpace.value++;
        var grandKey = parseFloat(grandKeySpace.value);
        var grandSel = parseFloat(grandSelection.value);

        //  to autochange slide after every completion 
        if(grandKey == grandSel){
            document.getElementById("tickCheck").style.color = "green";
            typed.value = null;
            document.getElementById("grandKeySpace").value = 0;
            return firstName();
        }else{
            document.getElementById("tickCheck").style.color = "red";
        }
    };


    
    if( keyBack === "Enter"){
        // typed.value = null;
        // return firstName();
    }

    // writeUp.style.color =  (light.style.backgroundColor == "green") ? "white" : "green";
    // If backspace is pressed, the number of words reduces
    //  Fix the backspace to no of words
    if(keyBack === "Backspace"){
        // evt.preventDefault()
        return
        // const no = noW.value; 
        // var backSpacer = parseFloat(no) / 5;
        // noW.value--;
        // grandKeySpace.value--;  
        // grandLevel.value = parseInt(backSpacer);
        // document.getElementById("form-check").value = document.getElementById("form-check").value.slice(0, -1);
        // if(chart === 0){
        //     noW.value = null;
        // }
        // if(mod == 0){
        // } 

    }
}

function keyCle(evt){
    const keyBack = evt.key;
    if(keyBack === "Backspace"){
        evt.preventDefault()
        document.getElementById("instructionBoxOne").innerHTML = "Can not clear value";
    
    }
}

// function stopGame(){
//     var mins = document.getElementById("minute");
//     var secs = document.getElementById("second");
//     var timeDown = document.getElementById("timeCountdown");
//     var minSecHand = document.getElementById("timeDuration");
//     var target = document.getElementById("target");
//     var noOfW = document.getElementById("wpm");
//     var wpm = document.getElementById("noW");
//     var form = document.getElementById("form-fill");
//     var check = document.getElementById("form-check");
//     var typed = document.getElementById("text-fill");    
//     var lightThree = document.getElementById("easy");
//     var lightTwo = document.getElementById("medium");    
//     var light = document.getElementById("hard");
//     // var text = document.getElementById("text-fill");

//     clearInterval(setTheTime); 
    
//     document.getElementById("play").style.color = "white";
//     document.getElementById("stop").style.color = "orangered";

//     document.getElementById("instructionBoxOne").innerHTML = "You have just ended the game. Now, press reload to refresh the board!";
    
//     lightThree.style.color = "#5443de";
//     lightTwo.style.color = "#5443de";
//     light.style.color = "#5443de";
//     form.value = null;
//     typed.value = null;
//     check.value = null;
//     mins.value = null;
//     secs.value = null;
//     mins.placeholder = "00";
//     secs.placeholder = "00";
//     mins.style.border = "2px solid dimgray";
//     secs.style.border = "2px solid dimgray";
//     timeDown.value = "00";
//     minSecHand.innerHTML = "min";
//     timeDown.style.border = "1.2px solid gray";
//     minSecHand.style.border = "2px solid black";
//     timeDown.style.color = "gray";
//     minSecHand.style.color = "gray";
//     timeDown.style.padding = "5.1px";
//     minSecHand.style.padding = "5.1px ";
//     timeDown.style.fontSize = "30px";
//     minSecHand.style.fontSize = "20px";
//     noOfW.value = null;
//     target.value = null
//     noOfW.placeholder = "Word per min";
//     target.placeholder = "Word Target";
//     target.style.border = "1.6px solid gray";
//     noOfW.style.border = "1.6px solid gray";
//     target.style.color = "gray";
//     noOfW.style.color = "gray";
//     wpm.value = null;
//     wpm.placeholder = "number of words";
//     wpm.style.border = "none";
//     wpm.style.backgroundColor = "white";
//     typed.value = "You ended the game. Press 'Reset' to refresh the game";
//     document.getElementById("text-fill").disabled = true;
//     document.getElementById("medium").disabled = false;
//     document.getElementById("easy").disabled = false;
//     document.getElementById("hard").disabled = false;
//     return accuracy();
    

// }

function accuracy(){
    var wc = document.getElementById("grandLevelOne"); // correctly typed
    var wl = document.getElementById("grandLevelTwo"); // wrongly typed
    var Count = document.getElementById("grandLevelThree"); // results
    var wordTarget = document.getElementById("noW-one"); // target words 
    var wordCount = document.getElementById("grandLevel"); // typed words
    var noWTwo = document.getElementById("noW-two");  // Target time
    // timeStamp // time taken
    // var points = 5;
    if(!wordCount.value){
        alert("Please ensure you typed something")
        return
    }
    // // To calculate the points for typing (with errors)
    var sumOne = parseFloat(wc.value) + parseFloat(wl.value); // sum of characters typed
    const firstPoints = parseFloat(wc.value) / sumOne;
    const pointOne = firstPoints * 2;
    // const firstPoint = pointOne.toFixed(2);

    // // To calculate the points for words 
    var sumTwo = parseFloat(wordCount.value) / parseFloat(wordTarget.value);
    const pointTwo = sumTwo * 2;
    // const secondPoint = pointTwo.toFixed(2);
    var sum = parseFloat(noWTwo.value) - parseInt(timeStamp); //  time taken(minutes)
    const secondPoints = sum / parseFloat(noWTwo.value) 
    const pointThree = secondPoints * 2
   // (Time given - time taken) 
    // // Sum of both points
    const sumPoints = pointOne + pointTwo + pointThree;
    const totalDiff = sumPoints / 6;
    var totalDiffer = totalDiff.toFixed(3);
    const accurate = totalDiffer * 100;

    Count.value = accurate.toFixed(1);

    // Type in the codes for results
    // // Type in the codes for results
    //     var resultOne = reader.value / word;
    //     var finalResultOne = resultOne * 100; // calculate the percentage result

    //     result.value = finalResultOne.toFixed(1);

}

function  firstName(){
    
    var Mins = document.getElementById("noW-two");
    var form = document.getElementById("form-fill");
    

    // lIST THE ARRAY
    var namesOne = [
        ["aNd ink GOD key EAR EyE jAR war"],
        ["WouLD wonDA WiDTH LigHT Red War"],
        ["The HaS loT Plan TO maKe BLue"],
        ["WiDTH LigHT  ThESE find floUnder"],
        ["plaN Plank TO AfrIcA  TO maKe"],
        ["Pot Made RanGE LigHT fly small"],
        ["WOuLD HaS loT Plan BLue WiDTH"],
        ["GiViNg WouLD wonDA maKe BLue ivy"],
        ["Made RanGE BLue WiDTH LigHT drone"],
        ["GiVe find Will HaS loT Fly Dash"],
        ["BLue WiDTH LiTe play Plan meRRy"]
    ];
    // CALL EACH ITEM IN ARRAY RANDOMLY 
    var intOne = Math.floor(Math.random() * namesOne.length);

    var namesTwo = [
        ["ThnDEHaSES P4803tloTs PlankTOnTA"],
        ["emaK093bTa BLeWiDTHfI ue802cLgHT"],
        ["OlaNdOecuR YPlankTOnT ARIffmaK09"],
        ["MadAMRanGE 3scThESEHa i9098RIf4f"]
        ["nDSPloTsWo fid0EUOuLD i9098RIf4f"],
        ["GiViNos0rd WouLDwonDA maK0936Tay"],
        ["BLeWiDTHfI ue80wcLgHT MadAMRanGE"],
        ["gri096KSlc idkspPloTn dlf4cn490s"],
        ["MadAMRanGE PloTddlfsc nr490sj890"]
    ];
    var intTwo = Math.floor(Math.random() * namesTwo.length);

    var namesThree = [
        ["ThESEi823igPlKS HanPiJ90JEkc0DS"],
        ["PloTkdlfpcn490s pUllUP294floPOh"],
        ["O92rLe0DLkWouLD WiDvlPldkf032TH"],
        ["RanGEepDyEVfjph TaBLepsoJSSK022"],
        ["wonETFVfpsl49DA MadAdjkflvnqflM"],
        ["pUllU0339olancP WiDvlPldkf03wTH"],
        ["GiViNos03db59OG dkvqpP097MAndeM"],
        ["Op203C4CUpatiON PloTadlfscn490s"],
        ["GiViNos03s359OG dkv4pP097MAndeM"],
        ["HanPiJ90JEkc0DS PloTgdlfucn490s"]
    ];
    var intThree = Math.floor(Math.random() * namesThree.length);

    
    if(Mins.value == 30){ 
        form.value = namesOne[intOne];
        // to run the number of character codes from form to count
        document.getElementById("grandSelect").value = document.getElementById("form-fill").value.length;
        // clear check box
        document.getElementById("form-check").value = null;
    }else if(Mins.value == 25){
        form.value = namesTwo[intTwo];
        // to run the number of character codes from form to count
        document.getElementById("grandSelect").value = document.getElementById("form-fill").value.length;
        // clear check box
        document.getElementById("form-check").value = null;
    }else if(Mins.value == 20){
        form.value = namesThree[intThree];
        // to run the number of character codes from form to count
        document.getElementById("grandSelect").value = document.getElementById("form-fill").value.length;
        // clear check box
        document.getElementById("form-check").value = null;
    };

}


// The switch buttons 

// function loadingSyncOne(){
//     var controlOne = document.getElementById("controlOne");
//     var controlTwo = document.getElementById("controlTwo");
//     var indicate = document.getElementById("indicator");
//     var instructionOne = document.getElementById("instructionBoxOne");
//     var instructionTwo = document.getElementById("instructionBoxTwo");
//     var resultBoxOne = document.getElementById("resultBoxOne");
//     var resultBoxTwo = document.getElementById("resultBoxTwo");

//     document.getElementById("instructionBoxOne").innerHTML = " For test one: Your test is disabled. To enable test, please select from any of the levels below ie. Easy, Medium, Hard. Then ... ";
//     controlOne.style.display = "flex";
//     resultBoxOne.style.display = "block";
//     controlTwo.style.display = "none";
//     resultBoxTwo.style.display = "none";
//     indicate.value = "T1";
//     instructionOne.style.display = "flex";
//     instructionTwo.style.display = "none";

// }

// function loadingSyncTwo(){
//     var controlOne = document.getElementById("controlOne");
//     var controlTwo = document.getElementById("controlTwo");
//     var indicate = document.getElementById("indicator");
//     var instructionOne = document.getElementById("instructionBoxOne");
//     var instructionTwo = document.getElementById("instructionBoxTwo");
//     var resultBoxOne = document.getElementById("resultBoxOne");
//     var resultBoxTwo = document.getElementById("resultBoxTwo");

//     // document.getElementById("instructionBoxTwo").innerHTML = "For Test two. Your test is been disabled. To enable test, set your test value. First input a time duration (Mins & Secs)..";
//     controlOne.style.display = "none"
//     resultBoxOne.style.display = "none";
//     controlTwo.style.display = "flex";
//     resultBoxTwo.style.display = "block";
//     indicate.value = "T2";
//     instructionOne.style.display = "none";
//     instructionTwo.style.display = "flex";

// }


// var testOne = document.getElementById("firstTest");
// var testTwo = document.getElementById("secondTest");

// testOne.onclick = function(){
//     document.getElementById('firstTest').style.color = "green";
// }





// Second Test
// To set the apply button
// window.onload = function(){
//     var mins = document.getElementById("mins");
//     var secs = document.getElementById("secs");

//     // if(  ){

//         if (mins.value == 0 || secs.value == 0) {
//             document.getElementById("text").disabled = true;
//             document.getElementById("word").disabled = true;
//             document.getElementById("instructionBox").innerHTML = "Your test is been disabled. To enable test, set your test value. First input a time duration (Mins & Secs)..";
//         }
//         if(!mins || !secs){
//             document.getElementById("text").disabled = true;
//             document.getElementById("word").disabled = true;
//         }
//     // }
// }





















































// function sumUpTwo(){
//     var gross = document.getElementById("wordCorrect");
//     var actualWord = document.getElementById("word");
//     var mins = document.getElementById("min");
//     var secs = document.getElementById("sec");
//     var wordWrong = document.getElementById("wordWrong");
//     var num = document.getElementById("wordOne");
//     var resultOutput = document.getElementById("resultTwo");

//     //To calculate the time progress with errors
//     var x = num.value;
//     var u = wordWrong.value;
//     var minSec = secs.value / 60;
//     var min = mins.value;
//     var time = parseFloat(min) + minSec;
//     var i = parseFloat(x) - parseFloat(u);
//     var error = i / 5;
//     var u = error / time;

//     // To calculate the actual score
//     var aWd = actualWord.value;
//     var word = parseFloat(aWd) / parseFloat(min);

//     var results = u / word;
//     var finalResults = results * parseFloat(100);
    
//     // Pass results into 2 decimal points
//     var results = finalResults.toFixed(1);
//     resultOutput.value = results;
// }


// function sumUpOne(){
//     var num = document.getElementById("wordOne");
//     var mins = document.getElementById("min");
//     var secs = document.getElementById("sec");
//     var actualWord = document.getElementById("word");
//     var resultOutput = document.getElementById("resultTwo");
//     // var presentWords = document.getElementById("wordCorrect");

//     // var error = checkedWrong.value;
//     //To calculate the time progress without errors
//     var x = num.value;
//     var minSec = secs.value / 60;
//     var min = mins.value;
//     var time = parseFloat(min) + minSec;
//     var numerator = parseFloat(x) / 5;
//     var gross = numerator /time;

//     // To calculate the actual score
//     var aWd = actualWord.value;
//     var word = parseFloat(aWd) / parseFloat(mins.value);

//     var results = gross / word;
//     var finalResults = results * parseFloat(100);

//     // Pass results into 2 decimal points
//     var result = finalResults.toFixed(1);
//     resultOutput.value = gross;
// }














// function wordError(){
//     var gross = document.getElementById("wordCorrect");
//     // var forErr = document.getElementById("checkForm");
//     var mins = document.getElementById("min");
//     var secs = document.getElementById("sec");
//     var wordWrong = document.getElementById("wordWrong");
//     // var testing = document.getElementById("testingOneTwo");

//     var minSec = secs.value / 60;
//     var min = mins.value;
//     var time = parseFloat(min) + minSec;
//     var error = wordWrong.value;

//     var u = parseFloat(error) / time;
//     var net = calculate() - parseFloat(u);
//     // var net = parseFloat(gross.value) - parseFloat(u); 
//     return parseFloat(net);


// }

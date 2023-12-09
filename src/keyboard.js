
// controls the cap lock
function cap(){
    var light = document.getElementById("light");
    var lightMobile = document.getElementById("lightMobile");
    
    light.style.backgroundColor =  (light.style.backgroundColor == "chartreuse") ? "white" : "chartreuse";
    lightMobile.style.backgroundColor =  (lightMobile.style.backgroundColor == "chartreuse") ? "white" : "chartreuse";
};

//Controls the shift buttton
function shift(){
    var light = document.getElementById("Shift");
    var ShiftLight = document.getElementById("ShiftMobile");
    
    light.style.backgroundColor =  (light.style.backgroundColor == "chartreuse") ? "white" : "chartreuse";
    ShiftLight.style.backgroundColor =  (ShiftLight.style.backgroundColor == "chartreuse") ? "white" : "chartreuse";
};

function space(){
    var indicator = document.getElementById("indicator")
  
    switch (indicator.value ) {
        case'T1':
            spaceOne()
            break;
        case'T2':
            spaceTwo()
                break;
        default:
            break;
    }
}

//  for the first test
function spaceOne(){
    var noW = document.getElementById("noW");
    var form = document.getElementById("form-fill"); // note // to get length value of the form fill
    var typed = document.getElementById("text-fill");
    var checked = document.getElementById("form-check"); // To check value display
    var grandSelection = document.getElementById("grandSelect");
    var grandLevel = document.getElementById("grandLevel");
    var grandLevelOne = document.getElementById("grandLevelOne");
    var grandLevelTwo = document.getElementById("grandLevelTwo");
    var grandKeySpace = document.getElementById("grandKeySpace");

    const formVal = form.value; //parse form array as var
        const formArray = Array.from(formVal); //Parse form inside an array
        const typedVal = typed.value; //parse text(typed) array as var
        var typedArray = Array.from(typedVal); //Parse text(typed) inside an array 
        const typedEach = typedArray.at(-1); // get the last item(element)  
        const lentCount = typedArray.length ; //to get the index of the typedArray
        
        var item = formArray[lentCount-1];
        var second = typedArray[lentCount-1];


        typed.value += " ";

    if(second === item){
        checked.value += " ";
        checked.style.color = "green";
        grandLevelOne.value++;
    }else{
        checked.value += " ";
        checked.style.color = "red";
        grandLevelTwo.value++;
    }
    // noW.value++;
    
    grandKeySpace.value++;
    var grandKey = parseFloat(grandKeySpace.value);
    var grandSel = parseFloat(grandSelection.value);

    if(grandKey == grandSel){
        document.getElementById("tickCheck").style.color = "green";
        typed.value = null;
        document.getElementById("grandKeySpace").value = 0;
        return firstName();
    }else{
        document.getElementById("tickCheck").style.color = "red";
    }

}

//  for the second test
function spaceTwo(){
    var typed = document.getElementById("text"); //note
    
    typed.value = null;
    return secondName();
}

function enterBtn(){
    var indicator = document.getElementById("indicator")
    var typed = document.getElementById("text"); //note

  if(indicator.value == 'T2'){
    typed.value = null;
    return secondName();

  }

    // switch (indicator.value ) {
    //     case'T2':
    //     typed.value = null;
    //     return secondName();
    //             break;
    //     default:
    //         break;
    // }
    
}

function nb(val){
    var indicator = document.getElementById("indicator")
    // if(indicator.value === 'T1'){
    //     testOne(val)
    // }else if(indicator.value === 'T2'){
    //     testTwo(val)
    // }

    switch (indicator.value ) {
        case'T1':
            testOne(val)
            break;
        case'T2':
            testTwo(val)
                break;
        default:
            break;
    }
}



// Controls the typing text syntax for text two
function testTwo(val){
    var light = document.getElementById("light");
    var lightTwo = document.getElementById("Shift");
    var lightTwoPoint = document.getElementById("ShiftMobile");
    // var disp = document.getElementById("text-fill");
    // const key = val.code;
    // const keyBack = val.key;
    val = (val) ? val : Window.event;
    var charCode = (val.which) ? val.which : val.keyCode;
    // var num = document.getElementById("wordOne");
    var speed = document.getElementById("reader");
    var writeUp = document.getElementById("word");
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
    // let chart = typed.innerHTML.length;

    document.getElementById("instructionBoxTwo").innerHTML = "Press 'Enter' or 'Space' on your keyboard to change set of words. Press 'Stop' to end Test Two!";

    // test 3
    if((light.style.backgroundColor == "chartreuse") || (lightTwo.style.backgroundColor == "chartreuse")){
        typed.value += val.toUpperCase();
        light.style.backgroundColor == "chartreuse"; 
        lightTwo.style.backgroundColor = "white";
        lightTwoPoint.style.backgroundColor = "white";
    }else{        
        typed.value += val;
    }

    // const no = noW.value;  //get the no of words

    // const indexNo = no - 1;

        wordsTyped.value++;
        
        const formVal = form.value; //parse form array as var
        const formArray = Array.from(formVal); //Parse form inside an array
        const typedVal = typed.value; //parse text(typed) array as var
        var typedArray = Array.from(typedVal); //Parse text(typed) inside an array 
        const typedEach = typedArray.at(-1); // get the last item(element)
        const lentCount = typedArray.length; //to get the index of the typedArray

            // console.log("check 187: " + formArray.length)
            // console.log("typed 188: " + typedArray.length)
    // // To count the number of words
    // var mod = parseFloat(no) % 5;
    // var backSpacer = parseFloat(no) / 5;
    // // if(mod == 0){
    // //     grandLevel.value++;
    // // } 
    // grandLevel.value = parseInt(backSpacer);

    // if(grandLevel.value ===  noWOne.value){   
    //     return haltGame();
    // }
    // var word = document.getElementById("word");

    // if((( charCode >= 65 && charCode <= 90 ) || ( charCode >= 97 && charCode <= 122 )) || (chart === 44 )|| (charCode === 46) || (key === "Space")){    

        // noW.value++; //Note
        // TotalNoOfW.value = form.value.length;
        // const no = noW.value;  //get the no of words
        // const indexNo = no - 1;
        // const formVal = form.value; //parse form array as var
        // const formArray = Array.from(formVal); //Parse form inside an array
        // const typedVal = typed.value; //parse text(typed) array as var
        // var typedArray = Array.from(typedVal); //Parse text(typed) inside an array 
        // const typedEach = typedArray.at(-1); // get the last item(element)
        // const lentCount = typedArray.length ; //to get the index of the typedArray
        
        // // const typedEachh = typedVal.at(-1); // get the last item(element)
        // console.log(typed.value)
        // console.log(typedVal.value) 
         let wordChecking = wordsTyped.value % 5;
        if (wordChecking == 0) {
            words.value++;
            // alert("tick");
        }

        var check = checked.value;
        // var checkEach = check.at(-1); //get the last item(on checking) 

        var item = formArray[lentCount-1];
        var second = typedArray[lentCount-1];

        
        if(second === item){
            checked.value += typedEach;
            checked.style.color = "green";
            wordCorrect.value++;
        }else{
            checked.value += "*";
            checked.style.color = "red";
            wordWrong.value++;
        }         
        
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

    // }


    if (words.value === wordsAmount.value) {
        return completeTest();
    }
    
    // writeUp.style.color =  (light.style.backgroundColor == "green") ? "white" : "green";
    // if(keyBack === "Backspace"){
    //     noW.value--;
    //     document.getElementById("form-check").value = document.getElementById("form-check").value.slice(0, -1);
    //     if(chart === 0){
    //         noW.value = null;
    //     }
    // }

            // to limit the number of typed in words
            if(typedArray.length > formArray.length){
                typed.value = null
                return secondName();
            }

            if(typedArray.length === formArray.length){
                // typed.value = null
                setTimeout(() => {
                    secondName()
                    typed.value = null
                }, 200)
                 return
            }
        

};


// Controls the typing text syntax for text one
function testOne(val){
    var light = document.getElementById("light");
    var lightTwo = document.getElementById("Shift");
    var lightTwoPoint = document.getElementById("ShiftMobile");
    // var disp = document.getElementById("text-fill");
    // const key = val.code;
    // const keyBack = val.key;
    val = (val) ? val : Window.event;
    var charCode = (val.which) ? val.which : val.keyCode;
    var writeUp = document.getElementById("word");
    var form = document.getElementById("form-fill"); // note
    var typed = document.getElementById("text-fill"); //note
    let chart = typed.value.length;
    var checked = document.getElementById("form-check"); // To check value display
    // let chart = typed.innerHTML.length;
    var noW = document.getElementById("noW");
    var grandSelection = document.getElementById("grandSelect");
    var grandLevel = document.getElementById("grandLevel");
    var grandLevelOne = document.getElementById("grandLevelOne");
    var grandLevelTwo = document.getElementById("grandLevelTwo");
    var grandLevelThree = document.getElementById("grandLevelThree");
    var grandKeySpace = document.getElementById("grandKeySpace");
    var noWOne = document.getElementById("noW-one");

    document.getElementById("instructionBoxOne").innerHTML = ".. now you can begin test. Press 'stop' to stop the test! Make sure to type correctly, to gain more points"
    
    // test 3
    if((light.style.backgroundColor == "chartreuse") || (lightTwo.style.backgroundColor == "chartreuse")){
        typed.value += val.toUpperCase();
        light.style.backgroundColor == "chartreuse"; 
        lightTwo.style.backgroundColor = "white";
        lightTwoPoint.style.backgroundColor = "white";
    }else{        
        typed.value += val;
    }

    noW.value++; //Note
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
        return haltGame();
    }
    // var word = document.getElementById("word");

    // if((( charCode >= 65 && charCode <= 90 ) || ( charCode >= 97 && charCode <= 122 )) || (chart === 44 )|| (charCode === 46) || (key === "Space")){    

        // noW.value++; //Note
        // TotalNoOfW.value = form.value.length;
        // const no = noW.value;  //get the no of words
        const indexNo = no - 1;
        const formVal = form.value; //parse form array as var
        const formArray = Array.from(formVal); //Parse form inside an array
        const typedVal = typed.value; //parse text(typed) array as var
        var typedArray = Array.from(typedVal); //Parse text(typed) inside an array 
        const typedEach = typedArray.at(-1); // get the last item(element)
        const lentCount = typedArray.length ; //to get the index of the typedArray
        
        // const typedEachh = typedVal.at(-1); // get the last item(element)
        console.log(typed.value)
        console.log(typedVal.value)
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

        if(grandKey == grandSel){
            document.getElementById("tickCheck").style.color = "green";
            typed.value = null;
            document.getElementById("grandKeySpace").value = 0;
            return firstName();
        }else{
            document.getElementById("tickCheck").style.color = "red";
        }
        
    // }

    
    // writeUp.style.color =  (light.style.backgroundColor == "green") ? "white" : "green";
    // if(keyBack === "Backspace"){
    //     noW.value--;
    //     document.getElementById("form-check").value = document.getElementById("form-check").value.slice(0, -1);
    //     if(chart === 0){
    //         noW.value = null;
    //     }
    // }


};



function del(){
    var indicator = document.getElementById("indicator")

    switch (indicator.value ) {
        case'T1':
        document.getElementById("instructionBoxOne").innerHTML = "Can not clear value";
            break;
        case'T2':
        document.getElementById("instructionBoxTwo").innerHTML = "Can not clear value";
                break;
        default:
            break;
    }
   
};








// // Trying to add a letter recognition code 
// // Under work
// function letter(evt){
//     // const key = event.key;
//     const key = event.key;
//     evt = (evt) ? evt : Window.event;
//     var charCode = (evt.which) ? evt.which : evt.keyCode;
//     var type = document.getElementById("wordsToTyp");
//     var typed = document.getElementById("text-fill");
//     let chart = typed.value.length;
//     var noW = document.getElementById("noW");
//     var text = typed.outerHTML;
//     var nArray = new Array();
//     // var Size = typed.innerHTML.length;
//     // var textTo = text.match(type);
//     if(((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) || chart > 0){
//         noW.value++;

//         // alert(chart);
//         // for(i = 0; i < 200; i++){
//         //     nArray[i] = type.value.charAt(i);
//         //     alert(nArray[i]);
//         //     var cod = nArray[i];
//         //     if(cod == typed.value ){
//         //         typed.style.color = "green";
//         //     }else{
//         //         typed.style.color = "red";
//         //     }
//         // }

//     } 
    
//     // If backspace is pressed, the number of words reduces
//     //  Fix the backspace to no of words
//     if(key === "Backspace"){
//         // alert(key);
//         // checkifempty();
//         noW.value--;
//     }else if(chart === 0){
//         // Size = 46;
//         noW.value = null;
//     };

//     // When the space key is pressed on the keyboard, the no of words remains constant
//     // Fault is, when backspace is applied, the no of words is counted
//     if(key === "Space"){
//         document.getElementById("noW").value = noW.value;
//     };
// };

// // to skip the number count after pressing the space button
// // Still under construction(to reflect [both upper cases and upper keys] for both the number keys and the typing keys)
// function letterr(evt){
//     var noW = document.getElementById("noW");
//     var light = document.getElementById("Shift");

//     noW.value++;
//     // When light is green, run code, else increment the noW(number of words)
//     // if(light.style.backgroundColor == "green"){
//     //     // alert("Not Assigned");
//     //     light.style.backgroundColor = "white";
//     //     return;
//     // }else{        
//     //     noW.value++;
//     // }    
// };

// // controls the numbers syntax
// // Assign a response for shift using ascii code
// function numb(val){
//     var light = document.getElementById("Shift");
//     var disp = document.getElementById("text");

//     if(light.style.backgroundColor == "chartreuse"){
//         // alert("Not Assigned");
//         light.style.backgroundColor = "white";
//     }else{        
//         document.getElementById("text").value += val;
//     } 
// }

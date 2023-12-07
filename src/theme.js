function mode() {
    const icon = document.getElementById("modeNo");

    if (icon.value === '1') {
        dark();
        darkTwo();
    } else if (icon.value === '2') {
        light();
        lightTwo();
    }
}


function light() {
    const icon = document.getElementById("mode");
    const iconVal = document.getElementById("modeNo");
    const title = document.getElementById("TITLE");
    const texts = document.getElementById("TEXTONE");
    const screen = document.getElementById("SCREEN");
    const bodyOne = document.getElementById("BODYONE");
    const bodyTwo = document.getElementById("BODYTWO");
    const instructionOne = document.getElementById("INSTRUCTIONONE");
    const instructionTwo = document.getElementById("INSTRUCTIONTWO");
    const instructionThree = document.getElementById("INSTRUCTIONTHREE");
    const instructionFour = document.getElementById("INSTRUCTIONFOUR");
    const instructionFive = document.getElementById("INSTRUCTIONFIVE");
    const typeScreen = document.getElementById("text-fill");
    const easy = document.getElementById("easy");
    const medium = document.getElementById("medium");
    const hard = document.getElementById("hard");
    const one = document.getElementById("testOneC");
    const two = document.getElementById("testTwoC");
    const keyboard = document.getElementById('keyboard');

    iconVal.value = 1;
    icon.style.backgroundColor = 'whitesmoke';
    screen.style.backgroundColor = 'white';
    typeScreen.style.backgroundColor = 'skyblue';
    title.style.backgroundColor = 'cadetblue';
    bodyOne.style.backgroundColor = 'silver';
    bodyTwo.style.backgroundColor = 'silver';
    instructionOne.style.backgroundColor = 'cadetblue'
    instructionTwo.style.backgroundColor = 'cadetblue';
    instructionThree.style.backgroundColor = 'cadetblue';
    instructionFour.style.backgroundColor = 'cadetblue';
    instructionFive.style.backgroundColor = 'cadetblue';
    easy.style.backgroundColor = 'lightblue';
    medium.style.backgroundColor = 'lightblue';
    hard.style.backgroundColor = 'lightblue';
    one.style.backgroundColor = 'lightblue';
    two.style.backgroundColor = 'lightblue';
    keyboard.style.backgroundColor = 'silver'
}

function lightTwo() {
    const icon = document.getElementById("mode");
    const iconVal = document.getElementById("modeNo");
    const title = document.getElementById("TITLE");
    const texts = document.getElementById("TEXTONE");
    const screen = document.getElementById("SCREENTWO");
    const bodyThree = document.getElementById("BODYTHREE");
    const bodyFour = document.getElementById("BODYFOUR");
    const bodyFive = document.getElementById("BODYFIVE");
    const bodySix = document.getElementById("BODYSIX");
    const bodySeven = document.getElementById("BODYSEVEN");
    const instructionOne = document.getElementById("INSTRUCTIONONE");
    const instructionTwo = document.getElementById("INSTRUCTIONTWO");
    const instructionThree = document.getElementById("INSTRUCTIONTHREE");
    const present = document.getElementById("present");
    const presents = document.getElementById("presents");
    const boardOne = document.getElementById("boardOne");
    const circleBG = document.getElementById("circleBG");
    const boardTwo = document.getElementById("boardTwo");
    const keyboard = document.getElementById("keyboard");
    const apply = document.getElementById("apply");
    const start = document.getElementById("start");
    const stop = document.getElementById("stopping");
    const one = document.getElementById("firstTest");
    const two = document.getElementById("secondTest");
    const typeScreen = document.getElementById("text");

    iconVal.value = 1;
    // icon.style.backgroundColor = 'slategray';
    screen.style.backgroundColor = 'white';
    typeScreen.style.backgroundColor = 'skyblue';
    // title.style.backgroundColor = 'darkslateblue';
    bodyThree.style.backgroundColor = 'silver';
    bodyFour.style.backgroundColor = 'silver';
    bodyFive.style.backgroundColor = 'darkgray';
    bodySix.style.backgroundColor = 'silver';
    bodySeven.style.backgroundColor = 'darkgray';
    present.style.backgroundColor = 'cadetblue';
    presents.style.backgroundColor = 'cadetblue';
    boardOne.style.backgroundColor = 'silver';
    circleBG.style.backgroundColor = 'silver';
    boardTwo.style.backgroundColor = 'silver'; 
    keyboard.style.backgroundColor = 'silver';
    // instructionOne.style.backgroundColor = 'darkslateblue';
    // instructionTwo.style.backgroundColor = 'darkslateblue';
    // instructionThree.style.backgroundColor = 'darkslateblue';
    apply.style.backgroundColor = 'lightblue';
    start.style.backgroundColor = 'lightblue';
    stop.style.backgroundColor = 'lightblue';
    one.style.backgroundColor = 'lightblue';
    two.style.backgroundColor = 'lightblue';
}


function dark() {
    const icon = document.getElementById("mode");
    const iconVal = document.getElementById("modeNo");
    const title = document.getElementById("TITLE");
    const texts = document.getElementById("TEXTONE");
    const screen = document.getElementById("SCREEN");
    const bodyOne = document.getElementById("BODYONE");
    const bodyTwo = document.getElementById("BODYTWO");
    const instructionOne = document.getElementById("INSTRUCTIONONE");
    const instructionTwo = document.getElementById("INSTRUCTIONTWO");
    const instructionThree = document.getElementById("INSTRUCTIONTHREE");
    const instructionFour = document.getElementById("INSTRUCTIONFOUR");
    const instructionFive = document.getElementById("INSTRUCTIONFIVE");
    const easy = document.getElementById("easy");
    const medium = document.getElementById("medium");
    const hard = document.getElementById("hard");
    const one = document.getElementById("testOneC");
    const two = document.getElementById("testTwoC");
    const firstTest = document.getElementById("firstTest");
    const secondTest = document.getElementById("secondTest");
    const typeScreen = document.getElementById("text-fill");

    iconVal.value = 2;
    icon.style.backgroundColor = 'slategray';
    screen.style.backgroundColor = 'gray';
    typeScreen.style.backgroundColor = 'darkcyan';
    title.style.backgroundColor = 'darkslateblue';
    bodyOne.style.backgroundColor = 'slategray';
    bodyTwo.style.backgroundColor = 'slategray'; 
    firstTest.style.backgroundColor = 'cornflowerblue';
    secondTest.style.backgroundColor = 'cornflowerblue';
    // firstTest.style.border = '1px solid darkslateblue';
    // secondTest.style.border = '1px solid darkslateblue';
    instructionOne.style.backgroundColor = 'darkslateblue';
    instructionTwo.style.backgroundColor = 'darkslateblue';
    instructionThree.style.backgroundColor = 'darkslateblue';
    instructionFour.style.backgroundColor = 'darkslateblue';
    instructionFive.style.backgroundColor = 'darkslateblue';
    easy.style.backgroundColor = 'cornflowerblue';
    medium.style.backgroundColor = 'cornflowerblue';
    hard.style.backgroundColor = 'cornflowerblue';
    one.style.backgroundColor = 'cornflowerblue';
    two.style.backgroundColor = 'cornflowerblue';
}


function darkTwo() {
    const icon = document.getElementById("mode");
    const iconVal = document.getElementById("modeNo");
    const title = document.getElementById("TITLE");
    const texts = document.getElementById("TEXTONE");
    const screen = document.getElementById("SCREENTWO");
    const bodyThree = document.getElementById("BODYTHREE");
    const bodyFour = document.getElementById("BODYFOUR");
    const bodyFive = document.getElementById("BODYFIVE");
    const bodySix = document.getElementById("BODYSIX");
    const bodySeven = document.getElementById("BODYSEVEN");
    const boardOne = document.getElementById("boardOne");
    const circleBG = document.getElementById("circleBG");
    const boardTwo = document.getElementById("boardTwo");
    const init = document.getElementById("init");
    const instructionOne = document.getElementById("INSTRUCTIONONE");
    const instructionTwo = document.getElementById("INSTRUCTIONTWO");
    const instructionThree = document.getElementById("INSTRUCTIONTHREE");
    const resultBoxOne = document.getElementById("resultssBox");
    // const resultBoxTwo = document.getElementById("resultBoxTwo");
    const present = document.getElementById("present");
    const presents = document.getElementById("presents");
    const keyboard = document.getElementById("keyboard");
    const groundFlex = document.getElementsByClassName("groundFlex");
    const groundFlexTwo = document.getElementsByClassName("groundFlex-box-two");
    const apply = document.getElementById("apply");
    const start = document.getElementById("start");
    const stop = document.getElementById("stopping");
    const one = document.getElementById("firstTest");
    const two = document.getElementById("secondTest");
    const typeScreen = document.getElementById("text");

    iconVal.value = 2;
    // icon.style.backgroundColor = 'slategray';
    screen.style.backgroundColor = 'gray';
    typeScreen.style.backgroundColor = 'darkcyan';
    // title.style.backgroundColor = 'darkslateblue';
    bodyThree.style.backgroundColor = 'slategray';
    bodyFour.style.backgroundColor = 'slategray';
    bodyFive.style.backgroundColor = 'slategray';
    bodySix.style.backgroundColor = 'slategray';
    bodySeven.style.backgroundColor = 'slategray';
    boardOne.style.backgroundColor = 'slategray';
    circleBG.style.backgroundColor = 'slategray';
    boardTwo.style.backgroundColor = 'slategray';
    keyboard.style.backgroundColor = 'slategray';
    // instructionOne.style.backgroundColor = 'darkslateblue';
    // instructionTwo.style.backgroundColor = 'darkslateblue';
    // instructionThree.style.backgroundColor = 'darkslateblue';
    present.style.backgroundColor = 'darkslateblue';
    presents.style.backgroundColor = 'darkslateblue';
    groundFlex.style.backgroundColor = 'darkslateblue';
    groundFlexTwo.style.backgroundColor = 'darkslateblue';
    resultBoxOne.style.border = '5px solid darkslateblue';
    // resultBoxTwo.style.border = '5px solid darkslateblue';
    apply.style.backgroundColor = 'cornflowerblue';
    start.style.backgroundColor = 'cornflowerblue';
    stop.style.backgroundColor = 'cornflowerblue';
    one.style.backgroundColor = 'cornflowerblue';
    two.style.backgroundColor = 'cornflowerblue';
    keyboard.style.backgroundColor = 'slategray'
}

// const boardOne = document.getElementById("board-one");
// const circleBG = document.getElementById("circleBG");
// const boardTwo = document.getElementById("board-two");
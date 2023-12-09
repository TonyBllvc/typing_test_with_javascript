
function system() {
    // //unfreeze
    var myVar = setTimeout(myShow, 2300);
    return myVar;
}

function myShow() {
    document.getElementById("loadSync").style.display = "none";
    document.getElementById("instructMe").style.display = "flex";
    document.getElementById("indicator").value = "T1";

    // to stop the preload..
    // You stop the window from reloading
    window.stop();
}









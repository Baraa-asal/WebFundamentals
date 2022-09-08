var tempType = "c"
function showAlert() {
    alert("Loading weather report...")
}

function hideMsg() {
    document.querySelector("footer").style.display = "none"
}

function loadTemperatures() {
    
    let degrees = document.querySelectorAll(".tempetatures > p")  //returns array of ELEMENTS
    console.log(degrees)
    for(i=0; i<degrees.length; i++) {
        degrees[i].innerText = convertTemperature(parseInt(degrees[i].innerText)) + "°"
    }
}

function convertTemperature (temp) {
    if(tempType=="c") {
        return Math.round(((temp-32)*5)/9)
    }
    return Math.round(temp*(9/5)+32)
}

function setTempType(type) {
    if(type === tempType){    //this is to test that the temptype is equal to the previous value pressed(chosen).
        return                //this is only optimization, but actually the function is called onChange, so
    }                         //if we click on f again after already clicked nothing will change ASLAN. we can remove it
    tempType = type; 
    loadTemperatures()
}

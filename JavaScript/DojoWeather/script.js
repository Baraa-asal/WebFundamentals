var dayTemp = [24, 27, 21, 26]; var nightTemp = [18, 19, 16, 21];
var tempType = "c"

function showAlert() {
    alert("Loading weather report...")
}

function hideMsg() {
    document.querySelector("footer").style.display = "none"
}




function loadTemperatures() { 
    for(i=1; i<5; i++) {
        var day = document.getElementById("day" + i)
        day.querySelector(".day-temp").innerHTML = convertTemperature(dayTemp[i-1]) + "°"
        day.querySelector(".night-temp").innerHTML = convertTemperature(nightTemp[i-1]) + "°"
    }
}

function convertTemperature (temp) {
    if(tempType=="c") {
        return temp
    }
    return Math.round(temp*(9/5)+32);
}

function setTempType(type) {
    tempType = type;
    loadTemperatures()
}
loadTemperatures()
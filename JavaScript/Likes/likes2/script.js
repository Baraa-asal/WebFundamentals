function likeBtnClicked(index) {
    var counterid = "c"+index;
    var counter = document.getElementById(counterid);
    var countrValue = parseInt(counter.innerHTML);
    counter.innerHTML = ++countrValue;
}
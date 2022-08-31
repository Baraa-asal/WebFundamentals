function likeBtnClicked() {
    var counter = document.getElementById("counter");
    var countrValue = parseInt(counter.innerHTML);
    counter.innerHTML = ++countrValue;
}
function likeBtnClicked(index) {
    var counterid = "c"+index;
    var counter = document.getElementById(counterid);
    var counterValue = counter.innerText; //i dont understand
    counter.innerHTML = ++counterValue;          //innerHTML to return the content of an html element
}
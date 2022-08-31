console.log("page loaded...");

function removeElement(element1) {
    var element = element1.parentElement.parentElement;  //to reach the list. 
    
    if (element1.getAttribute('alt')=='accept') {

        var connections = document.getElementById('connection-badge');
        connections.innerText++;

        var requests = document.getElementById('requests');
        element.remove(); 
        requests.innerText--;

}

else if (element1.getAttribute('alt')=='close') {
        var connections = document.getElementById('connection-badge');
        connections.innerText--;

        var requests = document.getElementById('requests');
        element.remove(); 
        requests.innerText--;
}
}

function changeName() {
    console.log('hi')
    document.getElementById("card-name").innerText = 'Lana';
}

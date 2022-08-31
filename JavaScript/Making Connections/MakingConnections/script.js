console.log("page loaded...");

function removeElement(element1) {
    var element = element1.parentElement.parentElement;  //to reach the list. 
    
    if (element1.getAttribute('alt')=='accept') {

        var connections = document.getElementById('connection-badge');
        var n2 = connections.innerText;
        document.getElementById('connection-badge').textContent = ++n2;

        var requests = document.getElementById('requests');
        var n1 = requests.textContent;
        document.getElementById('requests').textContent = --n1;
        element.remove(); 
}

else if (element1.getAttribute('alt')=='close') {
        var connections = document.getElementById('connection-badge');
        var n2 = connections.innerText;
        document.getElementById('connection-badge').textContent = --n2;

        var requests = document.getElementById('requests');
        var n1 = requests.textContent;
        document.getElementById('requests').textContent = --n1;
        element.remove(); 

}
}

function changeName() {
    console.log('hi')
    document.getElementById("card-name").innerText = 'Lana';
}

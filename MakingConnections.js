
var count = 500;
var nameChange = document.querySelector("#changeName");
var killTodd = document.querySelector("#todd");
var killPhil = document.querySelector("#phil");
var killTodd2 = document.querySelector("#todd2");
var killPhil2 = document.querySelector("#phil2");
var connections = document.querySelector("#circle2")

function changeName() {
    nameChange.innerText = "Karl Pilkington";
}

function removeTodd() {
    killTodd.remove();
    killTodd2.remove();
}

function removePhil() {
    killPhil.remove();
    killPhil2.remove();

}


function yourConnections() {
    count--;
    connections.innerText = count;
}

function addConnections() {
    count++;
    connections.innerText = count;
}
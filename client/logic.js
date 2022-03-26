//const io = require('socket.io-client');

var elems = document.querySelectorAll(".button")
var load = document.querySelector(".load")
var userSymbol = "X"
var compSymbol = "O"
var comDid = true;
var win = document.querySelector(".win")
var lose = document.querySelector(".lose")

load.classList.add("hide")

//socket = io.connect("http://localhost:3000")

elems.forEach(function(elem){
    elem.addEventListener("click", function(){
        if(comDid){
            userClick(elem);
        }
    })
})


function userClick(elem){
    if(elem.innerHTML == ""){
        elem.innerHTML = userSymbol
        if(checkWin(userSymbol)){
            alert("You Won!");
            load.classList.remove("hide");
            console.log("User Won!")
            document.location.reload();
        }else if(draw()){
            alert("Draw!");
            load.classList.remove("hide");
            document.location.reload();
        }else{
            compTurn();
        }
    }
}


function checkWin(symbol){
    var a1=[0,1,2]
    var a2=[3,4,5]
    var a3=[6,7,8]
    var b1=[0,3,6]
    var b2=[1,4,7]
    var b3=[2,5,8]
    var c1=[0,4,8]
    var c2=[2,4,6]

    var won = a1.every(function(i){return elems[i].innerHTML == symbol;}) || a2.every(function(i){return elems[i].innerHTML == symbol;}) || a3.every(function(i){return elems[i].innerHTML == symbol;}) || b1.every(function(i){return elems[i].innerHTML == symbol;}) || b2.every(function(i){return elems[i].innerHTML == symbol;}) || b3.every(function(i){return elems[i].innerHTML == symbol;}) || c1.every(function(i){return elems[i].innerHTML == symbol;}) || c2.every(function(i){return elems[i].innerHTML == symbol;})

    return won;
}


function compTurn(){
    comDid = false;
    load.classList.remove("hide");
    setTimeout(function(){turn()}, 1000);
}

function turn(){
    let pos = Math.random()
    pos = Math.floor(pos * 9);
    if(elems[pos].innerHTML == ""){
        elems[pos].innerHTML = compSymbol;
        if(checkWin(compSymbol)){
            alert("Computer Won!");
            load.classList.remove("hide");
            document.location.reload();
        }else if(draw()){
            alert("Draw!");
            load.classList.remove("hide");
            document.location.reload();
        }
    }else{
        turn();
    }
}


function draw(){
    var draw = true;
    elems.forEach(function(elem){
        if(elem.innerHTML == ""){
            draw = false;
        }
    })
    comDid = true;
    load.classList.add("hide");
    return draw;
}

function wonGame(){
    load.classList.remove("hide");
    win.classList.remove("hide");
    document.location.reload();
}

function losGame(){
    load.classList.remove("hide");
    lose.classList.remove("hide");
    document.location.reload();
}
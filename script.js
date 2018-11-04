window.addEventListener("load", sidenVises);

"use strict";
let points = 10;
let life = 0;

function sidenVises() {
    console.log("siden vises");
    //Hvad der skal ske
    showStart();

}

function showStart() {
    console.log("show start");

    document.querySelector("#start").classList.remove("hide");
    document.querySelector("#spil").classList.add("pulse");
    document.querySelector("#spil").addEventListener("click", hideStart);
}



function hideStart() {
    console.log("hide start");
    document.querySelector("#start").removeEventListener("click", hideStart);

    document.querySelector("#spil").classList.remove("pulse");
    document.querySelector("#start").classList.add("fade_out");

    document.querySelector("#start").addEventListener("animationend", startGame);

    startGame();

}

function startGame() {
    console.log("start game");

    document.querySelector("#start").removeEventListener("animationend", startGame);
    document.querySelector("#start").classList.remove("fade_out");
    document.querySelector("#start").classList.toggle("hide");


    document.querySelector("#hor").addEventListener("click", clickHor);

}

function clickHor() {
    console.log("clickHor");

    if (this.classList.contains("type2")) {
        console.log("type1");
        this.classList.remove("type1");
        document.querySelector("#tander" + "#bryn" + life).classList.add("hide");
        life--;
        points++;
        console.log("dine point er" + points);
        document.querySelector("#points").innerHTML = points;

    } else if (this.classList.contains("type2")) {
        console.log("type2");
        this.classList.remove("type3");
        document.querySelector("#tander" + "#bryn" + life).classList.add("hide");
        life--;
        points++;
        console.log("dine point er" + points);
        document.querySelector("#points").innerHTML = points;

    }

}

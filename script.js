window.addEventListener("load", sidenVises);

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


}

function startGame() {
    console.log("start game");

    document.querySelector("#start").removeEventListener("animationend", startGame);
    document.querySelector("#start").classList.remove("fade_out");

    document.querySelector("#start").classList.add("hide");

}

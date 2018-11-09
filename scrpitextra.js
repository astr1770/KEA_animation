function startGame() {
    console.log("statGame");
    document.querySelector("#start").removeEventListener("animationend", startGame);
    document.querySelector("#start").classList.remove("fade_out");
    document.querySelector("#start").classList.add("hide");
    document.querySelector("#point").innerHTML = "" + points;
    document.querySelector("#raket").addEventListener("click", clickSpaceship);
    document.querySelector("#raket_to").addEventListener("click", clickSpaceship);

    document.querySelector("#tid").innerHTML = tid;

    let timerInterval = setInterval(function () {
        document.querySelector("#tid").innerHTML = tid;
        tid--;
        if (tid < 0) {
            tid = 0;
            clearInterval(timerInterval)
            youWon();
        }
    }, 1000);



}

function clickSpaceship() {
    console.log("clickSpaceship");

    this.classList.remove("fall_down");
    this.classList.remove("fall_down_to");
    points++;
    document.querySelector("#point").innerHTML = "" + points;

    //    this.classList.add("disappear");
    setTimeout(spaceshipGone, 200);

}

function spaceshipGone() {
    console.log("spaceshipGone");
    document.querySelector("#raket").classList.add("fall_down");
    document.querySelector("#raket_to").classList.add("fall_down_to");

}

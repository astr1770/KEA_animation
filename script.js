window.addEventListener("load", sidenVises);

"use strict";
let score = 0;
let time = 20;
let showSettingsEffektSound = true;
let showSettingsMusic = true;
let horCount = 0;

function sidenVises() {
    console.log("siden vises");
    //Hvad der skal ske
    showStart();

}

function showStart() {
    console.log("show start");

    document.querySelector("#start").classList.remove("hide");
    document.querySelector("#play").classList.remove("hide");
    document.querySelector("#play").classList.add("pulse");
    document.querySelector("#play").addEventListener("click", hideStart);
    //    document.querySelector("#click").play();

    document.querySelector("#settings").addEventListener("click", showSettings);
    document.querySelector("#kodben").addEventListener("click", resetHorCount);


}



function hideStart() {
    console.log("hideStart");
    document.querySelector("#start").removeEventListener("click", hideStart);

    document.querySelector("#play").classList.remove("pulse");
    document.querySelector("#start").classList.add("fade_out");
    document.querySelector("#start").classList.add("hide");
    document.querySelector("#click").play();
    document.querySelector("#start").addEventListener("animationend", startGame);

    document.querySelector("#musik").play();
    document.querySelector("#musik").volume = 0.5;

    startGame();

}

function startGame() {
    console.log("startGame");
    document.querySelector("#start").removeEventListener("animationend", startGame);
    document.querySelector("#start").classList.remove("fade_out");
    document.querySelector("#start").classList.add("hide")


    timeLeft();
    document.querySelector("#tidslinje").classList.add("slide");

    document.querySelector("#hor1").addEventListener("click", horClick);
    document.querySelector("#hor2").addEventListener("click", horClick);
    document.querySelector("#hor3").addEventListener("click", horClick);
    document.querySelector("#hor4").addEventListener("click", horClick);
    document.querySelector("#hor5").addEventListener("click", horClick);
    document.querySelector("#hor6").addEventListener("click", horClick);
    document.querySelector("#hor7").addEventListener("click", horClick);
    document.querySelector("#hor8").addEventListener("click", horClick);
    document.querySelector("#score").innerHTML = "" + score;

}

function timeLeft() {
    if (time > 0) {
        time--;
        setTimeout(timeLeft, 1000);
        document.querySelector("#time").innerHTML = time;
    } else {
        if (score > 18) {
            levelComplete();
        } else {
            gameOver2();
        }

    }
}


function horClick() {
    console.log("horClick");

    this.classList.add("hide");
    this.classList.add("hide_this");
    this.addEventListener("animationend", showHor);
    score++;
    horCount++;
    if (horCount > 3) {
        gameOver1();
    } else if (horCount == 0) {
        horCount = 0;
        document.querySelector("#tunge").classList.remove("hide");
    } else if (horCount == 1) {
        horCount = 1;
        document.querySelector("#tunge").classList.remove("hide");
    } else if (horCount == 2) {
        horCount = 2;
        document.querySelector("#tunge").classList.add("hide");
        document.querySelector("#tander").classList.remove("hide");
    } else if (horCount == 3) {
        horCount = 3;
        document.querySelector("#tunge").classList.add("hide");
        document.querySelector("#bryn").classList.remove("hide");
    }

    document.querySelector("#score").innerHTML = "" + score;
    document.querySelector("#saks1").play();

    // this.classList.remove("hide");



}

function showHor() {
    console.log("showHor");
    this.classList.remove("hide");
    this.classList.remove("hide_this");
    this.removeEventListener("animationend", showHor);
}

function resetHorCount() {
    horCount = 0;
    document.querySelector("#tander").classList.add("hide");
    document.querySelector("#tunge").classList.remove("hide");
    document.querySelector("#bryn").classList.add("hide");
}

function showSettings() {
    console.log("showSettings");

    //    document.querySelector("#start").classList.remove("hide");
    document.querySelector("#settings_screen").classList.remove("hide");
    document.querySelector("#music").classList.remove("hide");
    document.querySelector("#sfx").classList.remove("hide");
    document.querySelector("#click").play();

    document.querySelector("#setting_close").addEventListener('click', hideSettings);
    document.querySelector("#setting_effekt_sound").addEventListener('click', toggleSounds);
    document.querySelector("#setting_music").addEventListener('click', toggleMusic);


}

function hideSettings() {
    console.log("hideSettings");

    document.querySelector("#settings_screen").classList.add("hide");
    document.querySelector("#click").play();

}

function toggleSounds() {
    console.log("toggleSounds");

    if (showSettingsEffektSound == false) {
        //her klikker vi lyden til
        showSettingsEffektSound = true;
        document.querySelector("#sfx_sprite").classList.add("off_on");
        document.querySelector("#sfx_sprite").classList.remove("off");
        document.querySelector("#sfx_sprite").addEventListener("animationend", soundsOn);

    } else {
        //her kikker vi lyden fra - slukker den
        showSettingsEffektSound = false;
        document.querySelector("#sfx_sprite").classList.add("on_off");
        document.querySelector("#sfx_sprite").classList.remove("on");
        document.querySelector("#sfx_sprite").addEventListener("animationend", soundsOff);
    }

}

function soundsOff() {
    console.log("soundsOff function værdi er " + showSettingsEffektSound);
    document.querySelector("#sfx_sprite").removeEventListener("animationend", soundsOff);
    document.querySelector("#sfx_sprite").classList.remove("on_off");
    document.querySelector("#sfx_sprite").classList.add("off");
    //    her slukkes for efx
    document.querySelector("#saks1").muted = true;
    document.querySelector("#saks2").muted = true;
    document.querySelector("#click").muted = true;

}

function soundsOn() {
    console.log("soundsOn function værdi er " + showSettingsEffektSound);
    document.querySelector("#sfx_sprite").removeEventListener("animationend", soundsOn);
    document.querySelector("#sfx_sprite").classList.remove("off_on");
    document.querySelector("#sfx_sprite").classList.add("on");
    //    her tændes for efx
    document.querySelector("#saks1").muted = false;
    document.querySelector("#saks2").muted = false;
    document.querySelector("#click").muted = false;
}

function toggleMusic() {
    console.log("showSettingsMusic function " + showSettingsMusic);


    if (showSettingsMusic == false) {
        showSettingsMusic = true;
        document.querySelector("#music_sprite").classList.add("off_on");
        document.querySelector("#music_sprite").classList.remove("off");
        document.querySelector("#music_sprite").addEventListener("animationend", musicOn);
    } else {
        showSettingsMusic = false;
        document.querySelector("#music_sprite").classList.add("on_off");
        document.querySelector("#music_sprite").classList.remove("on");
        document.querySelector("#music_sprite").addEventListener("animationend", musicOff);
    }
}

function musicOff() {
    console.log("musicOff function værdi er " + showSettingsMusic);
    document.querySelector("#music_sprite").removeEventListener("animationend", musicOff);
    document.querySelector("#music_sprite").classList.remove("on_off");
    document.querySelector("#music_sprite").classList.add("off");
    //    her slukkes for efx
    document.querySelector("#musik").muted = true;

}

function musicOn() {
    console.log("musicOn function værdi er " + showSettingsMusic);
    document.querySelector("#music_sprite").removeEventListener("animationend", musicOn);
    document.querySelector("#music_sprite").classList.remove("off_on");
    document.querySelector("#music_sprite").classList.add("on");
    //    her tændes for efx
    document.querySelector("#musik").muted = false;

}


function gameOver1() {
    console.log("gameOver1")
    document.querySelector("#gameover_screen1").classList.remove("hide");
    document.querySelector("#replay").classList.remove("hide");
    document.querySelector("#forlad").addEventListener('click', forladClick);
    document.querySelector("#replay").addEventListener('click', playAgain);
    document.querySelector("#buhu").play();

}

function gameOver2() {
    document.querySelector("#gameover_screen2").classList.remove("hide");
    document.querySelector("#gameover_screen1").classList.add("hide");
    document.querySelector("#replay").classList.remove("hide");
    document.querySelector("#forlad").addEventListener('click', forladClick);
    document.querySelector("#replay").addEventListener('click', playAgain);
    document.querySelector("#buhu").play();

}

function levelComplete() {
    document.querySelector("#levelcomplete").classList.remove("hide");
    document.querySelector("#replay").classList.remove("hide");
    document.querySelector("#forlad").addEventListener('click', forladClick);
    document.querySelector("#replay").addEventListener('click', playAgain);
    document.querySelector("#yay").play();
}

function forladClick() {
    document.querySelector("#forlad").removeEventListener('click', forladClick);
    window.location.reload();
    showStart();
}

function playAgain() {
    console.log("playAgain")
    document.querySelector("#replay").removeEventListener('click', playAgain);
    document.querySelector("#gameover_screen2").classList.add("hide");

    timeLeft = 20;
    score = 0;
    startGame();

}

const audio = document.getElementById("audio");
const play_pause = document.getElementById("play-pause");
const stop = document.getElementById("stop");
const mute_unmute = document.getElementById("mute-unmute");

play_pause.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
        play_pause.textContent = "Pause";
    } else {
        audio.pause();
        play_pause.textContent = "Play";
    }
});

stop.addEventListener("click", () => {
    audio.pause();
    audio.currentTime = 0;
    play_pause.textContent = "Play";
});

mute_unmute.addEventListener("click", () => {
    if (audio.muted) {
        audio.muted = false;
        mute_unmute.textContent = "Mute";
    } else {
        audio.muted = true;
        mute_unmute.textContent = "Unmute";
    }
});

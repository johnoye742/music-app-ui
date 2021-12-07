var music;
window.onload = () => {

}
function con(value) {
    let seconds = Math.round(value % 60 * 1000);
    return seconds;
}
function start(url, pl) {
    var playing = false;
    var btn1 = document.getElementById("pb")
    var pi = document.getElementById("pi");
    var f = document.getElementById("forward")
    var progress = document.getElementById("liquid");
    
    music = new Audio(url);
    if(pl)  {
        pi.src = "./assets/images/pause.svg";
            pi.style.marginLeft = "29%";
        music.play();
        playing = true;
    } else {
        pi.src = "./assets/images/play.svg";
            pi.style.marginLeft = "31%";
    }
    var p = 0;
    btn1.onclick = () => {
        console.log(playing);
        if(playing) {
            pi.src = "./assets/images/play.svg";
            pi.style.marginLeft = "31%";
            music.pause();
            playing = false;
        } else {
            pi.src = "./assets/images/pause.svg";
            pi.style.marginLeft = "29%";
            
            music.play();
            playing = true;
    }
    
    setInterval(function() {
        if(music.ended) {
            pi.src = "./assets/images/play.svg";
            setTimeout(function() {}, 1000);
            
        } else {
           
        }
    }, 500);
    
    }
    f.onclick = () => {
        console.log(Math.round(music.duration));
        
        
    }
}

function startP(link, p) {
    start(link, p);
    ch(link);
}
function ch(link) {
    var im = document.getElementById("mimg");
    var title = document.getElementById("title");
    var artist = document.getElementById("artist");
    switch(link) {
        case "./uploads/audio/Tom MacDonald - Snowflakes.mp3":
         im.src="./assets/images/snowflakes.png";
         title.innerHTML="Snowflakes";
         artist.innerHTML = "Tom Macdonald";
        break;
        case "./uploads/audio/Tom MacDonald - I Wish .mp3":
            im.src="./assets/images/i-wish.png";
         title.innerHTML="I Wish";
         artist.innerHTML = "Tom Macdonald";
         break;
         case "./uploads/audio/Maroon 5 - Memories (Official Video).mp3":
            im.src="./assets/images/memories.png";
         title.innerHTML="Memories";
         artist.innerHTML = "Maroon 5";
         break;
         case "./uploads/audio/Tom MacDonald - Fake Woke .mp3":
            im.src="./assets/images/fakewoke.png";
            title.innerHTML="Fake Woke";
            artist.innerHTML = "Tom Macdonald";
         break;
         case "./uploads/audio/Clean Bandit - Rockabye feat. Sean Paul & Anne-Marie.mp3":
            im.src="./assets/images/rockabye.png";
            title.innerHTML="Rockabye";
            artist.innerHTML = "Clean Bandit ft. Se...";
         break;
         default: 
         im.src="./assets/images/i-wish.png";
         title.innerHTML="I Wish";
         artist.innerHTML = "Tom Macdonald";
    }
}
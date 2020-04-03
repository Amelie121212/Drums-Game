 window.addEventListener('keydown', function(event) {
    
            const audio = document.querySelector("audio[class='event.keyCode']");
            console.log(audio);
            if(!audio) return;
            audio.play();
});
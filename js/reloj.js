
const d = document;

export function digitalClock(clock, btnPlay, btnStop){

    let intervalId;

    d.addEventListener("click", (e)=>{
        if(e.target.matches(btnPlay)){
            intervalId = setInterval(() => {
                let clockHour = new Date().toLocaleTimeString();
                d.querySelector(clock).innerHTML = `<h3>${clockHour}</h3>`

                e.target.disabled = true;
            }, 1000);
        }
        if(e.target.matches(btnStop)){
            clearInterval(intervalId);
            d.querySelector(clock).innerHTML = null;
            d.querySelector(btnPlay).disabled = false;

        }
    })
}

export function alarm(sound, btnPlay, btnStop){
    let alarmTempo;
    const $alarm = d.createElement("audio");
    $alarm.src = sound;


    d.addEventListener("click", (e)=>{
        if(e.target.matches(btnPlay)){
            alarmTempo = setTimeout(() => {
                $alarm.play();
            }, 1000);
            e.target.disabled = true;
        }

        if(e.target.matches(btnStop)){
            clearTimeout(alarmTempo);
            $alarm.pause();
            $alarm.currentTime = 0;
            d.querySelector(btnPlay).disabled = false;
        }

    })

}


const d = document;

export default function countdown (id, limitDate, finalMessage){
    const $countdown = d.getElementById(id),
            countdownDate = new Date(limitDate).getTime();

        let countdownTempo = setInterval(() => {
            let now = new Date().getTime(),
                limitTime = countdownDate - now,
                days = Math.floor(limitTime / (1000*60*60*24)),
                hours = ("0"+ Math.floor(limitTime % (1000*60*60*24)/(1000*60*60))).slice(-2),
                minutes = ("0"+ Math.floor(limitTime % (1000*60*60)/(1000*60))).slice(-2),
                seconds = ("0"+ Math.floor(limitTime % (1000*60)/(1000))).slice(-2); 

            $countdown.innerHTML = `<h4>Faltan: ${days} dias ${hours} horas ${minutes} minutos ${seconds} segundos para tu Cumpleaños </h4>`;

            if(limitTime < 0){
                clearInterval(countdownTempo);
                $countdown.innerHTML = `<h3>${finalMessage}</h3>`;
            }

        }, 1000);


}














// export function cuentaRegresiva (countdown){

// const countDawnDate = new Date ("Dec 31, 2023 23:59:59").getTime();

// const x = setInterval(() => {
//     const now = new Date().getTime();

//     const distance = countDawnDate - now;

//     const hours = Math.floor((distance % (1000*60*60*24))/(1000*60*60));
//     const minutes = Math.floor((distance % (1000*60*60))/(1000*60));
//     const seconds = Math.floor((distance % (1000*60))/(1000));

//     document.getElementById(countdown).innerHTML = `<h4> ${hours} + "hr " + ${minutes} + "mn " + ${seconds} + "seg " </h4>`;


// }, 1000);

// }
const sechand = document.querySelector('.sec-hand')
const minutehand = document.querySelector('.min-hand');
const hourhand = document.querySelector('.hour-hand');


function setDate(){
    const now = new Date();
    const seceonds = now.getSeconds();
    const seceondDegeres = ((seceonds / 60) * 360) + 90;
    sechand.style.transform = `rotate(${seceondDegeres}deg)`;
    
    const minutes = now.getMinutes();
    const minutesDegeres = ((minutes / 60) * 360) + 90;
    minutehand.style.transform = `rotate(${minutesDegeres}deg)`;

     const hours = now.getHours();
    const hoursDegeres = ((hours / 60) * 360) + 90;
    hourhand.style.transform = `rotate(${hoursDegeres}deg)`;
}



setInterval( setDate, 1000);


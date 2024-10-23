function getTimeRemaining(endtime) {
    let t = Date.parse(endtime) - Date.parse(new Date());
    let second = Math.floor((t / 1000) % 60);
    let minutes = Math.floor((t / 1000 /60) % 60);
    let hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    let days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'second': second
    };
}

function initialClock(id, endtime) {
    const clock = document.getElementById(id);
    const timeinterval = setInterval(function() {
        const t = getTimeRemaining(endtime);
        clock.innerHTML = t.second;

        if (t.total <= 0) {
            clearInterval(timeinterval);
            alert('Вы победили в конкурсе!')
            }
    }, 1000);
}



let deadLine = new Date(Date.parse(new Date()) + 59 * 1000);
initialClock('timer', deadLine);


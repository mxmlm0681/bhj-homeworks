const dead = document.getElementById('dead');
const lost = document.getElementById('lost');

const holesArray = [];

(function addHoles(holesArray) {
    const holes = document.getElementsByClassName('hole-game');
    for (let i = 1; i <= holes[0].childElementCount; i ++) {
        const hole = document.getElementById(getHole(i));
        holesArray.push(hole.addEventListener('click', () => {
            hole.className.includes('hole_has-mole') ?
                dead.textContent++:
                lost.textContent++;
        }));
    };
})(holesArray);

let id = setInterval(() => {
    isWinner(dead, lost);
}, 100);

function isWinner(dead, lost) {
    const winner = 10;
    const louser = 5;

    if (Number(dead.textContent) == winner) {
        alert('Победа!');
        dead.textContent = 0;
        lost.textContent = 0;

    } else if (Number(lost.textContent) == louser) {
        alert('Вы проиграли');
        lost.textContent = 0;
        dead.textContent = 0;
    };
};

function getHole(index) {
    return `hole${index}`;
};

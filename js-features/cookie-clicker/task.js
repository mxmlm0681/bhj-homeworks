const image = document.getElementById('cookie');
const clicker__counter = document.getElementById('clicker__counter');
const shrink = function() {
    image.width = 200;
}

function counterClicks() {
    clicker__counter.textContent++;
    image.width = 300;
    setTimeout(shrink, 100);
}
image.onclick = counterClicks;
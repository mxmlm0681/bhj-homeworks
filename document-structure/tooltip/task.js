function click(e) {
    removeTooltips(e);

    let targetTop = e.target.offsetTop;

    let left = e.target.offsetLeft - window.scrollX;
    let top = targetTop - window.scrollY + e.target.offsetHeight;

    document.getElementsByTagName("body")[0].innerHTML += `<div class="tooltip"
    style="
        left: ${left}px;
        top: ${top}px;
        display: block;
        ">
    ${e.target.getAttribute("title")}
    </div>`;

    let newTooltip = document.getElementsByClassName("tooltip")[0];

    if (top + newTooltip.offsetHeight > window.innerHeight) {
        top = targetTop - window.scrollY - newTooltip.offsetHeight;
        newTooltip.style.top = `${top}px`;
    }

    addEvents();
    e.preventDefault();
}

function removeTooltips(e) {
    if (!e.defaultPrevented) {
        [...document.getElementsByClassName("tooltip")].forEach(el => {
            el.remove();
        });
    }
}

function addEvents() {
    const tooltipItems = document.getElementsByClassName("has-tooltip");
    [...tooltipItems].forEach(tooltipItems => {
        tooltipItems.addEventListener("click", click);
    });

    document
        .getElementsByTagName("body")[0]
        .addEventListener("click", removeTooltips);
    window.addEventListener("scroll", removeTooltips);
    window.addEventListener("resize", removeTooltips);
}

addEvents();


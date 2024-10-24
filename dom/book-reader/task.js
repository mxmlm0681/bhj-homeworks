const book = document.getElementsByClassName("book")[0];
const settings = book.getElementsByClassName("book__controls")[0].children;

[...settings].forEach(setting => {
    let settingName = setting.classList[1];
    let options = setting.querySelectorAll('a');
    let optionsName = options[0].classList[0];

    const getActiveOptionIndex = () => {
        let index = 0;
        while (!options[index].classList.contains(optionsName + "_active")) index++;
        return index;
    };

    const click = e => {
        e.preventDefault();
        let activeIndex = getActiveOptionIndex();
        options[activeIndex].classList.remove(optionsName + "_active");
        e.target.classList.add(optionsName + "_active");
        activeIndex = getActiveOptionIndex();

        switch (settingName) {
            case "book__control_font-size":
                book.classList.remove("book_fs-big");
                book.classList.remove("book_fs-small");
                switch (activeIndex) {
                    case 0:
                        book.classList.add("book_fs-small");
                        break;
                    case 2:
                        book.classList.add("book_fs-big");
                        break;
                }
                break;
        }

    };

    [...options].forEach(option => {
        option.addEventListener("click", click, false);
    });
});
const book = document.getElementsByClassName('book')[0];
const setting = book.getElementsByClassName('book__controls')[0].children;

[...setting].forEach(setting => {
    let settingName = setting.classList[1];
    let options = setting.querySelectorAll('a');
    let optionsName = options[0].classList[0];

    const getActiveOptionIndex = () => {
        let index = 0;
        while (!options[index].classList.contains(optionsName + '_active')) index++;
        return index;
    };

    const click = e => {
        e.preventDefault();
        let activeIndex = getActiveOptionIndex();
        options[activeIndex].classList.remove(optionsName + '_active');
        e.target.classList.add(optionsName + '_active');
        activeIndex = getActiveOptionIndex();

        switch (settingName) {
            case 'book__control_font_size':
                book.classList.remove('book_fs-big');
                book.classList.remove('book_fs-small');
                switch (activeIndex) {
                    case 0:
                        book.classList.add('book_fs-small');
                        break;
                    case 2:
                        book.classList.add('book_fs-big');
                        break;
                }
                break;

            case 'book__control_color':
                book.classList.remove('book_color-gray');
                book.classList.remove('book_color-whitesmoke');
                switch(activeIndex) {
                    case 1:
                        book.classList.add('book_color-gray');
                        break;
                    case 2:
                        book.classList.add('book_color-whitesmoke');
                        break;
                }
                break;

            case 'book__control_background':
                book.classList.remove('book_bg-black');
                book.classList.remove('book_bg_gray');
                switch (activeIndex) {
                    case 0:
                        book.classList.add('book_bg_black');
                        break;
                    case 1:
                        book.classList.add('book_bg_gray');
                        break;
                }
                break;
        }

    };

    [...options].forEach(option => {
        option.addEventListner('click', click, false);
    });
});
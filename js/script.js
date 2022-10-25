const preloader = document.querySelector('.preloader');
//
// ---------------- burger menu
//
const body = document.querySelector('body');
const burgerMenu = document.querySelector('.burger__menu');
const nav = document.querySelector('.nav');
const menuLinks = document.querySelectorAll('.header__menu-link');
const logo = document.querySelector('.header__logo');
const headerTopBtn = document.querySelector('.header__top-btn');
const links = [...menuLinks, logo, headerTopBtn];
const wrapper = document.querySelector('.wrapper');

burgerMenu.classList.add('toggled');
burgerMenu.addEventListener('click', (e) => {
    burgerMenu.classList.toggle('active');
    burgerMenu.classList.toggle('toggled');

    let width1 = wrapper.offsetWidth;

    body.classList.toggle('lock');
    nav.classList.toggle('active');

    let width2 = wrapper.offsetWidth;
    let margin = width2 - width1;
    if (burgerMenu.classList.contains('active')) {
        wrapper.style.marginRight = `${margin}px`;
    } else {
        wrapper.style.marginRight = `0px`;
    }
});

links.forEach((item) => {
    item.addEventListener('click', () => {
        burgerMenu.classList.remove('active');
        burgerMenu.classList.add('toggled');
        body.classList.remove('lock');
        nav.classList.remove('active');
        wrapper.style.marginRight = `0px`;
    });
});

const headerTopBtnText = headerTopBtn.querySelector('.header__top-btn span');
const headerTopBtnSvg = headerTopBtn.querySelector('.svg-btn');
if (window.innerWidth < 500) {
    headerTopBtnText.textContent = 'Call Me';
    headerTopBtnSvg.style.display = 'none';
}

if (window.innerWidth < 1250) {
    showSlider('.packages-gallery');
}

const packagesGallery = document.querySelector('.packages-gallery');
window.addEventListener(
    `resize`,
    () => {
        if (window.innerWidth < 500) {
            headerTopBtnText.textContent = 'Call Me';
            headerTopBtnSvg.style.display = 'none';
        } else {
            headerTopBtnText.textContent = 'Call Me Back';
            headerTopBtnSvg.style.display = 'block';
        }
        if (window.innerWidth < 1250 && !packagesGallery.classList.contains('slick-slider')) {
            showSlider('.packages-gallery');
        }
        if (window.innerWidth > 1250 && packagesGallery.classList.contains('slick-slider')) {
            $('.packages-gallery').slick('unslick');
        }
    },
    false
);

//
// ---------------- THE END
//

window.onload = () => {
    if (preloader) {
        preloader.classList.add('close');
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 1000);
    }
    //
    // ---------------- animaition svg button
    //
    const paths = document.querySelectorAll('.svg-btn path');
    let countSvg = 1;
    paths.forEach((item) => {
        const len = Math.ceil(item.getTotalLength());
        item.style.strokeDasharray = `${len}px`;
        item.style.strokeDashoffset = `${len}px`;

        item.style.animation = `anim-line 1.5s ease forwards`;
        item.style.animationDelay = `${countSvg}s`;
        countSvg += 0.05;
    });
    animationHeader();
};

//  -------------- ANIMATION  GSAP
//
//
function animationHeader() {
    let tl = gsap.timeline();

    tl.from('.header__text', { opacity: 0, scale: 0, rotate: 360, duration: 1, delay: 1.5 });
    tl.from('.header__title', { opacity: 1, y: 400, duration: 1 });
    tl.from('.header__subtitle', { opacity: 1, y: 500, duration: 1 }, '-=0.5');
    tl.from('.box-subtitle__items', { ease: 'back.out(1.7)', opacity: 1, y: -1000, duration: 1 }, '-=0.5');
    tl.from('.header__find', { opacity: 0, y: 500, duration: 0.5 }, '-=0.3');
}

function animationOnSite() {
    let width = window.innerWidth;
    if (width > 1250) {
        let tl = gsap.timeline();
        // packages
        tl.from('.packages__title', { opacity: 0, y: 50, duration: 1, delay: 0.2 });
        tl.from('.packages__btn-anim', { opacity: 0, y: 50, duration: 1 }, '-=0.5');
        tl.from('.packages-gallery__item-1', { rotate: 360, opacity: 0, y: -100, x: -400, duration: 1 }, '-=0.5');
        tl.from('.packages-gallery__item-2', { rotate: -360, opacity: 0, y: 200, x: 400, duration: 1 }, '-=0.5');
        tl.from('.packages-gallery__item-3', { rotate: -90, opacity: 0, y: 0, x: -400, duration: 1 }, '-=0.8');
        tl.from('.packages-gallery__item-4', { opacity: 0, y: 300, x: 0, duration: 1 }, '-=0.8');
        tl.from('.packages-gallery__item-5', { opacity: 0, y: 0, x: 400, duration: 1 }, '-=0.8');

        ScrollTrigger.create({
            animation: tl,
            trigger: '.packages',
            start: 'top center',
            end: 'bottom',
        });
    }

    let booking = gsap.timeline();

    booking.from('.booking__item-anim-1', { opacity: 0, y: 0, x: -200, duration: 1, delay: 0.2 });
    booking.from('.booking__item-anim-2', { opacity: 0, y: 0, x: 200, duration: 1 }, '-= 1');
    booking.from('.booking__item-anim-3', { opacity: 0, y: 0, x: -200, duration: 1 }, '-=0.5');
    booking.from('.booking__item-anim-4', { opacity: 0, y: 0, x: 200, duration: 1 }, '-=1');
    booking.from('.booking__item-anim-5', { opacity: 0, y: 0, x: -200, duration: 1 }, '-=0.5');
    booking.from('.booking__item-anim-6', { opacity: 0, y: 0, x: 200, duration: 1 }, '-=1');

    ScrollTrigger.create({
        animation: booking,
        trigger: '.booking',
        start: 'top center',
        end: 'bottom',
    });
    let why = gsap.timeline();

    why.from('.why-content__img-1', { opacity: 0, y: -100, x: 0, duration: 1, delay: 0.2 });
    why.from('.why-content__img-2', { opacity: 0, y: -100, x: 0, duration: 1 }, '-=.5');
    why.from('.why-content__img-3', { opacity: 0, y: -100, x: 0, duration: 1 }, '-=.5');
    why.from('.why-content__img-4', { opacity: 0, y: -100, x: 0, duration: 1 }, '-=.5');
    why.from('.why-content__img-0', { ease: 'back.out(1.7)', opacity: 0, y: -400, x: 0, duration: 1 }, '-=.5');

    ScrollTrigger.create({
        animation: why,
        trigger: '.why-content',
        start: 'top center',
        end: 'bottom',
    });
    let customise = gsap.timeline();

    customise.from('.customise__item-1', { opacity: 0, y: 100, x: 0, duration: 1, delay: 0.2 });

    customise.from('.customise__item-2', { opacity: 0, y: 100, x: 0, duration: 1 }, '-=.5');
    customise.from('.customise__item-3', { opacity: 0, y: 100, x: 0, duration: 1 }, '-=.5');
    customise.from('.customise__anim', { opacity: 0, y: 100, x: 0, duration: 0.5 }, '-=.5');

    ScrollTrigger.create({
        animation: customise,
        trigger: '.customise',
        start: 'top center',
        end: 'bottom',
    });
}

animationOnSite();

//
//  -------------- ANIMATION  GSAP THE END

const why = document.querySelector('.why');

window.addEventListener('scroll', (e) => {
    function scrollTo() {
        let height = window.innerHeight;
        let width = window.innerWidth;

        // появления кнопки top при прокрутки

        let heightWhy = why.getBoundingClientRect().top;
        if (heightWhy < Math.ceil(height / 3) && !why.classList.contains('active') && width > 350) {
            why.classList.add('active');
            requestAnimationFrame(animaiteText);
        }
    }

    setTimeout(() => {
        scrollTo();
    }, 300);
});

//
//                                        ---------            ANIMATION TEXT  why__anim-text
//

const textArray = document.querySelectorAll('.why__anim-text');

function splitText(item) {
    const worlds = item.innerText.split('');
    let htmlText = '';
    let width = window.innerWidth;
    let opacity = 0;
    width > 350 ? (opacity = 0) : (opacity = 1);
    htmlText += '<div class="world" style="display: inline-block">';
    worlds.forEach((letter) => {
        if (letter == ' ') {
            htmlText += '</div>';
            htmlText += `<span>&nbsp</span>`;
            htmlText += '<div class="world" style="display: inline-block">';
        } else {
            htmlText += `<span class="letter" style="display: inline-block; opacity: ${opacity};">${letter}</span>`;
        }
    });

    item.innerHTML = htmlText;
    htmlText = '';
}

let width = window.innerWidth;
if (width > 350) {
    textArray.forEach((item) => {
        splitText(item);
    });
}

function random(min, max) {
    return Math.random() * (max - min) + min;
}

function animaiteText() {
    const split = document.querySelectorAll('.letter');
    let delay = 0.035;

    split.forEach((item, index) => {
        item.style.transform = `translate3d(${random(-500, 500)}px, ${random(-500, 500)}px, ${random(-500, 500)}px) rotate(${random(-360, 360)}deg) scale(2)`;
        item.style.animation = ` why-text ${random(0.5, 1)}s ease-in-out ${index * delay}s forwards`;
    });
}

//
//                                        ---------            ANIMATION TEXT  why__anim-text     THE END
//

//
// -------------------------------------------------------------------- Обработка событий клик
//
body.addEventListener('click', (e) => {
    //
    // -----------------------   Обработка выбора кол-ва человек
    //
    const personBtn = e.target.closest('.header-find__item-person');
    const personSelectBtn = e.target.classList.contains('person-select__btn');
    const personSelect = document.querySelector('.person-select');

    if (personBtn) {
        const personBtnText = personBtn.querySelector('.header-find__item-text');
        // personSelect.classList.add('active');

        if (personSelectBtn) {
            personSelect.classList.remove('active');
            const data = e.target.getAttribute('data-person');
            personBtnText.setAttribute('data-person', data);
            personBtnText.textContent = data;
        }
    }
    // обработка клика вне кнопки выбора кол-ва человек в header
    personBtn && !personSelectBtn ? personSelect.classList.add('active') : personSelect.classList.remove('active');
    //
    // -------------------------  the end
    //

    //
    // Обработка клика по кнопки выбора даты
    //
    const dateBtn = e.target.closest('.header-find__item-date');
    const lookCalendar = document.querySelector('.look-calendar');
    // console.log(dateBtn);
    dateBtn ? lookCalendar.classList.add('active') : lookCalendar.classList.remove('active');

    //
    // -----------------------   Обработка выбора даты в календаре
    //
    // Проверка клика по числу календаря

    const colCalendar = e.target.classList.contains('col');
    if (dateBtn) {
        const dateBtnText = dateBtn.querySelector('.header-find__item-text');

        if (colCalendar && e.target.closest('tbody')) {
            lookCalendar.classList.remove('active');
            const data = e.target.getAttribute('data-day');
            dateBtnText.textContent = `${data} ${monthListEn[month]} ${year}`;
        }
    }
    //
    // Обработка клика по кнопкам календаря
    //
    const prevBtn = e.target.closest('.prev');
    const nextBtn = e.target.closest('.next');
    if (prevBtn) {
        month -= 1;
        if (month < 0) {
            month = 11;
            year -= 1;
        }

        month === date.getMonth() && year === date.getFullYear() ? (flagCalendar = true) : (flagCalendar = false);
        setDate(monthEl, year, month);
        createCalendar(year, month);
    }
    if (nextBtn) {
        month += 1;
        if (month > 11) {
            month = 0;
            year += 1;
        }
        month === date.getMonth() && year === date.getFullYear() ? (flagCalendar = true) : (flagCalendar = false);
        setDate(monthEl, year, month);
        createCalendar(year, month);
    }

    //
    // -------------------------  the end
    //

    // --------------- tabs slider

    // ----------------------- tabs Добавление класса active ссылкам по клику
    const ratedLinks = document.querySelectorAll('.rated-tabs__link');
    const ratedLink = e.target.classList.contains('rated-tabs__link');
    const ratedSlider = document.querySelectorAll('.rated-slider');
    if (ratedLink) {
        e.preventDefault();
        ratedLinks.forEach((item) => {
            item.classList.remove('active');
        });

        e.target.classList.add('active');
        const href = e.target.getAttribute('href').slice(1);
        if (href) {
            const sliderActive = document.getElementById(href);
            if (sliderActive) {
                ratedSlider.forEach((item) => {
                    item.classList.remove('active');
                });
                sliderActive.classList.add('active');
            }
        }
    }
});

//
// Календарь
//
const calendar = document.querySelector('#calendar');
const monthList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const monthListEn = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const monthEl = calendar.querySelector('.month');
const date = new Date();
let year = date.getFullYear();
let month = date.getMonth();
const today = date.getDate();

//
// Установить текущий месяц и год при загрузке на календаре
//
function setDate(el, year, month) {
    el.textContent = `${monthList[month]} ${year} `;
}
setDate(monthEl, year, month);
// Установить текущий месяц и год при загрузке на кнопке
const dateBtnText = document.querySelector('.header-find__item-date .header-find__item-text');
dateBtnText.textContent = `${today} ${monthListEn[month]} ${year}`;
//
// Кол-ва дней в месяце
//
function howMuchDays(year, month) {
    const days = new Date(year, month + 1, 0).getDate();
    return days;
}
//
// Какой день недели первый день месяца
//
function whatDayWeek(year, month) {
    const day = new Date(year, month, 1).getDay();
    return day;
}

//
// ---------------------------------------------------------------   Заполнить календарь
//
const tbody = document.querySelector('#calendar tbody');
// Флаг для текущего дня месяца при первом запуске, потом меняем его на false
let flagCalendar = true;

function createCalendar(year, month) {
    const days = howMuchDays(year, month);
    let dayWeek = whatDayWeek(year, month);

    if (dayWeek === 0) dayWeek = 7;

    let textHtml = '';
    let count = 1;
    let countDay = 1;
    const len = Math.ceil((days + dayWeek) / 7);

    for (i = 0; i < len; i++) {
        textHtml += '<tr>';
        for (let j = 1; j < 8; j++) {
            if (count >= dayWeek && count < days + dayWeek) {
                if (countDay === today && flagCalendar) {
                    textHtml += `<td class="col today" data-day="${countDay}">${countDay}</td>`;
                } else {
                    textHtml += `<td class="col" data-day="${countDay}">${countDay}</td>`;
                }
                countDay++;
            } else {
                textHtml += `<td class="col" style="visibility: hidden;"></td>`;
            }
            count++;
        }

        textHtml += '</tr>';
    }

    tbody.innerHTML = textHtml;
}

createCalendar(year, month);

//
// -------------------------------------------------------------------   the end calendar
//

// ---------- RATED

//
// ------------------------------------------------------------------- rated-slider__box-rating
//
// Закрашиваем ромбики рейтинга в зависимости от цифр rated-slider__box-number
const ratedItem = document.querySelectorAll('.rated-slider__box-rating');

ratedItem.forEach((item) => {
    const rating = item.querySelectorAll('.rated-slider__box-img');
    const number = item.querySelector('.rated-slider__box-number').textContent.split('.')[0];
    const start = rating.length - number;

    for (let i = 0; i < rating.length; i++) {
        if (i >= start) {
            rating[i].classList.add('active');
        }
    }
});

//
// ------------------------------------------------------------------- SLIDER
//

function showSlider(slider) {
    $(slider).slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        variableWidth: true,
        prevArrow: `<button type="button" class="slick-prev"><div class="rated-slider-btn"></div></button>`,
        nextArrow: `<button type="button" class="slick-next"><div class="rated-slider-btn"></div></button>`,
        responsive: [
            {
                breakpoint: 750,
                settings: {
                    dots: true,
                },
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    });
}
const tabs = document.querySelectorAll('.rated-tabs__link');

tabs.forEach((item) => {
    const id = item.getAttribute('href');
    showSlider(id);
});

//
// ------------------------------------ reviews slider
//
$('.reviews-slider').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    prevArrow: `<button type="button" class="slick-prev"><div class="reviews-slider-btn"></div></button>`,
    nextArrow: `<button type="button" class="slick-next"><div class="reviews-slider-btn"></div></button>`,

    responsive: [
        {
            breakpoint: 830,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
});

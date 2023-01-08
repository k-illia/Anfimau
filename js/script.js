/*=================Код для меню==========================*/

const menu = document.querySelector('.menu__body')
const menuBtn = document.querySelector('.menu__icon')

const body = document.body;

if (menu && menuBtn) {
    menuBtn.addEventListener('click', e => {
        menu.classList.toggle('active')
        menuBtn.classList.toggle('active')
        body.classList.toggle('lock')
    })

    menu.addEventListener('click', e => {
        if (e.target.classList.contains('menu__body')) {
            menu.classList.remove('active')
            menuBtn.classList.remove('active')
            body.classList.remove('lock')
        }
    })

    menu.querySelectorAll('.menu__link').forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('active')
            menuBtn.classList.remove('active')
            body.classList.remove('lock')
        })
    })
}

/*===========================================*/

const anchors = document.querySelectorAll('a[href*="#"]');

anchors.forEach(anchor => {
    anchor.addEventListener('click', event => {
        event.preventDefault();

        const blockID = anchor.getAttribute('href').substring(1);

        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
})

/*=================Конец меню==========================*/

$(function () {
    $('.swiper-wrapper').slick({
            arrows: false,
            dots: true,
            adaptiveHeight: true
        }
    )

})


$(function () {
    $('#boxes-lettrs').slick({
            responsive: [
                {
                    breakpoint: 5000,
                    settings: "unslick"
                },
                {
                    breakpoint: 700,
                    settings: {
                        arrows: false,
                        dots: true,
                        slidesToShow: 1,
                        slidesToScroll: 1,

                    }
                }
            ]
        }
    )

})

$(function () {
    $('#boxes').slick({

            responsive: [
                {
                    breakpoint: 5000,
                    settings: "unslick"
                },
                {
                    breakpoint: 700,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                        dots: true,

                    }
                }
            ]
        }
    )

})





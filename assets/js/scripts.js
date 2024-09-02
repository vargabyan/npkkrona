new Swiper('[data-news-swiper]', {
    spaceBetween: 20,
    speed: 1000,
    navigation: {
        nextEl: '[data-news-swiper-button-next]',
        prevEl: '[data-news-swiper-button-prev]',
    },
    breakpoints: {
        320: {
            slidesPerView: 1.03,
        },
        768: {
            slidesPerView: 2,
        },
        1200: {
            slidesPerView: 3,
        }
    }
});

new Swiper('[data-popular-swiper]', {
    spaceBetween: 20,
    speed: 1000,
    breakpoints: {
        320: {
            slidesPerView: 1.03,
        },
        570: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 4,
        }
    }
});

document.addEventListener('click', e => {
    const btn = e.target.closest('[data-collapse-item-question]');

    if (btn) {
        const wrapper = btn.closest('[data-collapse-items-wrapper]');
        const item = btn.closest('[data-collapse-item]');
        const allItem = wrapper.querySelectorAll('[data-collapse-item]');

        allItem.forEach(each => {
            const question = each.querySelector('[data-collapse-item-question]');
            const answer = each.querySelector('[data-collapse-item-answer]');

            if (item !== each) {
                question.classList.remove('active');
                answer.classList.remove('active');
            } else {
                question.classList.toggle('active');
                answer.classList.toggle('active');
            }
        })
    }
})


document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('[data-bestsellers-swiper]')) {

        let sliderBestsellers;
        const bestsellersSwiper = () => {
            sliderBestsellers = new Swiper('[data-bestsellers-swiper]', {
                spaceBetween: 20,
                speed: 1000,
                breakpoints: {
                    320: {
                        slidesPerView: 1.03,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    992: {
                        slidesPerView: 3,
                    },
                }
            });
        }
        const bestsellersActions = () => {
            if (window.innerWidth < 1200) {
                const swiperWrapper = document.querySelector('[data-bestsellers-swiper-wrapper]');
                const allSwiperSlide = document.querySelectorAll('[data-bestsellers-swiper-slide]');

                swiperWrapper.classList.add('swiper-wrapper')
                swiperWrapper.classList.remove('bestsellers_img-content')
                allSwiperSlide.forEach(swiperSlide => {
                    swiperSlide.classList.add('swiper-slide')
                    swiperSlide.classList.add('for-slider_bestsellers_img-wrapper')
                })
                bestsellersSwiper();

            } else {
                const swiperWrapper = document.querySelector('[data-bestsellers-swiper-wrapper]');
                const allSwiperSlide = document.querySelectorAll('[data-bestsellers-swiper-slide]');

                if (sliderBestsellers) sliderBestsellers.destroy(true, true);
                swiperWrapper.classList.remove('swiper-wrapper')
                swiperWrapper.classList.add('bestsellers_img-content')
                allSwiperSlide.forEach(swiperSlide => {
                    swiperSlide.classList.remove('swiper-slide')
                    swiperSlide.classList.remove('for-slider_bestsellers_img-wrapper')
                })
            }
        }
        bestsellersActions();
        window.addEventListener('resize', bestsellersActions);

    }
})

document.addEventListener('click', e => {
    const btn = e.target.closest('[data-header-btn-open-menu]');

    if (btn) {
        const wrapper = btn.closest('[data-header-menu-wrapper]');
        const menu = wrapper.querySelector('[data-header-menu]');
        menu.classList.toggle('active');
    }
})

document.addEventListener('click', e => {
    if (!e.target.closest('[data-header-menu-wrapper]') && e.target !== null) {
        const menu = document.querySelector('[data-header-menu]');
        menu.classList.remove('active');
    }
})


document.addEventListener('click', e => {
    const item = e.target.closest('[data-popular-btn]');

    if (item) {
        const wrapper = item.closest('[data-popular-btn-wrapper]');
        const allItem = wrapper.querySelectorAll('.active[data-popular-btn]');

        allItem.forEach(each => {
            each.classList.remove('active');
        })
        item.classList.add('active');
    }
})
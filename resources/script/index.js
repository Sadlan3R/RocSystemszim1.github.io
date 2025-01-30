document.addEventListener('DOMContentLoaded', () => {
    var mobileButton = document.querySelector('.mobilemenubutton');
    var mobileButtonHeader = document.querySelector('.mobileheader');
    var navMenu = document.querySelector('.mobilenav');

    mobileButton.addEventListener('click', () => {
        if (navMenu.style.display === 'none' || !navMenu.style.display) {
            mobileButtonHeader.style.display = 'block';
            navMenu.style.display = 'block';
            mobileButton
        } else {
            navMenu.style.display = 'none';
            mobileButtonHeader.style.display = 'none';
        }
    })

        var slides = document.querySelectorAll('.slide');
        var btns = document.querySelectorAll('.btn');
        let currentSlide = 1;


        var manualNav = function(manual) {
            slides.forEach((slide) => {
                slide.classList.remove('active');

                btns.forEach((btn) => {
                    btn.classList.remove('active');
                })
            })

            slides[manual].classList.add('active');
            btns[manual].classList.add('active');
        }

        btns.forEach((btn, i) => {
            btn.addEventListener('click', () => {
                manualNav(i);
                currentSlide = i;
            })
        })
})


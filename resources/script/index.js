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
})

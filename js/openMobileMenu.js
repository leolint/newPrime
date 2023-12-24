function openMobileMenu () {
    const button = document.querySelector('.header_wrapper-button')
    const wrapper = document.getElementById('mobileListLink')

    button.addEventListener('click' , function() {
        wrapper.classList.toggle('showList')

        button.classList.toggle('buttonAnimation')
        console.log(1);
    })
}

openMobileMenu()
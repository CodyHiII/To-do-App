
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {

    navLinks.classList.toggle('nav-active');
    burger.classList.toggle('animation');

})

window.addEventListener('mouseup', (e) => {
    if(e.target != navLinks  && e.target != burger) {
        
    navLinks.classList.remove('nav-active');
    burger.classList.remove('animation');
    }

})






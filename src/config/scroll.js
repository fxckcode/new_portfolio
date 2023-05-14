import ScrollReveal from 'scrollreveal'

var slideLeft = {
    distance: '120%',
    origin: 'left',
    opacity: 0.4,
    reset: true,
    duration: 2600
};

ScrollReveal().reveal('.headline', slideLeft);

var slideRigth = {
    distance: '40%',
    origin: 'right',
    opacity: 0.4,
    reset: true,
    duration: 2600
};

ScrollReveal().reveal('.terminal', slideRigth);
//*------------efeito da scroll-----*//
window.addEventListener("scroll", function(){
    const header = document.querySelector("header");
    header.classList.toggle('sticky', window.scrollY > 0);
});

const projetosModals = document.querySelectorAll(".projetos-model");
const imgCards = document.querySelectorAll(".img-card");
const projetosCloseBtns = document.querySelectorAll(".projetos-close-btn");

var projetosModal = function (modalClick) {
    projetosModals[modalClick].classList.add("active");
}

imgCards.forEach((imgCard, i) => {
    imgCard.addEventListener("click", () => {
        projetosModal(i);
    });
});

projetosCloseBtns.forEach((projetosCloseBtn) => {
    projetosCloseBtn.addEventListener("click", () => {
        projetosModals.forEach((projetosModalView) => {
            projetosModalView.classList.remove("active");
        });
    });
});

ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 2500,
    delay: 100
})

ScrollReveal().reveal('.main .content, .section-title, .section-desc, .section-title1, .section-desc1, .edu-list, .contato-left', { delay: 80, origin: 'left'});
ScrollReveal().reveal('.main .content .btn, .section-aboutus--left, .btn, .img-card', { delay: 80, origin: 'bottom'});
ScrollReveal().reveal('.main .content .media-icons, .btn, .section-aboutus--right, .education-right, .contato-right', { delay: 80, origin: 'right'});


//Responsivo JavaScript

const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");
const navigationItems = document.querySelectorAll(".navigation a");

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    navigation.classList.toggle("active");
});

navigationItems.forEach((navigationItem) => {
    navigationItem.addEventListener("click", () => {
      menuBtn.classList.remove("active");
      navigation.classList.remove("active");
    });
});
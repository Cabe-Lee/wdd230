function myFunction() {
    var element = document.body;
    var header = document.querySelector("header");
    var nav = document.querySelector(".navigation");
    var bannerTop = document.querySelector(".bannerTop");
    
    var hero = document.querySelector(".hero_card");
    var event = document.querySelector(".event");
    var weather = document.querySelector(".weather");
    var spot1 = document.querySelector(".spot1");
    var spot2 = document.querySelector(".spot2");
    var spot3 = document.querySelector(".spot3");

    var footer = document.querySelector("footer");



    element.classList.toggle("dark-mode");
    header.classList.toggle("gray-dark-mode");
    nav.classList.toggle("gray-dark-mode");
    bannerTop.classList.toggle("gray-dark-mode");
    
    hero.classList.toggle("dark-mode-hero");
    event.classList.toggle("dark-mode-cards");
    weather.classList.toggle("dark-mode-cards");
    spot1.classList.toggle("dark-mode-cards");
    spot2.classList.toggle("dark-mode-cards");
    spot3.classList.toggle("dark-mode-cards");

    footer.classList.toggle("gray-dark-mode");
}
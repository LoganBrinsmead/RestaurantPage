import initializeHomePage from './home';

console.log("test");

initializeHomePage();

document.querySelector('#home').addEventListener('click', () => {
    initializeHomePage();
});

// document.querySelector('menu').addEventListener('click', () => {
//     initializeMenuPage();
// });

// document.querySelector('#about').addEventListener('click', () => {
//     initializeAboutPage();
// });

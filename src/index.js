import initializeHomePage from './home';
import initializeMenuPage from './menu';

console.log("test");

function clearRender() {
    const content = document.getElementById('content');
    while (content.firstChild) {
        content.removeChild(content.lastChild);
    }
}

initializeHomePage();

document.querySelector('#home').addEventListener('click', () => {
    clearRender();
    initializeHomePage();
});

document.querySelector('#menu').addEventListener('click', () => {
    clearRender();
    initializeMenuPage();
});

// document.querySelector('#about').addEventListener('click', () => {
//     initializeAboutPage();
// });

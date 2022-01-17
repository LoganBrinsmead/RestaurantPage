import initializeHomePage from './home';
import initializeMenuPage from './menu';
import initializeAboutPage from './about';

console.log("Greetings Earthlings");


function clear() {
    const content = document.getElementById('content');
    while (content.firstChild) {
        content.removeChild(content.lastChild);
    }
}

initializeHomePage();

document.querySelector('#home').addEventListener('click', () => {
    clear();
    initializeHomePage();
});

document.querySelector('#menu').addEventListener('click', () => {
    clear();
    initializeMenuPage();
});

document.querySelector('#about').addEventListener('click', () => {
    clear();
    initializeAboutPage();
});

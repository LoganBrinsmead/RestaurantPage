// import Interior from '../dist/img/interior.jpg';

// function backgroundImage() {
//     const myInterior = new Image();
//     myInterior.src = Interior;

//     return myInterior;
// }

function createHeader() {
    const header = document.createElement('div');
    header.classList.add('home-header');

    header.textContent = "The Grotto";

    return header;
}

function createBody() {
    const introduction = document.createElement('div');

    introduction.textContent = "Welcome to The Grotto, your primary spot for fine eats.";
    introduction.classList.add('home-introduction');

    return introduction;
}

function initializeHomePage() {
    document.getElementById('content').classList.add('home');
    document.querySelector('#content').appendChild(createHeader());
    document.querySelector('#content').appendChild(createBody());
}

export default initializeHomePage;
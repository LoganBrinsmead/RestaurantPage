// import Interior from '../dist/img/interior.jpg';
import Chef from '../dist/img/chef.jpg';


function backgroundImage() {
    document.body.style.backgroundImage = "url('../dist/img/interior.jpg')";
}

function createIntro() {
    const intro = document.createElement('div');
    intro.classList.add('home-intro');
    const introHeader = document.createElement('h2');
    introHeader.textContent = 'Welcome to The Grotto';

    const description = document.createElement('p');
    description.textContent = 'Your premier spot for the finest eats in San Francisco';

    const myChef = new Image();
    myChef.src = Chef;
    myChef.classList.add('introPicture');

    const chefDescription = document.createElement('p');
    chefDescription.textContent = 'Our Founder and Head Chef, Rordan Gamsey';

    intro.appendChild(introHeader);
    intro.appendChild(description);
    intro.appendChild(myChef);
    intro.appendChild(chefDescription);
    return intro;
}


function initializeHomePage() {
    backgroundImage();
    document.querySelector('#content').appendChild(createIntro());
}

export default initializeHomePage;
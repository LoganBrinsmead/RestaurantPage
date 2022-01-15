import Pasta from '../dist/img/MenuItems/pasta.jpeg';
import Burger from '../dist/img/MenuItems/burger.jpg';
import Steak from '../dist/img/MenuItems/steak.jpg';
import Pizza from '../dist/img/MenuItems/pizza.jpg';



function backgroundImage() {
    document.body.style.backgroundImage = "url('../dist/img/interior.jpg')";
}

function createHeader() {
    const header = document.createElement('h1');
    header.textContent = 'Our Menu';

    return header;
}

function createPasta() {
    const pasta = document.createElement('menuItem');

    const myPasta = new Image();
    myPasta.src = Pasta;
    myPasta.classList.add('menuPicture');
    pasta.appendChild(myPasta);
    

    const pastaTitle = document.createElement('h3');
    pastaTitle.textContent = "Grotto Pasta........ $23";
    pasta.appendChild(pastaTitle);

    const pastaDescription = document.createElement('p');
    pastaDescription.textContent = 'Genuine Italian pasta from the hills outside my house or something.';
    pasta.appendChild(pastaDescription);

    return pasta;
}

function createBurger() {
    const burger = document.createElement('menuitem');

    const myBurger = new Image();
    myBurger.src = Burger;
    myBurger.classList.add('menuPicture');
    burger.appendChild(myBurger);

    const burgerTitle = document.createElement('h3');
    burgerTitle.textContent = 'Gourmet Beef Burger........ $24';
    burger.appendChild(burgerTitle);

    const burgerDescription = document.createElement('p');
    burgerDescription.textContent = 'Gourmet burger made from real Kobe beef.';
    burger.appendChild(burgerDescription);

    return burger;
}

function createSteak() {
    const steak = document.createElement('menuitem');

    const mySteak = new Image();
    mySteak.src = Steak;
    mySteak.classList.add('menuPicture');
    steak.appendChild(mySteak);

    const steakTitle = document.createElement('h3');
    steakTitle.textContent = 'Gourmet Steak........ $47';
    steak.appendChild(steakTitle);

    const steakDescription = document.createElement('p');
    steakDescription.textContent = 'Gourmet steak made from real Kobe beef.';
    steak.appendChild(steakDescription);

    return steak;

}

function createPizza() {
    const pizza = document.createElement('menuitem');

    const myPizza = new Image();
    myPizza.src = Pizza;
    myPizza.classList.add('menuPicture');
    pizza.appendChild(myPizza);

    const pizzaTitle = document.createElement('h3');
    pizzaTitle.textContent = 'Gourmet Pizza...... $21';
    pizza.appendChild(pizzaTitle);

    const pizzaDescription = document.createElement('p');
    pizzaDescription.textContent = 'Gourmet Pizza made from top-shelf ingredients';
    pizza.appendChild(pizzaDescription);

    return pizza;
}

function createMenu() {
    const menu = document.createElement('menu');
    menu.classList.add('menu');


    menu.appendChild(createPasta());
    menu.appendChild(createBurger());
    menu.appendChild(createSteak());
    menu.appendChild(createPizza());


    return menu;
}

function initializeMenuPage() {
    backgroundImage();
    document.getElementById('content').appendChild(createHeader());
    document.getElementById('content').appendChild(createMenu());
}

export default initializeMenuPage;
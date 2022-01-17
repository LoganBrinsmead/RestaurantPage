import aMap from '../dist/img/map.png';

function createAboutSection() {
    const aboutSection = document.createElement('div');
    aboutSection.classList.add('aboutSection');    

    const mapSection = document.createElement('div');
    mapSection.classList.add('mapSection');


    const myMap = new Image();
    myMap.src = aMap;
    myMap.classList.add('mapPicture');
    mapSection.appendChild(myMap);


    const aboutHeader = document.createElement('h2');
    aboutHeader.textContent = 'Where you can find us';
    mapSection.appendChild(aboutHeader);
    

    const location = document.createElement('p');
    location.textContent = '1234 Main St, Las Vegas, Nevada, USA';
    mapSection.appendChild(location);

    aboutSection.appendChild(mapSection);

    const contactUsSection = document.createElement('div');
    contactUsSection.classList.add('contactUs');

    const contactUsHeader = document.createElement('h2');
    contactUsHeader.textContent = "Contact Us";
    contactUsSection.appendChild(contactUsHeader);

    const phone = document.createElement('p');
    phone.textContent = "Call us: (123) - 456 - 7890";
    contactUsSection.appendChild(phone);

    // test
    aboutSection.appendChild(contactUsSection);

    return aboutSection;
}
  

function initializeAboutPage() {
    document.querySelector('#content').appendChild(createAboutSection());
}

export default initializeAboutPage;
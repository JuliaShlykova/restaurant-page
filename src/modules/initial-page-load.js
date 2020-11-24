function createButton(id,name){
    const btn = document.createElement('button');
    btn.setAttribute('id',id);
    btn.textContent = name;
    return btn;
}
function createNav(){
    const nav = document.createElement('nav');
    const home = createButton('home','Home');
    const menu = createButton('menu','Menu');
    const contact = createButton('contact','Contact');
    nav.appendChild(home);
    nav.appendChild(menu);
    nav.appendChild(contact);
    return nav;
}
function createTabContent(){
    const tabContent = document.createElement('div');
    tabContent.setAttribute('id','tab-content');
    return tabContent;
}
function loadPage(){
    const content = document.querySelector('#content');
    const mainImage = document.createElement('div');
    mainImage.setAttribute('id','main-image');
    const nameOfRestaurant = document.createElement('p');
    nameOfRestaurant.textContent = 'Precious Restaurant';
    mainImage.appendChild(nameOfRestaurant);
    content.appendChild(mainImage);
    const nav = createNav();
    content.appendChild(nav);
    const description = createTabContent();
    content.appendChild(description);
}


export default loadPage;
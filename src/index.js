import loadPage from './modules/initial-page-load.js';
import loadHome from './modules/home.js';
import loadContact from './modules/contact.js';
import loadMenu from './modules/menu.js'

function addTabEvents(){
    const homeBtn = document.querySelector('#home');
    homeBtn.addEventListener('click',loadHome);
    const contactBtn = document.querySelector('#contact');
    contactBtn.addEventListener('click',loadContact);
    const menuBtn = document.querySelector('#menu');
    menuBtn.addEventListener('click',loadMenu);
}
loadPage();
loadHome();
addTabEvents();
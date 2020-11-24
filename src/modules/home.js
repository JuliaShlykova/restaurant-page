function loadHome(){
    const tabContent = document.querySelector('#tab-content');
    const tabs = document.querySelectorAll('nav button');
    for (let tab of tabs){
        tab.classList.remove('activeTab');
    }
    const home = document.querySelector('#home');
    home.classList.add('activeTab');
    tabContent.textContent = '';
    tabContent.textContent = "Precious is the restaurant with long history: Locals have been enjoying food here since 1950. Everything in menu is homemade. It feels like home. Currently it's located on avenu of Sky, nearby globe of Stars.";
}

export default loadHome;
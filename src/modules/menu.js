function loadMenu(){
    const tabContent = document.querySelector('#tab-content');
    const tabs = document.querySelectorAll('nav button');
    for (let tab of tabs){
        tab.classList.remove('activeTab');
    }
    const menu = document.querySelector('#menu');
    menu.classList.add('activeTab');
    tabContent.textContent = '';
    tabContent.textContent = "Drinks: wine 1 star; abcent 2 star";
}

export default loadMenu;
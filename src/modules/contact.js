function loadContact(){
    const tabContent = document.querySelector('#tab-content');
    const tabs = document.querySelectorAll('nav button');
    for (let tab of tabs){
        tab.classList.remove('activeTab');
    }
    const contact = document.querySelector('#contact');
    contact.classList.add('activeTab');
    tabContent.textContent = '';
    tabContent.textContent = "Our contacts:";
}

export default loadContact;
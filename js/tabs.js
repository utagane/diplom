
const tabsButtons = document.querySelectorAll('.tabs-menu>li');
  
tabsButtons.forEach((trigger) => { 
    trigger.addEventListener('click', function() {

        let id = this.getAttribute('data-tab'),
            content = document.querySelector('.tab-content[data-tab="'+ id +'"]'),
            activeButton = document.querySelector('.current'),
            activeContent = document.querySelector('.first-tab');
        
        activeButton.classList.remove('current');
        trigger.classList.add('current');

        activeContent.classList.remove('first-tab');
        content.classList.add('first-tab');
        
    });
});
//СЛАЙДЕР
//один обработчик для всех слайдов на странице
const slidesWraper = document.querySelectorAll('.slider-wrap'); //контейнер со слайдами и кнопками

if(slidesWraper){
    slidesWraper.forEach( (item) => { //перебираем все контейнеры со слайдами на странице и для каждого вешаем обработчик
        const   container = item.querySelector('.swiper-wrapper'),
                slides = container.querySelectorAll('.swiper-slide'),
                slideWidth = container.clientWidth,
                prev = item.querySelector('.prev-slide'),
                next = item.querySelector('.next-slide');
        
        let slideIndex = 1;
    
        showSlides(slideIndex);
    
        function showSlides(n){
            if(n > slides.length){
                slideIndex = 1;
                container.scrollLeft -= slideWidth * slides.length; //если слайды закончились, то скролим до первого
            }
            if(n < 1){
                slideIndex = slides.length;
                container.scrollLeft += slideWidth * slides.length; // если переходим с 1 слайда к последнему, скролим до последнего
            }
        }
    
        function plusSlides(n){
            showSlides(slideIndex += n);
        }
    
        prev.addEventListener('click', () => {
            container.scrollLeft -= slideWidth; //скролим вправо на ширину контейнера
            plusSlides(-1);    
        });
        
        next.addEventListener('click', () => {
            container.scrollLeft += slideWidth; //скролим влево на ширину контейнера
            plusSlides(1);
        });
    
    });
}



//ТАБЫ
const tabsButtons = document.querySelectorAll('.tabs-menu>li');

if(tabsButtons){
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
}



//ТАЙМЕР
// беру значение даты окончания акции из атрибуда data-countDate  ->    data-countDate="2023-05-21"
const checkPromo = document.querySelector('[data-countDate]');

if(checkPromo){
    const promotionEnd = checkPromo.getAttribute('data-countDate');

    function getRemainingTime(timeEnd){
        const t = Date.parse(timeEnd) - Date.parse(new Date()),
              days = Math.floor(t / (1000 * 60 * 60 * 24)),
              hours = Math.floor(t / (1000 * 60 * 60) % 24),
              minutes = Math.floor(t / (1000 * 60) % 60),
              seconds = Math.floor(t / 1000 % 60);
    
        return{
            'total' : t,
            'days' : days,
            'hours' : hours,
            'minutes' : minutes,
            'seconds' : seconds
        }
    
    }
    
    function setClock(selector, timeEnd){
        const timer = document.querySelector(selector),
              days = timer.querySelector('.days'),
              hours = timer.querySelector('.hours'),
              minutes = timer.querySelector('.minutes'),
              seconds = timer.querySelector('.seconds'),
              timeInterval = setInterval(updateTimer, 1000);
    
        updateTimer();
    
        function updateTimer(){
            const t = getRemainingTime(timeEnd);
            days.innerHTML = t.days;
            hours.innerHTML = t.hours;
            minutes.innerHTML = t.minutes;
            seconds.innerHTML = t.seconds;
            if(t.total <= 0){
                clearInterval(timeInterval);
            }
        }
    }
    
    setClock('.countdown', promotionEnd);
}

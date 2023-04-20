//один обработчик для всех слайдов на странице

const slidesWraper = document.querySelectorAll('.slider-wrap'); //контейнер со слайдами и кнопками

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
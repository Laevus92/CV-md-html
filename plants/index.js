function onClick() {
    document.getElementById('burger').classList.toggle('active');
    document.getElementById('popup-menu').classList.toggle('active');
    document.getElementById('body').classList.toggle('active');
    }
console.log('1. Вёрстка соответствует макету. Ширина экрана 768px +24\n2. Вёрстка соответствует макету. Ширина экрана 380px +24\n3. Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется +15\n4. На ширине экрана 380рх и меньше реализовано адаптивное меню +22')
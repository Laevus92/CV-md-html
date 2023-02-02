function onClick() {
    document.getElementById('burger').classList.toggle('active');
    document.getElementById('popup-menu').classList.toggle('active');
    document.getElementById('body').classList.toggle('active');
    }

    const servicesGarden = document.querySelectorAll('.servise-item.garden');
    const servicesLawn = document.querySelectorAll('.servise-item.lawn');
    const servicesPlanting = document.querySelectorAll('.servise-item.planting');
    const gardensButton = document.querySelector(".service-head > div > button:nth-child(1)");
    const lawnButton = document.querySelector(".service-head > div > button:nth-child(2)");
    const plantingButton = document.querySelector(".service-head > div > button:nth-child(3)");
    const basicButton = document.querySelector("#price > div.prices > div > div:nth-child(1) > div.tariff-item.basic > div");
    const standartButton = document.querySelector("#price > div.prices > div > div:nth-child(2) > div.tariff-item.standard > div");
    const proCareButton = document.querySelector("#price > div.prices > div > div:nth-child(3) > div.tariff-item.pro-care > div");


    gardensButton.addEventListener('click', function () {
        if (lawnButton.classList.contains('active') && plantingButton.classList.contains('active')) {
            lawnButton.classList.remove('active');
            servicesLawn.forEach(element => element.classList.add('blur')); 
            gardensButton.classList.add('active');
            servicesGarden.forEach(element => element.classList.toggle('blur'));
        } else if (lawnButton.classList.contains('active')) {
            gardensButton.classList.toggle('active');
            servicesGarden.forEach(element => element.classList.toggle('blur'));
        } else if (plantingButton.classList.contains('active')) {
            gardensButton.classList.toggle('active');
            servicesGarden.forEach(element => element.classList.toggle('blur'));
        } else {
            gardensButton.classList.toggle('active');
            servicesLawn.forEach(element => element.classList.toggle('blur'));
            servicesPlanting.forEach(element => element.classList.toggle('blur'));
        }
    });

    lawnButton.addEventListener('click', function () {
        if (gardensButton.classList.contains('active') && plantingButton.classList.contains('active')) {
            plantingButton.classList.remove('active');
            servicesPlanting.forEach(element => element.classList.add('blur')); 
            lawnButton.classList.add('active');
            servicesLawn.forEach(element => element.classList.toggle('blur'));
        } else if (gardensButton.classList.contains('active')) {
            lawnButton.classList.toggle('active');
            servicesLawn.forEach(element => element.classList.toggle('blur'));
        } else if (plantingButton.classList.contains('active')) {
            lawnButton.classList.toggle('active');
            servicesLawn.forEach(element => element.classList.toggle('blur'));
        } else {
            lawnButton.classList.toggle('active');
            servicesGarden.forEach(element => element.classList.toggle('blur'));
            servicesPlanting.forEach(element => element.classList.toggle('blur'));
        }
    });

    plantingButton.addEventListener('click', function () {
        if (lawnButton.classList.contains('active') && gardensButton.classList.contains('active')) {
            lawnButton.classList.remove('active');
            servicesLawn.forEach(element => element.classList.add('blur')); 
            plantingButton.classList.add('active');
            servicesPlanting.forEach(element => element.classList.toggle('blur'));
        } else if (lawnButton.classList.contains('active')) {
            plantingButton.classList.toggle('active');
            servicesPlanting.forEach(element => element.classList.toggle('blur'));
        } else if (gardensButton.classList.contains('active')) {
            plantingButton.classList.toggle('active');
            servicesPlanting.forEach(element => element.classList.toggle('blur'));
        } else {
            plantingButton.classList.toggle('active');
            servicesGarden.forEach(element => element.classList.toggle('blur'));
            servicesLawn.forEach(element => element.classList.toggle('blur'));
        }
    });

    basicButton.addEventListener('click', () => {
        if ((standartButton.style.transform === 'rotate(180deg)') || (proCareButton.style.transform === 'rotate(180deg)')) {
            standartButton.style.transform = 'rotate(0deg)';
            proCareButton.style.transform = 'rotate(0deg)';
            document.querySelector("#price > div.prices > div > div:nth-child(2) > div.tariff-item.standard").classList.remove('active');
            document.querySelector("#price > div.prices > div > div:nth-child(2) > div.tarif-content").classList.remove('active');
            document.querySelector("#price > div.prices > div > div:nth-child(3) > div.tariff-item.pro-care").classList.remove('active');
            document.querySelector("#price > div.prices > div > div:nth-child(3) > div.tarif-content").classList.remove('active');
            if (basicButton.style.transform === 'rotate(180deg)') {
                basicButton.style.transform = 'rotate(0deg)';
            } else {
                basicButton.style.transform = 'rotate(180deg)';
            }
        } else {
            if (basicButton.style.transform === 'rotate(180deg)') {
                basicButton.style.transform = 'rotate(0deg)';
            } else {
                basicButton.style.transform = 'rotate(180deg)';
            }
        }
        document.querySelector("#price > div.prices > div > div:nth-child(1) > div.tariff-item.basic").classList.toggle('active');
        document.querySelector("#price > div.prices > div > div:nth-child(1) > div.tarif-content").classList.toggle('active');
    })
    
    standartButton.addEventListener('click', () => {
        if ((basicButton.style.transform === 'rotate(180deg)') || (proCareButton.style.transform === 'rotate(180deg)')) {
            basicButton.style.transform = 'rotate(0deg)';
            proCareButton.style.transform = 'rotate(0deg)';
            document.querySelector("#price > div.prices > div > div:nth-child(1) > div.tariff-item.basic").classList.remove('active');
            document.querySelector("#price > div.prices > div > div:nth-child(1) > div.tarif-content").classList.remove('active');
            document.querySelector("#price > div.prices > div > div:nth-child(3) > div.tariff-item.pro-care").classList.remove('active');
            document.querySelector("#price > div.prices > div > div:nth-child(3) > div.tarif-content").classList.remove('active');
            if (standartButton.style.transform === 'rotate(180deg)') {
                standartButton.style.transform = 'rotate(0deg)';
            } else {
                standartButton.style.transform = 'rotate(180deg)';
            }
        } else {
            if (standartButton.style.transform === 'rotate(180deg)') {
                standartButton.style.transform = 'rotate(0deg)';
            } else {
                standartButton.style.transform = 'rotate(180deg)';
            }
        }
        document.querySelector("#price > div.prices > div > div:nth-child(2) > div.tariff-item.standard").classList.toggle('active');
        document.querySelector("#price > div.prices > div > div:nth-child(2) > div.tarif-content").classList.toggle('active');
    })
    
    proCareButton.addEventListener('click', () => {
        if ((basicButton.style.transform === 'rotate(180deg)') || (standartButton.style.transform === 'rotate(180deg)')) {
            basicButton.style.transform = 'rotate(0deg)';
            standartButton.style.transform = 'rotate(0deg)';
            document.querySelector("#price > div.prices > div > div:nth-child(1) > div.tariff-item.basic").classList.remove('active');
            document.querySelector("#price > div.prices > div > div:nth-child(1) > div.tarif-content").classList.remove('active');
            document.querySelector("#price > div.prices > div > div:nth-child(2) > div.tariff-item.standard").classList.remove('active');
            document.querySelector("#price > div.prices > div > div:nth-child(2) > div.tarif-content").classList.remove('active');
            if (proCareButton.style.transform === 'rotate(180deg)') {
                proCareButton.style.transform = 'rotate(0deg)';
            } else {
                proCareButton.style.transform = 'rotate(180deg)';
            }
        } else {
            if (proCareButton.style.transform === 'rotate(180deg)') {
                proCareButton.style.transform = 'rotate(0deg)';
            } else {
                proCareButton.style.transform = 'rotate(180deg)';
            }
        }
        document.querySelector("#price > div.prices > div > div:nth-child(3) > div.tariff-item.pro-care").classList.toggle('active');
        document.querySelector("#price > div.prices > div > div:nth-child(3) > div.tarif-content").classList.toggle('active');
    })
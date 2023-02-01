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
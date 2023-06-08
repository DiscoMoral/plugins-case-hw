//Choices--------------------------------------------------------------------------

const element = document.querySelector('select');
const choices = new Choices(element, {
    searchEnabled: true
});


// YaMap--------------------------------------------------------------------------

ymaps.ready(init);
function init(){
    // Создание карты.
    var myMap = new ymaps.Map("map", {
    // Координаты центра карты.
    center: [48.872185, 2.354224],
    // Уровень масштабирования.
    zoom: 15
});

var myPlacemark = new ymaps.Placemark([48.872185, 2.354224], {}, {
    iconLayout: 'default#image',
    iconImageHref: './img/point.svg',
    iconImageSize: [28, 40],
    iconImageOffset: [-3, -42]
});

    // Размещение геообъекта на карте.
    myMap.geoObjects.add(myPlacemark);
}


// Mask and Valid--------------------------------------------------------------------------

document.addEventListener("DOMContentLoaded", function () {
    const validation = new JustValidate('.form');
    const selector = document.querySelector("input[type='tel']");
    const im = new Inputmask("+7 (999)-999-99-99");
    im.mask(selector);

    validation
    .addField('.name', [
    {
        rule: 'minLength',
        value: 2,
        errorMessage: "Слишком короткое имя"
    },
    {
        rule: 'maxLength',
        value: 15,
        errorMessage: "Максимальное количество символов - 15"
    },
    {
        rule: 'required',
        errorMessage: 'Вы не ввели имя'
    }
    ])
    .addField('.mail', [
    {
        rule: 'required',
        errorMessage: 'Вы не ввели e-mail',
    },
    {
        rule: 'email',
        errorMessage: 'Вы не корректно ввели e-mail',
    }
    ])
    .addField('.tel', [
    {
        rule: "function",
        validator: function (name, value) {
        const phone = selector.inputmask.unmaskedvalue();
        return phone.length === 10
        },
        errorMessage: 'Вы не ввели телефон',
    }]);
})



// Tippy--------------------------------------------------------------------------

tippy('#tipIcon', {
    content: 'Глава 2, страница 176',
    placement: 'top',
    arrow: true,
    animation: 'scale-extreme',
    followCursor: true,
});

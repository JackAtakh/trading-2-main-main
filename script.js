let tradePhotos = document.querySelectorAll('img');
let currentIndex = 0;

// Скрыть все изображения, кроме первого, при загрузке
tradePhotos.forEach((element, index) => {
    if (index === currentIndex) {
        element.style.display = 'block';
    } else {
        element.style.display = 'none';
    }
});

setInterval(() => {
    // Скрыть текущее изображение
    tradePhotos[currentIndex].style.display = 'none';
    // Переключиться на следующее изображение
    currentIndex = (currentIndex + 1) % tradePhotos.length;
    // Показать новое текущее изображение
    tradePhotos[currentIndex].style.display = 'block';
}, 1500);
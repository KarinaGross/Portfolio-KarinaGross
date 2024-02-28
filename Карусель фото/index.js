// Вашей задачей является создание веб-слайдера для отображения изображений на веб-странице. Слайдер должен
// позволять переключаться между изображениями и отображать их в центре экрана.

// 1. Создайте интерфейс веб-страницы, который включает в себя следующие элементы:

// a. Контейнер для отображения текущего изображения.
// b. Кнопки "Предыдущее изображение" и "Следующее изображение" для переключения между изображениями.
// c. Навигационные точки (индикаторы) для быстрого переключения между изображениями.

// 2. Используйте HTML для создания элементов интерфейса.

// 3. Используйте JavaScript для обработки событий:

// a. При клике на кнопку "Предыдущее изображение" должно отображаться предыдущее изображение.
// b. При клике на кнопку "Следующее изображение" должно отображаться следующее изображение.
// c. При клике на навигационные точки, слайдер должен переключаться к соответствующему изображению.

// 4. Слайдер должен циклически переключаться между изображениями, то есть после последнего изображения должно
// отображаться первое, и наоборот.

// 5. Добавьте стилизацию для слайдера и элементов интерфейса с использованием CSS для улучшения внешнего вида.


const photos = [
    'https://bipbap.ru/wp-content/uploads/2018/03/s1200-3.jpg',
    'https://almaty.tv/news_photo/1677478475_news_b.jpeg',
    'https://koshka.top/uploads/posts/2021-11/1636393780_9-koshka-top-p-simpatichnie-koshki-9.jpg',
    'https://avatars.dzeninfra.ru/get-zen_doc/8288376/pub_64060a486540916b1de6ff56_64060b6f4dd9392590c8659b/scale_1200',
    'https://static.tildacdn.com/tild3961-3430-4236-a235-323838373935/D_eszlYXkAAx9t3.jpg',
    'https://klike.net/uploads/posts/2023-02/1675326742_3-31.jpg'
]

const photoContainer = document.querySelector('.container');
const previousEl = document.querySelector('.previous-photo');
const currentEl = document.querySelector('.current-photo');
const nextEl = document.querySelector('.next-photo');
const buttons = document.querySelector('.buttons');

const createPhotoElement = (currentIndex) => {
    const photo = document.createElement('img');
    photo.src = `${photos[currentIndex]}`;
    photo.alt = 'cat';

    return photo;
}

/**
 * 
 * @param {Number} count 
 * @param {Number} index 
 * @param {Array} arrayPhotos 
 */
const getCurrentIndex = (count, index, arrayPhotos) => {
    return (index + count) % arrayPhotos.length;
}

function displayRewindPhotos(index) {
    let count = 0;

    while (count < 3) {
        let currentIndex = getCurrentIndex(count, index, photos);
        const photo = createPhotoElement(currentIndex);

        if (count === 0) {
            previousEl.innerHTML = photo.outerHTML;
        } else if (count === 1) {
            currentEl.innerHTML = photo.outerHTML;
        } else {
            nextEl.innerHTML = photo.outerHTML;
        }

        count++;
    }
}

function displayReversePhotos(index) {
    let count = 0;

    while (count < 3) {
        let currentIndex = getCurrentIndex(count, index, photos);
        const photo = createPhotoElement(currentIndex);

        if (count === 2) {
            previousEl.innerHTML = photo.outerHTML;
        } else if (count === 1) {
            currentEl.innerHTML = photo.outerHTML;
        } else {
            nextEl.innerHTML = photo.outerHTML;
        }

        count++;
    }
}

displayRewindPhotos(0);

buttons.addEventListener('click', (e) => {
    const currentLinkPhoto = currentEl.querySelector('img').src;
    const indexCurrentPhoto = photos.indexOf(currentLinkPhoto);

    if (e.target.classList.contains("previous-button")) {
        displayReversePhotos(indexCurrentPhoto);
    }
    if (e.target.classList.contains("next-button")) {
        displayRewindPhotos(indexCurrentPhoto);
    }
});

photoContainer.addEventListener('click', (e) => {
    const currentLinkPhoto = currentEl.querySelector('img').src;
    const indexCurrentPhoto = photos.indexOf(currentLinkPhoto);

    if (e.target.tagName === 'IMG' && e.target.closest('.previous-photo')) {
        displayReversePhotos(indexCurrentPhoto);
        console.log(e.target.tagName === 'IMG');
    }
    if (e.target.tagName === 'IMG' && e.target.closest('.next-photo')) {
        displayRewindPhotos(indexCurrentPhoto);
        console.log(e.target.tagName === 'IMG');
    }
})
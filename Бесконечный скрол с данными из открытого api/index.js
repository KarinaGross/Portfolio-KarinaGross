// jUTBRkoYF4eos5wq61Frgdg3iHnkjaAyCAZ_SdoQraY


const container = document.querySelector('.container');
let currentPage = 1;

async function fetchDataPhotos() {
    try {
        const response = await fetch(`https://api.unsplash.com/photos?page=${currentPage}`, {
            headers: {
                'Authorization': 'Client-ID jUTBRkoYF4eos5wq61Frgdg3iHnkjaAyCAZ_SdoQraY'
            }
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.log(data);
        displayPhotos(data);
        currentPage++;
    } catch (error) {
        console.error('Ошибка:', error);
    }
}

const createContentEl = (data) => {
    return `
        <div class="photo-box">
            <img src="${data.urls.small}" alt="photo" class="photo">
        </div>
        <h3 class="author">${data.user.first_name}</h3>
        <i class="like fa-regular fa-heart"> <span class="amount-likes">${data.likes}</span></i>
    `
}

function displayPhotos(photos) {
    photos.forEach(photo => {
        const contentBox = document.createElement('div');
        contentBox.className = 'content-box';
        contentBox.innerHTML = createContentEl(photo);
        container.appendChild(contentBox);
    })
}

function checkScroll() {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 500) {
        fetchDataPhotos();
    }
}

window.addEventListener('scroll', checkScroll);

fetchDataPhotos();

container.addEventListener('click', (e) => {
    if (e.target.classList.contains('like')) {
        const likeCount = e.target.querySelector('.amount-likes');
        likeCount.textContent = +likeCount.textContent + 1;
    }
})
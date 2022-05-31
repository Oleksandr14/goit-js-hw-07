import { galleryItems } from './gallery-items.js';

// Change code below this line

const containerGalleryEl = document.querySelector('.gallery');

const listItemsMarkup = createGalleryItems(galleryItems);
containerGalleryEl.insertAdjacentHTML('beforeend', listItemsMarkup);

function createGalleryItems(items) {
    return items.map(({ preview, original, description }) => `
    <div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
            />
        </a>
    </div>`).join('');
};


function onImagesOpen(event) {

    event.preventDefault();
    
    if (event.target.nodeName !== 'IMG') return;
    
    const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">`)
    
    instance.show()
    
};

containerGalleryEl.addEventListener('click', onImagesOpen);

console.log(galleryItems);

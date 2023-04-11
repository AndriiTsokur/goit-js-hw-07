import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryList = document.querySelector('.gallery');

makeGalleryMarkup(galleryItems);

const lightbox = new SimpleLightbox('.gallery a', {
	overlayOpacity: 0.85,
	captionsData: 'alt',
	captionDelay: 250,
});

function makeGalleryMarkup(items) {
	const galleryItemsLayout = items
		.map(({ preview, original, description }) => {
			return `
			<li class="gallery__item">
				<a class="gallery__link" href="${original}">
					<img
						class="gallery__image"
						src="${preview}" 
						alt="${description}" />
				</a>
			</li>
		`;
		})
		.join('');

	galleryList.insertAdjacentHTML('afterbegin', galleryItemsLayout);
}

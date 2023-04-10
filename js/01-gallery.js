import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryList = document.querySelector('.gallery');
galleryList.addEventListener('click', showFullsizeImage);

makeGalleryMarkup(galleryItems);

function makeGalleryMarkup(items) {
	const galleryItemsLayout = items
		.map(({ preview, original, description }) => {
			return `
			<li class="gallery__item">
				<a class="gallery__link" href="${original}">
					<img
						class="gallery__image"
						src="${preview}"
						data-source="${original}"
						alt="${description}"
					/>
				</a>
			</li>
		`;
		})
		.join('');

	galleryList.insertAdjacentHTML('afterbegin', galleryItemsLayout);
}

function showFullsizeImage(e) {
	e.preventDefault();
	if (e.target.nodeName !== 'IMG') {
		return;
	}

	const instance = basicLightbox.create(`
		<img src="${e.target.dataset.source}" alt="${e.target.alt}">
	`);

	instance.show();

	escClosesFullsizeImage(instance);
}

function escClosesFullsizeImage(instance) {
	window.addEventListener('keydown', function func(e) {
		if (e.code === 'Escape') {
			instance.close();
			this.removeEventListener('keydown', func);
		}
	});
}

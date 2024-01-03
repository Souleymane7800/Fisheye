const lightboxWrapper = document.querySelector('#modal_lightbox');
const btnLightBoxPrev = document.querySelector('.btn__lightbox__prev');
const btnLightBoxNext = document.querySelector('.btn__lightbox__next');
// const lightboxContainer = document.querySelector('.lightbox__container');
// const lightbox = document.querySelector('.lightbox');


function openLightBox(index) {

	const galleryImages = document.querySelectorAll('.mediaCard__img');
	const lightboxContainer = document.querySelector('.lightbox__container');
	let newIndex = index;

	// On affiche l'image dans la lightbox
	function showImage() {
		lightboxWrapper.style.display = 'flex';
		header.style.display = 'none';
		main.style.display = 'none';
		main.setAttribute('aria-hidden', 'true');
		header.setAttribute('aria-hidden', 'true');

		lightboxContainer.innerHTML = '';
		let selectedImg = galleryImages[newIndex].children[0].src;

		const type = selectedImg?.slice(-4);

		if (type === '.jpg' || type === '.jpeg' || type === '.png' || type === '.gif') {
			const imgCard = document.createElement('img');
			imgCard.src = selectedImg;
			lightboxContainer.appendChild(imgCard);
		} else if (type === '.mp4' || type === '.webm' || type === '.ogg') {
			const videoCard = document.createElement('video');
			videoCard.setAttribute('controls', 'true');
			videoCard.src = selectedImg;
			lightboxContainer.appendChild(videoCard);
		}

		const title = galleryImages[newIndex].children[0].getAttribute('data-title');
		const lightboxTitle = document.createElement('h3');
		lightboxTitle.setAttribute('id', 'lightbox__info__title');
		lightboxTitle.setAttribute('class', 'lightbox__info__title');
		lightboxTitle.innerHTML = title;
		lightboxContainer.appendChild(lightboxTitle);
	}
	
	// KEYBOARD
	function handleKeyPress(event) {
		if (event.keyCode === 27) {
		    closeLightbox();
		}
		if (event.keyCode === 37) {
		    newIndex--;
		    if (newIndex < 0) {
			  newIndex = galleryImages.length - 1;
		    }
		    showImage();
		}
		if (event.keyCode === 39) {
		    newIndex++;
		    if (newIndex >= galleryImages.length) {
			  newIndex = 0;
		    }
		    showImage();
		}
	  }				
    
	  document.addEventListener('keydown', handleKeyPress);

	btnLightBoxPrev.onclick = () => {
		newIndex--;
		if (newIndex < 0) {
			newIndex = galleryImages.length - 1;
		}
		showImage();
	};

	btnLightBoxNext.onclick = () => {
		newIndex++;
		if (newIndex >= galleryImages.length) {
			newIndex = 0;
		}
		showImage();
	};

	showImage();
}

// Fermer la lightbox
function closeLightbox() {
	lightboxWrapper.style.display = 'none';
	header.style.display = 'block';
	main.style.display = 'block';
	main.setAttribute('aria-hidden','false');
	header.setAttribute('aria-hidden','false');
}


                    







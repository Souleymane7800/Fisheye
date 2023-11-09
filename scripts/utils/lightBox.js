const lightboxWrapper = document.querySelector('#modal_lightbox');
const btnLightBoxPrev = document.querySelector('.btn__lightbox__prev');
const btnLightBoxNext = document.querySelector('.btn__lightbox__next');
const lightboxContainer = document.querySelector('.lightbox__container');
const lightbox = document.querySelector('.lightbox');

function openLightBox() {
  const galleryImages = document.querySelectorAll('.mediaCard__img');
  const lightboxContainer = document.querySelector('.lightbox__container');

  for (let i = 0; i < galleryImages.length; i++) {
    let newIndex = i;
    galleryImages[i].onclick = () => {
      lightboxWrapper.style.display = 'flex';
      header.style.display = "none";
      main.style.display = "none";
      main.setAttribute('aria-hidden','true');
      header.setAttribute('aria-hidden','true');

      // Afficher l'image ou la video dans la lightbox
      function showImage() {
        lightboxContainer.innerHTML = '';
        let selectedImg = galleryImages[newIndex].children[0].src;

        // On récupère le type de données
        const type = selectedImg?.slice(-4);

        // Si type image
        if (type === '.jpg' || type === '.jpeg' || type === '.png' || type === '.gif') {
          // Créez un élément img pour afficher l'image dans lightboxContainer
          const imgCard = document.createElement('img');
          imgCard.src = selectedImg;
          // Récupérez le titre de l'image à partir de l'attribut data-title
          const title = galleryImages[newIndex].getAttribute('data-title');
          lightboxContainer.appendChild(imgCard);

          // Si type video
        } else if (type === '.mp4' || type === '.webm' || type === '.ogg') {
          const title = galleryImages[newIndex].getAttribute('alt');
          const videoCard = document.createElement('video');
          videoCard.setAttribute('controls', 'true');
          videoCard.src = selectedImg;
          lightboxContainer.appendChild(videoCard);
        }
        // Add title
        const title = galleryImages[newIndex].children[0].getAttribute('data-title')
        const lightboxTitle = document.createElement('h3');
        lightboxTitle.setAttribute('id', 'lightbox__info__title');
        lightboxTitle.setAttribute('class', 'lightbox__info__title');
        lightboxTitle.innerHTML = title;
        lightboxContainer.appendChild(lightboxTitle);
      }

      // Next & prev
      btnLightBoxPrev.onclick = () => {
        newIndex--; //decrement
        if (newIndex < 0) {
          newIndex = galleryImages.length - 1; // Retour au dernier élément si le début est atteint
        }
        showImage() // calling again to update
      }

      btnLightBoxNext.onclick = () => {
        newIndex++; //increment
        if (newIndex >= galleryImages.length) {
          newIndex = 0; // Retour au premier élément si la fin est atteinte
        }
        showImage() // calling again to update
      }
      showImage();
    }
  }
}

// Fermer la lightbox
function closeLightbox() {
  lightboxWrapper.style.display = 'none';
  header.style.display = "block";
  main.style.display = "block";
  main.setAttribute('aria-hidden','false');
  header.setAttribute('aria-hidden','false');
  // console.clear();
}


                    







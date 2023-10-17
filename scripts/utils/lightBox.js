const lightboxWrapper = document.querySelector('#modal_lightbox');
const btnLightBoxPrev = document.querySelector('.btn__lightbox__prev');
const btnLightBoxNext = document.querySelector('.btn__lightbox__next');
const lightboxMedia = document.querySelector('.lightbox__media');
// console.log('light', lightboxWrapper,btnLightBoxNext,btnLightBoxPrev,lightboxMedia)



// ouvrir la lightbox
function openLightBox(picture,title,index) {
  const lightboxImgs =  document.querySelectorAll('#lightbox__img');
  console.log('lightboximg', lightboxImgs.length)
  console.log('picture-title===========',picture,title,index)
  lightboxWrapper.style.display = 'flex';
  header.style.display = "none";
  main.style.display = "none";
  main.setAttribute('aria-hidden','true');
  header.setAttribute('aria-hidden','true');
 
  // Afficher la photo dans la lightbox
  lightboxMedia.innerHTML = ''; // Efface le contenu précédent
  const img = document.createElement('img');
  img.classList.add('mediaCard__img');
  img.src = picture;
  img.alt = title;

  // Crée un élément pour afficher le titre
  const titleElement = document.createElement('div');
  titleElement.classList.add('mediaCard__info__title');
  titleElement.textContent = title;

  // Ajoute l'image et le titre à lightboxMedia
  lightboxMedia.appendChild(img);
  lightboxMedia.appendChild(titleElement);

  // Ecoute sur le bouton prev
  btnLightBoxPrev.addEventListener('click', () => {
    showPreviousImage()
  });

  // Ecoute sur le bouton next
  btnLightBoxNext.addEventListener('click', () => {
    showNextImage()

  });

  let currentImageIndex = 0;
  
  function showImage(index) {
    if (index >= 0 && index < lightboxImgs.length) {
      const img = lightboxImgs[index];
      lightboxMedia.innerHTML = ''; // Efface le contenu précédent
      lightboxMedia.appendChild(img);
      currentImageIndex = index;
      console.log('currentindex',currentImageIndex)
    }
  }
  
  function showPreviousImage() {
    const previousIndex = (currentImageIndex - 1 + lightboxImgs.length) % lightboxImgs.length;
    showImage(previousIndex);
    console.log('previous',previousIndex)
  }
  
  function showNextImage() {
    const nextIndex = (currentImageIndex + 1) % lightboxImgs.length;
    showImage(nextIndex);
    console.log('next',nextIndex)
  }
};

// Fermer la lightbox
function closeLightbox() {
      lightboxWrapper.style.display = 'none';
      header.style.display = "block";
      main.style.display = "block";
      main.setAttribute('aria-hidden','false');
      header.setAttribute('aria-hidden','false');
      // console.clear();
      console.log('je ferme la lightbox')
}







                    







const lightboxWrapper = document.querySelector('#modal_lightbox');
const btnLightBoxPrev = document.querySelector('.btn__lightbox__prev');
const btnLightBoxNext = document.querySelector('.btn__lightbox__next');
const lightboxContainer = document.querySelector('.lightbox__container');
const lightbox = document.querySelector('.lightbox');


function openLightBox(picture, movie, title) {
  console.log(picture, title) //test
  const galleryImages = document.querySelectorAll('.mediaCard__img');
  console.log('gallery',galleryImages)
  const lightboxContainer = document.querySelector('.lightbox__container');

  for (let i = 0; i < galleryImages.length; i++) {
    let newIndex = i;
    galleryImages[i].onclick = () => {
      // console.log('iiiiiii',galleryImages)
      lightboxWrapper.style.display = 'flex';
      header.style.display = "none";
      main.style.display = "none";
      main.setAttribute('aria-hidden','true');
      header.setAttribute('aria-hidden','true');

      function showImage() {
        lightboxContainer.innerHTML = '';
        let selectedImg = galleryImages[newIndex].children[0].src;

        const type = selectedImg?.slice(-4);
        

        console.log('selectedImg====',selectedImg)
        // console.log('type',type);
        if (type === '.jpg' || type === '.jpeg' || type === '.png' || type === '.gif') {
          // Créez un élément img pour afficher l'image dans lightboxContainer
          const imgCard = document.createElement('img');
          imgCard.src = selectedImg;
              // Récupérez le titre de l'image à partir de l'attribut data-title
    const title = galleryImages[newIndex].getAttribute('data-title');
    console.log('title',title)
    
    // Affichez le titre dans la console pour le débogage
    console.log('Image Title', title);
          imgCard.getAttribute('data-title');
          console.log('imgcard===',imgCard)
          // lightboxContainer.appendChild(title)
          lightboxContainer.appendChild(imgCard);
        } else if (type === '.mp4' || type === '.webm' || type === '.ogg') {
          console.log('video')
          const title = galleryImages[newIndex].getAttribute('alt');
          const videoCard = document.createElement('video');
          videoCard.getAttribute('data-title');
          videoCard.setAttribute('controls', 'true');
          // videoCard.setAttribute('src', movie);
          videoCard.src = selectedImg;
          console.log('videoCard',galleryImages[newIndex])
          videoCard.controls = true; // Show video controls
          lightboxContainer.appendChild(videoCard);
        }
        // Add title
        const title = galleryImages[newIndex].children[0].getAttribute('data-title')
        console.log('title', title)
        const lightboxTitle = document.createElement('h3');
        lightboxTitle.setAttribute('id', 'lightbox__info__title');
        lightboxTitle.setAttribute('class', 'mediaCard__info__title');
        lightboxTitle.innerHTML = title;
        lightboxContainer.appendChild(lightboxTitle);

      //   // Créez un élément img pour afficher l'image dans lightboxContainer
      // const imgCard = document.createElement('img');
      // imgCard.src = galleryImages[newIndex].src;
      // imgCard.getAttribute('data-title');
      // console.log('imgcard===',galleryImages[newIndex])

      // // title
      // const title = galleryImages[newIndex].getAttribute('data-title')
      // console.log(title)
      // const lightboxTitle = document.createElement('h3');
      // lightboxTitle.setAttribute('id', 'lightbox__info__title');
      // lightboxTitle.setAttribute('class', 'mediaCard__info__title');
      // lightboxTitle.textContent = title;

      // lightboxContainer.appendChild(imgCard);
      // lightboxContainer.appendChild(lightboxTitle);

      // // lightboxContainer.innerHTML = '';
      //   lightboxContainer.src = selectedImg;
      //   console.log('source============',lightboxContainer.src)
      //   console.log('selected====',selectedImg)
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
        newIndex++; //decrement
        // incrément
        if (newIndex >= galleryImages.length) {
          newIndex = 0; // Retour au premier élément si la fin est atteinte
        }
        showImage() // calling again to update
      }
      showImage();
      // Si image
     
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
  console.log('je ferme la lightbox')
}


// function getListeTitres(media){
//   let listeTitres= [];
//   console.log('listetitre',listeTitres)
//   media.forEach((media) => {
//       if(media.photographerId == id){
//           const mediaModel = mediaFactory(media);
//           if(mediaModel.picture == undefined){
//               listeTitres.push(mediaModel.title);
//           }
//           else{
//               listeTitres.push(mediaModel.title);
//           }
//       }
//   });

//   return listeTitres;
// }


// async function nextMedia(){
//   const { media } = await getMedias();
//   let listeMedias = getListeMedias(media);
//   let listeTitres = getListeTitres(media);
//   await resetMedia()
//   if(current + 1 > listeMedias.length-1){
//       current = 0;
//   }
//   else{
//       current ++;
//   }
//   await setMedia(listeMedias[current], listeTitres[current]);
// }

// async function previousMedia(){
//   const { media } = await getMedias();
//   let listeMedias = getListeMedias(media);
//   let listeTitres = getListeTitres(media);
//   await resetMedia()
//   if(current - 1 < 0){
//       current = listeMedias.length-1;
//   }
//   else{
//       current --;
//   }
//   await setMedia(listeMedias[current], listeTitres[current]);
// }

                    







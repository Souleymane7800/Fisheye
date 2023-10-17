 //Mettre le code JavaScript lié à la page photographer.html

//  Datas
let photographers = []
let media = []

// On récupère les données par l'url
let params = window.location.search;
const urlParams = new URLSearchParams(params);
const photographerId = urlParams.get('id');

async function getPhotograph() {
      // On fetch pour récupérer les données
      try {

            await fetch("../data/photographers.json")
            .then((data) => data.json())
            .then((data2) => {
                  photographers = data2.photographers
                  media = data2.media
            }); 
            
            // On retourne les données dans un tableau
            return {photographers, media}

      } catch (error) {
                  // En cas d'erreur on envoie une alerte
                console.log("Une erreur est survenue : ", error);
      };
};

// On affiche les données du photographe grâce à son ID
async function displayData(photographer) {
      const photographHeader = document.querySelector(".photograph-header");
        //console.log(photographer)
      // On envoie les données dans template
      const photographerModel = photographTemplate(photographer);
      const photographCardDOM = photographerModel.getPhotographCardDOM();
      photographHeader.appendChild(photographCardDOM);
};

// On affiche la galerie médias du photographe
async function displayMedia(photographMedia) {
      const sectionCard = document.querySelector('.gallery_card_section');

      // Iteration des medias et envoie dans mediaFactory
      photographMedia.forEach((media) => {
            const mediaModel = mediaFactory(media);
            const mediaCardDom = mediaModel.getMediaCardDOM();
            sectionCard.appendChild(mediaCardDom);
            // const sortModel = openLightBox(media);
      });
      // photographMedia.forEach((media) => {
            // const sortModel = openLightBox(photographMedia);//test
            const filtreModel = displaySortDatas(photographMedia);
            // const mediaCardDom = sortModel.getMediaCardDOM();
            // sectionCard.appendChild(sortModel);
            // console.log('data==========',media)
      // });
};

// media lightbox test
async function displayLightBox(photographMedia) {
      const lightboxWrapper = document.querySelector('#modal_lightbox');

      photographMedia.forEach((image) => {
            // const mediaLightBox = openLightBox(image);
            // const lightBoxCardDom = mediaLightBox.getLightBoxCardDOM();
            // lightboxWrapper.appendChild(lightBoxCardDom);
            // console.log('medialightbox', image);

      })
}

async function init () {
      const { photographers, media } = await getPhotograph();

      // Récupération du photographe par son ID
      const photographer = photographers.find(
           (photographer) => photographer.id == photographerId
      )

      // On filtre les medias
      const photographMedia = media.filter(
            (media) => media.photographerId == photographerId
      )

      // mediaId test
      // const currentImage = media.filter(
      //       (media) => media.photographerId.id == media.id
      //       )
            // console.log('mediaID', currentImage)
      // console.log('photographermedia', media.image)
      displayLightBox(photographMedia)
      displayData(photographer) // On envoie les données dans photograph-header
      displayMedia(photographMedia)
};

init();





      



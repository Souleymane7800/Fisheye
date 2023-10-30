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


// // Filter datas
// const allMedias = Array.from(document.querySelectorAll('.drop__options li button'));
// const currentSort = document.querySelector('#current__sort');
// console.log('allmedias',allMedias)
// // Hide option deja selectionner:
// let optionSelected = allMedias.find(filter => filter.textContent == currentSort.textContent);
// optionSelected.style.display = "none";
// console.log('selected======',optionSelected)

// allMedias.forEach(filter => {
//       filter.addEventListener('click', () => {
//             const filterValue = filter.textContent;
//             currentSort.textContent = filterValue;
//             console.log('filtervalue',filterValue)

//             if(optionSelected) optionSelected.style.display = 'block';

//             filter.style.display = 'none';
//             optionSelected = filter;

//             // displayData(filterValue)
//             // mediaFactory()
//             displayMedia(photographMedia,filterValue)
//             // sortMedia();
//             // displayMedia(photographMedia);
//             showMenu();
//             // filterBox()
//       })
// })

// Partie filter
async function displayMedia(photographMedia) {
      //console.log('mediaphoto',photographMedia)
      const sectionCard = document.querySelector('.gallery_card_section');
    

    //console.log('sortData',sortedMedia)
      // Triez le tableau de médias en fonction des critères spécifiés
      //console.log('selected',selectedSortOption)
      //console.log('pmedia====',photographMedia)
            // switch (selectedSortOption) {
            // case 'Date':
            // photographMedia.sort((a, b) => new Date(a.date) - new Date(b.date));
            // break;
            // case 'Popularité':
            // photographMedia.sort((a, b) => b.likes - a.likes);
            // //console.log(photographMedia.sort())
            // break;
            // case 'Titre':
            // photographMedia.sort((a,b) => a.title.localeCompare(b.title));
            // break;      
            // default:
            // Par défaut, triez par date
            // photographMedia.sort((a, b) => b.likes - a.likes);
            // photographMedia.sort((a, b) => new Date(a.date) - new Date(b.date));
            //console.log('photomedia====',photographMedia)
            // photographMedia.sort((a,b) => a.title.localeCompare(b.title));
            //console.log(photographMedia.sort())
      // }
      // Effacez le contenu précédent de la section
      // sectionCard.innerHTML = '';
    
      // Itération des médias triés et envoi dans mediaFactory
      photographMedia.forEach((media) => {
        const mediaModel = mediaFactory(media);
        const mediaCardDom = mediaModel.getMediaCardDOM();
        //const filtreModel = filterBox(media) //test
      //   const mediaLightBox = getMedia(photographMedia);
      //   console.log(mediaLightBox)
        sectionCard.appendChild(mediaCardDom);
      });
}

// =======================================================================================
// media lightbox test
// async function displayLightBox(photographMedia) {
//       const lightboxWrapper = document.querySelector('#modal_lightbox');
      
//       photographMedia.forEach((image) => {
//             // const mediaModel = mediaFactory(media);
//             // const mediaCardDom = mediaModel.getMediaCardDOM();
//             //const filtreModel = filterBox(media) //test
//             const mediaLightBox = getMedia(image);
//             // console.log(mediaLightBox)
//             //   console.log(mediaLightBox)
//             // sectionCard.appendChild(mediaCardDom);
//       });
//       console.log('pohmedia',photographMedia)
// }

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
      
      // displayLightBox(photographMedia)
      displayData(photographer) // On envoie les données dans photograph-header
      displayMedia(photographMedia)
};

init();





      



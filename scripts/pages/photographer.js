 //Mettre le code JavaScript lié à la page photographer.html

//  Datas
let photographers = []
let media = []

// On récupère l'id du photographe par l'url
let params = window.location.search;
const urlParams = new URLSearchParams(params);
const photographerId = urlParams.get('id');

async function getPhotograph() {
      // On fetch pour récupérer les données
      try {
            const response = await fetch("../data/photographers.json");
            const data = await response.json();
            console.log('Données du fichier JSON :', data);
            photographers = data.photographers;
            media = data.media;
            return { photographers, media };
          } catch (error) {
            console.error("Une erreur est survenue : ", error);
          }
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


function filterDatas (media) {


// Filter datas
const allMedias = Array.from(document.querySelectorAll('.drop__options li button'));
const currentSort = document.querySelector('#current__sort');
// Hide option deja selectionner:
let optionSelected = allMedias.find(filter => filter.textContent == currentSort.textContent);
optionSelected.style.display = "none";
console.log('optionSelected======',optionSelected)

// // ouvrir le dropdown
const btnDrop = document.querySelector('.btn__drop');
const showMenu = () => {
  // console.log('j\'ouvre le menu')
  const menu = document.querySelector('.drop__options');
  menu.classList.toggle('dropdown-active');
  document.querySelector('.arrow').classList.toggle('rotate');
}
btnDrop.addEventListener('click', showMenu);

allMedias.forEach(filter => {
  filter.addEventListener('click', () => {
    const filterValue = filter.textContent;
    currentSort.textContent = filterValue;
    console.log('currentSort',currentSort.textContent)
            console.log('filtervalue',filterValue)

            if(optionSelected) optionSelected.style.display = 'block';

            filter.style.display = 'none';
            optionSelected = filter;

            // console.log(displayMedia(filterValue))
            showMenu();
            displayMedia(media, filterValue)
      });
});
}


// Partie filter
async function displayMedia( photographMedia, sortOption) {
      console.log('photomedia',photographMedia)
  console.log('sortOption',sortOption)
      // console.log('mediaphoto',[...photographMedia])
      // if (!Array.isArray(photographMedia)) {
      //       console.error("photographMedia n'est pas un tableau !");
      //       return; // Sortir de la fonction si ce n'est pas un tableau
      // }
      const sectionCard = document.querySelector('.gallery_card_section');
      // optionSelected
        // Copiez le tableau photographMedia pour éviter de modifier l'original
      // const photographMediaCopy = Array.from(photographMedia);
      // console.log('photographMediaCopy',photographMediaCopy)
      // photographMediaCopy.forEach((media, index) => {
            
      // });
      // Triez le tableau de médias en fonction des critères spécifiés
      console.log('pmedia====',photographMedia)
      switch (sortOption) {
            case 'Date':
                  photographMedia.sort((a, b) => new Date(a.date) - new Date(b.date));
                  break;
            case 'Popularité':
                        photographMedia.sort((a, b) => b.likes - a.likes);
                        console.table('pmedia====',photographMedia)
                  break;
            case 'Titre':
                  photographMedia.sort((a, b) => a.title.localeCompare(b.title));
                  break;
            default:
                  // Par défaut, triez par date
                  // photographMedia.sort((a, b) => b.likes - a.likes);
            // photographMedia.sort((a, b) => new Date(a.date) - new Date(b.date));
            // console.log('photomedia====',photographMedia)
            // photographMedia.sort((a,b) => a.title.localeCompare(b.title));
            // console.log(photographMedia.sort())
      }
      // Effacez le contenu précédent de la section
      sectionCard.innerHTML = '';
    
        // Itération des médias triés et envoi dans mediaFactory
        photographMedia.forEach((media) => {
            const mediaModel = mediaFactory(media);
            const mediaCardDom = mediaModel.getMediaCardDOM();
            sectionCard.appendChild(mediaCardDom);
    });
    console.log('photographMediaCopy======',photographMedia)
      // return sectionCard
}
function findMedia(media) {
     
         // Filtrer les médias pour obtenir ceux du photographe
       return media.filter(
             (mediaItem) => mediaItem.photographerId == photographerId
       );
};

function findPhotographe(photographers) {
      // Récupération du photographe par son ID
      return photographers.find(
            (photographer) => photographer.id == photographerId
       )

}
async function init () {
      const { photographers, media } = await getPhotograph();

      const photographer = findPhotographe(photographers);
      const photographMedia = findMedia(media);


      // // Récupération du photographe par son ID
      // const photographer = photographers.find(
      //      (photographer) => photographer.id == photographerId
      // )

      //   // Filtrer les médias pour obtenir ceux du photographe
      // const photographMedia = media.filter(
      //       (mediaItem) => mediaItem.photographerId == photographerId
      // );

            console.log('init',photographerId)
            // displayLightBox(photographMedia)
            displayData(photographer) // On envoie les données dans photograph-header
            // Appel à displayMedia ici, après que la fonction soit définie
            let currentSort = document.querySelector('#current__sort');
            displayMedia(photographMedia,currentSort.textContent)
            filterDatas(photographMedia);
            // console.log('photographMedia dans init :', photographMedia);
};

init();





      



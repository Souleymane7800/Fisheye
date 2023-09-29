 //Mettre le code JavaScript lié à la page photographer.html

//  Datas
let photographers = []
let media = []
// let photographData
// let photographMedia

// On récupère les données par l'url
let params = window.location.search;
console.log(params)
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
                  console.log('photographdataPAGESJS=============',data2)
            }) 
            
            
            console.log("MEDIADATA==========================",photographers,media)
            // On retourne les données dans un tableau
            return {photographers, media}

            } catch (error) {
                  // En cas d'erreur on envoie une alerte
                console.log("Une erreur est survenue : ",error);
            }
}

// On affiche les données du photographe grâce à son ID
async function displayData(photographer) {
    //console.log("je rentre dans displaydata=====================")
      const photographHeader = document.querySelector(".photograph-header");
        //console.log("PHOTOHEADER===============",photographHeader)
        
      const photographerModel = photographTemplate(photographer);
      const photographCardDOM = photographerModel.getPhotographCardDOM();
      photographHeader.appendChild(photographCardDOM);

}

// On affiche la gallerie médias du photographe
async function displayMedia(photographMedia) {
      console.log("je rentre dans dysplaymedia")
      // const main = document.querySelector('#main')
      const sectionCard = document.querySelector('.gallery_card_section')
      console.log('photographermedia===========', photographMedia)
      photographMedia.forEach((media) => {
            const mediaModel = mediaFactory(media)
            const mediaCardDom = mediaModel.getMediaCardDOM();
            sectionCard.appendChild(mediaCardDom)
            
      });
};


async function init () {
      const { photographers, media } = await getPhotograph()

      const photographer = photographers.find(
           (photographer) => photographer.id == photographerId
      )
      console.log('PHOTOGRAPHER============',{photographer})

      // a verifier
      const photographMedia = media.filter(
            (media) => media.photographerId == photographerId)
            console.log('PHOTOGRAPHMEDIA', {photographMedia})

      displayData(photographer) // On envoie les données dans photograph-header
      displayMedia(photographMedia)
      // return {photographer, media}

}
init();





      



//Mettre le code JavaScript lié à la page photographer.html
async function getPhotograph() {
      // Ceci est un exemple de données pour avoir un affichage de photographes de test dès le démarrage du projet, 
      // mais il sera à remplacer avec une requête sur le fichier JSON en utilisant "fetch".

      // On récupère les données par l'url
      try {
            let params = window.location.search;
            console.log(params)
            const urlParams = new URLSearchParams(params);

            const photographerId = urlParams.get('id');
            console.log('PHOTOGRAPHID==================', photographerId);

            const photographData = await fetch("../data/photographers.json")
            .then((data) => data.json());
            console.log('photographdata=============',photographData.photographerId)
            
            const photographer = photographData.photographers.find(
                  photographer => photographer.id == photographerId
                  )
            console.log('PHOTOGRAPHER================', photographData,[photographer.name])
            return photographer

          // Si erreur
          if (!response.ok) {
              throw new Error(`Erreur lors de la requête : ${response.status} ${response.statusText}`);
          }

          // Sinon
          const data = await response.json();
      //     let photographer = data.photographer;
          // et bien retourner le tableau photographers seulement une fois récupéré
          //return photographer //: [...photographer]})
          console.log('je suis dans le return', data.json())
          return ({
              photographer: [...photographer]})
            } catch {
                console.log("Une erreur est survenue : ");
            }
        }
  

  async function displayData(photographer) {
    console.log("je rentre dans displaydata=====================")
      const photographHeader = document.querySelector(".photograph-header");
        console.log("PHOTOHEADER===============",photographHeader)
        
    //   photographer((photographer) => {
      
          const photographerModel = photographTemplate(photographer);
          const photographCardDOM = photographerModel.getPhotographCardDOM();
          photographHeader.appendChild(photographCardDOM);
    //   });
  }

  async function init() {
      // Récupère les datas des photographes
      const  photographer  = await getPhotograph();
      displayData(photographer);
  }
  
  init();




// ========================================================================================
// console.log('je suis dans la page photographe======================')

// // async function getPhotographer() {
// //       console.log('je suis dans getphotographer')
      
// //       // ==================================================================
// //       // const { name, portrait, city, tagline, country, price, id } = data;
  
// //       // const picture = `assets/photographers/${portrait}`;
// //       // Récupération des photos:
// //       // const picture = `../assets/photographers/Photographers_ID_Photos/${portrait}`
// // //   ============================================================================
// //       let params = window.location.search;
// //       const urlParams = new URLSearchParams(params);

// //       const photographId = urlParams.get('id');
// //       const photographData = await fetch("../data/photographers.json")
// //             .then((data) => data.json())

// //             const photographer = photographData.photographers.find(
// //                   photographer => photographer.id == photographId
// //                   )
// //                   console.log('PHOTOGRAPHER================', photographer)
// //             return photographer
            
// //             function getPhotographCardDOM(photographId) {
// //                   console.log('je rentre dans carddom')
// //                   // On recupère la div
// //                   // const photographHeader = document.querySelector('.photograph-header');
// //                   // On crée une div pour ajouter les balises dans le DOM
// //                   const photographDesc = document.createElement('div')
// //                   const photographerName = document.createElement('h1')
// //                   photographerName.classList.add('photographer-name')
// //                   photographerName.textContent = photographId.name;

// //                   photographDesc.appendChild(photographerName)
// //                   // photographHeader.appendChild(photographDesc)
// //                   return (photographDesc);
// //                   }
// //                   return {  getPhotographCardDOM }
// //             }

// // getPhotographer();
// // =================================================================
// async function getPhotographer() {
//       console.log('je suis dans getphoto========================')

//       let params = window.location.search;
//       const urlParams = new URLSearchParams(params)

//       const photographId = urlParams.get('id')
//       const photographData = await fetch("../data/photographers.json")
//       .then((data) => data.json())

//       console.log('PHOTOdata==============',photographData)

//       const photographer = photographData.photographers.find(
//             photographer => photographer.id == photographId
//       )
//       console.log('PHOTOGRAPHER==============', photographer)
//       return photographer

      
// }
// getPhotographer()

// function displayPhotographerHeader(photographerId) {
//       console.log('je rentre dans header=================', photographerId)
//       const photographHeader = document.querySelector('.photograph-header')
//       // Création d'une div
//       const div = document.createElement( 'div' )
//       // h1
//       const h1 = document.createElement( 'h1')
//       h1.classList.add('photographer-name')
//       // h1.textContent = photographId.name
//       // h1.innerText = name;
//       // h2
//       const h2 = document.createElement( 'h2')
//       h2.classList.add('localisation')
//       // h2.textContent = country;
//       // tagline
//       const tag = document.createElement( 'p' );
//       tag.classList.add('tagline')
//       // tag.textContent = tagline;

            
//       photographHeader.appendChild(div); //ajout
//       div.appendChild(h1)
//       div.appendChild(h2)
//       div.appendChild(tag)
//       return(photographHeader)
// }

// displayPhotographerHeader()
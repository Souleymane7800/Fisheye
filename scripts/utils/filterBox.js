//console.log('je suis dans filterbox');
// envoyer les medias ici

// // // ouvrir le dropdown
// const btnDrop = document.querySelector('.btn__drop');
// const showMenu = () => {
//      // console.log('j\'ouvre le menu')
//       const menu = document.querySelector('.drop__options');
//       menu.classList.toggle('dropdown-active');
//       document.querySelector('.arrow').classList.toggle('rotate');
// }
// btnDrop.addEventListener('click', showMenu);

// // Filter datas
// const allMedias = Array.from(document.querySelectorAll('.drop__options li button'));
// const currentSort = document.querySelector('#current__sort');//
// //console.log('allmedias',allMedias)
// // Hide option deja selectionner:
// let optionSelected = allMedias.find(filter => filter.textContent == currentSort.textContent);
// optionSelected.style.display = "none";//
// console.log('selected======',optionSelected)

// allMedias.forEach(filter => {
//       filter.addEventListener('click', () => {
//             const filterValue = filter.textContent;
//             currentSort.textContent = filterValue;
//            console.log('filtervalue',filterValue)

//             if(optionSelected) optionSelected.style.display = 'block';

//             filter.style.display = 'none';
//             optionSelected = filter;

//             // displayData(filterValue)
//             // mediaFactory()
//             // displayMedia(filterValue)
//             // console.log('pmedia====',photographMedia)
//             // sortMedia();
//             // displayMedia(photographMedia);
//             showMenu();
//             // filterBox()
//       })
// })

// function filterBox(photographMedia) {
//       console.log('filtermeedia',photographMedia)
//       displayMedia(photographMedia);
// }


// ===========================================================
// // async function displaySortDatas(photographerMedia) {
// //       console.log('photograperMedia',photographerMedia);
      
//       async function getMedias(sortBy = 'popularite') {
//             displaySortDatas(photographerMedia);
//             const parameters = new URLSearchParams(window.location.search)
//             const idString = parameters.get('id');
//             console.log('idstring',idString)
      
//             photographerMedia.filter((mediaObj) => mediaObj.photographerId == idString);
//             if(sortBy === 'popularite') {
//                   mediaFactory.sort((a,b) => b.likes - a.likes);
                  
//             } else if (sortBy === 'date') {
//                   mediaFactory.sort((a,b) => new Date(b.date) - new Date(a.date));
//             } else if (sortBy === 'title') {
//                   mediaFactory.sort((a,b) => a.title.localeCompare(b.title));
//             }
            
//             return media
//       }
//       // getMedias()

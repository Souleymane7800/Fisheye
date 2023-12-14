//Mettre le code JavaScript lié à la page photographer.html

//  Datas
let photographers = [];
let media = [];

// On récupère l'id du photographe par l'url
let params = window.location.search;
const urlParams = new URLSearchParams(params);
const photographerId = urlParams.get('id');

async function getPhotograph() {
	// On fetch pour récupérer les données
	try {
		const response = await fetch('../data/photographers.json');
		const data = await response.json();
		// console.log('Données du fichier JSON :', data);
		photographers = data.photographers;
		media = data.media;
		return { photographers, media };
	} catch (error) {
		console.error('Une erreur est survenue : ', error);
	}
}

// On affiche les données du photographe grâce à son ID
async function displayData(photographer) {
	const photographHeader = document.querySelector('.photograph-header');
	//console.log(photographer)
	// On envoie les données dans template
	const photographerModel = photographTemplate(photographer);
	const photographCardDOM = photographerModel.getPhotographCardDOM();
	photographHeader.appendChild(photographCardDOM);
}


function filterDatas (media) {
	// Filter datas
	const allMedias = Array.from(document.querySelectorAll('.drop__options li button'));
	const currentSort = document.querySelector('#current__sort');
	// Hide option deja selectionner:
	let optionSelected = allMedias.find(filter => filter.textContent == currentSort.textContent);
	optionSelected.style.display = 'none';

	// ouvrir le dropdown
	const btnDrop = document.querySelector('.btn__drop');
	const showMenu = () => {
		const menu = document.querySelector('.drop__options');
		menu.classList.toggle('dropdown-active');
		document.querySelector('.arrow').classList.toggle('rotate');
	};
	btnDrop.addEventListener('click', showMenu);

	allMedias.forEach(filter => {
		filter.addEventListener('click', () => {
			const filterValue = filter.textContent;
			currentSort.textContent = filterValue;

			if(optionSelected) optionSelected.style.display = 'block';

			filter.style.display = 'none';
			optionSelected = filter;

			showMenu();
			displayMedia(media, filterValue);
		});
	});
}

async function displayMedia( photographMedia, sortOption) {
	const sectionCard = document.querySelector('.gallery_card_section');

	// Triez le tableau de médias en fonction des critères spécifiés
	switch (sortOption) {
	case 'Date':
		photographMedia.sort((a, b) => new Date(a.date) - new Date(b.date));
		break;
	case 'Popularité':
		photographMedia.sort((a, b) => b.likes - a.likes);
		break;
	case 'Titre':
		photographMedia.sort((a, b) => a.title.localeCompare(b.title));
		break;
	}
	// Effacez le contenu précédent de la section
	sectionCard.innerHTML = '';
    
	// Itération des médias triés et envoi dans mediaFactory
	photographMedia.forEach((media) => {
		const mediaModel = mediaFactory(media);
		console.log(photographMedia.indexOf(media));
		const mediaCardDom = mediaModel.getMediaCardDOM(photographMedia.indexOf(media));
		sectionCard.appendChild(mediaCardDom);
	});
}

function findMedia(media) {
	// Filtrer les médias pour obtenir ceux du photographe
	return media.filter(
		(mediaItem) => mediaItem.photographerId == photographerId
	);
}

function findPhotographe(photographers) {
	// Récupération du photographe par son ID
	return photographers.find(
		(photographer) => photographer.id == photographerId
	);
}

async function init () {
	const { photographers, media } = await getPhotograph();

	const photographer = findPhotographe(photographers);
	const photographMedia = findMedia(media);

	displayData(photographer); // On envoie les données dans photograph-header
	let currentSort = document.querySelector('#current__sort');
	displayMedia(photographMedia,currentSort.textContent);
	filterDatas(photographMedia);

	// Récupération du nom du photographe dans le formulaire de contact
	const modaleTitle = document.querySelector('header h2');
	modaleTitle.textContent = `Contactez-moi : ${photographer.name}`;
}

init();





      



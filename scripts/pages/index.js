async function getPhotographers() {
	// Ceci est un exemple de données pour avoir un affichage de photographes de test dès le démarrage du projet, 
	// mais il sera à remplacer avec une requête sur le fichier JSON en utilisant "fetch".

	// On récupère les données json
	try {
		const url = '../data/photographers.json';
		const response = await fetch(url);
            
		// Si erreur
		if (!response.ok) {
			throw new Error(`Erreur lors de la requête : ${response.status} ${response.statusText}`);
		}

		// Sinon
		const data = await response.json();
		let photographers = data.photographers;

		// et bien retourner le tableau photographers seulement une fois récupéré
		return ({
			photographers: [...photographers]});
	} catch {
		console.log('Une erreur est survenue : ');
	}
}
    

async function displayData(photographers) {
	const photographersSection = document.querySelector('.photographer_section');

	photographers.forEach((photographer) => {
		const photographerModel = photographerTemplate(photographer);
		const userCardDOM = photographerModel.getUserCardDOM();
		photographersSection.appendChild(userCardDOM);
	});
}

async function init() {
	// Récupère les datas des photographes
	const { photographers } = await getPhotographers();
	displayData(photographers);
}
    
init();
    

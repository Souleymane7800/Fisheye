function photographerTemplate(data) {
    const { name, portrait, city, tagline, country, price, id } = data;

    // Lien des photos:
    const picture = `../assets/photographers/Photographers_ID_Photos/${portrait}`

    // Je mets en place le DOM
    function getUserCardDOM() {
        // article
        const article = document.createElement( 'article' );
        article.setAttribute("tabindex",  0);
        // div link
        const link = document.createElement('a')
        link.setAttribute("href", `../photographer.html?id=${id}`)
        link.classList.add('link')
        // img
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        img.setAttribute("alt", name)
        img.setAttribute("aria-label","Photographe " + name)
        // h2
        const photographerName = document.createElement( 'h2' );
        photographerName.classList.add('photographer-name')
        photographerName.textContent = name;
        // p city & country
        const localisation = document.createElement( 'p' );
        localisation.classList.add('localisation')
        localisation.textContent = city + ", " + country;
        // tagline
        const tagPhotographer = document.createElement( 'p' );
        tagPhotographer.classList.add('tagline')
        tagPhotographer.textContent = tagline;
        // price
        const dayPrice = document.createElement( 'p' );
        dayPrice.classList.add('price')
        dayPrice.textContent = price + "€/jour";
        // Liaison au DOM
        article.appendChild(link)
        link.appendChild(img);
        link.appendChild(photographerName);
        article.appendChild(localisation); 
        article.appendChild(tagPhotographer); 
        article.appendChild(dayPrice); 
        return (article);
    }
    return { name, picture, getUserCardDOM }
}
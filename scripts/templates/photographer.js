function photographerTemplate(data) {
    const { name, portrait, city, tagline, country, price, id } = data;

    // const picture = `assets/photographers/${portrait}`;
    // Récupération des photos:
    const picture = `../assets/photographers/Photographers_ID_Photos/${portrait}`

    function getUserCardDOM() {
        // article
        const article = document.createElement( 'article' );
        article.setAttribute("tabindex",  0);
        // div link
        const link = document.createElement('a')
        link.setAttribute("href", `../photographer.html?${id}`)
        link.classList.add('link')
        // const link = document.createElement( 'div' );
        // link.classList.add('link')
        // img
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        img.setAttribute("alt", name)
        // img.setAttribute("href", "./photographer.html")
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
        // const p3 = document.createElement( 'p' );
        // p3.textContent = country;
        // price
        const dayPrice = document.createElement( 'p' );
        dayPrice.classList.add('price')
        dayPrice.textContent = price + "€/jour";
        // ====
        //article.appendChild(link)  //ajout
        // link.appendChild(img)
        article.appendChild(link)
        link.appendChild(img);
        link.appendChild(photographerName);
        article.appendChild(localisation); //ajout
        //article.appendChild(p3); //ajout
        article.appendChild(tagPhotographer); //ajout
        article.appendChild(dayPrice); //ajout
        return (article);
    }
    return { name, picture, getUserCardDOM }
}
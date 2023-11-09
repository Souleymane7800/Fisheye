function mediaFactory(datas) {

      const { id, photographerId, title, image, video, likes, date, price, name} = datas;
      const mediaId = id
      const picture = `../assets/photographers/${photographerId}/${image}`;
      const movie = `../assets/photographers/${photographerId}/${video}`;

      function getMediaCardDOM() {
            
            // Créer un article
            const article = document.createElement('article');
            article.classList.add('mediaCard');
            article.setAttribute('role', 'img')
            article.setAttribute('data-id', `${id}`)

            // Créer une div pour les images ou vidéos
            const imgCard = document.createElement('div');
            imgCard.classList.add('mediaCard__img')
            imgCard.setAttribute('a', 'href', `${picture}`)

            // Si photo ou vidéo
            if (image === undefined) {
                  // Créer un élément vidéo
                  const videoCard = document.createElement('video');
                  videoCard.setAttribute('src', movie);
                  videoCard.setAttribute("alt", title);
                  videoCard.setAttribute('data-title', `${title}`)
                  videoCard.setAttribute('class', 'media');
                  videoCard.setAttribute('controls', 'true');
                  videoCard.setAttribute('role', 'video');
                  // videoCard.setAttribute('mediaID', `${mediaId}`);
                  videoCard.setAttribute("aria-label","Cliquez pour agrandir");

                  imgCard.appendChild(videoCard);
                        imgCard.addEventListener('click', ()=>{
                              openLightBox(this.movie, this.title);
                        });
            } else {
                  const img = document.createElement( 'img' );
                  img.setAttribute("src", picture);
                  img.setAttribute("alt", title);
                  img.setAttribute('class', 'media');
                  img.setAttribute('data-title', `${title}`)
                  // img.setAttribute('data', `${id}`)//test
                  img.setAttribute('role', 'img');
                  img.setAttribute('mediaID', `${mediaId}`);
                  img.setAttribute("aria-label","cliquez pour agrandir");
                  imgCard.appendChild(img);
                  imgCard.addEventListener('click', ()=>{
                        openLightBox(this.picture, this.title);
                  });
            };

            // partie info
            const info = document.createElement('div');
            info.classList.add('mediaCard__info');
            //le nom de la photo
            const imgTitle = document.createElement( 'h3' );
            imgTitle.textContent = title;
            imgTitle.classList.add('mediaCard__info__title');
            //les likes
            const like = document.createElement( 'div' );
            like.classList.add('mediaCard__info__like');
            let numberOfLikes = document.createElement( 'p' );
            numberOfLikes.textContent = `${likes}`;
            numberOfLikes.setAttribute("aria-label","likes");
            numberOfLikes.setAttribute("class","likes");
            const heartLike = document.createElement('i');
            heartLike.setAttribute("class",'fa-solid fa-heart heartLike');
            heartLike.setAttribute("aria-label",'likes');
            like.appendChild(numberOfLikes);
            like.appendChild(heartLike);
            info.appendChild(imgTitle);
            info.appendChild(like);
            // Nombre total de like / Tarif
            // Sélectionnez tous les éléments avec la classe "likes"
            const totalLikes = document.querySelectorAll(".likes");

            // Initialisez une variable pour stocker la somme
            let sommeLikes = 0;
    
            // Parcourir les éléments "likes" et additionnez leurs valeurs
            totalLikes.forEach((like) => {
                const likes = parseInt(like.textContent); // Convertissez le texte en nombre
                if (!isNaN(likes)) {
                    sommeLikes += likes;
                }
            });
    
            // Affichez la somme des likes
            const sumElement = document.getElementById("totalLike");
            sumElement.textContent = sommeLikes;

            like.addEventListener('click', ()=>{
                  let nblike = parseInt(numberOfLikes.textContent, 10);

                  if(nblike === likes){
                        numberOfLikes.textContent = nblike + 1;
                        document.getElementById('totalLike').textContent = parseInt(document.getElementById('totalLike').textContent,10)+1;
                  } else {
                        numberOfLikes.textContent = likes;
                        document.getElementById('totalLike').textContent = parseInt(document.getElementById('totalLike').textContent,10)-1;
                  };
            });

            //link les deux parties
            article.appendChild(imgCard);
            article.appendChild(info);

            return (article);
      }

      if(image === undefined){
            return { id, photographerId, title, movie, likes, getMediaCardDOM }
      } else{
            return { id, photographerId, title, picture, likes, getMediaCardDOM }
      };

};

    
    
    




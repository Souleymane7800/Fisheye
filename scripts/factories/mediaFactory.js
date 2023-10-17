function mediaFactory(data) {

      const { id, photographerId, title, image, video, likes, date, price, name} = data;
      const mediaId = id
      const picture = `../assets/photographers/${photographerId}/${image}`;
      const movie = `../assets/photographers/${photographerId}/${video}`;

      function getMediaCardDOM() {
            
            // Créer une card
            const article = document.createElement('article');
            article.classList.add('mediaCard');
            article.setAttribute('role', 'img')
            article.setAttribute('data-id', `${id}`)

            // img
            const imgCard = document.createElement('div');
            imgCard.classList.add('mediaCard__img')
            imgCard.setAttribute('a', 'href', `${picture}`)
            // Si photo ou vidéo
            if (image == undefined) {
                  // faire une vidéo
                  const videoCard = document.createElement('video');
                  videoCard.setAttribute('src', movie);
                  videoCard.setAttribute('controls', 'true');
                  videoCard.setAttribute('role', 'video');
                  videoCard.setAttribute('mediaID', `${mediaId}`);
                  videoCard.setAttribute("aria-label","Cliquez pour agrandir");
                  videoCard.setAttribute('poster', '');

                  imgCard.appendChild(videoCard);
                        imgCard.addEventListener('click', (e)=>{
                              console.log('event',e.target.src)
                              openLightBox(this.movie, this.title);
                        });
            } else {
                  const img = document.createElement( 'img' );
                  img.setAttribute("src", picture);
                  img.setAttribute("alt", title);
                  img.setAttribute('data-title', `${title}`)//test
                  img.setAttribute('data', `${id}`)//test
                  img.setAttribute('role', 'img');
                  img.setAttribute('mediaID', `${mediaId}`);
                  //  console.log('mediaid',mediaId)
                  //  console.log('id======',id)
                  img.setAttribute("aria-label","cliquez pour agrandir");
                  imgCard.appendChild(img);
                  imgCard.addEventListener('click', (e)=>{
                        console.log('event',e.target.src)
                        openLightBox(this.picture, this.title);
                  });
                  //console.log('dataid', img)
            };

            // partie info
            const info = document.createElement('div');
            info.classList.add('mediaCard__info');
            //le nom de la photo
            const imgTitle = document.createElement( 'h3' );
            imgTitle.textContent = title;
            imgTitle.classList.add('mediaCard__info__title');
            //le like
            const like = document.createElement( 'div' );
            like.classList.add('mediaCard__info__like');
            let numberOfLikes = document.createElement( 'p' );
            numberOfLikes.textContent = `${likes}`;
            numberOfLikes.setAttribute("aria-label","likes");
            numberOfLikes.setAttribute("class","likes");
                  //console.log('numberoflikes', numberOfLikes)  //test
            const heartLike = document.createElement('i');
            heartLike.setAttribute("class",'fa-solid fa-heart heartLike');
            heartLike.setAttribute("aria-label",'likes');
            like.appendChild(numberOfLikes);
            like.appendChild(heartLike);
            info.appendChild(imgTitle);
            info.appendChild(like);
            // Nombre total de like / Tarif
            // =======================================
            // // Sélectionnez tous les éléments avec la classe "likes"
            const totalLikes = document.querySelectorAll(".likes");

            // // Initialisez une variable pour stocker la somme
            let sommeLikes = 0;
    
            // // Parcourez les éléments "likes" et additionnez leurs valeurs
            totalLikes.forEach((like) => {
                const likes = parseInt(like.textContent); // Convertissez le texte en nombre
                if (!isNaN(likes)) {
                    sommeLikes += likes;
                }
            });
    
            // // Affichez la somme des likes
            const sumElement = document.getElementById("totalLike");
            sumElement.textContent = sommeLikes;

            // ======================================================
            like.addEventListener('click', ()=>{
                  let nblike = parseInt(numberOfLikes.textContent, 10);

                  // console.log('nblike',nblike)
                  if(nblike == likes){
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

      // DOM lightbox
      function lightboxTemplate() {


            // let type = picture.substr(picture.length - 4)
            // test donc a verifier
            const typeMovie = movie.slice(-4);
            const typePicture = picture.slice(-4);

            const lightbox = document.querySelector('.lightbox__media');
            const lightboxTitle = document.createElement('h3');
                  lightboxTitle.setAttribute('id', 'lightbox__info__title');
                  lightboxTitle.setAttribute('class', 'mediaCard__info__title');

            if (typePicture === '.jpg' || typePicture === '.jpeg' || typePicture === '.png' || typePicture === '.gif') {
                  // Afficher le média si c'est une image (extension .jpg, .jpeg, .png ou .gif)
                  
                  const imgCard = document.createElement('img');
                  imgCard.setAttribute('id', 'lightbox__img');
                  imgCard.setAttribute('class', 'mediaCard__img');
                  //imgCard.setAttribute('aria-hidden', 'true');//test
                  imgCard.setAttribute('src', `${picture}`);
                  // imgCard.innerHTML = `${picture}`;
                  
                  // const lightboxTitle = document.createElement('span');
                  // lightboxTitle.setAttribute('id', 'lightbox__info__title');
                  // lightboxTitle.setAttribute('class', 'mediaCard__info__title');
                  lightboxTitle.textContent = `${title}`;
                  
                  lightbox.appendChild(imgCard);
                  // lightbox.appendChild(lightboxTitle);
            } else if (typeMovie === '.mp4' || typeMovie === '.webm' || typeMovie === '.ogg') {
                  // Traiter le média si c'est une vidéo (extension .mp4, .webm ou .ogg)
                  // const lightbox = document.querySelector('.lightbox__media');

                  const videoCard = document.createElement('video');
                  videoCard.setAttribute('id', 'lightbox__img');
                  videoCard.setAttribute('class', 'mediaCard__img');
                  videoCard.setAttribute('controls', 'true');
                  videoCard.setAttribute('src', `${movie}`);
                  
                  // const lightboxTitle = document.createElement('span');
                  // lightboxTitle.setAttribute('id', 'lightbox__info__title');
                  // lightboxTitle.setAttribute('class', 'mediaCard__info__title');
                  lightboxTitle.textContent = `${title}`;

                  lightbox.appendChild(videoCard);
            }
                  lightbox.appendChild(lightboxTitle);
            // console.log('lightboxmedia',picture,photographerId)
      }
      lightboxTemplate()
      if(image == undefined){
            return { id, photographerId, title, movie, likes, getMediaCardDOM }
      } else{
            return { id, photographerId, title, picture, likes, getMediaCardDOM }
      };

};

    
    
    




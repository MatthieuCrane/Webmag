function getData() {
   fetch('data.json')
     .then((response) => {
       if (!response.ok) {
         throw new Error('Network response was not ok');
       }
       return response.json();
     })
     .then((data) => {
       // Traitez les données comme vous le souhaitez
       console.log('Données récupérées du fichier JSON :', data);
       /// ON ECRIT LE CODE ICI ! 
     
      let nomjournal = data.journal.nomJournal;
      console.log(nomjournal);
      let nomjournalid = document.getElementById("nomjournal");
      console.log(nomjournalid);
      nomjournalid.insertAdjacentHTML("beforeend", nomjournal);
      
     
      
    
      
     
      let Titre = data.journal.articlePrincipal.titre;
       console.log(Titre);

       let Description = data.journal.articlePrincipal.description;
       console.log(Description);

       let Date = data.journal.articlePrincipal.date;
       console.log(Date);

       let Theme = data.journal.articlePrincipal.theme;
       console.log(Theme); 

       let Image = data.journal.articlePrincipal.image;
       console.log(Image); 

       let articlePrincipalid = document.getElementById("articlePrincipal"); 
       console.log(articlePrincipalid);

       let carte = `<article class="carte">
       <img src="${Image}" alt="${Titre}">
       <h2>${Titre}</h2> <p>${Description}</p>
       <h2>${Date}</h2> <h2>${Theme}</h2>
       </article>
        `
        console.log(carte);

        articlePrincipalid.insertAdjacentHTML("beforeend", carte);

        let articles = data.journal.articles;

        articles.forEach(article => {
          let Titre = article.titre;
          let Date = article.date;
          let Theme = article.theme;
          let Image = article.image;

          let carteArticles = `<article class="carte">
          <img src="${Image}" alt="${Titre}">
          <h2>${Titre}</h2> <h2>${Date}</h2>
          <h2>${Theme}</h2>
          </article>
          `

          let articles = document.getElementById("tousLesArticles"); 
          console.log(articles);
          articles.insertAdjacentHTML("beforeend", carteArticles);

        })
      

        /// FIN DU CODE
     })
     .catch((error) => console.error('Erreur lors de la lecture des données :', error));
 }
 
 getData();

 ///ON écrit les fonctions ici
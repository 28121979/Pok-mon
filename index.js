//  --------------------------- Exercice Pokémon --------------------------------------


// ------ Créer un objet "pokémon"-------

let personne = {
    nom : 'Moussa',
    type : 'Adjudant',
    pointsDeVie : 90,
    attaque : 85,
    defense : 89,
    image : 'https://www.pokepedia.fr/images/a/ac/Regidrago-EB.png',
};

// ------- Affichage en HTML ------

function affichage(personne){
 let picture = document.createElement("img");
 picture.src  =  personne.image;
 let nomP = document.createElement("h1");
 nomP.textContent = personne.nom;

 let typeGrade = document.createElement("h2");
 typeGrade.textContent = personne.type;

 let pointsDeVieEchelle = document.createElement("h3");
 pointsDeVieEchelle.textContent = personne.pointsDeVie;

 let attaqueForce = document.createElement("p");
 attaqueForce.textContent = personne.attaque;

 let defenseForce = document.createElement("p");
 defenseForce.textContent = personne.defense;

 document.body.appendChild(nomP);
 document.body.appendChild(typeGrade);
 document.body.appendChild(pointsDeVieEchelle),
 document.body.appendChild(attaqueForce),
 document.body.appendChild(defenseForce),
 document.body.appendChild(picture);

};



// ------ Création dd la classe "Pokémon"-------

class Pokemon {
    constructor(nom, type, pointsDeVie, attaque, defense, image) {
        this.nom = nom;
        this.type = type;
        this.pointDeVie = pointsDeVie;
        this.attaque = attaque;
        this.defense = defense;
        this.image = image;
    }
} 

// ----- instanciation de quatre nouveaux pokemon stokage dans un tableau et affichage -----

let  groudon = new Pokemon("Groudon", "Chef", 85, 80, 80, "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/383.png");
let  dialga = new Pokemon("Dialga", "Sergent-Chef", 80, 75, 75, "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/483.png");
let  giratina = new Pokemon("Giratina", "Sergent-Chef", 80, 75, 75, "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/487.png");
let  mewtwo = new Pokemon("Mewtwo", "Sergent", 75, 70, 70, "https://assets.pokemon.com/assets/cms2/img/pokedex/full/150.png");

let tableauPokemon = [groudon, dialga, giratina, mewtwo];
for (let personne in tableauPokemon) {
affichage(tableauPokemon[personne]);
}

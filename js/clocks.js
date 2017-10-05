
// Préparer nos éléments

// Cloner un élément 11 fois:
// On va créer 12 nouveaux objets, et on va les masquer

// On sélectionne notre modèle:
var item = document.getElementById("batons1");

var i;
for (i = 2; i < 13; i++) {

	// On commence à 2, car on veut numéroter de 2 à 12

	var clone = item.cloneNode(true);
	clone.id = 'batons'+i;
  document.querySelector("body").appendChild(clone);

}

function metronome() {

  // 1: on définit l'heure, avec l'objet Date()
  // voir documentation: https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Date

  var date = new Date();
	var seconde = date.getSeconds() + 1;

	// Cas spécifique de la seconde zéro
	if (seconde == 60) {
		seconde = 1;
		groupe = 1;
		item = 1;

		// Cacher tous les éléments
		var hideAll = document.getElementsByClassName("baton") ;
  	var i;
  	for (i = 0; i < hideAll.length; i++) {
			hideAll[i].style.visibility = "hidden";
  	}

  	// Afficher l'élément zéro:
  	var showSec = document.querySelector("#batons1 .baton1 .st0");
		showSec.style.visibility = "visible";

	} else {

		// Calcul mathématique:
		// on veut que ça aille de 1 à 12
		// en partant de chiffres de 1 à 60:
	  // faire des tranches de 5 secondes = diviser les secondes par 6.
		var groupe = Math.floor( seconde / 5);

		// Dans chaque groupe, égréner de 1 à 5 les secondes
		var item = (seconde - (groupe*5));

		groupe = groupe + 1;
		item = item + 1;

		var itemActif = document.querySelector("#batons"+groupe+" .baton"+item+" ");
		itemActif.style.visibility = "visible";

	}

} // fin du metronome()

// Répéter la fonction metronone une fois par seconde

var myVar = setInterval(function() {
  metronome();
}, 100);

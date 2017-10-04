
// Préparer nos éléments

// Cloner un élément 11 fois:
// On va créer 12 nouveaux objets, et on va les masquer

			// On sélectionner notre modèle:
			var item = document.getElementById("batons1");

			var i;
			for (i = 2; i < 13; i++) {

				// Copy the element
				var clone = item.cloneNode(true);

				// Change the elment
				clone.id = 'batons'+i;

				// Append the cloned element to something
				// document.getElementById("vector").appendChild(clone);
        document.querySelector("body").appendChild(clone);

			}

// répéter la fonction metronone une fois par seconde

var myVar = setInterval(function() {
  metronome();
}, 1000);

function metronome() {

  // 1: on définit l'heure, avec l'objet Date()
  // voir documentation: https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Date

  var d = new Date();

  // coloriser les éléments:
  // faire des tranches de 5 secondes = diviser la seconde par 12.

  // 2: on affiche l'heure dans notre objet "horloge"

  // document.getElementById("horloge").innerHTML = d.toLocaleTimeString();

}

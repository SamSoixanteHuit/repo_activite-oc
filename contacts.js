/* 
Activité : gestion des contacts
*/

// TODO : complétez le programme

var contacts = []; // Liste des contacts

var Contact = {
	init: function (nom, prenom){
		this.nom = nom;
		this.prenom = prenom;
		
	},

	decrire: function() {
		var description = "Nom : " + this.nom + ", Prénom : " + this.prenom;
		return description;
	}


};

var contact1 = Object.create(Contact);
contact1.init("Lévisse", "Carole");
contacts.push(contact1);

var contact2 = Object.create(Contact);
contact2.init("Nelsonne", "Mélodie");
contacts.push(contact2);


console.log("Bienvenue dans le gestionnaire des contacts !");

var done = false;

while (done === false) {
	console.log("1 : Lister les contacts\n2 : Entrer un nouveau contact\n3 : Quitter");
	var choix = Number(prompt("Choisissez une option : "));
	
	switch (choix) {
		case 1:
		console.log("\nVoici la liste des contacts");
		contacts.forEach(function (item){
			console.log(item.decrire());
		});
		break;

		case 2:
		var nom = prompt("Veuillez entrer un nom :");
		var prenom = prompt("Veuillez entrer un prenom :");
		var nouveauContact = Object.create(Contact);
		nouveauContact.init(nom, prenom);
		contacts.push(nouveauContact);
		console.log("Le contact a été ajouté");
		break;

		case 3:
		console.log("Au revoir");
		done = true;
		break;
	}
}

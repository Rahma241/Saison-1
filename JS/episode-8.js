var nomUtilisateur=prompt('Quelle est votre nom? ');
var sexeUtilisateur=prompt('De quel sexe êtes vous? ' + "\nEntrez homme ou femme ou encore h ou f ");


if (sexeUtilisateur == "homme" || sexeUtilisateur == "h") {
	alert(" Bonjour Monsieur " + nomUtilisateur);
}
else if (sexeUtilisateur == "femme" || sexeUtilisateur == "f") {
	alert(" Bonjour Madame " + nomUtilisateur);
}
else{
	alert("Erreur lisez les indications!!!")
}


var ageUtilisateur=parseInt(prompt(" Quel âge avez vous? "));

if (ageUtilisateur>0 && ageUtilisateur<18) {
	alert('vous êtes mineur !');
	alert(" Vous avez: " + ageUtilisateur + " ans");
}
else if (ageUtilisateur>=18) {
	alert('vous êtes majeur !');
	alert(" Vous avez: " + ageUtilisateur + " ans");
}
else if (ageUtilisateur<=0) {
	alert(' Erreur entrez un nombre supérieur à 0!');
}
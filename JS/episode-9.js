var mentionEleve;
var moyenneEleve=prompt("Renseignez votre moyenne comprise entre 0 et 20");


if (moyenneEleve>=10 && moyenneEleve<12) {
	mentionEleve="passable";
	alert("Votre mention est " + mentionEleve);
}
else if (moyenneEleve>=12 && moyenneEleve<14) {
	mentionEleve="Assez-bien";
	alert("Votre mention est " + mentionEleve);
}
else if (moyenneEleve>=14 && moyenneEleve<16) {
	mentionEleve="Bien";
	alert("Votre mention est " + mentionEleve);
}
else if (moyenneEleve>=16 && moyenneEleve<18) {
	mentionEleve="Très bien";
	alert("Votre mention est " + mentionEleve);
}
else if (moyenneEleve>=18 && moyenneEleve<20) {
	mentionEleve="Excellent";
	alert("Votre mention est " + mentionEleve);
}
else if (moyenneEleve==20) {
	mentionEleve="Parfait";
	alert("Votre mention est " + mentionEleve);
}
else if (moyenneEleve>=0 && moyenneEleve<10) {
	mentionEleve="Médiocre";
	alert("Votre mention est " + mentionEleve);
}

var remiseFacture;
var resultat;
var montantFacture=prompt("Entrez le montant de votre facture");

if (montantFacture>0 && montantFacture<=40000) {
	alert("Votre montant à payer est " + montantFacture);
}
else if (montantFacture>40000) {
	remiseFacture=(montantFacture*10)/100;
	resultat=montantFacture-remiseFacture;
	alert("Votre montant à payer est " + resultat);
}

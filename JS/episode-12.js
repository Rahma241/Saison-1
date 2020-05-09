var somme=0;

console.log('La somme des 10 premiers nombre est: ')

for (var i = 1; i <=10; i++) {
	somme=somme + i;
	console.log (i);
	if (i<10) {
		console.log(" + ");
	}
}
console.log(" = " + somme);
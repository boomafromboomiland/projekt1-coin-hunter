// toto budeš potřebovat později
/*
if (!( panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
	// panacek a mince se prekryvaji
}
*/


// 	Nový pokus

//globálne premenné

let panacek, panacekX, panacekY, panacekSirka, panacekVyska;
let mince, minceX, minceY, minceSirka, minceVyska;

let panacek = document.getElementById('panacek');
let panacekY = window.innerHeight / 2;
let panacekX = window.innerWidth / 2;
let panacekSirka = panacek.width;
let panacekVyska = panacek.height;
let pohyb = 20;

//nabehne pri loade
function priNacitaniStranky() {

	//panáčik a minca ako globálna premenná --> neskôr aj skóre, zvyky, fanfára
	panacek = document.querySelector('#panacek');
	mince = document.querySelector('#mince');

}

//šírka a výška panáčika
panacekSirka = panacek.width;
panacekVyska = panacek.height;

//umiestnenie panáčika v strede
function poziciaPanacika() {
	panacek.style.top = panacekY + "px";
	panacek.style.left = panacekX + "px";
}

//šírka a výška mince

//vygenerovanie prvej mince v náhodnej pouícii

//funckia, ktorá sa spustí pri stlačení klávesy
function pohybPanacika() {

	//šípka vľavo
	if (udalost.key === 'ArrowLeft') {
		panacekX -= 10;
		if (panacekX < 0) {
			panacekX = 0;
		}
		panacek.src = 'obrazky/panacek-vlevo.png';
	}

	//šípka vpravo
	if (udalost.key === 'ArrowRight') {
		panacekX += 10;
		if (panacekX + panacekSirka > window.innerWidth) {
			panacekX = window.innerWidth - panacekSirka;
		}
		panacek.src = 'obrazky/panacek-vpravo.png';
	}

	//šípka hore
	if (udalost.key === 'ArrowUp') {
		panacekY -= 10;
		if (panacekY < 0) {
			panacekY = 0;
		}
		panacek.src = 'obrazky/panacek-nahoru.png';

	//šípka dole
	if (udalost.key === 'ArrowDown') {
		panacekY += 10;
		if (panacekY + panacekVyska > window.innerHeight) {
			panacekY = window.innerHeight - panacekVyska;
		}
		panacek.src = 'obrazky/panacek.png';
	}

	//panáčik na novom mieste

	//stret panáčika s mincou :(
}

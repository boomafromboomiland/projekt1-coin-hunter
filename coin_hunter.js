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

//nabehne pri loade
function priNacitaniStranky() {

	//panáčik a minca ako globálna premenná --> neskôr aj skóre, zvyky, fanfára
	panacek = document.querySelector('#panacek');

	//šírka a výška panáčika
	panacekSirka = panacek.width;
	panacekVyska = panacek.height;

	//panáčik v strede okna
	panacekX = Math.round(window.innerWidth / 2 - panacekSirka / 2);
	panacekY = Math.round(window.innerHeight / 2 - panacekVyska / 2);

	//štartová pozícia panáka
	poziciaPanacika();


	//šírka a výška mince

	//vygenerovanie prvej mince v náhodnej pozícii
}

function poziciaPanacika() {
	panacek.style.left = panacekX + 'px';
	panacek.style.top = panacekY + 'px';
}

	//funckia, ktorá sa spustí pri stlačení klávesy
function pohybPanacika(udalost) {

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
	}

	//šípka dole
	if (udalost.key === 'ArrowDown') {
		panacekY += 10;
		if (panacekY + panacekVyska > window.innerHeight) {
			panacekY = window.innerHeight - panacekVyska;
		}
		panacek.src = 'obrazky/panacek.png';
	}

	//panáčik na novom mieste
	poziciaPanacika();

	//stret panáčika s mincou :(
}

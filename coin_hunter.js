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
let zvukMince, zvukFanfara;
let score; pocetMinci;

//nabehne pri loade
function priNacitaniStranky() {

	//panáčik a minca ako globálna premenná --> neskôr aj skóre, zvyky, fanfára
	panacek = document.querySelector('#panacek');
	mince = document.querySelector('#mince');
	zvukMince = document.querySelector('#zvukmince');
	zvukFanfara = document.querySelector('#zvukfanfara');
	score = document.querySelector('#score');

	//skóre
	pocetMinci = 0;

	//šírka a výška panáčika
	panacekSirka = panacek.width;
	panacekVyska = panacek.height;

	//panáčik v strede okna
	panacekX = Math.round(window.innerWidth / 2 - panacekSirka / 2);
	panacekY = Math.round(window.innerHeight / 2 - panacekVyska / 2);

	//štartová pozícia panáka
	poziciaPanacika();

	//šírka a výška mince
	minceSirka = mince.width;
	minceVyska = mince.height;

	//snaha o vygenerovanie prvej mince v náhodnej pozícii
	novaMinca();
}

//umiestnenie panáka na svoje miesto
function poziciaPanacika() {
	panacek.style.left = panacekX + 'px';
	panacek.style.top = panacekY + 'px';
}

//funkcia, ktorá by mala vygenerovať nové miesto pre mincu --> náhodne
function novaMinca() {
	minceX = Math.round(Math.random() * (window.innerWidth - minceSirka));
	minceY = Math.round(Math.random() * (window.innerHeight - minceVyska));
	mince.style.left = minceX + 'px';
	mince.style.top = minceY + 'px';
}

	//funckia, ktorá sa spustí pri stlačení klávesy
function pohybPanacika(udalost) {
	
	//hudba
	/*if (hraHudba) {
		document.querySelector('#hudba').play();
		console.log('Hrá hudba?');
		hraHudba = true;
	}*/

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

	//stret panáčika s mincou
	kolizia();
}


//otestovanie stretu panáčika a mince --> použijeme nápovedu zo začiatku
function kolizia() {
	if (!( panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {

		//cink
		zvukMince.play();

		//aktualizácia skóre
		zvacsiScore();

		// panacek a mince se prekryvaji
		novaMinca();
	}
}

//pripisovanie výsledkov
function zvacsiScore() {
	pocetMinci = pocetMinci + 1;
	score.innerText = pocetMinci; //aktualizácia skóre
	if (pocetMinci === 5) {
		zvukFanfara.play();
		alert('Vyhral si! Gratulujeme.');
	}
}
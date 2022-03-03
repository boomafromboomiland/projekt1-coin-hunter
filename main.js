// toto budeš potřebovat později
/*
if (!( panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
	// panacek a mince se prekryvaji
}
*/


// sem začni psát svůj program

var panacek = document.getElementById('panacek');
var height = panacek.clientHeight;
var width = panacek.clientWidth;

document.onkeydown = function(e) {
	switch (e.keyCode) {
			case 37:
					console.log('left');
					if ( Number(panacek.style.left) >= width) {
						let left = Number(panacek.style.left.replace('px', ''));
						panacek.style.left = (left - width) + "px";
					};
					break;
			case 38:
				console.log('up');
					if ( Number(panacek.style.left) >= width) {
						panacek.style.left -= width;
					};
					break;
			case 39:
				console.log('right');
					if ( document.body.clientWidth - Number(panacek.style.left) >= 2*width) {
						let left = Number(panacek.style.left.replace('px', ''));
						panacek.style.left = (left + width) + "px";
					};
					break;
			case 40:
				console.log('down');
					if ( panacek.style.left >= width) {
						panacek.style.left -= width;
					};
					break;
	}
};
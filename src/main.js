(function(window, P) {

	var document = window.document;

	var particleLeft = new P.Particle(document.getElementById('left'));
	var particleRight = new P.Particle(document.getElementById('right'));

	var vector = new P.Vector(-4, -10, 10);
	particleLeft.setZ(-1000);
	
	function animate(t) {
		particleLeft.move(vector);		
		particleRight.move(vector);
		window.requestAnimationFrame(animate);
	}
	
	animate(0);

}(window, window.PARTICULAME));
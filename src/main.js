(function(window, P) {

	var document = window.document;

	var particleLeft = new P.Particle(document.getElementById('left'));
	var particleRight = new P.Particle(document.getElementById('right'));

	var vector = new P.Vector(0, 0, 3);
	particleLeft.setZ(-10000);
	
	function animate(t) {
		particleLeft.add(vector);		
		particleRight.add(vector);
		window.requestAnimationFrame(animate);
	}
	
	animate(0);

}(window, window.PARTICULAME));
(function(window, P) {

	var document = window.document;

	var particleLeft = new P.Particle(document.getElementById('left'));
	var particleRight = new P.Particle(document.getElementById('right'));

	var vector = new P.Vector(0, 0, 1);

	function animate(t) {
		particleLeft.set(vector.x, vector.y, vector.z);		
		particleRight.set(vector.x, vector.y, vector.z);
		window.requestAnimationFrame(animate);
	}
	
	animate(0);

}(window, window.PARTICULAME));
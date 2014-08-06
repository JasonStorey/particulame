(function(window, P) {

	var document = window.document;

	var particle = new P.Particle(document.getElementById('test'));

	var vector = new P.Vector(1, 1, 1);

	function animate(t) {
		particle.addVector(vector);		
		window.requestAnimationFrame(animate);
	}
	
	animate(0);

}(window, window.PARTICULAME));
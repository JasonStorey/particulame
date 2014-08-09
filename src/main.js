(function(window, P) {

	var document = window.document;

	var particleLeft = new P.Particle({
		domElement: document.getElementById('left'),
		velocity: new P.Vector(10, -19, 0),
		gravity: new P.Vector(0, 1, 0),
		bounce: new P.Vector(0.6, 0.3, 0.6),
		floor: document.body.offsetHeight
	});

	var particleRight = new P.Particle({
		domElement: document.getElementById('right'),
		velocity: new P.Vector(-27, -10, -40),
		gravity: new P.Vector(0, 1, 0),
		bounce: new P.Vector(0.7, 0.4, 0.7),
		floor: document.body.offsetHeight
	});
	
	function animate(t) {
		particleLeft.update();		
		particleRight.update();
		window.requestAnimationFrame(animate);
	}
	
	animate(0);

}(window, window.PARTICULAME));
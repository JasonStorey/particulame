(function(window, P) {

	var document = window.document;

	var particleLeft = new P.Particle({
		domElement: document.getElementById('left'),
		gravity: new P.Vector(0, 1, 0),
		velocity: new P.Vector(10, -19, 0),
		floor: document.body.offsetHeight
	});

	var particleRight = new P.Particle({
		domElement: document.getElementById('right'),
		gravity: new P.Vector(0, 1, 0),
		velocity: new P.Vector(-17, -10, 0),
		floor: document.body.offsetHeight
	});


	// particleLeft.setZ(-1000);
	
	function animate(t) {
		particleLeft.update();		
		particleRight.update();
		window.requestAnimationFrame(animate);
	}
	
	animate(0);

}(window, window.PARTICULAME));
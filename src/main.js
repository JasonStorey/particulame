(function(window, P) {

	var document = window.document;

	var test = document.getElementById('test');

	var vector = new P.Vector2(1, 2);

	

	function animate(t) {
		var current = P.getPosition(test);

		P.setPosition(test, current.add(vector));
		
		window.requestAnimationFrame(animate);

	}
	
	animate(0);

}(window, window.PARTICULAME));
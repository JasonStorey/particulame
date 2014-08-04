(function(global) {

	function Vector2(x, y) {
		this.x = x;
		this.y = y;
	}

	Vector2.prototype.add = function(vec) {
		return new Vector2(this.x + vec.x, this.y + vec.y);
	};

	function getPosition(domElem) {
		return new Vector2(domElem.offsetLeft, domElem.offsetTop);
	}

	function setPosition(domElem, vec) {
		domElem.style.position = 'absolute';
		domElem.style.left = vec.x + 'px';
		domElem.style.top = vec.y + 'px';
		return getPosition(domElem);
	}

	global.PARTICULAME = {
		Vector2: Vector2,
		getPosition: getPosition,
		setPosition: setPosition
	};

}(window));
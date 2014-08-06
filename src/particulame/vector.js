(function(global) {
	'use strict';

	global.PARTICULAME = global.PARTICULAME ? global.PARTICULAME : {};

	function Vector(x, y, z) {
		this.position = {
			x: x,
			y: y,
			z: z
		};
	}

	Vector.prototype.add = function(vec) {
		return new Vector(this.position.x + vec.position.x, this.position.y + vec.position.y, this.position.z + vec.position.z);
	};

	global.PARTICULAME.Vector = Vector;

}(window));
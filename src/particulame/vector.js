(function(global) {
	'use strict';

	global.PARTICULAME = global.PARTICULAME ? global.PARTICULAME : {};

	function Vector(x, y, z) {
		this.x = x;
		this.y = y;
		this.z = z;
	}

	Vector.prototype.add = function(vec) {
		return new Vector(this.x + vec.x, this.y + vec.y, this.z + vec.z);
	};

	global.PARTICULAME.Vector = Vector;

}(window));
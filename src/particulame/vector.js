(function(global) {
	'use strict';

	global.PARTICULAME = global.PARTICULAME ? global.PARTICULAME : {};

	function Vector(x, y, z) {
		this.x = x || 0;
		this.y = y || 0;
		this.z = z || 0;
	}

	Vector.prototype.add = function add(vec) {
		this.x += vec.x;
		this.y += vec.y;
		this.z += vec.z;
		return this;
	};

	Vector.prototype.sub = function sub(vec) {
		this.x -= vec.x;
		this.y -= vec.y;
		this.z -= vec.z;
		return this;
	};

	global.PARTICULAME.Vector = Vector;

}(window));
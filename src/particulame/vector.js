(function(global) {
	'use strict';

	global.PARTICULAME = global.PARTICULAME ? global.PARTICULAME : {};

	function Vector(x, y, z) {
		this.x = x || 0;
		this.y = y || 0;
		this.z = z || 0;
	}

	Vector.prototype.set = function set(x, y, z) {
		this.x = x;
		this.y = y;
		this.z = z;
	};

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

	Vector.prototype.negate = function negate() {
		this.x = - this.x;
		this.y = - this.y;
		this.z = - this.z;
	};

	global.PARTICULAME.Vector = Vector;

}(window));
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

	Vector.prototype.setY = function setY(y) {
		this.y = y;
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

	Vector.prototype.multiply = function multiply(vec) {
		this.x *= vec.x;
		this.y *= vec.y;
		this.z *= vec.z;
	};

	Vector.prototype.multiplyScalar = function multiplyScalar(scalar) {
		this.x *= scalar;
		this.y *= scalar;
		this.z *= scalar;
	};

	Vector.prototype.negate = function negate() {
		this.x = - this.x;
		this.y = - this.y;
		this.z = - this.z;
	};

	Vector.prototype.lengthManhattan = function lengthManhattan() {
		return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
	};

	global.PARTICULAME.Vector = Vector;

}(window));
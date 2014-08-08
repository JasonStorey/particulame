(function(global) {
	'use strict';

	global.PARTICULAME = global.PARTICULAME ? global.PARTICULAME : {}; 

	function Matrix() {
		var m = Array.prototype.concat.apply([], arguments);
		if (!m.length) {
		    m = [
		      1, 0, 0, 0,
		      0, 1, 0, 0,
		      0, 0, 1, 0,
		      0, 0, 0, 1
		    ];
  		}
  		this.m = m;
	}

	Matrix.prototype.translate = function(x, y, z) {
		this.m[3] += x;
		this.m[7] += y;
		this.m[11] += z;
		return this.m;
	};
	
	Matrix.prototype._get = function _get(index) {
		return this.m[index];
	};

	Matrix.prototype.getX = function getX(x) {
		return this._get(3, x);
	};

	Matrix.prototype.getY = function getY(y) {
		return this._get(7, y);
	};

	Matrix.prototype.getZ = function getZ(z) {
		return this._get(11, z);
	};

	Matrix.prototype._set = function _set(index, val) {
		this.m[index] = val;
	};

	Matrix.prototype.setX = function setX(x) {
		this._set(3, x);
	};

	Matrix.prototype.setY = function setY(y) {
		this._set(7, y);
	};

	Matrix.prototype.setZ = function setZ(z) {
		this._set(11, z);
	};

	Matrix.prototype.getCSSMatrix = function getCSSMatrix() {
		var m =[this.m[0], this.m[4], this.m[8],  this.m[12],
	    		this.m[1], this.m[5], this.m[9],  this.m[13],
	    		this.m[2], this.m[6], this.m[10], this.m[14],
	    		this.m[3], this.m[7], this.m[11], this.m[15]];

	    return 'matrix3d(' + m.toString() + ')';
	};

	global.PARTICULAME.Matrix = Matrix;

}(window));
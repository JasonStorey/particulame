(function(global) {
	'use strict';

	global.PARTICULAME = global.PARTICULAME ? global.PARTICULAME : {};

	var P = global.PARTICULAME;

	function Particle(domElem) {
		this.domElem = domElem;
		this._matrix = new P.Matrix();
	}

	Particle.prototype.set = function set(x, y, z) {
		this._matrix.translate(x, y, z);
		this.domElem.style.transform = this._matrix.getCSSMatrix();
		return this._matrix;
	}

	global.PARTICULAME.Particle = Particle;

}(window));
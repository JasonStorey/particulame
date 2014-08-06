(function(global) {
	'use strict';

	global.PARTICULAME = global.PARTICULAME ? global.PARTICULAME : {};

	var P = global.PARTICULAME;

	function Particle(domElem) {
		this.domElem = domElem;
		this.matrix = new P.Matrix();
	}

	Particle.prototype.addVector = function addVector(vec) {
		this.matrix.translate(vec.position.x, vec.position.y, vec.position.z);
		this.domElem.style.transform = this.matrix.getCSSMatrix();
		return this.matrix;
	}

	global.PARTICULAME.Particle = Particle;

}(window));
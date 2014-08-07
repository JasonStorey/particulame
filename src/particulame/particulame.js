(function(global) {
	'use strict';

	global.PARTICULAME = global.PARTICULAME ? global.PARTICULAME : {};

	var P = global.PARTICULAME;

	function Particle(domElem) {
		this.domElem = domElem;
		this._matrix = new P.Matrix();
	}

	Particle.prototype.move = function move(vec) {
		this._matrix.translate(vec.x, vec.y, vec.z);
		this.update();
	};

	Particle.prototype.setX = function setX(x) {
		this._matrix.setX(x);
		this.update();
	};

	Particle.prototype.setY = function setY(y) {
		this._matrix.setY(y);
		this.update();
	};

	Particle.prototype.setZ = function setZ(z) {
		this._matrix.setZ(z);
		this.update();
	};

	Particle.prototype.update = function update() {
		this.domElem.style.transform = this._matrix.getCSSMatrix();
	};

	global.PARTICULAME.Particle = Particle;

}(window));
(function(global) {
	'use strict';

	global.PARTICULAME = global.PARTICULAME ? global.PARTICULAME : {};

	var P = global.PARTICULAME;

	function Particle(options) {
		this.domElem = options.domElement;
		this._matrix = new P.Matrix();

		this._gravityVector = options.gravity;
		this._velocityVector = options.velocity
	}

	Particle.prototype.move = function move(velocityVector) {
		velocityVector.add(this._gravityVector);
		this._matrix.translate(velocityVector.x, velocityVector.y, velocityVector.z);
	};

	Particle.prototype.setX = function setX(x) {
		this._matrix.setX(x);
	};

	Particle.prototype.setY = function setY(y) {
		this._matrix.setY(y);
	};

	Particle.prototype.setZ = function setZ(z) {
		this._matrix.setZ(z);
	};

	Particle.prototype.update = function update() {
		this.move(this._velocityVector);
		this.domElem.style.transform = this._matrix.getCSSMatrix();
	};

	global.PARTICULAME.Particle = Particle;

}(window));
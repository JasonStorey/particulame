(function(global) {
	'use strict';

	global.PARTICULAME = global.PARTICULAME ? global.PARTICULAME : {};

	var P = global.PARTICULAME;

	function Particle(domElem) {
		this.domElem = domElem;
		this._matrix = new P.Matrix();

		this.gravity = 0.7;
		this._gravityVector = new P.Vector(0, this.gravity, 0);
	}

	Particle.prototype.move = function move(movementVector) {
		var vector;

		vector = new P.Vector();
		
		vector.add(movementVector);
		vector.add(this._gravityVector);

		this._matrix.translate(vector.x, vector.y, vector.z);
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
		this._gravityVector.y += this.gravity;
	};

	global.PARTICULAME.Particle = Particle;

}(window));
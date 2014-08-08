(function(global) {
	'use strict';

	global.PARTICULAME = global.PARTICULAME ? global.PARTICULAME : {};

	var P = global.PARTICULAME;

	function Particle(options) {
		this.domElem = options.domElement;
		this.height = this.domElem.offsetHeight;
		this.top = this.domElem.offsetTop;
		this.bottomBoundary = options.floor - this.height - this.top;

		this._matrix = new P.Matrix();

		this._gravityVector = options.gravity;
		this._velocityVector = options.velocity;
		this._bounceVector = options.bounce;
	}

	Particle.prototype.move = function move(velocityVector) {
		velocityVector.add(this._gravityVector);
		
		if(this._matrix.getY() + velocityVector.y >= this.bottomBoundary) {
			velocityVector.setY(-velocityVector.y);
			velocityVector.multiply(this._bounceVector);
			this._matrix.setY(this.bottomBoundary);
		}

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
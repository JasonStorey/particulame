(function(global) {
	'use strict';

	global.PARTICULAME = global.PARTICULAME ? global.PARTICULAME : {};

	var P = global.PARTICULAME;

	function extractMatrix(domElem) {
		var mPattern = /^\w*\((((\d+)|(\d*\.\d+)),\s*)*((\d+)|(\d*\.\d+))\)/i, 
			mVal = [],
			computedStyle,
			m,
			mCopy;

		computedStyle = global.getComputedStyle(domElem, null);
		
		m = computedStyle.getPropertyValue('transform')
		    || computedStyle.getPropertyValue('-moz-transform')
		    || computedStyle.getPropertyValue('-webkit-transform')
		    || computedStyle.getPropertyValue('-ms-transform')
		    || computedStyle.getPropertyValue('-o-transform');

		if (mPattern.test(m)) {
		    mCopy = m.replace(/^\w*\(/, '').replace(')', '');
		    mVal = mCopy.split(/\s*,\s*/).map(function(val){
		    	return parseInt(val, 10);
		    });
		    mVal = [mVal[0], mVal[4], mVal[8],  mVal[12],
		    		mVal[1], mVal[5], mVal[9],  mVal[13],
		    		mVal[3], mVal[6], mVal[10], mVal[14],
		    		mVal[4], mVal[7], mVal[11], mVal[15]];
		} else {
			mVal = [1, 0, 0, 0,
					0, 1, 0, 0, 
					0, 0, 1, 0,
					0, 0, 0, 1 ]
		}
		return mVal;
	}

	global.PARTICULAME.domUtils = {
		extractMatrix: extractMatrix
	};
	
}(window));
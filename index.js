'use strict';

function isUnit(value){
	return value && value.bind;
}

function resolveChain(pending, data){
	pending.forEach(function(pair){
		pair.unit.resolve(pair.resolving(data));
	});
}

function rejectChain(pending, data){
	pending.forEach(function(pair){
		pair.unit.reject(pair.rejecting(data));
	});
}

function pendingUnit(action){
	var pending = [];

	function resolve(data){
		return isUnit(data) ? data.bind(resolve) : resolveChain(pending, data);
	}

	function reject(data){
		return isUnit(data) ? data.bind(reject) : rejectChain(pending, data);
	}

	return { bind: function(resolving, rejecting){
		var u = pendingUnit();

		pending.push({ unit: u, resolving: resolving, rejecting: rejecting });

		if(action){
			action(resolve, reject);
		}

		return u;
	}, resolve: resolve, reject: reject };
}

function Future(action){
	return pendingUnit(action);
}

module.exports = Future;
'use strict';

function isUnit(value){
	return value && value.bind;
}

function resolveChain(pending, data){
	pending.forEach(function(pair){
		pair.unit.resolve(pair.morphism(data));
	});
}

function pendingUnit(action){
	var pending = [];

	function resolve(data){
		return isUnit(data) ? data.bind(resolve) : resolveChain(pending, data);
	}

	return { bind: function(morphism){
		var u = pendingUnit();

		pending.push({ unit: u, morphism: morphism });

		if(action){
			action(resolve);
		}

		return u;
	}, resolve: resolve };
}

function Future(action){
	return pendingUnit(action);
}

/*Future(function(resolve){
	setTimeout(function(){
		resolve(13);
	}, 1000);
})
	.bind(function(a){ return a + 1; })
	.bind(function(a){ console.log(a); return a; })
	.bind(function(a){
		return Future(function(resolve){
			setTimeout(function(){
				resolve(a * 2);
			}, 1000);
		});
	})
	.bind(function(a){ return a + 1; })
	.bind(function(a){ console.log(a); return a; });*/

module.exports = Future;
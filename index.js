function Future(action){
	var subscribers = [], value;

	function resolve(data){
		// body...
	}

	function reject(error){
		// body...
	}

	// action(resolve, reject);

	return {
		bind: function(){

		}
	}
}

function Resolve(value){
	return {
		bind: function(resolve){

		}
	};
}

function Reject(value){
	return {
		bind: function(_, reject){

		}
	};
}

Future.Resolve = Resolve;
Future.Reject = Reject;
exports.Future = Future;
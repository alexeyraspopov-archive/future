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
	// body...
}

function Reject(value){
	// body...
}

Future.Resolve = Resolve;
Future.Reject = Reject;
exports.Future = Future;
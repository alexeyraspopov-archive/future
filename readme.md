# Future

A JavaScript Future implementation.

## API

## Usage

Describe some function

	function fetch(url){
		return Future(function(resolve, reject){
			var xhr = new XMLHttpRequest();

			xhr.readystatechange = function(){
				if(this.readyState === 4){
					resolve(this.response);
				}
			};

			xhr.onerror = reject;

			xhr.open('GET', url);
			xhr.send();
		});
	}

And use it

	fetch('/user').bind(JSON.parse).bind(output);

## License

MIT License &copy; Alexey Raspopov
function any(list, value) {
	for (var i = 0; i < list.length; i++){
		if (list[i] === value){
			return true;
		}
	}
return false;
}

function all(list, value) {
	for (var i = 0; i < list.length; i++){
		if (list[i] !== value){
			return false;
		}
	}
return true;
}


function callback(a, b){
		if (a === b) {
			return true;
		} else {
			return false;
		}
}

function hofany(list, value, callback){
	for (var i = 0; i < list.length;i++){
		if (callback(list[i], value) === true) {
			return true;
		}
	}
	return false;
}

function hofall(list, value, callback){
	for (var i = 0; i < list.length;i++){
		if (callback(list[i], value) === false) {
			return false;
		}
	}
	return true;
}


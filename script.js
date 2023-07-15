//your JS code here. If required.

function result(key){
	for(let i=0; i<key.length; i++){
		if(key.indexOf(key[i])==key.lastIndexOf(key[i])){
			return key[i];
		}
	}
	return "";
}
const key = prompt("Enter Key.");
alert(result(key));
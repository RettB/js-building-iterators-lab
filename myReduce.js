// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce for more details
// Don't worry about initialValue at first. You can always add it in later.

function myReduce(arr, callback) {

//  CODE INSIDE HERE   //

// THIS ONE STILL NEEDS SOME WORK AND I NEED SOME HELP!!

switch(typeof arr[0]) {
	case "string": accumulator = ""; break;
	case "number": accumulator = 0; break;
}

for(i=0; i < arr.length; i++) {
	accumulator = callback(accumulator, arr[i]);
	console.log(accumulator);
}

return accumulator;

}

var arr = [0, 1, 2];

function sum(previous, current) {
	return current + previous;
}

myReduce(arr, sum);

/*
 Best if you don't code out here.
 If you want to check your code, use `index.js`!
*/







// export this function (you can ignore this for now)
module.exports = myReduce;

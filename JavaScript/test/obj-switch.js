function buble(array){
	for (var i = 0; i < array.length; i++) {
		console.log(array);
    	for (var j = array.length; j > i; j--) {
	        if (array[j] < array[j - 1]) {
	            var temp = array[j - 1];
	            array[j - 1] = array[j];
	            array[j] = temp;
	        }
	    }
	}
	return array;
}

function insertSort(array) {
    var temp;
    for (var i = 1; i < array.length; i++) {
    	console.log(array);
        var temp = array[i];
        for (var j = i; j > 0 && temp < array[j - 1]; j--) {
            array[j] = array[j - 1];
        }
        array[j] = temp;
    }
    return array;
}

function selectSort(array) {
    var min, temp; ;
    for (var i = 0; i < array.length; i++) {
    	console.log(array);
        min = i;
        for (var j = i + 1; j < array.length; j++) {
            if (array[min] > array[j])
                min = j;
        }
        if (min != i) {
            temp = array[i];
            array[i] = array[min];
            array[min] = temp;
        }

    }
    return array;
}

console.log(selectSort([1,3,9,6,7,2,3,8,4,5]));
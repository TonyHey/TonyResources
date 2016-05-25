function matrix(test) {
	var a = [];
	var x = 0;
	var y = 0;
	var max = test -1;
	var min = 0;

	//create 2 dimensional array
	for (var i = 0; i < test; i++) {
		a[i] = [];
	}
	// x is row, y is column; n is number in matrix
	for (var n = 1; n <= Math.pow(test, 2); n++) {
		if (x === min && y !== max) { // left to right
			a[x][y] = n;
			y++;
		} else if (y === max && x !== max) { // top to buttom
			a[x][y] = n;
			x++;
		} else if (x === max && y !== min) { // right to left
			a[x][y] = n;
			y--;
		} else if (y === min && x !== min) { // buttom to top
			a[x][y] = n;
			x--;
		} else if (x === y) { // middle center
			a[x][y] = n;
		}

		if (x === min + 1 && y === min) { // a round
			max--;
			min++;
		}
	}
	return a;
}

var t = matrix(5);
console.log(t);
function getArrayParams(...arr) {
	let min = arr[0];
	min = Math.min.apply(null, arr);
	let max = arr[0];
	max = Math.max.apply(null, arr);
	let avg = arr.reduce((a, b) => a + b, 0) / arr.length;
	avg = Number(avg.toFixed(2));
	return {min,max,avg};
}

function summElementsWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}
	var summ = arr.reduce((a, b) => a + b, 0);
	return summ;
}


function differenceMaxMinWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}
	var min = Math.min.apply(null, arr);
	var max = Math.max.apply(null, arr);
	var diff = max - min;
	return diff;
}


function differenceEvenOddWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}
	var sumEvenElement = 0;
	var sumOddElement = 0;
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] % 2 == 0) {
			sumEvenElement += arr[i];
		} else {
			sumOddElement += arr[i];
		}
	}
	var difference = sumEvenElement - sumOddElement;
	return difference;
}


function averageEvenElementsWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}
	var sumEvenElement = 0;
	var countEvenElement = 0;
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] % 2 == 0) {
			sumEvenElement += arr[i];
			countEvenElement++;
		}
	}
	var avg = sumEvenElement / countEvenElement;
	return avg;
}

function makeWork(arrOfArr, func) {
	let maxWorkerResult = -Infinity;
	for (let i = 0; i < arrOfArr.length; i++) {
		const result = func(...arrOfArr[i]);
		if (result > maxWorkerResult) {
			maxWorkerResult = result;
		}
	}
	return maxWorkerResult;
}

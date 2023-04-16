"use strict";

function solveEquation(a, b, c) {
	const d = Math.pow(b, 2) - 4 * a * c; // вычисляем дискриминант
	if (d < 0) {
		return []; // дискриминант меньше нуля, корней нет
	} else if (d === 0) {
		const x = -b / (2 * a); // дискриминант равен нулю, корень один
		return [x];
	} else {
		const x1 = (-b + Math.sqrt(d)) / (2 * a); // дискриминант больше нуля, два корня
		const x2 = (-b - Math.sqrt(d)) / (2 * a); // вычисляем корни
		return [x1, x2]; // возвращаем массив с двумя корнями
	}
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	if (isNaN(percent) || isNaN(contribution) || isNaN(amount) || isNaN(countMonths)) {
		return false;
	}

	percent = parseFloat(percent);
	contribution = parseFloat(contribution);
	amount = parseFloat(amount);
	countMonths = parseInt(countMonths);

	percent = percent / 100 / 12;
	const body = amount - contribution;
	const monthlyPayment = body * (percent + (percent / (Math.pow(1 + percent, countMonths) - 1)));
	const totalAmount = (monthlyPayment * countMonths).toFixed(2);

	return Number(totalAmount);
}

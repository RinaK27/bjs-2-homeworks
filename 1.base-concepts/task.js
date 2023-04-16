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
	if (isNaN(percent)) {
		return 'Параметр percent содержит неправильное значение ${percent}';
	} else if (isNaN(contribution)) {
		return 'Параметр contribution содержит неправильное значение ${contribution}';
	} else if (isNaN(amount)) {
		return 'Параметр amount содержит неправильное значение ${amount}';
	} else if (isNaN(countMonths)) {
		return 'Параметр countMonths содержит неправильное значение ${countMonths}';
	}

	const P = percent / 100 / 12; // процентная ставка в месяц
	const S = amount - contribution; // тело кредита
	const monthlyPayment = S * (P + (P / (Math.pow((1 + P), countMonths) - 1))); // ежемесячный платеж
	const totalAmount = (monthlyPayment * countMonths).toFixed(2); // общая сумма, которую придётся заплатить клиенту

	return Number(totalAmount);
}

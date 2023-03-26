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
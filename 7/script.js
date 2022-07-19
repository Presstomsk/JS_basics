let hours = Number(prompt("Введите текущее значение часов"));
let minutes = Number(prompt("Введите текущее значение минут"));
let timeForNextDayInMinutes = 1440;
let currentTimeInMinutes = hours*60 + minutes;
let delta = timeForNextDayInMinutes - currentTimeInMinutes;
alert(`До следующего дня осталось ${Math.trunc(delta/60)} ч. ${delta%60} мин.`);
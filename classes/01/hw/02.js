alert('Дана сторона равностороннего треугольника.\nЧему равна его площадь?')
let side = Number(prompt('Введите сторону треугольника (в см).'))
let halfside = side / 2
alert('Площадь треугольника равна' + String(Math.sqrt(
    side ** 2 - halfside ** 2) * halfside) + ' см в квадрате.')

+++
draft = false
outputs = "Reveal"
+++

## Занятие №4 {#занятие-4}


###  {#}

функции

---

```text
const имяФункции = function(аргумент, …, аргумент) {
    ТелоФункции
}
```

```text
function имяФункции(аргумент, …, аргумент) {
    ТелоФункции
}
```

Более подробное описание:

<https://ecma-international.org/ecma-262/10.0/index.html#prod-FunctionDeclaration>

---

<https://ecma-international.org/ecma-262/10.0/index.html#prod-FunctionBody>

```text
ТелоФункции :
                СписокИнструкций
```

Список инструкций:

<https://ecma-international.org/ecma-262/10.0/index.html#prod-StatementList>

---

```js
const makeNoise = function() {
  console.log("Pling!");
};

makeNoise();
// 'Pling!'
```

---

Функция с двумя аргументами

```js
const power = function(base, exponent) {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
	result *= base;
    }
    return result;
};
```

---

Функции с неограниченным числом аргументов

```js
const argumentExplorer = function(...args) {
    for (let x of args) {
	console.log(x)
    }
}
```

---

Функции могут сочетать список аргументов с произвольным именем с аргументами по ключевым словам.

```js
const argumentExplorer = function(firstArg, ...args) {
    for (let x of args) {
	console.log(x)
    }
    console.log(`Первый аргумент - ${firstArg}`);
}
```

---


### Области видимости {#области-видимости}

---

Переменные объявленные с:

-   `let` видны только внутри блока.
-   `var` видны везде

```text
Блок :
    { СписокИнструкций }
```

(<https://ecma-international.org/ecma-262/10.0/index.html#prod-Block>)

---

```js
let x = 10;
if (true) {
    let y = 20;
    var z = 30;
    console.log(x + y + z);
    // 60
}
console.log(x + z);
// 40
console.log(x + y);
// Uncaught ReferenceError: y is not defined
```

---

Зачем тогда нужен `let`?

---

Он позволяет использовать переменные с одинаковым именем в разных частях кода:

```js
let x = 10;
if (true) {
    let y = 20;
    console.log(x + y);
    // 30
}
if (true) {
    let y = 40;
    console.log(x + y)
    // 50
}
```

---


### Задачи {#задачи}

---

Напишите функцию, которая возводит аргумент в квадрат.

---

Создайте функцию, которая выводит в консоль "Hello" заданное аргументом количество раз.

---

Решить задачу занятия №3 (слайд #/18) новым способом. Создайте функцию, которая первый элемент массива делает последним, и решите задачу применив эту функцию. Используйте цикл.

---

Напишите функцию, которая из неограниченного числа аргументов находит наибольшее число (аргументы должны быть числами).

---

Создайте функцию, которая суммирует все введенные аргументы (неограниченное количество).

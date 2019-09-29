+++
draft = false
outputs = "Reveal"
+++

## Занятие №3 {#занятие-3}

Массивы. Цикл for.

---


### Массивы {#массивы}

```js
let array = ['string', true, 11];
console.log(array.length);
// 3
console.log(array[0]);
// "string"
console.log(array[0][2]);
// "r"
console.log(array[1]);
// true
console.log(array[2]);
// 11
```

---


### Метод `.push()` {#метод-dot-push}

Этот метод в качестве аргумента принимает элементы для добавления к концу массива.

```js
let array = ['string', true, 11];
console.log(array);
// (3) ['string', true, 11]
array.push('football');
// 4 (если интерактивно)
console.log(array);
// (4) ['string', true, 11, 'football']
```

---


### Метод `.pop()` {#метод-dot-pop}

```js
console.log(array);
// (4) ['string', true, 11, 'football']
array.pop();
// 'football' (если интерактивно)
console.log(array);
// (3) ['string', true, 11]
```

Этот метод не принимает аргументов.

---


### Методы `.shift()`  и  `.unshift()` {#методы-dot-shift-и-dot-unshift}

Метод `.unshift()` в качестве аргументов принимает значения для добавление в **начало** массива.

```js
console.log(array);
// (3) ['string', true, 11]
array.shift();
// 'string' - если интерактивно
console.log(array);
// (2) [true, 11]
array.unshift('word')
// 3 - если интерактивно
console.log(array);
// (3) ['word', true, 11]
```

---


### Методы `.slice()`  и `.splice()` {#методы-dot-slice-и-dot-splice}

Имена данных методов легко спутать, но делать этого не стоит, поскольку работают они по-разному.

---


### `.slice()` {#dot-slice}

`array.slice([начало [, конец]])`

Работает так же, как и для строк.

Метод .slice() возвращает копию массива с элементами в промежутке между указанными позициями. Если они не указаны, массив копируется целиком.

---

```js
console.log(array);
// (3) ['word', true, 11]
console.log(array.slice(1));
// (2) [true, 11]
console.log(array);
// (3) ['word', true, 11]
```

Как видим, после применения метода исходный массив не меняется.

---


### `.splice()` {#dot-splice}

`array.splice(начало[, кол-во[, элем1[, элем2[, ...]]]])`

Этот метод работает совсем иначе. Он либо удалает часть массива, либо заменяет ее на указанные элементы.

Характеристика метода:

-   возвращает удаленный фрагмент массива
-   1-ый аргумент &mdash; начальный индекс
-   2-ой &mdash; кол-во элементов для удаления
-   3-ий и далее &mdash; значения для вставки

---

```js
console.log(array);       // (3) ['word', true, 11]
array.splice();           // [] (интерактивно)
console.log(array);       // (3) ['word', true, 11]
array.splice(1, 1, false) // [true] (интерактивно)
console.log(array);       // (3) ['word', false, 11]
array.splice(2, 0, 2e-3)  // [] (интерактивно)
console.log(array);       // (4) ["word", false, 0.002, 11]
```

---


### Копирование массивов {#копирование-массивов}

---

Как вы думаете, как можно скопировать массив?

---

Попробуем скопировать массив следующим образом. Что из этого получится?

```js
let array1 = ["word", false, 0.002, 11];
let array2 = array1;
array1.pop();
console.log(array2);
// ["word", false, 0.002]
```

Мы меняли массив 1, а вместе с ним изменился массив 2.

---

Рассмотрим другой вариант.

```js
let array1 = ["word", false, 0.002, 11];
let array2 = array1.slice();
array1.pop();
console.log(array2);
// ["word", false, 0.002, 11]
```

Здесь массивы оказались независимыми.

Поэтому если хотите скопировать массив, пользуйтесь этим вариантом.

---


### Задачи {#задачи}

---


####  {#}

Дан массив:

```js
let array = ['string', true, 11];
```

Используя методы `.pop()` и `.push()` получить и вывести массив:

```js
['string', 20000, 2, 3, false, 2 ]
```

---


####  {#}

```js
let array = ['word', false, 11];
```

Используя методы `.shift()` и `.unshift()`, получить и вывести массив:

```js
[1, 7, true, 'string', false, 11 ]
```

---


####  {#}

```js
let array = [1, 7, true, 'string', false, 11 ];
```

Используя методы `.pop()`, `.push()`, `.shift()` и `.unshift()`, получить и вывести:

```js
[14, 2, false, 'string', true, 0]
```

---


####  {#}

Дано:

```js
let array = [1, 7, true, 'string', false, 11 ];
```

Используя `.push()` и `.shift()`, получить и вывести:

```js
['string', false, 11, 1, 7, true]
```

---


####  {#}

Дано:

```js
let array = [1, 1, 1, 1, 1, 1, 1];
```

Используя метод `.spilce()`, получить и вывести:

```js
[1, 1, 2, 2, 2, 1, 1, 1, 1, 1]
```

---

Дано:

```js
let array = [1, 1, 1, 1, 1, 1, 1];
```

Используя метод `.spilce()`, получить и вывести:

```js
[1, 1, 2, 2, 2, 1, 1]
```

---


### Цикл `for` {#цикл-for}

---

Что такое циклы?

---

```js
let array = ["word", false, 0.002, 11];
for (let i = 0; i < array.length; i++) {
    console.log(array[i] + ' and BAR');
};
// word and BAR
// false and BAR
// 0.002 and BAR
// 11 and BAR
```

---

```js
let array = ["word", false, 0.002, 11];
for (let elem of array) {
    console.log(elem + ' and BAR');
}
// word and BAR
// false and BAR
// 0.002 and BAR
// 11 and BAR
```

---

Но

```js
let array = ["word", false, 0.002, 11];
for (let i = 0; i < array.length; i += 2) {
    console.log(array[i] + ' and BAR');
};
// word and BAR
// 0.002 and BAR
```

---


### Задачи {#задачи}

---


####  {#}

Дан массив. Вывести только четные элементы массива.

---


####  {#}

Дан массив. Вывести массив, элементы которого составляют суммы двух соседних элементов данного массива


####  {#}

Вывести сообщение 'Hello, for' 5 раз, используя цикл `for`.

---

Создать пустой массив и заполнить его 7 значениями из `prompt()`, используя цикл `for`. Затем используя вновь этот цикл вывести все значения по отдельности.

---

Создать пустой массив array. Заполнить его числами от 1 до 10, используя цикл `for`. Вывести значения массива по отдельности.

---

Используя цикл `for` вывести следующее:

```js
#
##
###
####
#####
######
#######
```

---

Вывести в консоль числа от 1 до 100. При этом, числа кратные 3 заменить на Fizz, 5-ти &mdash; на Buzz.

После этого замените числа кратные и 3, и 5 на FizzBuzz.

---

Составить и вывести шахматное поле, используя цикл `for` и символы `" "`  и `"#"`:

```js
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
```

Сделать возможным указывать размерность поля.

---
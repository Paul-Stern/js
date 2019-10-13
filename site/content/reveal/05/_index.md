+++
draft = false
outputs = "Reveal"
+++

## Занятие №5 {#занятие-5}

Объекты и DOM.

---


### Объекты {#объекты}

```text
let объект = {
    св-во1: значение1
    св-во2: значение2
    ...
}
```

<https://ecma-international.org/ecma-262/10.0/index.html#prod-ObjectBindingPattern>

---

```js
let car = {
    color: 'red',
    brand: 'BMW',
}
car.speed = 100;  // км/ч
car.isDriving = true;
```

---


### Задание №1 {#задание-1}

Добавьте свои свойства к этому объекту.

---


### `this` {#this}

Ключевое слово `this`

```js
car.drive = function() {
    this.isDriving = true;
}

car.stop = function() {
    this.isDriving = false;
}
```

<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this>


### DOM {#dom}

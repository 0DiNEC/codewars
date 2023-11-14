
// Первая бомба
Bomb.diffuse(Bomb.key);

// Обезвреживаем вторую бомбу 5 раз
for (let i = 0; i < 5; i++) {
  Bomb.diffuse(Bomb.key);
}

// Обезвреживаем третью бомбу с использованием BombKey
Bomb.diffuse(BombKey);

// Обезвреживаем четвертую бомбу с помощью функции diffuseTheBomb
const diffuseTheBomb = () => true;
Bomb.diffuse();

// Обезвреживаем пятую бомбу с использованием значения Math.PI
Bomb.diffuse(Math.PI.toFixed(5));

// Обезвреживаем шестую бомбу, связанную с временем
Bomb.diffuse(new Date().setFullYear(new Date().getFullYear() - 4));

// Обезвреживаем седьмую бомбу с замороженным объектом
Bomb.diffuse(Object.freeze({ key: 43 }));

// Обезвреживаем восьмую бомбу с объектом, управляемым методом valueOf
Bomb.diffuse((obj = {
  i: 0,
  valueOf: function () {
    let res = this.i > 0 ? 11 : 9;
    this.i++;
    return res;
  },
}));


// Обезвреживаем девятую бомбу с использованием модифицированного Math.random
Math.random = function () {
  return {
    valueOf: () => {
      if (!this.used) {
        this.used = true;
        return 0.5;
      }
      return 1;
    },
  };
};

Bomb.diffuse(42);


// Обезвреживаем последнюю бомбу с использованием массива
Array.prototype.valueOf = function () {
  return this.reduce((sum, cur) => sum + cur);
};
Bomb.diffuse(new Buffer("yes").toString("base64"));

console.log(Bomb);
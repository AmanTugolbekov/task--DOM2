// События Native JS. Классная работа
// ! Все HTML элементы которыми нужно манипулировать пропишите отдельно в файле index.html
let body = document.querySelector("body");
// Задание №1
// По нажатию клавиш меняйте цвет заднего фона
// div - элемента:
// R - red;
// G - green;
// B - blue;
// w - white;
// SHIFT + B - black;
// SHIFT + G - gray;
let div = document.querySelector(".div1");
window.addEventListener("keydown", (e) => {
  let key = e.key.toUpperCase();
  if (key == "R") {
    div.style.background = "red";
  } else if (key == "G") {
    div.style.background = "green";
  } else if (key == "B") {
    div.style.background = "blue";
  } else if (key == "W") {
    div.style.background = "white";
  }
  if (e.shiftKey && key == "B") {
    div.style.background = "black";
  } else if (e.shiftKey && key == "G") {
    div.style.background = "gray";
  }
});
// Задание №2
// Создайте переменную let i=0, по нажатию
// на кнопку выводите в консоль переменную i
// и увеличивайте её в 2 раза;
let btn = document.querySelector("button");
let i = 1;
btn.addEventListener("click", (e) => {
  i *= 2;
  console.log(i);
});
// Задание №3
// Создайте div размером 500px * 500px,
// по нажатию на неё выводите в консоль
// позицию места куда вы нажали
// относительно div- а;
let div1 = document.createElement("div");
div1.style.width = "500px";
div1.style.height = "500px";
div1.style.backgroundColor = "blue";

div1.addEventListener("click", (e) => {
  console.log(`x:${e.x},y:${e.y}`);
});
body.append(div1);

// Задание №4
// Создайте input type color.
// При изменении инпута меняйте цвет
// заднего фона body на значение
// из этого инпута
let inp = document.createElement("input");
inp.placeholder = "Введите цвет";
inp.addEventListener("keydown", (e) => {
  body.style.backgroundColor = inp.value;
});
body.append(inp);

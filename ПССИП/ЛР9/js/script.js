let age = 18; //if оператор
if (age >= 18) {
  console.log("Вы совершеннолетний.");
} else {
  console.log("Вы несовершеннолетний.");
}

//Оператор switch
let day = 3;
switch (day) {
  case 1:
    console.log("Понедельник");
    break;
  case 2:
    console.log("Вторник");
    break;
  case 3:
    console.log("Среда");
    break;
    case 3:
    console.log("Четверг");
    break;
    case 3:
    console.log("Пятница");
    break;
  default:
    console.log("Выходной день");
}

//Оператор for
for (let i = 0; i < 5; i++) {
    console.log("Итерация №" + (i + 1));
  }

//Оператор while
let count = 0;
while (count < 3) {
  console.log("Здравствуйте #" + (count + 1));
  count++;
}

//Оператор do...while
let number = 0;
do {
  console.log("Текущее число: " + number);
  number++;
} while (number < 3);

//Оператор break
for (let i = 0; i < 10; i++) {
    if (i === 9) {
      console.log("Найдено число 9, останавливаем цикл");
      break;
    }
    console.log("Текущее число: " + i);
  }

//Оператор continue
for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
      continue;
    }
    console.log("Нечетное число: " + i);
  }

//Оператор returne
function calculateArea(width, height) {
    if (width <= 0 || height <= 0) {
      return "Размеры должны быть положительными";
    }
    let area = width * height;
    return area;
  }
  
  let result = calculateArea(5, 10);
  console.log(result); // Вывод: 50
  
let S1 = "Антонюк"; let S2 = "Гродно";

// Определение длины строки S2 
let lengthS2 = S2.length;

// Выполнение сцепления строк S1 и S2 
let concatenatedString = S1 + S2;

// Замена в строке S1 всех встречающихся букв "а" на "№" 
let replacedString = S1.replace(/А/g, "№");

document.write("Длина строки S2:", lengthS2); 
document.write("Результат сцепления строк S1 и S2:", concatenatedString); 
document.write("Результат замены букв 'а' на '№' в строке S1:", replacedString);
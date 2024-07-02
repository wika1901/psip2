function calculateFormula() {
    let a = parseFloat(prompt("Введите число a:"));
    let b = parseFloat(prompt("Введите число b:"));
    let c = parseFloat(prompt("Введите число c:"));

    let result = 0;

    try {
        result = (((2*b+1)**(1/2))/(Math.abs(a-b))) - 5*(c**2 + Math.PI);
        if (isNaN(result) || !isFinite(result)) {
            throw new Error("Ошибка вычислений");
        }
    } catch (error) {
        alert(error.message);
        return;
    }

    return result;
}

let result = calculateFormula();
document.write("Результат расчета формулы: " + result);



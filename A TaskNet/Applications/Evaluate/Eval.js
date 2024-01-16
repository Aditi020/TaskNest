class EvalArithmetic {
    constructor() {
        this.result = 0;
    }
    add(num) {
        this.result += num;
    }
    subtract(num) {
        this.result -= num;
    }
    multiply(num) {
        this.result *= num;
    }
    divide(num) {
        if (num !== 0) {
            this.result /= num;
        } else {
            throw new Error("Cannot divide by zero.");
        }
    }
    clear() {
        this.result = 0;
    }
    getResult() {
        return this.result;
    }
    calculate(expression) {

        expression = expression.replaceAll(" ", "");
        const validCharacters = /^[\d\s\+\-\*\/().]+$/;

        if (!validCharacters.test(expression)) {
            throw new Error("Invalid characters in the expression");
        }

        try {
            const res = eval(expression); //eval function in JavaScript evaluates a string as code and executes it.
            if (!isFinite(res)) {
                throw new Error(`Can not divide by zero`);
            }
            this.result = res;
        }
        catch (error) {
            throw new Error("Invalid expression");
        }
        return this.result;
    }
}


const calculator = new EvalArithmetic();

// Get references to HTML elements
const evaluateBtn = document.getElementById('evaluate');
const expressionInput = document.getElementById('task-input');
const resultOutput = document.getElementById('task-output');
const clearBtn = document.getElementById('clear');

// Add event listener to the "Evaluate" button
evaluateBtn.addEventListener('click', () => {
    try {
        const expression = expressionInput.value;
        const result = calculator.calculate(expression);
        resultOutput.value = result;
    } catch (error) {
        // Handle errors by showing a SweetAlert notification
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: error.message,
        });
    }
});
// clear button
clearBtn.addEventListener('click', () => {
    // Clear both input and output fields
    expressionInput.value = '';
    resultOutput.value = '';
});

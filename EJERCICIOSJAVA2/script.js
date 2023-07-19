var numbers = [];

    function findLargestNumber() {
        var input = document.getElementById('numberInput');
        var number = parseFloat(input.value);

    if (isNaN(number)) {
        alert('Inserte algun numero que sea valido.');
        return;
    }

    numbers.push(number);
    input.value = '';
}

    function findMax() {
    if (numbers.length === 0) {
        alert('No se ha insertado ningun numero.');
        return;
    }

    var max = numbers[0];
    
    for (var i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }

        var result = document.getElementById('resultado');
        result.innerHTML = 'El número grande: ' + max;
    }

    //---------------------------------------------------------------------------------
    function checkPalindrome() {
        var input = document.getElementById('inputWord');
        var word = input.value.toLowerCase();

        word = word.replace(/\s/g, '').replace(/[^a-zñ]/g, '');

        if (word === '') {
            alert('Inserte una frase o palabra que válida.');
            return;
        }

        var reversedWord = word.split('').reverse().join('');

        if (word === reversedWord) {
            document.getElementById('resultado.2').innerHTML = '"' + input.value + '" es un palíndromo.';
        } else {
            document.getElementById('resultado.2').innerHTML = '"' + input.value + '" no es un palíndromo.';
        }
    }

    //-----------------------------------------------------------------------------------------------------------
    function calculateDigitSum() {
        var input = document.getElementById('numbersInput');
        var number = input.value;

        if (number === '') {
            alert('inserta algina cifra que sea válida.');
            return;
        }

        var digitSum = 0;
        var digits = number.toString().split('');

        for (var i = 0; i < digits.length; i++) {
            digitSum += parseInt(digits[i]);
        }

        document.getElementById('resultado.3').innerHTML = 'la suma de los numeros: ' + digitSum;
    }

    //------------------------------------------------------------------------------------------------------------
    function generateRandomNumber() {
        var minInput = document.getElementById('minInput');
        var maxInput = document.getElementById('maxInput');

        var min = parseInt(minInput.value);
        var max = parseInt(maxInput.value);

        if (isNaN(min) || isNaN(max)) {
            alert('Inserta un rango que sea valido.');
            return;
        }

        if (min >= max) {
            alert('El valor mínimo  insertado debe ser menor que el valor máximo.');
            return;
        }

        var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

        document.getElementById('resultado.4').innerHTML = 'Número: ' + randomNumber;
    }

    //-------------------------------------------------------------------------------------------------------
    function generateFibonacciSequence() {
        var input = document.getElementById('numberInputFibo');
        var number = parseInt(input.value);

        if (isNaN(number) || number <= 0) {
            alert('Inserte un número válido mayor que cero.');
            return;
        }

        var sequence = [0, 1];

        while (sequence[sequence.length - 1] + sequence[sequence.length - 2] <= number) {
            sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2]);
        }

        document.getElementById('resultado.5').innerHTML = 'Secuencia de Fibonacci: ' + sequence.join(', ');
    }

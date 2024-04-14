// Iteration #1: Find the maximum
function maxOfTwoNumbers(num1, num2) {
 // Compara dos números y devuelve el mayor
 return num1 > num2 ? num1 : num2;
}

// Iteration #2: Find the longest word
function findLongestWord(words) {
 // Inicializa la longitud máxima y la palabra más larga
 let maxLength = 0;
 let longestWord = '';

 // Itera sobre cada palabra en el array
 for (let word of words) {
    // Si la longitud de la palabra actual es mayor que la longitud máxima actual
    if (word.length > maxLength) {
      // Actualiza la longitud máxima y la palabra más larga
      maxLength = word.length;
      longestWord = word;
    }
 }

 // Devuelve la palabra más larga
 return longestWord;
}

// Iteration #3: Calculate the sum
// Iteration #3.1: Sum numbers
function sumNumbers(numbers) {
 // Inicializa la suma en 0
 let sum = 0;

 // Itera sobre cada número en el array
 for (let number of numbers) {
    // Suma el número actual a la suma total
    sum += number;
 }

 // Devuelve la suma total
 return sum;
}

// Bonus - Iteration #3.2: A generic sum() function
function sum(arr) {
 // Inicializa la suma en 0
 let totalSum = 0;

 // Itera sobre cada elemento en el array
 for (let element of arr) {
    // Si el elemento es un número, lo suma directamente
    if (typeof element === 'number') {
      totalSum += element;
    }
    // Si el elemento es una cadena, suma su longitud
    else if (typeof element === 'string') {
      totalSum += element.length;
    }
    // Si el elemento es un booleano, suma 1 si es true, 0 si es false
    else if (typeof element === 'boolean') {
      totalSum += element ? 1 : 0;
    }
    // Si el elemento no es un número, una cadena o un booleano, lanza un error
    else {
      throw new Error("El array solo debe contener números, cadenas o booleanos.");
    }
 }

 // Devuelve la suma total
 return totalSum;
}

// Iteration #4: Calculate the average
// Iteration #4.1: Array of numbers
function averageNumbers(numbers) {
 // Calcula la suma de los números
 const sum = sumNumbers(numbers);

 // Calcula el promedio dividiendo la suma por la cantidad de números
 return sum / numbers.length;
}

// Iteration #4.2: Array of strings
function averageWordLength(words) {
 // Calcula la suma de las longitudes de las palabras
 const sum = words.reduce((acc, word) => acc + word.length, 0);

 // Calcula el promedio dividiendo la suma por la cantidad de palabras
 return sum / words.length;
}

// Bonus - Iteration #4.3: A generic avg() function
function avg(arr) {
 // Inicializa la suma en 0
 let totalSum = 0;
 let count = 0;

 // Itera sobre cada elemento en el array
 for (let element of arr) {
    // Si el elemento es un número, lo suma directamente
    if (typeof element === 'number') {
      totalSum += element;
      count++;
    }
    // Si el elemento es una cadena, suma su longitud
    else if (typeof element === 'string') {
      totalSum += element.length;
      count++;
    }
    // Si el elemento es un booleano, suma 1 si es true, 0 si es false
    else if (typeof element === 'boolean') {
      totalSum += element ? 1 : 0;
      count++;
    }
    // Si el elemento no es un número, una cadena o un booleano, lanza un error
    else {
      throw new Error("El array solo debe contener números, cadenas o booleanos.");
    }
 }

 // Calcula el promedio dividiendo la suma total por el conteo de elementos
 return totalSum / count;
}

// Iteration #5: Unique arrays
function uniquifyArray(words) {
 // Inicializa un nuevo array vacío
 let uniqueWords = [];

 // Itera sobre cada palabra en el array original
 for (let word of words) {
    // Si la palabra no está en el array de palabras únicas, la añade
    if (!uniqueWords.includes(word)) {
      uniqueWords.push(word);
    }
 }

 // Devuelve el array de palabras únicas
 return uniqueWords;
}

// Iteration #6: Find elements
function doesWordExist(words, wordToSearch) {
 // Devuelve true si la palabra buscada está en el array, false en caso contrario
 return words.includes(wordToSearch);
}

// Iteration #7: Count repetition
function howManyTimes(words, wordToSearch) {
 // Cuenta la cantidad de veces que la palabra aparece en el array
 return words.filter(word => word === wordToSearch).length;
}

// Bonus - Iteration #8.1: Product of adjacent numbers
function greatestProduct(matrix) {
 let maxProduct = 0;

 // Itera sobre cada elemento de la matriz
 for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      // Calcula el producto de los cuatro números adyacentes
      const product = matrix[i][j] * matrix[i][j + 1] * matrix[i + 1][j] * matrix[i + 1][j + 1];

      // Actualiza el producto máximo si el producto actual es mayor
      maxProduct = Math.max(maxProduct, product);
    }
 }

 // Devuelve el producto máximo
 return maxProduct;
}

// Bonus - Iteration #8.2: Product of diagonals
function greatestProductOfDiagonals(matrix) {
 let maxProduct = 0;

 // Itera sobre cada elemento de la matriz
 for (let i = 0; i < matrix.length - 3; i++) {
    for (let j = 0; j < matrix[i].length - 3; j++) {
      // Calcula el producto de los cuatro números en la diagonal principal
      const product1 = matrix[i][j] * matrix[i + 1][j + 1] * matrix[i + 2][j + 2] * matrix[i + 3][j + 3];

      // Calcula el producto de los cuatro números en la diagonal secundaria
      const product2 = matrix[i][j + 3] * matrix[i + 1][j + 2] * matrix[i + 2][j + 1] * matrix[i + 3][j];

      // Actualiza el producto máximo si el producto actual es mayor
      maxProduct = Math.max(maxProduct, product1, product2);
    }
 }

 // Devuelve el producto máximo
 return maxProduct;
}

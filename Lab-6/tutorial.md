# Tutorial de JavaScript: Iteraciones y Funciones

Este tutorial te guiará a través de varias iteraciones de ejercicios de programación en JavaScript, explicando los conceptos clave y las funciones utilizadas en cada uno.

## Iteración #1: Encontrar el máximo

**Concepto:** Comparar dos números y determinar cuál es el mayor.

**Función:** `maxOfTwoNumbers(num1, num2)`

**Explicación:** Esta función toma dos números como argumentos y utiliza el operador ternario para devolver el mayor de los dos.

## Iteración #2: Encontrar la palabra más larga

**Concepto:** Identificar la palabra más larga en un array de palabras.

**Función:** `findLongestWord(words)`

**Explicación:** La función itera sobre cada palabra en el array, comparando la longitud de cada palabra con la longitud máxima encontrada hasta ahora. Si encuentra una palabra más larga, actualiza la longitud máxima y la palabra más larga.

## Iteración #3: Calcular la suma

### Iteración #3.1: Sumar números

**Concepto:** Sumar todos los números en un array.

**Función:** `sumNumbers(numbers)`

**Explicación:** Utiliza un bucle `for...of` para iterar sobre cada número en el array y sumarlos todos.

### Bonus - Iteración #3.2: Una función genérica sum()

**Concepto:** Sumar valores numéricos, longitudes de cadenas y valores booleanos en un array mixto.

**Función:** `sum(arr)`

**Explicación:** Itera sobre cada elemento del array, sumando números directamente, sumando la longitud de las cadenas y sumando 1 para los valores booleanos `true` y 0 para `false`. Lanza un error si encuentra un tipo de dato no soportado.

## Iteración #4: Calcular el promedio

### Iteración #4.1: Array de números

**Concepto:** Calcular el promedio de un array de números.

**Función:** `averageNumbers(numbers)`

**Explicación:** Calcula la suma de los números usando la función `sumNumbers` y luego divide por la cantidad de números en el array.

### Iteración #4.2: Array de cadenas

**Concepto:** Calcular el promedio de las longitudes de las palabras en un array.

**Función:** `averageWordLength(words)`

**Explicación:** Utiliza el método `reduce` para sumar las longitudes de las palabras y luego divide por la cantidad de palabras.

### Bonus - Iteración #4.3: Una función genérica avg()

**Concepto:** Calcular el promedio de un array mixto de números, cadenas y booleanos.

**Función:** `avg(arr)`

**Explicación:** Similar a la función `sum`, pero calcula el promedio en lugar de la suma total.

## Iteración #5: Arrays únicos

**Concepto:** Eliminar duplicados de un array de palabras.

**Función:** `uniquifyArray(words)`

**Explicación:** Utiliza el método `includes` para verificar si una palabra ya está en el array de palabras únicas antes de añadirla.

## Iteración #6: Encontrar elementos

**Concepto:** Verificar si una palabra existe en un array.

**Función:** `doesWordExist(words, wordToSearch)`

**Explicación:** Utiliza el método `includes` para verificar si la palabra buscada está en el array.

## Iteración #7: Contar repeticiones

**Concepto:** Contar cuántas veces aparece una palabra en un array.

**Función:** `howManyTimes(words, wordToSearch)`

**Explicación:** Utiliza el método `filter` para contar las ocurrencias de la palabra buscada en el array.

## Bonus - Iteración #8.1: Producto de números adyacentes

**Concepto:** Encontrar el producto más grande de cuatro números adyacentes en una matriz.

**Función:** `greatestProduct(matrix)`

**Explicación:** Itera sobre cada elemento de la matriz, calculando el producto de los cuatro números adyacentes y actualizando el producto máximo encontrado hasta ahora.

## Bonus - Iteración #8.2: Producto de diagonales

**Concepto:** Encontrar el producto más grande de cuatro números en una diagonal en una matriz.

**Función:** `greatestProductOfDiagonals(matrix)`

**Explicación:** Itera sobre cada elemento de la matriz, calculando el producto de los cuatro números en las diagonales principales y secundarias y actualizando el producto máximo encontrado hasta ahora.

Este tutorial te proporciona una base sólida para entender y aplicar estos conceptos en tus proyectos de programación en JavaScript.

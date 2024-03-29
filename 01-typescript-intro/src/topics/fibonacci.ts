function fibonacciSequence(n: number): number[] {
  // Creamos un arreglo para almacenar la secuencia de Fibonacci
  const sequence: number[] = [];

  // Caso base: si n es 0, retornamos un arreglo vacío
  if (n === 0) {
      return sequence;
  }

  // Inicializamos los dos primeros términos de la secuencia
  let a: number = 0;
  let b: number = 1;

  // Agregamos el primer término al arreglo de la secuencia
  sequence.push(a);

  // Si n es 1, retornamos la secuencia con un solo término (0)
  if (n === 1) {
      return sequence;
  }

  // Agregamos el segundo término al arreglo de la secuencia
  sequence.push(b);

  // Iteramos para generar los términos restantes de la secuencia
  for (let i = 2; i < n; i++) {
      // Calculamos el siguiente término sumando los dos términos anteriores
      const nextTerm: number = a + b;

      // Actualizamos los valores de los términos anteriores para la siguiente iteración
      a = b;
      b = nextTerm;

      // Agregamos el siguiente término al arreglo de la secuencia
      sequence.push(nextTerm);
  }

  // Retornamos el arreglo completo de la secuencia de Fibonacci
  return sequence;
}

// Ejemplo de uso
const n: number = 10; // Calcular la secuencia de Fibonacci para los primeros 10 términos
const fibonacciSeries: number[] = fibonacciSequence(n);
console.log(`La secuencia de Fibonacci para los primeros ${n} términos es:`, fibonacciSeries);

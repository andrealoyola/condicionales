# Condicionales

Este es un proyecto para aprender a usar condicionales.

Adicionalmente hemos aprendido a usar el CDN de p5.js ingluyend el siguiente código dentro del <head> del archivo index.html de la siguiente manera:

```html
<script src="https://cdn.jsdelivr.net/npm/p5@1.11.0/lib/p5.min.js"></script>
```

Se puede usar las sentencias condicionales **if, if-else e if-else if** para controlar el flujo de programa en p5.js.

**IF:** Se utiliza para ejecutar un bloque de código si una condición es **verdadera**.

```js
if (condicion) {
  // código a ejecutar si la condición es verdadera
}
```

**IF-ELSE:** permite ejecutar un bloque de código si una condición es **verdadera** y otro bloque de código si la condición es _falsa_.

```js
if (condicion) {
  // código a ejecutar si la condición es verdadera
} else {
  // código a ejecutar si la condición es falsa
}
```

**ELSE-IF:** Puedes usar la sentencia else if para comprobar varias condiciones en secuencia, se puede encadenar después de un if o otro else if. Se evalúa la "otraCondicion" solo si las condiciones anteriores fueron falsas.

```js
if (condicion1) {
  // código a ejecutar si la condición1 es verdadera
} else if (condicion2) {
  // código a ejecutar si la condición2 es verdadera
} else {
  // código a ejecutar si ninguna de las condiciones anteriores es verdadera
}
```

**Operadores lógicos**

Se pueden usar operadores lógicos para combinar múltiples condiciones en una sola expresión _booleana_. Los operadores lógicos más comunes son AND (&&) y OR (||).○
El operador **AND (&&)** devuelve true si ambas condiciones son verdaderas.○
El operador **OR (||)** devuelve true si al menos una de las condiciones es verdadera.

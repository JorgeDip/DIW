# Ejercicio 1 de CSS: Selectores de CSS

En este ejercicio, deberás aplicar diferentes estilos a un documento HTML utilizando selectores de CSS. Se te proporciona un archivo HTML que tiene varias clases, ids y etiquetas. Tu tarea será modificar el archivo CSS aplicando selectores de manera correcta.


### Instrucciones:

1. Aplica un color de fondo verde claro a **toda la página**.
2. Cambia el color del texto de todos los **títulos (h1, h2, h3)** a color azul.
3. Cambia el **tamaño de fuente** de todos los párrafos dentro del `div` con la clase `.content` a `18px`.
4. Usa un **selector de clase** para cambiar el color de los elementos con la clase `.important` a rojo.
5. Cambia el color del texto del **primer elemento `li`** en cada lista a naranja.
6. Aplica un **borde** de `2px` sólido y negro al `div` con el id `main`.
7. Cambia el **fondo** de los elementos de lista impares (`li:nth-child(odd)`) a un color gris claro.
8. Aplica un **hover** para que, al pasar el ratón sobre los enlaces (`a`), cambien de color a morado.
9. Cambia el color del texto de todos los enlaces (`a`) cuyo **atributo `href`** comienza con `"https"` a verde.
10. Aplica un **fondo amarillo** a los enlaces cuyo **atributo `href`** contenga la palabra `"external"`.

### Código HTML

Copia este código HTML en tu archivo y sigue las instrucciones para crear un archivo CSS que se enlace correctamente.

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Práctica de Selectores CSS</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div id="main">
        <h1>Práctica de Selectores</h1>
        <p>Este es un documento HTML simple para practicar CSS.</p>
        <div class="content">
            <h2>Subtítulo Importante</h2>
            <p>Este es un párrafo dentro del div con la clase "content".</p>
            <p class="important">Este párrafo es importante y debe tener un color diferente.</p>
        </div>

        <ul>
            <li>Elemento 1</li>
            <li>Elemento 2</li>
            <li>Elemento 3</li>
        </ul>

        <ol>
            <li>Elemento A</li>
            <li>Elemento B</li>
            <li>Elemento C</li>
        </ol>

        <h3>Conclusión</h3>
        <p class="important">Otro párrafo importante que necesita estilo especial.</p>

        <a href="https://example.com">Enlace HTTPS 1</a>
        <a href="http://example.com">Enlace HTTP 2</a>
        <a href="https://external-site.com">Enlace Externo</a>
    </div>
</body>
</html>
```

## Pistas

- Para seleccionar enlaces cuyo atributo href comience con "https", puedes usar `[href^="https"]`.
- Para seleccionar enlaces cuyo atributo href contenga "external", usa `[href*="external"]`.
- Usa los otros selectores como los básicos de etiqueta (h1, p), clase (.important) o id (#main).
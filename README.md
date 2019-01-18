# Mol Core
Administra el estilo de las etiquetas de html y clases generales

( ﾟ▽ﾟ)/ Hi! [@MolFramework](https://twitter.com/MolFramework)


## Problemas conocidos

- `input[type="button"].link-underline`
- `input[type="submit"].link-underline`
- `input[type="reset"].link-underline`

Σ(ﾟДﾟ；El input type button, submit y reset con la clase link-underline no muestra la animación :hover de la línea bajo el texto debido a que el tag input no tiene ::after elements. Utiliza un botón normal `button.link-underline`.

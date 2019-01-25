# Mol Core
Administra el estilo de las etiquetas de html y clases generales

( ﾟ▽ﾟ)/ Hi! [@MolFramework](https://twitter.com/MolFramework)


## Uso e instalación
Para utilizar el core en tu proyecto, puedes installarlo con [npm](https://www.npmjs.com/)
```sh
npm install --save https://github.com/MolFramework/mol.core.git
```
e importarlo en tu hoja de estilos principal, éste archivo contiene el archivo del normalize incrustado en el archivo de distribución del módulo core
```sh
@import '~mol.core/dist/core.min.css';
```
o si prefieres utilizar tu propio archivo de variables, importa
```sh
@import '~mol.core/scss/_core.scss';
```
y crea un archivo que contenga las mismas variables que las que se encuentran en
el archivo de `~mol.core/scss/_vars.scss`


## Dev
Clona el repositorio
```sh
git clone https://github.com/MolFramework/mol.core.git
cd mol.core/
npm install
```
Edita los archivos dentro de la carpeta de **scss**

#### Scripts
- `npm run dist` Actualiza los archivos minificados de la carpeta de distribución **dist**
- `npm run docs` Levanta un servidor local que se autorefresca con los cambios que se ejecuten en los archivos **scss** y actualiza los archivos de **docs**

#### Archivos
```text
mol.core/
├── dist/
│   ├── core.min.css
│   └── core.min.css.map
├── docs/
│   ├── core.css
│   ├── core.css.map
│   └── index.html
└── scss/
    ├── _button.scss
		├── _form.scss
		├── _heading.scss
		├── _image.scss
		├── _link.scss
		├── _list.scss
		├── _core.scss
    ├── _table.scss
		├── _typography.scss
		├── _vars.scss
    └── core.scss
```

#### Variables específicas del core
```text
$m-success:                 mix(#3c6, $m-primary, 90%);
$m-warning:                 mix(#fc3, $m-primary, 90%);
$m-error:                   mix(#a00, $m-primary, 90%);
$m-info:                    mix(#0cf, $m-primary, 90%);
$m-muted:                   mix(#eee, $m-color, 90%);

$m-actn-border-color:       $m-primary;
$m-actn-border-color-hover: mix($m-primary, $m-accent, 95%);
$m-striped-odd:             rgba($m-color, .05);
$m-striped-even:            rgba($m-color, .1);
$m-block-hover:             rgba($m-secondary, .1);

$m-colors:
  (primary, $m-primary),
  (secondary, $m-secondary),
  (accent, $m-accent),
  (success, $m-success),
  (warning, $m-warning),
  (error, $m-error),
  (info, $m-info),
  (muted, $m-muted);

$m-actn-colors:
  (primary, $m-actn-color, $m-actn-color-hover, $m-actn-font, $m-actn-font-hover, $m-actn-border-color, $m-actn-border-color-hover),
  (secondary, $m-secondary, mix($m-secondary, $m-accent, 80%), $m-background, $m-background, $m-secondary, mix($m-secondary, $m-accent, 75%)),
  (accent, $m-accent, mix($m-accent, $m-primary, 90%), $m-background, $m-background, $m-accent, mix($m-accent, $m-primary, 85%)),
  (success, $m-success, mix($m-success, $m-primary, 90%), $m-background, $m-background, $m-success, mix($m-success, $m-primary, 85%)),
  (warning, $m-warning, mix($m-warning, $m-primary, 85%), $m-background, $m-background, $m-warning, mix($m-warning, $m-primary, 80%)),
  (error, $m-error, mix($m-error, $m-primary, 77%), $m-background, $m-background, $m-error, mix($m-error, $m-primary, 70%)),
  (info, $m-info, mix($m-info, $m-primary, 90%), $m-background, $m-background, $m-info, mix($m-info, $m-primary, 85%)),
  (muted, $m-muted, $m-muted, $m-color, $m-color, $m-muted, $m-muted);

$m-spacelement:             30px;

$m-shadow:                  0 0 0 0 rgba(0, 0, 0, 0);

$m-a-underline:             1px;

$m-table-border:            1px solid rgba($m-color,.1);

$m-input-height:            40px;
$m-input-padding:           7px;
$m-input-border:            1px solid rgba($m-color, .3);
$m-input-border-hover:      1px solid rgba($m-color, .5);
$m-input-border-radius:     5px;
$m-input-color-active:      $m-primary;
$m-input-after-active:      $m-background;

$m-btn-shadow:              0 1px 3px rgba(0,0,0,0), 0 1px 2px rgba(0,0,0,0);
$m-btn-shadow-hover:        0 14px 28px rgba(0,0,0,0.05), 0 5px 5px rgba(0,0,0,0.1);
$m-btn-border-radius:       $m-input-height;
$m-btn-border-width:        1px;
$m-btn-border-style:        solid;

$m-checkbox-height:         20px;
$m-checkbox-border:         1px solid rgba($m-color, .2);

$m-switch-background-off:   rgba($m-color, .2);
$m-switch-background-on:    $m-input-color-active;
$m-switch-color-off:        $m-background;
$m-switch-color-on:         $m-background;
```


## Problemas conocidos

- `input[type="button"].link-underline`
- `input[type="submit"].link-underline`
- `input[type="reset"].link-underline`

Σ(ﾟДﾟ；El input type button, submit y reset con la clase link-underline no muestra la animación :hover de la línea bajo el texto debido a que el tag input no tiene ::after elements. Utiliza un botón normal `button.link-underline`.

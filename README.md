# Mol Core
Administra el estilo de las etiquetas de html y clases generales
__
*Este proyecto utiliza [mol.normalize](https://github.com/MolFramework/mol.normalize)*


( ﾟ▽ﾟ)/ Hi! [@MolFramework](https://twitter.com/MolFramework)


## Uso e instalación
Para utilizar este archivo en tu proyecto, puedes installarlo con [npm](https://www.npmjs.com/)
```sh
npm install https://github.com/MolFramework/mol.core.git
```
importa el archivo principal
```sh
@import '~mol.core/scss/_core.scss';
```
y crea un archivo que contenga las mismas variables que las que se encuentran en
el archivo de `~mol.core/scss/_vars.scss`

ó si no tienes tiempo, importa el archivo minificado en tu hoja de estilos principal
```sh
@import '~mol.core/dist/core.min.css';
```


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
``` text
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
$m-shadow:                  0 0 0 0 rgba(0, 0, 0, 0);

$m-a-underline:             1px;

$m-container-border-width:  1px;
$m-container-border-style:  solid;

$m-input-height:            40px;
$m-input-padding:           7px;
$m-input-border-width:      1px;
$m-input-border-style:      solid;
$m-input-border-radius:     5px;

$m-checkbox-height:         20px;
$m-checkbox-border-width:   1px;
$m-checkbox-border-style:   solid;

$m-btn-shadow:              0 1px 3px rgba(0,0,0,0), 0 1px 2px rgba(0,0,0,0);
$m-btn-shadow-hover:        0 14px 28px rgba(0,0,0,0.05), 0 5px 5px rgba(0,0,0,0.1);

$m-btn-border-radius:       $m-input-height;
$m-btn-border-width:        1px;
$m-btn-border-style:        solid;

// core and color
$m-actn-border-color:       $m-primary;
$m-actn-border-color-hover: mix($m-primary, $m-accent, 95%);
$m-striped-odd:             rgba($m-color, .05);
$m-striped-even:            rgba($m-color, .1);
$m-block-hover:             rgba($m-secondary, .1);

$m-note:                    mix(#aaa, $m-primary, 90%);

$m-error:                   mix(#f00, $m-primary, 40%);
$m-success:                 mix(#0f0, $m-primary, 50%);
$m-warning:                 mix(#ff0, $m-primary, 40%);
$m-error-hover:             mix(#f00, $m-primary, 50%);
$m-success-hover:           mix(#0f0, $m-primary, 60%);
$m-warning-hover:           mix(#ff0, $m-primary, 60%);

$m-array-colors:
  (primary, $m-actn-color, $m-actn-color-hover, $m-actn-font, $m-actn-font-hover, $m-actn-border-color, $m-actn-border-color-hover),
  (secondary, $m-secondary, mix($m-secondary, $m-accent, 80%), $m-background, $m-background, $m-secondary, mix($m-secondary, $m-accent, 75%)),
  (accent, $m-accent, mix($m-accent, $m-primary, 90%), $m-background, $m-background, $m-accent, mix($m-accent, $m-primary, 85%)),
  (note, $m-note, darken($m-note, 10), lighten($m-note, 40), lighten($m-note, 80), $m-note, darken($m-note, 15));

$m-link-colors:
  (primary,   $m-actn-color,  $m-actn-color-hover,                $m-color, $m-background),
  (secondary, $m-secondary,   mix($m-secondary, $m-accent, 80%),  $m-color, $m-background),
  (accent,    $m-accent,      mix($m-accent, $m-primary, 90%),    $m-color, $m-background),
  (note,      $m-note,        darken($m-note, 10),                $m-color, $m-background);

$m-array-form-color-validations:
  (success, $m-success, $m-success-hover),
  (warning, $m-warning, $m-warning-hover),
  (error, $m-error, $m-error-hover);

$m-container-border-color:  rgba($m-color,.1);

$m-input-border-color:      rgba($m-color, .3);
$m-input-border-color-hover:rgba($m-color, .5);

$m-checkbox-color-active:   $m-primary;
$m-checkbox-after-active:   $m-background;

$m-switch-background-off:   rgba($m-color, .2);
$m-switch-background-on:    $m-checkbox-color-active;
$m-switch-color-off:        $m-background;
$m-switch-color-on:         $m-background;

// core and grid
$m-spacelement:             20px;
```


## Problemas conocidos

ヾ( ￣O￣)ツ Las clases de link no funcionarán para elementos que no puedan tener el pseudo-element ::after

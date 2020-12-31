# Mol Core

Este proyecto inicio como idea para generar la base de la libreria, pero con el tiempo, Mol ha crecido mucho mas modular. Al final termino siendo un bonito ejemplo de uso. Revisen el link de la documentacion para ver los estilos.


## Pa jugar
Clona el repositorio. Edita los archivos dentro de la carpeta de **scss**
```sh
git clone https://github.com/mol-project/mol.core.git
cd mol.core
npm install
```

Levanta un servidor local que se autorefresca con los cambios que se ejecuten en los archivos **scss** y actualiza los archivos de **docs**
```sh
npm start
```

Actualiza los archivos minificados de la carpeta de distribución **dist**
```sh
npm run dist
```

## Archivos
``` text
mol.core/
├── dist/
│   ├── core.min.css
│   └── core.min.css.map
├── docs/
│   ├── assets
│   │   └── esparragus-elelelelperrito-2016.jpg
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
@import url('https://fonts.googleapis.com/css?family=Josefin+Sans|Open+Sans|PT+Serif');

$m-background:  #0a0838;
$m-color:   #ffb9b9;
$m-primary:   #ff5252;

$m-font-family:   'Open Sans', sans-serif;
$m-font-size:   16px;
$m-font-weight:   400;
$m-letter-spacing:  normal;
$m-line-height:   1.5em;

$m-code-family:   monospace;

$m-em-family:   'PT Serif', serif;

$m-h-family:  'Josefin Sans', sans-serif;
$m-h-size:  23px;
$m-h-height:  1em;
$m-h-spacing:   normal;
$m-h-weight:  600;
$m-h-style:   normal;
$m-h-transform:   normal;

$m-secondary: 		#009DCE;
$m-accent: 		#7175CB;
$m-note: 		mix(#aaa, $m-primary, 90%);
$m-error: 		mix(#f10, $m-primary, 80%);
$m-success: 		mix(#1e1, $m-primary, 70%);
$m-warning: 		mix(#fa3, $m-primary, 95%);

$m-container-border-width:  1px;
$m-container-border-style:  solid;

$m-link-underline: 	1px;

$m-input-height: 		40px;
$m-input-padding: 		7px;
$m-input-border-width: 		1px;
$m-input-border-style: 		solid;
$m-input-border-radius: 	0;
$m-input-border-color: 		rgba($m-color, .3);
$m-input-border-color-hover: 	rgba($m-color, .5);

$m-checkbox-height: 		20px;
$m-checkbox-border-width: 	1px;
$m-checkbox-border-style: 	solid;
$m-checkbox-color-active: 	$m-primary;
$m-checkbox-after-active: 	$m-background;

$m-switch-background-off: 	rgba($m-color, .2);
$m-switch-background-on: 	$m-checkbox-color-active;
$m-switch-color-off: 		$m-background;
$m-switch-color-on: 		$m-background;

$m-btn-border-radius: 	0;
$m-btn-border-width: 	1px;
$m-btn-border-style: 	solid;

$m-striped-odd: 	rgba($m-color, .05);
$m-striped-even: 	rgba($m-color, .1);

$m-array-updown-button-colors:
  (primary,   $m-primary,   $m-background,  $m-background,  $m-primary  ),
  (secondary, $m-secondary, $m-background,  $m-background,  $m-secondary),
  (accent,    $m-accent,    $m-background,  $m-background,  $m-accent   );

$m-array-side-button-colors:
  (primary,   $m-primary,   $m-color,   $m-background,  $m-background ),
  (secondary, $m-secondary, $m-color,   $m-background,  $m-background ),
  (accent,    $m-accent,    $m-color,   $m-background,  $m-background );

$m-array-circle-button-colors:
  (primary,   $m-primary,   $m-primary,     $m-background,  $m-background ),
  (secondary, $m-secondary, $m-secondary,   $m-background,  $m-background ),
  (accent,    $m-accent,    $m-accent,      $m-background,  $m-background );

$m-array-link-colors:
  (primary,   $m-primary    ),
  (secondary, $m-secondary  ),
  (accent,    $m-accent     ),
  (note,      $m-note       );

$m-array-form-colors:
  (primary,   $m-primary,   mix($m-primary, $m-accent, 50%)   ),
  (secondary, $m-secondary, mix($m-secondary, $m-accent, 70%) ),
  (accent,    $m-accent,    mix($m-accent, $m-primary, 50%)   ),
  (success,   $m-success,   mix($m-success, $m-primary, 60%)  ),
  (warning,   $m-warning,   mix($m-warning, $m-primary, 60%)  ),
  (error,     $m-error,     mix($m-error, $m-primary, 50%)    );

$m-container-border-color:  rgba($m-color,.1);
$m-container-shadow:        0 0 0 0 rgba(0, 0, 0, 0);

$m-block-hover: rgba($m-secondary, .1);

$m-transition: 	all 0.3s cubic-bezier(0.465, -0.240, 0.370, 1.125);

$m-spacelement: 20px;
```


## Problemas conocidos

ヾ( ￣O￣)ツ Las clases de link no funcionarán para elementos que no puedan tener el pseudo-element ::after

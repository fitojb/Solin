# Solin
SÓftwer LIbre Nativizado. Directrices para la traducción y regionalización de programas informáticos en español global

## Sitio web

Este sitio web se ha creado mediante [Docusaurus 2](https://docusaurus.io/), un generador de sitios estáticos.

### Instalación

```
$ yarn
```

### Desarrollo local

```
$ yarn start
```

Esta orden inicia un servidor local para el desarrollo y abre una ventana del navegador. La mayor parte de los cambios se reflejarán en directo, sin tener que reiniciar el servidor.

### Generar

```
$ yarn build
```

Esta orden genera el contenido estático en el directorio `build`, que se puede servir mediante cualquier servicio de alojamiento de contenido estático.

### Despliegue

A través de SSH:

```
$ USE_SSH=true yarn deploy
```

Sin utilizar SSH:

```
$ GIT_USER=<Su nombre de usuario de GitHub> yarn deploy
```

Cuando se utiliza GitHub Pages como alojamiento, esta orden constituye una manera práctica para generar el sitio y enviarlo a la rama `gh-pages`.

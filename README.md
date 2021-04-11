# ASOFrontPokedex 
## Proyecto generado con Angular
    node: 14.16.1
    npm:  6.14.12
  
## Consumo del API backend
En el archivo global.ts se debe modificar la propiedad host de la variable GLOBAL. Esto en caso que el API back esté desplegada en otro host.

## Deploy
El despliegue se realiza de forma automática mediante github actions hacia una cuenta en HEROKU, cada vez que se realiza un push al mastesr. En el archivo main.yml se encuentra la configuración.  Para desplegar en una cuenta en Heroku se debe definir un SECRET en Github, esto es, Ir a la pestaña Settings del proyecto, en la opción Secrets y agregar un nuevo registro con el nombre HEROKU_SECRET_KEY, el valor que contiene se obtiene del API Key en la configuración de la cuenta en Heroku.





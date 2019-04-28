# Ejercicio para automatizar vuelos de una compañía básico

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.8.

al descargar o copiar el repositorio, dentro del directorio root del proyecto abrir un terminal y ejecutar
## npm install
- Esto instalará todas las dependencias para poder ejecutar el proyecto con los archivos fuente

## Archivo externo importante (Servicio Api para este proyecto)

- Es necesario descargar o copiar el repositorio de servicio para poder interactuar con el proyecto, el servicio api está disponible en https://github.com/danidaniel6462/Servicio-Api-Automatizaci-n-de-Vuelos-Java-Spring
- Dentro del proyecto Maven están descritos los pasos para poder ejecutar el servicio

## ruta del host de ejecución del servicio en el proyecto angular
## IMPORTANTE: 

En el directorio src/acceso/proxy.service.ts y src/acceso/proxy-login.service se encontrará baseURL o url con el host donde es ejecuta el servicio de Maven, si se cambia la ruta se deberá hacerlo en aquellas variables

## Ejecutar el servidor para desplegar la aplicación de Angular

Ejecute `ng serve` para un servidor dev. Vaya a `http: // localhost: 4200 /`. La aplicación se volverá a cargar automáticamente si cambia alguno de los archivos de origen.

## Felicidades

Si has realizado los pasos con se indicó en estas líneas del README.md debes poder ver la aplicación desplegada en tu navegador y realizar actualizaciones y simulaciones de solicitud de boletos para vuelos en una empresa.

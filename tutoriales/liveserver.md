---
title: Document Center
---

# Aprendiendo a Usar Live-Server

## Que es Live-Server y porque deberia aprender a usarlo?

Live-server es un pequeño servidor en tu propia maquina con la capacidad de refrescar la pagina web que estas trabajando, no es un servidor para ofrecer tu pagina cuando este finalizada, es una excelente y gratuita opción para mejorar tu flujo de trabajo.

## Parece bueno pero todavia no me convence.

No solo parece , lo es y por eso quiero compartirlo para que más gente se pueda beneficiar.

Tres buenas razones para usarlo, las peticiones de AJAX  no funcional con el file://protocol debido a restricciones de seguridad, necesitas un servidor para que obtenga los datos a traves de Javascript.

Las  paginas se refrescan automaticamente luego de guardar los cambios, acelerando el desarrollo de la pagina, la modificicación de pequeños detalles, una manera màs eficaz de automatizar la tarea de modificar la pagina.

Tercera y en mi opinion la mejor, con un servidor local en tu propia maquina y red, no solo puedes refrescar tu pagina y ver los cambios en el monitor, basta con ver tu dirección de IP y puedes desde tu celular, tablets,etc ver la pagina desde distintos dispositivos y ver como se va modificando, excelente para el diseño responsivo.

## Excelente pero esto suena muy complicado de configurar.

Para nada basta con una sola linea y un solo comando para hacerlo andar.

### Instalando Live-Server en tu maquina.

Para instalar Live-Server es necesario tener Node.js instalado en tu maquina, si no sabes que es node y como instalarlo.

Brevemente te explico, Node.js es javascript, pero de lado de servidor, es magico no?, es el excelente javascript que toda la comunidad ahora con miles de recursos para nuevos programadores.
Puedes ver como  [Instalar Node.js](https://nodejs.org/es/download/package-manager/ "Instalando Node.js") en tu equipo , en el caso de Windows basta con descargar el ejecutable de node.js y listo.
### Ok pero cuando instalo live-server?

Un paso menos, luego de tener node.js en tu maquina, ingresando a la linea de comando de node, esta viene incluido con npm, node packet manager nos ofrece un sin fin de modulos creado por otros programadores para hacer tu vida màs facil, en este caso basta con una sola linea de npm.

  npm instalar -global live-server, cabe destacar que es recomendado utilizar un poco la linea de comando (dir,ls,  mkdir, cd) para crear una carpeta para liver server y pararnos en donde queremos instalar.

  > npm install -g live-server
 
  
  Listo!...

### Bien pero como funciona?

Bueno ahora lo màs sencillo es que simplemente te paras en la carpeta de tu proyecto (cd) y en la linea de comando de node

>live-server

y Listo!!!.

### Excelente pero como veo la pagina?.

Tu Live-server esta en la ip local 127.0.0.1 en el puerto 8080, osea 127.0.0.1:8080.

Si quieres verlo desde tu telefono o tablet, basta con ir a la linea de comando y con ipconfig obtienes tu dirección de ip para poder acceder desde otros dispositivos.


###Lo siento pero no pude instalarlo con npm.
No hay problema, tambien hay una manera manual de obtenerlo, basta con tener GIT en tu maquina y con una linea de git.

>git clone https://github.com/tapio/live-server
>npm install -g live-server

Espero esto le sea util y pronto presentare otros tutoriales sencillos.
[Volver a tutoriales](http://alvaromesa.com/blog/tutoriales/tutoriales.html)
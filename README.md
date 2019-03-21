# CDI-tintoreria

Para facilitar el desarrollo importaremos SASS al proyecto.
Los archivos para poder usar SASS ya están incluidos en el proyecto en el carpeta "dart-sass"

Ahora es necesario modificar el archivo .bashrc para agregar SASS al PATH
        vi /home/user-name/.bashrc
Donde "user-name" es el nombre de usuario que tienes configurado en el equipo

Y agregar al fin del arcvhivo la siguiente línea
      export PATH="directorio/dart-sass:$PATH"
"directorio" es la ruta absoluta donde se encuentra la carpeta "dart-sass"

Una vez hecho esto ya es posible convertir los archivos *.scss a *.css con el siguiente comando
              sass inputfile.scss outputfile.css
      



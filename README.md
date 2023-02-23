# Bienvenido al templeate

Aca vas a encontrar una guia de como debes proceder para poder hacer uso del template.

Antes que nada, a continuación se detallan algunas caracteristicas del proyecto al momento de la creación de este documento

* React 18.2.0
* React-redux 8.0.5
* React-router-dom 6.7.0
* Axios 1.2.5
* Material UI 5.11.7
* Vite 4.0.0

## Primeros pasos
___
___
### *Descarga y creación del template*
___
___

Los pasos 1 y 2 se realizan una unica vez para poder tener el proyecto como template. Si ya realizo estos pasos previamente saltar directamente al punto 3

1. Ubicar la carpeta de template del VS Code. Debería ser algo asi como:

    +  C:\Users\\{UsuarioActual}\AppData\Roaming\Code\User\ProjectTemplates 

2. Descargar el proyecto de github de la siguiente url: 

    +    https://github.com/fredBigioni/template-react
    
    en la carpeta que ubicamos en el punto 1

3. Ubicar el espacio *(carpeta)* donde queremos descargar el template. Abrir la carpeta con el VS Code. Luego presionar la combinación de teclas *CTRL + SHIFT + P* (despliega la paleta de opciones del VS Code) o directamente presionar el icono de engranje de configuración ubicado en el margen inferior izquierdo y presionar paleta de comandos.

4. Una vez desplegada la paleta escribir en la misma *"Create Project From Template"* (Con poner create ya tendremos disponible la opcion).

5. Nos saldra una lista de opciones de templates según lo que tengamos. Seleccionamos el que queremos crear y listo! tendremos disponible el template del proyecto.  

___
___
### *Acondicionamiento para su uso*
___
___

 En este punto tendremos un template de un proyecto realizado en React con yarn y vite. El proyecto es muy liviano ya que a diferencia de npm con yarn instala solamente lo que nosotros le indiquemos. A continuación detallamos algunas cosas a tener en cuenta para poder levantar el proyecto.

 1. Abrir la consola en el VS Code *(con la ruta en la que estamos ubicados)* y ejecutar el comando *yarn*, con ello habremos indicado que instale todas las dependencias que se indican en el archivo *package.json*.

 2. En este punto estamos habilitados a levantar la aplicacion con el comando *yarn dev*, esto nos indicara la ruta a la cual debemos acceder *(algo asi como localhost:3000).*
 
 3. A partir de aqui ya depende de usted.


___
___
### Anotaciones personales
___
___
URL del proyecto actual https://github.com/fredBigioni/project-template-react.git

Para crear un nuevo repositorio
echo " # nombre del proyecto" >> README.md
git init
git add README.md
git commit -m "First Commit"
git branch -M main
git remote add origin (url github del proyecto actual)
git push -u origin main

or subirlo a un repositorio existente
git remote add origin https://github.com/fredBigioni/project-template-react.git
git branch -M main
git push -u origin main

LOCAL -> VITE_API_URL=https://localhost:7035/api
DESA ->  VITE_API_URL=https://home.solutica.com.ar:883/trackerbk/api
PROD ->  VITE_API_URL=https://home.solutica.com.ar/trackerbk/api

dotnet ef dbcontext scaffold "User ID=desa;password=q1w2e3R4$;server=solsrv20.solutica,1683;#Database=SoluticaTimeTracker;Encrypt=False" Microsoft.EntityFrameworkCore.SqlServer -o Models --context-dir #"Helpers" -c "DataContext" -f
 
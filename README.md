# Taller-de-Nivelaci-n-2-BootCamp
Taller de Nivelación #2 BootCamp Makaia Front-End 

MÓDULO SOBRE REACT JS
Teoría:
1. React es considerada una librería de JavaScript que nos brinda las herramientas para crear interfaces interactivas y funcionales para las aplicaciones web. Esta se basa en los componentes reutilizables para ahorrar código y tener una mejor comodidad a la hora de programar, permite escribir lenguaje HTML con Javascript (Jsx). Contiene estados y propiedades. 
2. Un componente es un bloque de código reutilizable que da a manejar una parte de la interfaz de la aplicación web. 
Existen componentes funcionales que principalmente funcionan con la introducción de los hooks y los componentes de clase son funciones que utilizan la sintaxis de clases de JavaScript, esto antes de que se incorpore los hooks
3. El virtual DOM es una copia virtual con sus propias propiedades y elementos, volviéndose muy similar al DOM real, su función en React es el funcionar como una capa que permita diferenciar el estado antiguo y el nuevo de la interfaz de la aplicación web de una manera más óptima.
4. Jxs es una extensión en la cual se puede utilizar lenguaje HTML y JavaScript en un solo documento, ahorrando código, y haciendo más legible este mismo. También permite incorporar funciones en el propio código HTML haciendo más fácil la manipulación.
5. Los Hooks son como herramientas que permiten agregar características a los componentes de React de una manera más fácil. Como para mantener un estado, realizar acciones cuando algo cambia y el cambio de información entre diferentes partes de la aplicación web
6. useState: Se usa para darle un estado a un componente y así a través de variables o funciones darles cambios. 
useEffect: se usa para dar un efecto cuando algo sucede en tu página como mostrar mensajes cuando se realiza una acción o cargar nuevos datos al momento de cargar la página.
useContext: Se usa para tener información que es importante y que quieres usar en varias partes de tu aplicación,sin tener que pasarla de un lado a otro cada que la necesites.
7. Los Hooks solo son utilizados en componentes funcionales, se deben poner siempre al principio de tu componente, mantener el orden con los mismos hooks en todos los renders, usa nombres de funciones que empiecen con use para que React los identifique bien.
8. React Router DOM versión 6 es como el sistema de navegación para una app de react, te ayuda a manejar las rutas o páginas de tu aplicación sin recargar la página entera.
COMPONENTES PRINCIPALES:
BrowserRouter: Es el envoltorio principal de la app y maneja la navegación usando la historia del navegador.
Route: Este componente define una ruta específica y que componente renderizar cuando la URL coincide con esa ruta.
Link: Es como un enlace normal para cambiar entre diferentes rutas sin la necesidad de tener que recargar toda la app.
Switch: muestra solo la primera ruta que  haga march con la URL actual, evitando que se renderizen varias rutas a la vez.
HOOKS:
useRoutes: Permite definir las rutas. 
useNavegate: Sirve para cambiar entre diferentes rutas sin necesidad del componente Link.
useParams: Acceder a los parámetros de la URL definidos en la ruta.
useLocation: Accede a la información de la URL, como el search. 
9. Se debe tener instalado el paquete de react-router-dom en el proyecto que deseas trabajar. Se pone el siguiente código en la consola (npm install react-router-dom). Usas el BrowserRouter para usarlo como el envoltorio de las rutas. Para la navegación de las paginas, usas el componente Link que funciona como el elemento (a), a diferencia que link evita que se recargue toda la página.
10. Para definir las rutas se utiliza el componente Route para definir la ruta específica y que componente renderizar, este dentro de Router que viene a ser la envoltura.
Al componente route lo acompaña el atributo patch que es quien especifica la URL a la que la ruta responde, y el atributo component quien define el componente que se va a renderizar cuando la URL corresponda con la ruta. 
11. Para crear un proyecto con Vite, se necesita tener vite instalado, usas el comando créate-vite react my-react-app (my-react-app es reemplazado con el nombre que deseas ponerle a tu proyect). Para iniciar el servidor de vite usamos npm run dev y así se visualizará lo que estés haciendo en tu navegador. 
12. El Hosting gratuito que utilizo es Render, la forma en que lo configuro es la siguiente, se crea un index.js en la raíz del proyecto que contiene la configuración del render, ubicación del archivo json y el puerto donde se abrirá la API, estos cambios se suben a un repositorio en github donde se guardara todos los archivos del proyecto, nos dirigiremos a la página oficial de Render y allí creamos nuestra cuenta, un base de datos, y lo podremos enlazar a nuestro github, hecho esto buscamos el repositorio que necesitamos y al seleccionarlo, render se encargara de encontrar el archivo json que contiene la información que será la API, todo esto leyendo la ubicación que le dimos en el index.js. Una vez terminado el proceso, nos brindará un link que será la base de datos subida y en línea para usar en demás proyectos 
13. El Hosting que utilizo para subir mis aplicaciones es GitHub Pages, este se encuentra dentro del propio github, para subir una app a este, se debe crear un repositorio, que tenga su index.html principal y enrutarlo para que renderize las demás páginas. Entonces, escogemos el repositorio de la aplicación que vamos a subir y en este mismo nos vamos a configuraciones, Pages, y allí le vamos a decir que nos lea la rama main, esperamos que este termine su proceso y al terminar nos dará un link que será la página subida en línea, si los enrutamientos son correctos, todo será renderizado sin problema, en caso de haber algún error, la página se mostrara en blanco.

MÓDULO SOBRE GESTION DE ESTADOS Y DATOS CON REACT CONTEXT Y USEREDUCER
Teoria:
1. React Context es una herramienta implementada en el desarrollo con React, al construir una aplicación con demasiados componentes y mucha variedad de datos que deben ser transmitidos, este almacena esos datos y permite pasarlos desde un componente padre a varios niveles de componentes hijos, sin necesidad de pasarlos manualmente a través de cada nivel, es como una especie de contenedor que almacena estos datos y los hace más accesibles.
2. Al momento de crear un contexto de se usa la función créateContext. Este será consumido en diferentes componentes de tu aplicación. Se proporciona los datos al contexto y volverlos disponibles para sus componentes hijos, esto envolviendo parte de la aplicación con una etiqueta nameContext.Provider. Para consumir esta información se usa un componente ‘Consumer’ o un hook ‘useContext’ en el lugar donde quieras acceder a los datos 
3. React Context ofrece una manera más sencilla al momento de manejar datos que necesitan estar en varios lugares de la app, evitando pasar por los props manualmente a través de los múltiples componentes. 
4. useReducer maneja estados complejos donde necesita una lógica elaborada para las actualizaciones del estado, useState es mejor aplicado en estados simples y actualizaciones directas del estado. 
5. Los argumentos de useReducer son dos, la función reductora que se encarga de definir como se actualiza el estado basado en acciones y el segundo es el estado inicial que se utiliza cuando el componente se monta por primera vez
6. El useReducer es importante en aplicaciones complejas porque proporciona un mejor enfoque para manejar un estado, mejorando el mantenimiento del código
7. Para combinarlos, primero creamos un contexto utilizando createContext, luego definimos un proveedor que envuelve los componentes donde queremos acceder al estado global, Dentro de este proveedor, usamos useReducer para manejar el estado y proporcionar dispatch y state a través del contexto.
8. Tener un sistema de gestión de estado global es importante porque al pasar por varios niveles de componentes, esto puede volverse propenso a los errores, siendo evitado por la gestión de estado global, ya que este puede acceder desde cualquier componente. Vuelve fácil el mantener y actualizar la aplicación, y mejora el rendimiento de esta misma porque reduce las actualizaciones que no dependen directamente de los cambios con estado global.
9. Emplear Context con useReducer en lugar de manejar el estado local en componentes individuales, logra una mejor organización, reducción de la complejidad y mayor facilidad para escalar y mantener la aplicación a medida que crece en tamaño.
10. Migrar un enfoque de manejo de estado local a un enfoque de estado global con context y useReducer puede ser agradable cuando la app crece de tamaño, al memento de que dos o más componentes comparten datos, se busca tener un control más preciso sobre el flujo de datos en la aplicación.

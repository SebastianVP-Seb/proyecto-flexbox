/*
                F L E X  B O X

Permite alinear a los elementos de manera más fácil.
El contenedor tiene la habilidad de expandirse o contraerse.
Permite usar menos elementos flotantes
Más sencillo hacer cotenido responsivo.
Funciona muy bien especialmente con diseños unidimensionales, para diseños bidimensionales se usa grid.

El contenedor será llamado: Flex container
Y para activarlo, se define la propiedad de visualización como flex:
display: flex; (display: flex-inline).
Los elementos que contiene son llamados: Flex items. Estos se presentan en un eje principal llamado
"main axis" y en un eje secundario perpendicular "cross axis". Estos pueden intercambiar de dirección
Porpiedades usadas:
___________________________   ___________________________ 
|   Container               |              Items
=========================== | ===========================
                            |
flex-direction: row ->      |   align-self: auto
    row-reverse <-          |       stretch (ocupa todo el contenedor)
    column                  |       flex-start
    column-reverse          |       flex-end
                            |       center
flex-wrap: nowrap           |       baseline
    wrap                    |   Det cómo se comprtará un solo
    wrap-reverse            |   item, aunque los demás tengan
Det si los items se         |   su propia configuración
ajustan (si no hay espacio) |
en otra línea               |   order: 0 (integer)
                            |   Define el orden en el que debe 
justify-content: flex-start |   aparecer un específico item
    flex-end                |   dentro del contenedor
    center                  |   (Útil para pantallas pequeñas)
    space-between           |
    space-around            |   Las sig 3 propiedades ayudan a 
    space-evenly            |   Flexbox a decidir el ancho de 
Det cómo los items se       |   un item
alinearán a lo largo del    |
eje principal               |   flex-grow: 0 (integer)
                            |   Cuanto puede crecer un item
align-items: stretch        |   
    flex-start              |   flex-shrink: 1 (integer) (el 1 permite que se encoja)
    flex-end                |   Cuanto puede contraerse un item
    center                  |
    baseline                |   flex-basis: auto (length)
Define cómo se alinearán    |   Ancho base, ancho flexible, este se debe usar en lugar de width
los items a lo largo del    |
eje transversal (cross)     |   La sig propiedad es el resumen 
                            |   de las tres anteriores
align-content: stretch      |
    flex-start              |   flex: 0 1 auto
    flex-end                |
    center                  |   flex-flow: flex-direction flex-wrap;
    space-between           |   combina estas dos propiedades
    space-around            |
Aplica cuando hay más de    |
uan fila de items. En este  |
caso, esta propiedad        |
controla cómo se alinean    |
las filas a lo largo del    |
eje transversal (secundar)  |
(si hay espacio vacío)      |


Justify content para el eje principal.
Align items para el eje secundario. Para ver la diferencia, hacer más grande un elemento, su valor
por defecto es stretch, por lo que estirará los demás elementos para que todos estén alineados al eje
secundario.
Para align-items: baseline -> establecer un elemento con el tamaño de fuente más grande.
baseline alínea los elementos de acuerdo al texto
Flex-grow: hacer crecer a uno o varios elementos ocupando el mayor ancho que puedan tener sin perder
sus propiedades definidas. Este número es en relación con los números que se establezcan en los demás
elementos. Por ej, si se define a un elemento flex-grow: 1; y a otro como: 2; entonces este tendrá
el doble del tamaño que al que se le definió 1.
Flex-basis: 20; ocupará el 20% del contenedor. Se usa esta propiedad para flex en lugar de width.
Sin embargo, a medida que la pantalla decrece, éste también. Para esto se usa...
Flex-shrink(retráctil): det cuánto puede encogerse un elemento, al establecerlo en 0, el elemento 
ya no decrementará de ancho.

===========================================
Instalar los módulos: en la terminal: npm install                          esto no funcionó
Para correr el proyecto: en la terminal integrada: npm run start
==================================================
npm init
npm i node-sass --save-dev
    Build process
npm install concat --save-dev
npm install autoprefixer --save-dev
npm install postcss-cli --save-dev
npm install npm-run-all --save-dev

0219 70000 35301   oxxo   
Jessica Peralta extension 86045

44 41 41 92 75 calle, colonia, cpostal, municipio, estado, color 

Propiedades personalizadas de CSS:
-No se necesita de un procesador
-Se pueden manipular en JS
-Se deben definir dentro de un bloque de decoración ({})
-Se colocan en la pseudoclase de la raíz :root, para que sean accesibles a todo el documento
Para crearlas: --nombredelapropiedad: valor;
Para usarlas: var(--propiedad)

SVG: Gráficos Vectoriales Escalables. Usar la pág: Icomonn.io
Seleccionar los íconos -> Descargarlos -> sólo interesa la carpeta con los svg y también se puede
usar sólo el archivo symbols-defs.svg éste contiene en un sólo archivo los íconos seleccionados

Para incluirlos se usa la etiqueta svg y la etiqueta use xlink:href el archivo sprite y el nombre del
svg que queremos usar.

En el archivo components.scss definir los componentes del header.
El contenedor padre debe estar en display: flex;
Un input no hereda la fuente, se puede poner -> font-familie: inherit;
Para cambiar de color a svg -> fill

flex-flow: column-reverse wrap;
align-content: space-between;
flex-direction: ;
justify-content: center;

Con flex-direction se cambia el eje principal (column)

currentColor establece el color a un elemento, ya sea con el color actual o el color del elemento padre

Para el hover de la barra izquierda, se usará el pseudoelemento before, el cual se mostrará primero
y posteriormente crecerá hacia la derecha

Se puede establecer la propiedad transform-origin: bottom;
Esto indicará que la transformación comience desde la parte inferior, ya que su valor por defecto es
center.

Cubic-bezier para manejar los tiempos de las transiciones


A agregar en el proyecto: 

html: 
    main class="hotel-view" 
    las imágenes de la galaerìa se envolverán en un figure, permitirá agregar un subtítulo a estas imágenes

    Cambiar la estrela por una estrella rellena

components: 
    se agrega .gallery
    Para hacer imágenes responsivas las imágenes se establecen con un width o height en porcentaje
    Las imágenes siempre deben estar desplegadas en bloque

    overview

    Margen Automático: de esta forma, los elementos ocupan sólo el espacio que necesitan, en vez de usar flex: 1; crea espacios
    en blanco: margin-right: auto; o margin-left (Revisar si funciona sin display: flex; )

    los elementos svg se comportan como elementos en línea, para que se alìneen se debe especificar a su elemento padre como
    display: flex;

    la animaciòn de keframes se manda a llamar con animation:

layout: 
    quitar el background

    Agregar en la clase header los pixeles y el tipo de border-bottom
        border-bottom: 1px solid var(--color-primary);

    detail: 

    en el archivo base, crear la var line

/////
Last-of-type funciona de manera similar a last-child, sólo que last-of-type se refiere al último
de su mismo tipo (por ej, un párrafo)

MASKS:
    Define un área donde podemos mirar a través del elemento y ver lo que hay detrás.
    Para el símbolo de la lista, se hará el color de fondo del pseudo elemento before a un color
    sólido y luego usar el ícono como una máscara y ver lo que hay detrás, entonces mostrará el fondo.

BOX-SIZING: 
    Al definirlo como border-box: incluye el padding y el borde dentro de la altura y el ancho de
    los elementos. Para establecer que el borde esté por encima del ancho y la altura: se establece
    box-sizing: content-box.

Para hacer el símbolo de las comillas se usará el pseudo-elemento before, por lo que no se agregará
nada en el html, sino en el css.
Donde se defina position: absolute; en el padre se debe definir position: relative;
z-index sólo funciona al definir una posición, no importa cuál sea, en el índice + grande

Para hacer el botón book: dentro de él tendrá dos contenidos, uno que mostrará el texto normal
y el otro que aparecerá cuando se haga hover. Utilizando span para c/u

& > * -> Todos sus hijos

Media Queries para hacer un sitio responsivo: 
Se establecen los break points
Se usarán vars de sass para establcer estos puntos, no vars de css xq no funcionan bien.
$bp-largest: 7rem; //75=1200/16; 1200 es el punto de quiebre

Escribir las media queries en los bloques donde queremos que se establezca el cambio llegados a ese ancho
@media only screen and (max-width: $bp-largest) {
        margin: 0%; //lo que queremos que haga
    }
A los 900px hacer que la barra de navegación izquierda se vaya a la parte sup de la pantalla, el 
contenedor content ya está en flex, ahora hay que cambiar la direccción de los elementos:
flex-direction: column;
Poner los elementos de la navegación, uno al lado del otro.
Para crear un breakpoint se dividen los pixeles al cual se rompe el diseño / 16 y el resultado
será expresado en "em".
Siempre poner al final del código la ventana más pequeña, para que esta se aplique en anchos más
pequeños (recordar los estilos en cascada, css aplicará el último código escrito)

En el header, mover la barra de bpusqueda al final a los 540px, utilizando "order" en .search
y flez-wrap: wrap; en .header

Agregando soporte para Firefox, ya que no se soporta la mask en archivo componentes (línea 407)
el contenido de la url no es ! por lo que puede ir vacío.
Primero se pone con prefijo -web-kit y luego sin. Arriba del soporte se pone si la opción en caso
de que lo no soporte

Para el autocompletado:
    Crear un div debajo del input text

    onkeyup: cuando el usuario presiona una tecla del teclado



*/
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


flex-flow: column-reverse wrap;
align-content: space-between;
flex-direction: ;
justify-content: center;


*/
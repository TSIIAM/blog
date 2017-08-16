$(document).ready(main);

	function main(){

 
	$("#eMatias").on("click",entrevistasMatias);
	$("#eDavid").on("click",entrevistasDavid);
	$("#eAgustina").on("click",entrevistasAgustina);
	entrevistasMatias();
}

 function entrevistasMatias(){
 
	var nombre = "Matias";

	var pregunta1 = `Si actualmente trabajo en el puesto de Full Stack,  empecé como programador jr trabajando solamente en backend con nodejs y php,  en una compania que se dedica  al desarrollo de software en la que trabaja en gran mayoría para clientes en Paraguay, 
 	también tiene un cliente en Uruguay qué es la guía móvil 1122.`;

 	var pregunta2 = `Yo estoy estudiando la carrera ingeniería en computación en la fing,  también hice un par de cursos de php y java.
	 Me gusta mucho la inteligencia artificial y en el futuro me gustaría estudiar más a fondo eso.`;


 	var pregunta3 = `Bueno creo que hay que ser autodidacta siempre porque las tecnologías van cambiando muy rápido y hay que estar siempre preparado.
 	<br><br>El recurso que más uso por lo general es la documentación oficial del framework qué este usando y también algún qué otro ejemplo en foros,  por lo general cuando tengo alguna duda uso mucho Stack Overflow,
  	también he usado mucho tutoriales en YouTube y incluso he seguido algunos cursos en udemy.`;

   var pregunta4 = `Sobre esto no estoy muy seguro,  yo soy mucho de usar  C cuando tengo que hacer algún script en mi casa para mi,  y c es bastante viejo.
   <br><br>De lo que si estoy seguro es que la tecnología web a cambiado mucho en poco tiempo y  tiende a seguir avanzando así que es probable que las versiones que hoy solemos usar de los framework sean ya obsoletas en poco tiempo o reemplazadas por tecnologías nuevas`;


    var pregunta5 = `En este caso creo que todos los que trabajamos en el área de la informática somos unos privilegiados ya que podemos arrancar a trabajar en este campo si tener  la carrera culminada, 
     he visto a muchos amigos míos qué estudian carreras como Derecho o Contaduría qué mientras estudian terminan trabajando como vendedores u otro trabajo por el estilo ya que en su área no los toman hasta que no estén recibidos o casi por recibirse.
     <br><br> Los horarios son buenos,  yo trabajo 6 horas y siempre que tengo algún inconveniente puedo acomodar los horarios sin problemas,  lo que si hay que hablar bien en las entrevistas y tener una idea clara es sobre las horas extras,  por ley en el área informática no existen y hay empresas que se aprovechan de eso,  por suerte esto no me ha pasado pero si he tenido compañeros que lo han sufrido y es bueno hablarlo desde el principio. 
     <br><br>Sobre la paga, no es mala,  igual siempre puede ser mejor. `;


     var pregunta6 = `Yo entro a trabajar a las 9am,  a primera hora siempre tenemos una reunión corta con mi jefe y los compañeros que estén en mi mismo proyecto para ver el estado de las tareas de cada uno y lo que vamos a hacer en el día, después de eso ya arrancamos a trabajar.
     <br><br>En este momento estoy trabajando en un sistema de billing para una empresa paraguaya.`;


     $("#pregunta1").html(pregunta1);
      $("#pregunta2").html(pregunta2);
       $("#pregunta3").html(pregunta3);
        $("#pregunta4").html(pregunta4);
         $("#pregunta5").html(pregunta5);
          $("#pregunta6").html(pregunta6);
     	$(".nombre").html(`<b> ${nombre} </b> `);
};



 function entrevistasDavid(){
 
	var nombre = "David";

	var pregunta1 = `Trabajo  como desarrollador Fullstack. La empresa tiene una fuerte experiencia en desarrollo mobile y el año pasado se comenzó a abrirse a proyectos web. 
	<br><br>En mi caso trabajo en varios proyectos que van desde landings hasta aplicaciones web (hechas con tecnologías AngularJs y React).`;

 	var pregunta2 = `Estudié la carrera de Analista Programador en la Universidad ORT, y si bien llegue a completar el título intermedio, me sirvió para comenzar mi primera experiencia como developer hace un par de años y construir experiencia. 
 	<br><br>No tengo preferencia por ninguna carrera, ya que me gusta adquirir conocimientos de otras áreas y mezclarlas para nuevas ideas y proyectos, y a futuro cercano tengo planeado terminar Analista Programador, y tal vez en unos años, estudiar algo relacionado con matemáticas o ciencias.`;


 	var pregunta3 = `Autodidacta, aunque reconozco que la educación formal puede fortalecer el aprendizaje. La formación autodidacta me permitió decidir que conocimientos adquirir, identificar cuales son mis ritmos de aprendizaje, darme más libertad para decidir que proyectos crear y que aprender, y es el que utilizo a diario por razones obviamente prácticas (AKA. Stack Overflow y Blogs).
 	<br><br>La educación formal puede ayudar en formar algunas bases, pero siendo que el conocimiento tecnológico se depreca muy a menudo, lo enfocaría más por aprender a disciplinar mi forma de trabajo (ya que programar es mucho más que meter código, y el estrés de una entrega te puede enseñar el día de mañana a lidiar el estrés de un cliente), en formar redes o conectar con otros colegas que a futuro podés compartir un proyecto o una experiencia profesional, en oportunidades de acceder a empresas que te puedan interesar, etc.`;

   var pregunta4 = ` Siendo desarrollador en front end, me arriesgo a decir que va a aparecer un nuevo paradigma de desarrollo de aplicaciones web que nos vaya a jorobar un poco pero que pueda corresponder a una nueva generación de aplicaciones (sobre todo por la naturaleza de las plataformas donde corran, ej una web app para VR).
   <br><br En backend van a seguir saliendo soluciones que permitan automatizar todo (BD, seguridad, armado de una aplicación) y se concentrará en armar soluciones de alto nivel  Y luego existirá una necesidad urgente de integrar las apps con Machine Learning, expander a más plataformas (ej. VR, AR, brain communication, etc).`;


    var pregunta5 = `En general es de las mejores oportunidades que puede haber: construis el futuro de la sociedad, se paga muy bien, existen formas de trabajo muy flexibles, se conocen en detalle el funcionamiento de otras industrias, etc.
    <br><br En resumen, es un privilegio como oportunidad laboral.`;


     var pregunta6 = ` Lo divido en dos momentos: Puedo revisar las tareas del día anterior y hacer un update con mi equipo y definir las siguientes tareas para hacer, o momentos más estratégicos, donde se definen los detalles del proyecto, la forma de trabajo y las estimaciones.`;

     
     $("#pregunta1").html(pregunta1);
      $("#pregunta2").html(pregunta2);
       $("#pregunta3").html(pregunta3);
        $("#pregunta4").html(pregunta4);
         $("#pregunta5").html(pregunta5);
          $("#pregunta6").html(pregunta6);
     	$(".nombre").html(`<b> ${nombre} </b> `);
};



 function entrevistasAgustina(){
 
	var nombre = "Agustina";

	var pregunta1 = ` Actualmente trabajo en Rootstrap una empresa que se dedica al desarrollo de aplicaciones web y mobile. 
	<br><br>Aquí he aprendido a desarrollar aplicaciones en Swift(IOS) y React(Web).`;

 	var pregunta2 = `Cursos de programación completos sólo realicé los de Facultad de Ingeniería. 
 	El más fundamental fue Taller de Programación ya que fue un proyecto muy completo en cuanto a las áreas que cubría.
A lo largo de los años he hecho algún par de cursos online pero nada muy a fondo, mas bien para saber una base. 
	<br><br>La mayor parte de lo que sé lo he aprendido trabajando.`;


 	var pregunta3 = `Autodidacta, la web está llena de buenos recursos para aprender a programar.
Personalmente, como ya dije, prefiero realizar cursos cortos para aprender la base de la nueva tecnología que esté queriendo aprender.
	<br><br> Luego a medida que quiera resolver algo en particular, busco como se hace.
Probar es la mejor manera de aprender.
	<br><br> Otra herramienta fundamental que he tenido la suerte de tener son tutores. Alguien a quien consultarle como se resuelve algo o que te de ideas de cómo mejorar lo que ya hiciste y demás.`;

   var pregunta4 = `Dudo que las tecnologías que utilizamos actualmente desaparezcan por completo a tan corto plazo. De todas formas hay tecnologías relativamente nuevas que se están utilizando y que tienen ventajas sobre otras que tienen más años. En mi opinión esto sucede mayormente en desarrollo web que es donde hay más opciones para elegir.
	<br><br><b>Backend:</b>
	<br><br>En backend he tenido la oportunidad de trabajar con PHP y también por mi cuenta con Ruby on Rails. Si bien dudo que PHP se deje de usar en un futuro cercano, considero que Ruby on Rails es mucho mas simple de aprender y mucho mas cómodo de utilizar. Está muy bien estructurado y requiere de mucho menos código que PHP.
	<br><br>La buena noticia es que muchas empresas en Uruguay están usando Ruby on Rails así que es un conocimiento útil.
	<br><br><b>Frontend:</b>
	<br><br>Frontend tiene dos aspectos principales: como se ve el producto (HTML y CSS) y la interacción del usuario con el producto(JavaScript).
	<br><br><i>HTML y CSS:</i> Quien no ha usado Bootstrap? Te facilita la vida! Si bien es verdad, si el frontend es algo que realmente te interesa, es importante que no dependas de él para realizar algo que se vea bien.
	<br><br>Bootstrap es muy potente pero limitante a la vez, por eso muchas empresas no lo utilizan para sus proyectos. Es importante saber como hacer las cosas en CSS.
	<br><br>Hablando de CSS, una vez que le hayas agarrado un poco la mano está bueno aprender a utilizar SASS, es una extensión de CSS que realmente enriquece tus posibilidades.
	<br><br><i>JavaScript:</i> Acá es donde hay más opciones y donde tal vez es más difícil elegir que aprender. Lo primero que aprendí yo fue JQuery y en su momento me parecía una herramienta muy poderosa.
	 Luego de haber trabajado con React mi opinion sobre JQuery es muy distinta. JQuery está bueno para proyectos chicos, para proyectos grandes está bueno un framework más estructurado como React. 
		<br><br> Angular nunca probé pero lo que me parece fundamental a la hora de elegir es que sea algo que se use mucho actualmente y que esté bien estructurado, con una manera "universal" de hacer las cosas. Te facilita luego entender tu propio código, encontrar las cosas rápido y si tenés que trabajar sobre el código de alguien más la lucha por entender no va a ser tan grande.

	<br><br>Recomendación bonus: aprender a ser prolijo con el código no sólo por el bien tuyo sino para cuando tengas que trabajar en equipo. Existen herramientas geniales que le llaman Linters y ayudan un montón con eso.`;


    var pregunta5 = `En este sector varía mucho la paga. Cuando estás arrancando, sobre todo si es tu primer trabajo como programador, lo mejor es apuntar a empresas que estén dispuestas a capacitarte y no tanto focalizarse en cuanto te van a pagar.
	<br><br>Una vez que tenés un poco de experiencia es más fácil conseguir trabajos mejores pagos aunque sigas siendo programador Jr.
	<br><br>En cuanto a los horarios de trabajo, tener horario flexible es muy importante si sos estudiante, podés acomodar tu horario de trabajo para que no coincida con las tus clases y no al revés. `;


     var pregunta6 = `En mi trabajo utilizamos metodologías AGILES y por lo tanto al principio de cada semana se decide que nuevas features se van a agregar al proyecto en la semana.
Actualmente estoy trabajando en un proyecto web de React. Realizo toda la parte de frontend con HTML, SASS, React y Redux.
	<br><br>Un día de trabajo consiste por ejemplo en tomar el diseño de una feature que alguien realizó previamente y replicarlo con HTML y CSS(SASS). O implementar con JavaScript(React y Redux) lo que se espera que suceda cuando el usuario interactúa con la aplicación. Por ejemplo si envía un formulario, si recibe una notificación o un mensaje, etc...
	<br><br>También se tienen reuniones con los clientes para decidir que se va a hacer en la semana o mostrarle que se tiene hecho hasta el momento.`;

     
     $("#pregunta1").html(pregunta1);
      $("#pregunta2").html(pregunta2);
       $("#pregunta3").html(pregunta3);
        $("#pregunta4").html(pregunta4);
         $("#pregunta5").html(pregunta5);
          $("#pregunta6").html(pregunta6);
     	$(".nombre").html(`<b> ${nombre} </b> `);
};
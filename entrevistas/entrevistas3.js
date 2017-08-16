/*

Primera version, en esta oportunidad quize publicarlo lo mas rapido que pude, por lo que me importo màs que estubiera el contenido y presentarlo rapido, estare mejorando el script para no repetir tanta variable y codigo en mi tiempo libre.

*/

$(document).ready(main);

	function main(){

  botones(); 
  entrevistasAlejandro();
	$("#eAlejandro").on("click",entrevistasAlejandro);
	$("#eMatias").on("click",entrevistasMatias);
  $("#eAdrian").on("click",entrevistasAdrián);
  $("#eBrian").on("click",entrevistasBrian);
  $("#eSantiago").on("click",entrevistasSantiago);
  $("#eAlfonso").on("click",entrevistasAlfonso);


	
}
function botones(){
  var photos = [
    "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAKvAAAAJDIzYWJmNmY2LWI0YjUtNDk5Ni1hZDgyLThmODk0YTU4ZDA3ZA.jpg",
    "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAiCAAAAJGM3ODNiMDYyLTcwZDUtNDkxNi1iYTJhLTdjNGQzYWZiNzBlMg.jpg",
    "https://media.licdn.com/mpr/mpr/shrink_100_100/AAEAAQAAAAAAAAwTAAAAJDE5ZjliZDJjLWU5NTQtNDk5MC1hNDEyLWFlOGVhMGRhOWQzYQ.jpg",
    "https://media.licdn.com/mpr/mpr/shrink_100_100/AAEAAQAAAAAAAAgkAAAAJGY1ZjNkYjlmLTRmZTAtNGVlYi04N2QyLTdhNGI1ZTc4MTQ2YQ.jpg",
  "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAziAAAAJGRlZjg1YWQxLTU0ZGMtNGUzMy1hYzQ5LTUwZGIzZThjZmIyOA.jpg",
  "https://media.licdn.com/mpr/mpr/shrink_100_100/p/1/000/0fb/103/0b7285f.jpg"

  ];

$("#eAlejandroImg").attr("src",photos[0]);
$("#eMatiasImg").attr("src",photos[1]);
$("#eAdrianImg").attr("src",photos[2]);
$("#eBrianImg").attr("src",photos[3]);
$("#eSantiagoImg").attr("src",photos[4]);
$("#eAlfonsoImg").attr("src",photos[5]);
}

 function entrevistasAlejandro(){
 
  var link = "https://www.linkedin.com/in/alejandromartinis/";

	var nombre = "Alejandro";
  var intro = `Alejandro Martinis es Licenciado en Analisis de  Sistemas encargado en J.R. Williams   y Docente en la materia de Programaciòn 1 en la Facultad de Ingenieria ORT.Excelente mentor y amigo del cual tengo que agradecer muchos de los buenos consejos que me a dado y por participar en esta entrevista.`;

  var pregunta1 =`Alejandro teniendo más de 20 años como docente en la ORT, ¿que recuerdas como uno de los factores predominantes a la hora de enseñar? `;
	var respuesta1 = `Hay una frase que siempre me ha quedado grabada y que después supe pertenece a Aristóteles: "Enseñar no es una función vital, porque no tiene fín en sí misma; la función vital es aprender". Esto me hizo comprender que mi rol como docente es el de ser un facilitador, el de acercar conocimientos pero sobre todo ser un elemento más que permita que la función de aprender se instale en cada uno. Cuando se prende la chispa del "aprender" ya no hay nada imposible.`;

  var pregunta2 =  `¿Como egresado Licenciado en Analisis de Sistema de la Ort, cual recuerdas como la materia que más te llamo la atención de la carrera? `;
 	var respuesta2 = `Análisis de Algoritmos. Me sorprendió cómo una algoritmación incorrecta puede hacer que el mejor hardware tenga una muy mala performance y vice versa.`;

  var pregunta3 = `En general a los nuevos estudiantes programadores, que consejos les das a la hora de comenzar a programar?.`;
 	var respuesta3 = `La virtud más importante sobre todo en el arranque es la persistencia. Las cosas NO van a funcionar bien de primera, los conceptos básicos van a ser difíciles, hasta que todo va haciendo clic y empieza a tener sentido. No es un tema de genios sino de no rendirse.`;
  
  var pregunta4 = `Otro tema que creo que le pasa a la mayoria es el famoso sindrome del Impostor, muchas veces se nos viene a la mente que "esto no es lo nuestro", que "no estoy listo", algo creo que le pasa a alumnos, docentes y todo tipo de profesional, ¿algun consejo de como lidiar con esto?`;
  var respuesta4 = `Lo que creo que puede pasar es que es un campo muy amplio este. El aprendizaje no cesa. Asumir que esto nos excede y que podemos manejar bien solo una parte, es el comienzo de perder el miedo y lidiar con este sindrome.`;

  var pregunta5 = `¿Cambiando de tema, en su curso de programación 1 tuvimos pruebas escritas, creo que esto a muchos nos genero un poco de incomodidad al principio, pero creo que nos sirve a muchos dejar de lado los editores de texto y completar el codigo a mano, hay algun motivo especial en enseñar a escribir codigo a mano?`; 
  var respuesta5 = `El código en máquina no permite evaluar los conocimientos porque cualquier editor tiene muchas ayudas del lenguaje. Por eso se opta por evaluaciones escritas.`;

  var pregunta6 = `¿Creo que a muchos les genera incertidumbre en como son los primeros meses como programador, fuera de la curricula de estudio de la facultad, hay algo que recomiende estudiar para prepararse para trabajar como programador?.`;
  var respuesta6 = `Bueno, eso sería un lenguaje. La tendencia en algunas universidades norteamericanas desde ya hace unos años es utilizar Python como lenguaje introductorio en los cursos de programación.
El MIT y UC Berkeley cambiaron en 2014 sus cursos introductorios a Python, y en general, hay 25 de las 36 universidades mas importantes en EEUU que usan 

<a href="https://cacm.acm.org/blogs/blog-cacm/176450-python-is-now-the-most-popular-introductory-teaching-language-at-top-u-s-universities/fulltext" > Python the Most popupar language.</a>`;

  var pregunta7 = `Como ultima pregunta, algunas palabras para los nuevos estudiantes en la ORT?.`;
  var respuesta7 = `No crean que esto es para mentes privilegiadas. Es solamente para los que sienten gusto en esto y están dispuestos a persistir, trabajar y estudiar todos los días. `;

      $(".intro").html(intro);
     $("#pregunta1").html(pregunta1);
     $("#respuesta1").html(respuesta1);

      $("#pregunta2").html(pregunta2);
     $("#respuesta2").html(respuesta2);

     $("#pregunta3").html(pregunta3);
     $("#respuesta3").html(respuesta3);

      $("#pregunta4").html(pregunta4);
     $("#respuesta4").html(respuesta4);

     $("#pregunta5").html(pregunta5);
     $("#respuesta5").html(respuesta5);

     $("#pregunta6").html(pregunta6);
     $("#respuesta6").html(respuesta6);

     $("#pregunta7").html(pregunta7);
     $("#respuesta7").html(respuesta7);
     $(".extra").hide();
 
     	$(".nombre").html(`<b> ${nombre} </b> `);
       $("#eAlejandroImg").attr("title",nombre).attr("alt",intro);
};




function entrevistasMatias(){
 
  var link = "https://www.linkedin.com/in/matias-martinez-25373964/";

  var nombre = "Matias";
  var intro = `Matias Martinez es Desarrollador  en Arkano Software   y estudiante en la carrera de Analista de Tecnologìas de la Información en la Facultad ORT. `;

  var pregunta1 =`¿Trabajas como programador? Se puede saber donde o que tipo de trabajo realizas?. `;
  var respuesta1 = ` Si trabajo como programador. Trabajo en una empresa genial llamada Arkano Software desde hace 2 años.`;

  var pregunta2 =  `¿Para programador donde estudiaste? Que estudio te gustaría realizarahira a futuro? Algún curso que recomiendas? `;
  var respuesta2 = ` Actualmente estudio Analista en Tecnlogias de la Información en ORT. Me gustaria estudiar algo más enfocado a los negocios ya que me gustaria armar mi propia empresa o producto tecnologico.
Recomiendo mucho una plataforma para estudiar Online <a href="https://platzi.com/"> Platzi</a>.`;

  var pregunta3 =  `¿Qué piensas sobre ser Autodidacta o formación formal?.Cual fue el mejor recurso que utilizaste para aprender a programar? cual es el que utilizas más a diario?.`;
  var respuesta3 = ` Creo que hay que tener mesclar ambas actitudes, en esta industria se necesita ser muy autodidacta para afrontar los distintos cambios que sufren las distintas tecnologias.`;
  
  var pregunta4 = ` ¿Qué tecnologías actuales piensas que dentro de 3 o 4 años no veremos? que tecnologías recomiendas a un nuevo programador?.`;
  var respuesta4 = ` Visual Basic, Pascal, ese tipo de lenguajes que enseñana al principio en las Universidades. Recomiendo JavaScript el lenjuage de la Web moderna.`;

  var pregunta5 = `¿Qué opinas de la paga, los horarios de trabajo en el campo laboral y/o de los beneficios de ser un programador?`; 
  var respuesta5 = `La paga me parece acorde, siempre digo es una industria que paga bien aunque depende muchos de las empresas en la que trabajes.
En mi caso si bien cumplo 8 horas tengo horarios flexible lo cual me permite que esas 8 horas pueden ser también pueden ser en la noche.
Creo que uno de los mayores beneficios es que solo una una notebook y una conexión a internet ya podemos trabajar para cualquier parte del mundo.`;

  var pregunta6 = `¿Podes contarme algo sobre como es un día de trabajo para ti?.`;
  var respuesta6 = `Llego a las 10 AM me preparo un mate y comienzo a contestar correos si tengo alguno. Trato de hacer las cosas mas complejas en la mañana ya que es cuando soy mas productivo y las ideas salen mas fácil. Al medio día salimos a comer con la mayoria de los compañeros, charlamos un rato, jugamos algún partido de FIFA. Me preparo un café o vuelvo a trabajar.
<br/><br/>Siempre en la tarde hay alguna reunión con los clientes o con el equipo para organizarnos con las tareas, ver pendientes etc.
Trabajo hasta las 19 por lo general, cuando salgo voy al gym si es que no tengo clase. Me quedan 3 materias para terminar la carrera. `;

  var pregunta7 = `¿Para los que están comenzando que consejos les podes dar a la hora de buscar trabajo como programador?..`;
  var respuesta7 = `Mi consejo seria que busquen comenzar a trabajar en cualquier empresa pero desarrollando ya sea Web, Mobile etc. Creo que la experiencia lo es todo en este rubro.`;

 var pregunta8 = `¿Algun mensaje o consejo para los que empiezan a programar?.`;
   var respuesta8 = `Al principio es dificil y parece hasta imposible a mi me paso. Pero cuando le agarras la mano es como escribir en lenguaje natural. Es constancia y practica.`;


      $(".intro").html(intro);
     $("#pregunta1").html(pregunta1);
     $("#respuesta1").html(respuesta1);

      $("#pregunta2").html(pregunta2);
     $("#respuesta2").html(respuesta2);

     $("#pregunta3").html(pregunta3);
     $("#respuesta3").html(respuesta3);

      $("#pregunta4").html(pregunta4);
     $("#respuesta4").html(respuesta4);

     $("#pregunta5").html(pregunta5);
     $("#respuesta5").html(respuesta5);

     $("#pregunta6").html(pregunta6);
     $("#respuesta6").html(respuesta6);

     $("#pregunta7").html(pregunta7);
     $("#respuesta7").html(respuesta7);
     $("#pregunta8").html(pregunta8);
     $("#respuesta8").html(respuesta8);
      $(".nombre").html(`<b> ${nombre} </b> `);
       $("#eMatiasImg").attr("title",nombre).attr("alt",intro);
};



 function entrevistasAdrián(){
 
  var link = "https://www.linkedin.com/in/amedina91/";

  var nombre = "Adrián";
  var intro = `Adrián Medina es Desarrollador Frontend  en Arkano Software y egresado de la carrera de Técnico Programador  del Instituto Tecnológico Superior. `;

  var pregunta1 =`¿Trabajas como programador? Se puede saber donde o que tipo de trabajo realizas?. `;
  var respuesta1 = ` Si, soy Desarrollador de Frontend Web.
  Trabajo como frontend developer en un partner de Microsoft llamado Arkano. Me encargo de crear web apps que consumen servicios y/o información de aplicaciónes Microsoft.`;

  var pregunta2 =  `¿Para programador donde estudiaste? Que estudio te gustaría realizarahira a futuro? Algún curso que recomiendas? `;
  var respuesta2 = ` Estudié en el Instituto Técnologico Superior (Bachillerato en informática).
   En breve empezaré la licenciatura en sistemas en la universidad ORT.Recomiendo empezar a estudiar todo lo que es Bots e IA que es lo que se está moviendo hoy por hoy y se viene con todo.`;

  var pregunta3 =  `¿Qué piensas sobre ser Autodidacta o formación formal?.Cual fue el mejor recurso que utilizaste para aprender a programar? cual es el que utilizas más a diario?.`;
  var respuesta3 = `Ambas. Autodidacta es uno de los requisitos excluyentes para cualquier programador o persona que trabaje en el rubro de Tecnología.
  C++ en la UTU-CETP. Y después especializaciones en cursos online.Javascript utilizo màs a diario.
  `;
  
  var pregunta4 = ` ¿Qué tecnologías actuales piensas que dentro de 3 o 4 años no veremos? que tecnologías recomiendas a un nuevo programador?.`;
  var respuesta4 = ` No lo sé, Lo único que sé que todo cambia rápido y la exigencia es estar preparado para esos cambios. Experimentar en el uso y programación de Bots y programacion de redes neuronales.`;

  var pregunta5 = `¿Qué opinas de la paga, los horarios de trabajo en el campo laboral y/o de los beneficios de ser un programador?`; 
  var respuesta5 = `Opino que en uruguay esta mal pago con respecto a la relación costo de vida que hay acá. 
Pero pienso que ser programador te da muchas oportunidades y fexibilidades en general y si te gusta. Hay que darle para adelante.`;

  var pregunta6 = `¿Podes contarme algo sobre como es un día de trabajo para ti?.`;
  var respuesta6 = `Un día de trabajo para mi es una aventura. Siempre espero encontrarme con nuevos desafios que me lleven a superarme y a aportar lo mejor de mi para la empresa y mi equipo. `;

  var pregunta7 = `¿Para los que están comenzando que consejos les podes dar a la hora de buscar trabajo como programador?..`;
  var respuesta7 = `Que sean transparentes siempre cueste lo que cueste. `;

 var pregunta8 = `¿Algun mensaje o consejo para los que empiezan a programar?.`;
   var respuesta8 = `Que todo lo que hagan lo hagan por la pasión que tengan, que no se encierren en dinero, dinero precisamos todos y siempre nos va a faltar. Lo más importante es hacer algo que te guste y que puedas dar lo mejor de vos como profesional y persona.`;


      $(".intro").html(intro);
     $("#pregunta1").html(pregunta1);
     $("#respuesta1").html(respuesta1);

      $("#pregunta2").html(pregunta2);
     $("#respuesta2").html(respuesta2);

     $("#pregunta3").html(pregunta3);
     $("#respuesta3").html(respuesta3);

      $("#pregunta4").html(pregunta4);
     $("#respuesta4").html(respuesta4);

     $("#pregunta5").html(pregunta5);
     $("#respuesta5").html(respuesta5);

     $("#pregunta6").html(pregunta6);
     $("#respuesta6").html(respuesta6);

     $("#pregunta7").html(pregunta7);
     $("#respuesta7").html(respuesta7);
     $("#pregunta8").html(pregunta8);
     $("#respuesta8").html(respuesta8);
      $(".nombre").html(`<b> ${nombre} </b> `);
       $("#eAdrianImg").attr("title",nombre).attr("alt",intro);
};



 
 function entrevistasBrian(){
 
  var link = "https://www.linkedin.com/in/brian-hill-24b58933/";

  var nombre = "Brian";
  var intro = ` Brian Hill es un programador  de  Pyxis  y egresado de la carrera de Ingeniero en Computaciòn   de la  Universidad de la Republica. `;

  var pregunta1 =`¿Trabajas como programador? Se puede saber donde o que tipo de trabajo realizas?. `;
  var respuesta1 = ` Si trabajo como programador. En Pyxis.`;

  var pregunta2 =  `¿Para programador donde estudiaste? Que estudio te gustaría realizarahira a futuro? Algún curso que recomiendas? `;
  var respuesta2 = `Soy ingeniero en computación egresado de la udelar. Me gustaría hacer algun master, pero no se todavia de que. No tengo ninguno para recomendar.`;

  var pregunta3 =  `¿Qué piensas sobre ser Autodidacta o formación formal?.Cual fue el mejor recurso que utilizaste para aprender a programar? cual es el que utilizas más a diario?.`;
  var respuesta3 = `Pedir ayuda a mis compañeros y buscar en google. Google es lo que utilizo mas a diario. Eso junto a mis conocimientos y habilidades obtenidos de la facultad es lo que me ayuda a sacar incluso las cosas que no conozco.
  `;
  
  var pregunta4 = ` ¿Qué tecnologías actuales piensas que dentro de 3 o 4 años no veremos? que tecnologías recomiendas a un nuevo programador?.`;
  var respuesta4 = ` No se cuales podrian ser obsoletas, todo el tiempo se esta inventando nuevas tecnologias que, pero no dejan obsoletas a otras. A uno nuevo le recomiendo estudiar java, y los lenguajes utilizados en la web, en especial javascript. Mas que tecnologias, es importante que sepa como programar, mejores practicas, etc`;

  var pregunta5 = `¿Qué opinas de la paga, los horarios de trabajo en el campo laboral y/o de los beneficios de ser un programador?`; 
  var respuesta5 = `Los beneficios son muy buenos, muchas de las empresas hoy en dia tratan de agasajar a sus empleados para que se queden, porque siempre hay otro lado que pagan mejor y con mejores condiciones.`;

  var pregunta6 = `¿Podes contarme algo sobre como es un día de trabajo para ti?.`;
  var respuesta6 = `No es nada raro, llego me pongo a trabajar en lo que tengo asignado y listo.`;

  var pregunta7 = `¿Para los que están comenzando que consejos les podes dar a la hora de buscar trabajo como programador?..`;
  var respuesta7 = `Tener un curriculum prolijo, estar aca en linkendin y mandar a las empresas que conozca. Sobre todo, mejor ir a alguna que conozca a alguien que sea empleado asi le puede cantar la posta de como es el lugar. `;

 var pregunta8 = `¿Algun mensaje o consejo para los que empiezan a programar?.`;
   var respuesta8 = `No tengo ninguno jaja.`;


      $(".intro").html(intro);
     $("#pregunta1").html(pregunta1);
     $("#respuesta1").html(respuesta1);

      $("#pregunta2").html(pregunta2);
     $("#respuesta2").html(respuesta2);

     $("#pregunta3").html(pregunta3);
     $("#respuesta3").html(respuesta3);

      $("#pregunta4").html(pregunta4);
     $("#respuesta4").html(respuesta4);

     $("#pregunta5").html(pregunta5);
     $("#respuesta5").html(respuesta5);

     $("#pregunta6").html(pregunta6);
     $("#respuesta6").html(respuesta6);

     $("#pregunta7").html(pregunta7);
     $("#respuesta7").html(respuesta7);
     $("#pregunta8").html(pregunta8);
     $("#respuesta8").html(respuesta8);
      $(".nombre").html(`<b> ${nombre} </b> `);
       $("#eBrianImg").attr("title",nombre).attr("alt",intro);
};


 
 function entrevistasSantiago(){
 
  var link = "https://www.linkedin.com/in/santiago-garc%C3%ADa-da-rosa-3441623a/";
  var img  ="";

  var nombre = "Santiago";
  var intro = ` Santiago García da Rosa  es un   Senior Frontend  Developer Velocity Partners  y estudiante  de la carrera de Analista en Tecnologìas de la Información   de la  Facultad  ORT. `;

  var pregunta1 =`¿Trabajas como programador? Se puede saber donde o que tipo de trabajo realizas?. `;
  var respuesta1 = `Trabajo como Senior Frontend  en Velocity Partners. Entre algunas de mis principales funciones está el diseño he implementación de componentes, configuración de ambientes de desarrollo y dar soporte sobre tecnologías frontend a compañeros tanto dentro del proyecto como dentro de la empresa. Por otro lado, también realizo, en muchas ocasiones, las entrevistas a nuevos candidatos frontend tanto para la oficina de Uruguay como para otras oficinas de la empresa. Para completar un poco lo que realizo en la empresa también dicto cursos sobre diferentes tecnologías. Creo firmemente que el conocimiento es para compartirlo.`;

  var pregunta2 =  `¿Para programador donde estudiaste? Que estudio te gustaría realizarahira a futuro? Algún curso que recomiendas? `;
  var respuesta2 = `Estudie en la ORT, la tecnicatura de Analista Programador. Es sumamente recomendable, si no se van a realizar estudios terciarios de ingeniería o licenciatura, realizar esta tecnicatura ya que te brinda las herramientas necesarias para salir al mercado.
Estudiar estudio todos los días, investigando y leyendo en la web. Sin dudas recomendaría realizar los cursos, dentro de los temas que a cada cual le intereses, de pluralsight o herramientas similares. En mi caso puedo afirmar que la herramienta anteriormente mencionada son dudas es muy recomendable.`;

  var pregunta3 =  `¿Qué piensas sobre ser Autodidacta o formación formal?.Cual fue el mejor recurso que utilizaste para aprender a programar? cual es el que utilizas más a diario?.`;
  var respuesta3 = `Es importante armar una base relativamente fuerte de conocimiento formal, como puede ser la UTU de tecnología o la ORT con sus tecnicaturas, ya que esto nos va a brindar las herramientas para poder luego ser seguir aprendiendo por cuenta propia.
Yo actualmente me considera una auto didacta, cada nueva tecnología frontend que aparece en el marcado, significa para mi unas cuantas horas de lectura y dependiendo mi nivel de interés suelo preparar ejemplos y cursos para luego dictar en la empresa que trabajo.
  `;
  
  var pregunta4 = ` ¿Qué tecnologías actuales piensas que dentro de 3 o 4 años no veremos? que tecnologías recomiendas a un nuevo programador?.`;
  var respuesta4 = `Esta es una pregunta difícil de contestar para un ecosistema tan cambiante con el mundo frontend donde cada mes aparecen 2 o 3 tecnologías nuevas para tener en cuenta. Claramente en los próximos años iremos viendo la desaparición de ECMA 5 para finalmente abrirle paso a ECMA 6. Me gustaría creer que tecnologías como angular, react o ember van a seguir estando ahí, pero es muy probable que no.`;

  var pregunta5 = `¿Qué opinas de la paga, los horarios de trabajo en el campo laboral y/o de los beneficios de ser un programador?`; 
  var respuesta5 = `La verdad que los programadores estamos muy beneficiados culpa de un mercado que demanda mucho más que la oferta que hay. No es raro recibir 3, 4 propuestas laborales por mes de otras empresas. Esto genera que las empresas busquen diferenciarse de las otras a través de mejores beneficios, sueldos, flexibilidad y ambientes laborales. Sin dudas es un gran momento para ser programador.
Los sueldos están también afectados por esta situación lo cual hace que sea un rubro con ingresos altos.`;

  var pregunta6 = `¿Podes contarme algo sobre como es un día de trabajo para ti?.`;
  var respuesta6 = `Actualmente mi día, por suerte, es muy dinámico con respecto a las tareas que tengo que llevar adelante. Deploys a ambientes, diseño e implementación de features, ayudar en el diseño e implementación a colegas, preparar cursos y entrevistas son algunas de las tareas a las cuales me enfrente habitualmente.`;

  var pregunta7 = `¿Para los que están comenzando que consejos les podes dar a la hora de buscar trabajo como programador?..`;
  var respuesta7 = `Armarse un buen Linkedin y CV contando la experiencia, estudios y metas que se tienen es imprescindible. De ahí surgen muchas propuestas sin que uno si quiera las busque. `;

 var pregunta8 = `¿Algun mensaje o consejo para los que empiezan a programar?.`;
   var respuesta8 = `Lo más importante es no asumir que uno sabe todo lo que tiene que saber, ni pensar que lo que sabe es una verdad absoluta, hay que estar abierto al intercambio, hay que saber explicar porque se toma una decisión y hay que ser un jugador de equipo (se aprende y se disfruta mucho más con un equipo que comparte y dialoga sobre lo que se trabaja).
Otra cosa sumamente importante es informarse e investigar constantemente, tiene que convertirse en un hobby y jamás conformarse siempre hay que querer saber y entender más.`;


      $(".intro").html(intro);
     $("#pregunta1").html(pregunta1);
     $("#respuesta1").html(respuesta1);

      $("#pregunta2").html(pregunta2);
     $("#respuesta2").html(respuesta2);

     $("#pregunta3").html(pregunta3);
     $("#respuesta3").html(respuesta3);

      $("#pregunta4").html(pregunta4);
     $("#respuesta4").html(respuesta4);

     $("#pregunta5").html(pregunta5);
     $("#respuesta5").html(respuesta5);

     $("#pregunta6").html(pregunta6);
     $("#respuesta6").html(respuesta6);

     $("#pregunta7").html(pregunta7);
     $("#respuesta7").html(respuesta7);
     $("#pregunta8").html(pregunta8);
     $("#respuesta8").html(respuesta8);
      $(".nombre").html(`<b> ${nombre} </b> `);
      $("#eSantiagoImg").attr("title",nombre).attr("alt",intro);
 
};



 function entrevistasAlfonso(){
 
  var link = "https://www.linkedin.com/in/alfonsocarvallo/";
 

  var nombre = "Alfonso";
  var intro = ` Alfonso Carvallo  trabaja como  Head of Development  y egresado   de la carreras de  Diseño Grafico,  Diseñador Web y Programador Web en BIOS. `;

  var pregunta1 =`¿Trabajas como programador? Se puede saber donde o que tipo de trabajo realizas?. `;
  var respuesta1 = `Trabajo hace unos 5 años en el rubro. Arranqué en el cargo de diseñador para una empresa que originalmente tenia desarrollo en .net asi que me dedicaba más al frontend, pero como primer trabajo lo agarré sin pensarlo. Actualmente trabajo en Zonamérica para una empresa internacional como DevOps.`;

  var pregunta2 =  `¿Para programador donde estudiaste? Que estudio te gustaría realizarahira a futuro? Algún curso que recomiendas? `;
  var respuesta2 = ` Estudié en BIOS. Hice alrededor de 4 años que incluyeron Diseño Grafico, Diseño Web, Desarrollo Web y PHP+MySQL. En un futuro me gustaría aprender mas Nodejs y NoSQL. Me parece que a futuro las tecnologías mas veloces y simples van a ser las que dominen el mercado. Así como la versatilidad que estas permiten en escalas mayores.`;

  var pregunta3 =  `¿Qué piensas sobre ser Autodidacta o formación formal?.Cual fue el mejor recurso que utilizaste para aprender a programar? cual es el que utilizas más a diario?.`;
  var respuesta3 = `Para mi es fundamental. En las clases que puedas tener te enseñan con ejercicios y mucho te queda sacado del librito. Con el tiempo la practica me parece que es fundamental, y eso solo se gana informandose uno mismo y buscando por su cuenta las documentaciones y curiosidades que puedan surgir. Personalmente crecí desde chico con computadoras y creo que eso facilitó la curiosidad para entender como funcionan las cosas.
  `;
  
  var pregunta4 = ` ¿Qué tecnologías actuales piensas que dentro de 3 o 4 años no veremos? que tecnologías recomiendas a un nuevo programador?.`;
  var respuesta4 = `Que no veremos? Me parece que .net cumplió su ciclo de vida y está siendo tratado como un hermano mas chico por C#, creo que PHP está empezando a mostrar su edad, pero con la versatilidad que proveé y las nuevas versiones, dudo que se deje de usar en un futuro pronto..`;

  var pregunta5 = `¿Qué opinas de la paga, los horarios de trabajo en el campo laboral y/o de los beneficios de ser un programador?`; 
  var respuesta5 = `Todo depende donde sea el trabajo. En Montevideo hay pocas empresas que valoren realmente a sus empleados en general. Hay ciertas excepciones, pero la mayoria de los buenos sueldos se encuentran en Zonas libres de impuestos, ya sea AguadaPark, el WTC, o Zonamerica. Dependiendo de las responsabilidades puede ser mayor o peor, pero generalmente son buenos sueldos. Como beneficio, algunos podemos trabajar desde nuestras casas (no es mi caso actual), y eso facilita un montón, evitas transporte y demoras.`;

  var pregunta6 = `¿Podes contarme algo sobre como es un día de trabajo para ti?.`;
  var respuesta6 = `Mis días varían, normalmente trabajamos con Sprints de una semana (algo asi como planificaciones semanales), asi que generalmente ya tenemos definido que hacer en el día (y la semana entera). Generalmente suelo coordinar con mi Program Manager en que estamos en el momento, y de ahi hacer lo que necesitemos. Muchas veces hay casos que surgen (sobre todo para los que trabajamos muy pegados al marketing) y no queda otra que frenar las cosas y replantear las prioridades.`;

  var pregunta7 = `¿Para los que están comenzando que consejos les podes dar a la hora de buscar trabajo como programador?..`;
  var respuesta7 = `Ser proactivo, y autodidacta siempre son buenas cualidades a tener. Poder resolver problemas que surjan es lo que mas va a valorar un empleador, asi que recomiendo ser versatil y flexible. `;

 var pregunta8 = `¿Algun mensaje o consejo para los que empiezan a programar?.`;
   var respuesta8 = ` Nunca sabés cuando te puede caer la necesidad de hacer algo que está vinculado pero no es tu rubro directo, el mejor ejemplo es ajustar imagenes, o tener que hacer algunas vos mismo. Por más programador que sea uno, nunca viene mal saber algo más "por las dudas".`;


      $(".intro").html(intro);
     $("#pregunta1").html(pregunta1);
     $("#respuesta1").html(respuesta1);

      $("#pregunta2").html(pregunta2);
     $("#respuesta2").html(respuesta2);

     $("#pregunta3").html(pregunta3);
     $("#respuesta3").html(respuesta3);

      $("#pregunta4").html(pregunta4);
     $("#respuesta4").html(respuesta4);

     $("#pregunta5").html(pregunta5);
     $("#respuesta5").html(respuesta5);

     $("#pregunta6").html(pregunta6);
     $("#respuesta6").html(respuesta6);

     $("#pregunta7").html(pregunta7);
     $("#respuesta7").html(respuesta7);
     $("#pregunta8").html(pregunta8);
     $("#respuesta8").html(respuesta8);
      $(".nombre").html(`<b> ${nombre} </b> `);
      $("#eAlfonsoImg").attr("title",nombre).attr("alt",intro);
   
};


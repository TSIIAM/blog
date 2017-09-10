/*

Primera version, en esta oportunidad quize publicarlo lo mas rapido que pude, por lo que me importo màs que estubiera el contenido y presentarlo rapido, estare mejorando el script para no repetir tanta variable y codigo en mi tiempo libre.

*/

$(document).ready(main);

	function main(){

  botones(); 
  entrevistasNatalie();
  $("#eNatalie").on("click",entrevistasNatalie);
	$("#eValentina").on("click",entrevistasValentina);
  $("#eGabriela").on("click",entrevistasGabriela);
 


	
}
function botones(){
  var photos = [
  "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/2/000/0c0/395/19c5b26.jpg",
  "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAA2KAAAAJDQwNzA0Mzk5LTViOTEtNGRjNi04ZDM1LWE5MTgyYWVlNzliMw.jpg",
    "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/3/000/0a6/2aa/34acf81.jpg"

 

  ];

$("#eNatalieImg").attr("src",photos[0]);
$("#eValentinaImg").attr("src",photos[1]);
$("#eGabrielaImg").attr("src",photos[2]);
}

function entrevistasNatalie(){
 
	var nombre = "Natalie";
  var intro = `Natalie Gnoza Docente en la Universidad ORT Uruguay y futura Ingeniera en Sistemas.`;

  var pregunta1 =` ¿Como docente en la ORT cual sería uno de los factores predominantes a la hora de enseñar?  `;
	var respuesta1 = `He podido ver la diferencia entre las distintas generaciones de alumnos a la hora de atender, razonar, participar en clase. Las nuevas generaciones (Millenials) prefieren asistir menos a clase pues toda la información que necesitan la tienen a un solo click. Para los que sí asisten, es todo un desafío mantener su atención y motivarlos, porque se debe competir con los diversos dispositivos y estímulos a los que están siendo bombardeados todo el tiempo. La tecnología y herramientas que tienen a disposición les permite mirar al mundo en forma global, necesitan desafíos continuamente, aprender didácticamente, crecieron y la tecnología estaba allí, son exigentes y muy críticos.`;

  var pregunta2 =  `¿Como futura egresada Ingeniera de Sistemsa de la Ort, cual recuerdas como la materia que más te llamo la atención de la carrera?  `;
 	var respuesta2 = `Estoy en estos momentos realizando el proyecto de grado. La materia que más me gustó fue una electiva Diseño de Interfaces porque siempre me interesó ponerme del lado del usuario, ver la forma de hacer más amena su experiencia con el sistema. La materia que más me alegró salvar fue Arquitectura de Software, significó mucho esfuerzo! Jajaja`;

  var pregunta3 = `En general a los nuevos estudiantes programadores, que consejos les das a la hora de comenzar a programar? .`;
 	var respuesta3 = `Que inviertan tiempo, esfuerzo, paciencia, dedicación porque realmente vale la pena, pero como todo hay que tener vocación. Se pueden insertar laboralmente siendo estudiantes ya que estamos en un sector donde la tasa de desempleo es prácticamente nula. La realidad es, que el mundo necesita ingenieros/licenciados/programadores en mayor medida que los que logran egresar. Podemos sentirnos como privilegiados de hacer lo que nos gusta y poder elegir dónde trabajar.`;
  
  var pregunta4 = ` ¿Creo que a muchos les genera incertidumbre en como son los primeros meses como programador, fuera de la curricula de estudio de la facultad, hay algo que recomiende estudiar para prepararse para trabajar como programador?`;
  var respuesta4 = `Puedo contar mi experiencia, siendo estudiante tenía esa misma incertidumbre. Empecé mis primeros pasos en esta profesión como QA, luego se dio la oportunidad de pasar a programar y en tecnologías que no conocía. Al principio la curva de aprendizaje es grande pero luego todo se acomoda. Lo que puedo decir es que tienen que estar abiertos a aprender nuevas tecnologías y no atarse a ninguna, porque ese es el desafío adaptarse a los cambios. `;

  var pregunta5 = `¿Qué opinas de la proporción de mujeres en el área de informática, es razonable, te preocupa la cantidad, qué opinas se pueda hacer para que más mujeres se involucren?`; 
  var respuesta5 = ` Cuando comencé a estudiar había pocas mujeres, por suerte eso hoy en día cambió si bien aún el porcentaje de hombres en el rubro es mayor. `;

  var pregunta6 = `¿Qué consejo puedes darle a aquellas mujeres que están en duda si comenzar a programar? `;
  var respuesta6 = `El primer programador de la historia fue una mujer Ada Lovelace, estamos hablando de mediados del siglo XIX. Con ese precedente creo que las mujeres han tenido y tienen mucho para aportar, no sea trata de lucha de género, sino todo lo contrario, hombres y mujeres pueden complementarse muy bien trabajando juntos.`;

  var pregunta7 = `¿Qué concepto tienes de las certificaciones, muchos opinan que no son necesarias, pero estoy seguro tienen su peso, puedes contarnos tu experiencia y qué opinas de certificarte en distintas tecnologías? .`;
  var respuesta7 = `Creo que depende mucho del trabajo en el que estés, hay lugares donde sí realmente la certificación en una tecnología es indispensable, en mi caso mi rol no lo requiere pero siempre son un plus y no está de más tenerlas pues generan confianza y credibilidad hacia los clientes.  `;

  var pregunta8 = `Para muchos que están comenzando la carrera, se encuentran con un mundo nuevo en el desarrollo donde existen distintos roles que pueden cumplir en su carrera, puedes comentarnos de que se trata el trabajo de un Business analyst y que se requiere estudiar para el rol?`;
  var respuesta8 = `Mi trabajo consiste en interpretar las necesidades del cliente, analizar cómo podrían impactar en la solución actual y diseñar cambios que se adapten a esos requerimientos. Estoy en contacto con los programadores de modo de guiarlos en el desarrollo y validar que finalmente se hizo lo que se acordó. Es estar entre medio del cliente y el equipo de desarrollo, por tanto lograr el equilibrio y saber cuándo ponerse de un lado u otro es lo que hace interesante al rol. Tiene que gustarte la interacción con el cliente con todo lo que eso implica, conocer el sistema en el que trabajas, saber trabajar en equipo, aprender de negocio, aprender idiomas, tener facilidad para comunicarte e interactuar con las diferentes partes. `;

  var pregunta9 = `En tu carrera trabajaste de manera remota, como es la experiencia de llegar a trabajar para clientes del exterior?`;
  var respuesta9 = `Totalmente enriquecedora, una vez que te ganas el respeto y confianza del cliente todo fluye. En mi caso tuve la suerte de poder interactuar con clientes en Venezuela, Chile, Brasil, España, República Dominicana y se de cada uno de ellos se aprende muchísimo, sus costumbres, cultura, leyes, normativas, etc.`;

  var pregunta10 = `Como ultima pregunta, algunas palabras para los nuevos estudiantes en la ORT?`;
  var respuesta10 = `La ORT me formó como profesional, me abrió las puertas otorgándome una beca para ayudarme durante los primeros años de estudio y ahora hasta me dio trabajo! Qué más puedo decir? Conozco los dos lados del mostrador y puedo decir que ha colmado mis expectativas. Está entre las mejores 500 universidades del mundo, algo que no es para nada menor.`;


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

      $("#pregunta9").html(pregunta9);
     $("#respuesta9").html(respuesta9);

      $("#pregunta10").html(pregunta10);
     $("#respuesta10").html(respuesta10);


 
 
     	$(".nombre").html(`<b> ${nombre} </b> `);
       $("#eNatalieImg").attr("title",nombre).attr("alt",intro);
};


 function entrevistasValentina(){
 
  var nombre = "Valentina";
  var intro = `Valentina Rodriguez  es  Educadora y consultora del framework Spring en Panamsource, voluntaria en causas como BastadeTas y For The Animals Uruguay.`;

  var pregunta1 =` ¿Trabajas en desarrollo actualmente, se puede saber dónde y de que trata tu trabajo ahí?  `;
  var respuesta1 = `Actualmente estoy haciendo un master en USA y trabajando en el campus como desarrollador Web para el Center for Computational Relativity and Gravitation. 
Estoy diseñando y desarrollando su nuevo sitio.

Por otro lado soy consultora para los productos Spring Framework y Java donde realizo consultorías, diseño de nuevos cursos y enseñanza de los mismos. `;

  var pregunta2 =  `Donde fue que aprendiste a programar, algún recurso que te fuera de gran utilidad para aprender cuando comenzaste? `;
  var respuesta2 = `Si bien estudié una carrera, donde realmente aprendí fue trabajando, diferentes proyectos y empresas me dieron la oportunidad de cada vez aprender más y desarrollar aún más el interés por la tecnología.  Como recurso nada en particular, las ganas y la persistencia.`;

  var pregunta3 = `¿Qué tecnologías actuales crees que no veremos en 4 o 5 años y que tecnología recomiendas investigar a los nuevos programadores?. .`;
  var respuesta3 = `Es muy difícil saber que no veremos, que puede ser deprecado, incluso aún cuando las tecnologías sean deprecadas habrán empresas que seguirán teniendo sus productos desarrollados en esas tecnologías. 
Entonces qué es lo que SI seguirá como tendencia son las aplicaciones web, móviles, enterprise y distribuidas así como tecnologías como CMS, Frameworks.
<br/><br/>
Creo que depende del perfil de cada uno, gustos y de con lo que uno se siente más cómodo. Hoy en dia hay mucha diversidad. Yo creo que en los siguientes años van a ser más fuertes aún lo que es sistemas inteligentes,  Big data, los productos de Cloud como es Cloud Foundry, Blockchain es casi infinito, hay muchas opciones, tecnologías y plataformas.. Claro, existe también de forma constante el área de  seguridad que en Uruguay no es se le ha dado la importancia que merece.`;
  
  var pregunta4 = ` ¿Podes contarme algo sobre cómo es un día de trabajo para ti?.`;
  var respuesta4 = `Mi trabajo es un poco atípico porque es en el campus y al no ser una empresa dedicada al software varía con lo que venía haciendo anteriormente. Por el lado del desarrollo hicimos mockups y ahora estoy trabajando en el desarrollo, cada día reviso lo que estaría haciendo en cuanto a tareas y las ejecuto, al final del dia envío un resumen a mi equipo y tenemos reuniones semanales donde realizo demo de las cosas desarrolladas, tenemos discusiones y revisamos mejoras y próximos pasos a seguir.
<br/><br/>
Por el lado de consultoría, es un poco más variado y distribuido el trabajo. Surgen calls o presentaciones a clientes sobre lo que es Spring y Java, como mejorar sus procesos y tecnologias actuales.
También tenemos comunicaciones diarias con el equipo de desarrollo de nuevos negocios donde vemos juntos cursos a diseñar, temarios, etc. Una vez nos ponemos de acuerdo realizo los temarios de nuevos cursos y ellos se encargan de venderlos a las empresas dentro de América Latina.

   `;

  var pregunta5 = `¿Qué opinas de la proporción de mujeres en el área de informática, es razonable, te preocupa la cantidad, qué opinas se pueda hacer para que más mujeres se involucren?`; 
  var respuesta5 = `Varía mucho en cada país, en mi master por ejemplo hay entre 20% a un 40%. Sin embargo en desarrollo java por ejemplo en Uruguay hay muy pocas, en la mayoría de mis proyectos en java he sido la única mujer. Hay varias organizaciones tratando de cambiar esto en diferentes partes del mundo. 
<br/><br/> 
Para poder cambiar esta situación creo que hay que empezar desde la niñez y juventud, desde la enseñanza en las escuelas y en los hogares. Tratar de no encasillar a una persona por su sexo, apostar a la diversidad y a la inclusión. Hay mucho por hacer. `;

  var pregunta6 = `¿Qué consejo puedes darle a aquellas mujeres que están en duda si comenzar a programar? `;
  var respuesta6 = `Creo que en sistemas hoy en dia hay mucha diversidad, no solo programar, hay diferentes campos. En Uruguay en particular está un poco segmentado a QA, programación, BA, PM. Sin embargo, es bastante más amplio en el resto del mundo.
<br/><br/>
Les diría que no se dejen vencer por miedos o malos consejos, que siempre los hay. 
Que prueben primero hacer algo por las de ellas y ver si les gusta. Lo que yo hice fue hacer un programita de una calculadora y leer varios libros y ahí me di cuenta que me gustaba. Luego fui a varias charlas, creo que es importante informarse sobre las carreras o cursos que hay, todo lo que hay disponible y soñar que es gratis. El poder pensar más allá de lo racional, más allá de “lo que hay trabajo”, puede ayudarnos a no encasillarnos y evitar estar en lugares que no queremos estar el resto de nuestra vida. 

  `;

  var pregunta7 = `¿Qué concepto tienes de las certificaciones, muchos opinan que no son necesarias, pero estoy seguro tienen su peso, puedes contarnos tu experiencia y qué opinas de certificarte en distintas tecnologías? .`;
  var respuesta7 = `Yo estoy certificada en varias tecnologías, y yo creo que suma mucho. Primero nos suma en conocimiento porque para certificarte debes saber mucho y al detalle de una determinada tecnología. 
Por otro lado, al currículum también, es muy importante, en mi caso me sumo puntos en varias entrevistas y me dio la oportunidad de poder ser uno de los pocos instructores en Spring Framework en América Latina.
<br/><br/>
Creo que en muchos países como Uruguay no se le da la importancia que merecen las certificaciones a diferencia de otros países como es USA. En general las empresas no apuestan y los empleados tampoco apuestan a mejorar su cv fuera del ámbito laboral. Pero yo creo que a medida que vaya pasando el tiempo, espero que nos vayamos dando cuenta que es algo que lo único que genera es algo positivo, y es conocimiento y reconocimiento.

  `;

  var pregunta8 = `Te gustaría contar un poco sobre tu actividad en For The Animals Uruguay y BastadeTas, que experiencias como voluntaria y como otros podríamos ayudar? `;
  var respuesta8 = `Mi experiencia comenzó en BastadeTas, la cual colaboré como voluntaria en lanzar el primer motocarro piloto en Montevideo. Fue una experiencia muy enriquecedora y con un final muy feliz y que ha dado lugar a que hoy en día se está considerando realizar varios motocarros más.
En For de Animals Uruguay he estado colaborando en algunas campañas y ahora más que nada con algunos compañeros seguimos en contacto y tratando de ayudar en lo que se pueda. Hay muy pocas personas actualmente colaborando y siempre se precisan más manos y más ideas para aportar. 
<br/><br/>
Actualmente estoy trabajando en una nueva idea que es compartir la visión actual de en donde estamos, lo que es el querer informar a través de redes sociales sobre acontecimientos, eventos, problemas de todo tipo desde sociales, relacionados con maltrato animal y también medio ambiente.

 `;

  var pregunta9 = `En tu carrera trabajaste de manera remota, como es la experiencia de llegar a trabajar en otro país?`;
  var respuesta9 = ` Yo llegue para realizar el master, por lo que aún no estado buscando trabajo afuera.
Pero te puedo decir que he estado en ferias de trabajo y estando aquí, es muy diferente todo. Más que nada el idioma y la forma de relacionarte en un ambiente que al principio es nuevo. Pero sin dudas es algo muy estimulante, desafiante y enriquecedor.`;
 
  var pregunta10 = `Como educadora que fue lo que más te gusta de enseñar a otros? algún consejo para los estudiantes a la hora de aprender a programar?.`;
  var respuesta10 =  `Lo que más disfruto cuando enseño es el poder volcar mi experiencia en otros, mostrando situaciones reales en el desarrollo de software, arquitecturas, tecnologías y metodologías. El poder dar ese valor agregado que lo da la experiencia y el estar en la cancha. `;

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

      $("#pregunta9").html(pregunta9);
     $("#respuesta9").html(respuesta9);

      $("#pregunta10").html(pregunta10);
     $("#respuesta10").html(respuesta10);

 
 
      $(".nombre").html(`<b> ${nombre} </b> `);
       $("#eValentinaImg").attr("title",nombre).attr("alt",intro);
};


 function entrevistasGabriela(){
 
 

  var nombre = "Gabriela";
  var intro = `Gabriela  Bazzano es Analista en Computación de la Universidad de la Republica, actualmente trabaja como Ingeniera de Software Senior en PayTrue Solutions`;

  var pregunta1 =` Trabajas en desarrollo actualmente, se puede saber dónde y de que trata tu trabajo ahí?.  `;
  var respuesta1 = `Sí, actualmente tengo un cargo de Senior Software Engineer en una empresa dedicada al negocio de switching y autorización de pagos.
Las tareas que cumplo actualmente son básicamente, análisis, diseño y desarrollo de nuevas funcionalidades sobre el switch de la empresa, así como soporte y customización de un cliente específico de Brasil.`;

  var pregunta2 =  `¿Donde fue que aprendiste a programar, algún recurso que te fuera de gran utilidad para aprender cuando comenzaste?. `;
  var respuesta2 = `A programar aprendí haciendo tareas en la Facultad de Ingeniería de UDELAR, creo que es una gran Facultad, ya que más allá de programar es un ámbito donde también se aprende a pensar y a ser autodidacta en cuanto a tecnologías.
A mi entender es la mejor manera de aprender, tener los conocimientos básicos, investigar y aprender a base de prueba y error.`;

  var pregunta3 = `Qué tecnologías actuales crees que no veremos en 4 o 5 años y que tecnología recomiendas investigar a los nuevos programadores?.`;
  var respuesta3 = `Actualmente existe una tendencia a generar apps para todo tipo de servicio, creo que el mercado está saturado además de que es posible que mucha de esta tecnología quede obsoleta en poco tiempo, es mi forma de pensar solamente.
<br/><br/>
En cuanto a tecnologías a investigar a nuevos programadores son los clásicos, Java, C/C++ y C#, ya que son lenguajes que permiten programar múltiples aplicaciones y son la base de los n frameworks que hay en el mercado.
Para el caso de web, según mi experiencia, los clásicos son Javascript y PHP, ahora hay mucha tecnología más “moderna” pero con estos clásicos como base se aprenden fácilmente.`;
  
  var pregunta4 = `Podes contarme algo sobre cómo es un día de trabajo para ti?.`;
  var respuesta4 = `Como mencionaba anteriormente estoy trabajando actualmente para un cliente de Brasil, para el cual soy el único recurso asignado 100%, así que básicamente trabajo bastante en solitario.
En los casos en que estoy trabajando en algún proyecto nuevo para el cliente, mi día consiste, en el análisis, diseño y desarrollo del mismo.
También, en el caso de que sea necesario, ayudo al equipo de soporte en el caso de que surja algún defecto productivo que ellos no puedan solucionar o que necesiten alguna ayuda específica.
Así que un día de trabajo es bastante dinámico, en el comienzo del día puedo tener todo planificado, pero en el transcurso del mismo pueden variar mis tareas dependiendo de las prioridades de este cliente. `;

  var pregunta5 = `¿Qué opinas de la proporción de mujeres en el área de informática, es razonable, te preocupa la cantidad, qué opinas se pueda hacer para que más mujeres se involucren?`; 
  var respuesta5 = `  En los últimos años se incorporaron más mujeres a la informática, lo que es muy positivo, hubo una época, en un trabajo anterior, en el que realizaba tareas de líder de proyecto en que era la única mujer en un equipo de 15 personas, pero eso está cambiando por suerte.
<br/><br/>
Algo que me preocupa, más allá de la cantidad de mujeres, son los roles. Por ejemplo, existe un gran porcentaje de mujeres realizando tareas de QA, soporte, gestión o desarrollo, pero no hay muchos espacios para cargos de arquitectas o de desarrollo senior, en donde se puedan tomar decisiones de diseño o tecnologías, así como cargos de alta gerencia. `;

  var pregunta6 = `¿Qué consejo puedes darle a aquellas mujeres que están en duda si comenzar a programar? `;
  var respuesta6 = `Más allá de programar, creo que es una carrera en la que se aprenden múltiples negocios, por lo cual es muy dinámico y es lo que más me atrae, al menos a mí, así que si no están muy convencidas, vale la pena darle una oportunidad porque el conocimiento que se adquiere en distintas áreas de negocios, les puede ser útil en el caso de querer dar un giro.
<br/><br/>
Un consejo sería que no hay que tenerle miedo a la tecnología, todo se aprende, hoy podés estar programando en una y mañana en otra, lo que sí me parece importante es: saber qué es programar y cómo, para poder adaptarse fácilmente a cualquier cambio.`;

  var pregunta7 = `¿Qué concepto tienes de las certificaciones, muchos opinan que no son necesarias, pero estoy seguro tienen su peso, puedes contarnos tu experiencia y qué opinas de certificarte en distintas tecnologías? .`;
  var respuesta7 = `Es cierto que son importantes, más que nada para demostrar qué se sabe de cierta tecnología en el caso de búsqueda de nuevos trabajos, etc., pero como mencioné anteriormente, a mi manera de ver, lo menos importante es la tecnología, sino tener el conocimiento necesario para adaptarse a cualquiera de ellas.
En mi caso, si bien mi mayor experiencia es en Java, desarrollé varios años en PowerBuilder, también he desarrollado en C++, C# y PL-SQL.  `;

  var pregunta8 = `Puedes contarnos sobre el stack de tecnologías que más utilizas en el trabajo y cual seria tu preferido?.`;
  var respuesta8 = `Básicamente estoy programando en Java, utilizando algunos frameworks como JPA. Además de utilizar JMS y EJB para colas de mensajes.
En cuanto a bases de datos, principalmente utilizo Oracle, pero también SQL Server en algunos casos.
Finalmente, los servidores son Websphere Application Server y JBoss.
<br/><br/>
Mi preferida sin dudas, de todos los tiempos es Java, el conocer esta tecnología me ha dado la posibilidad de desarrollar tanto aplicaciones web, como de escritorio, incluso lo que estoy desarrollando ahora que es una aplicación que corre directamente en el servidor. La gran ventaja de esta tecnología es la ductilidad que tiene y las posibilidades que te da de trabajar en distintas aplicaciones. `;

  var pregunta9 = `En tu carrera has llegado a trabajar de manera remota, como es la experiencia de trabajar con clientes en otros paises?`;
  var respuesta9 = `Sí, durante estos años trabajé directamente con clientes de USA y España, incluso he trabajado on-site algunos meses en estos países. También he trabajado con clientes de Portugal y estoy trabajando con clientes de Brasil pero en estos casos no tan directamente.
He tenido experiencias buenas y malas, depende mucho de los clientes y de las personas con las que te toque trabajar. Igualmente es una gran experiencia, porque dependiendo del país, es otra cultura de trabajo, bastante diferente a la de trabajar con clientes de Uruguay.`;

  var pregunta10 = `Algún consejo para los estudiantes a la hora de aprender a programar y buscar trabajo en programación?.`;
  var respuesta10 = `Con respecto a aprender a programar, básicamente es lo que mencioné anteriormente, es más importante tener los conocimientos básicos de programación que saber programar en una tecnología específica.
Y a la hora de buscar trabajo, lo importante es armar un CV con todo lo aprendido de facultades, cursos, etc. así como los proyectos curriculares o personales en los que se haya trabajado, muy importante es que sea un CV breve no más de 2 hojas y después confiar en uno mismo, ser seguro en las entrevistas y si algo no se sabe, decir que no lo saben, pero que les gustaría aprender.`;


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

      $("#pregunta9").html(pregunta9);
     $("#respuesta9").html(respuesta9);

      $("#pregunta10").html(pregunta10);
     $("#respuesta10").html(respuesta10);

 
 
      $(".nombre").html(`<b> ${nombre} </b> `);
       $("#eGabrielaImg").attr("title",nombre).attr("alt",intro);
};
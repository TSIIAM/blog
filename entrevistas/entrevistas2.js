$(document).ready(main);

	function main(){

 
 botones();
  entrevistasMatias();
	$("#eMatias").on("click",entrevistasMatias);
	$("#eDiego").on("click",entrevistasDiego);
  $("#eRenso").on("click",entrevistasRenso);


}

function botones(){
  var photos = [
    "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAuWAAAAJGVlYWQwNTk4LTU1Y2ItNGI2Yi05YzFkLWQyMmYwNmYyZDU2NA.jpg",
    "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAIXAAAAJDBiYmY1MjY2LWVhNjUtNGY5Ni1iNjU2LTkxNGJlMTkyOGU1MQ.jpg",
    "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAtlAAAAJDdhOTkwMGQ1LTRmZmQtNDM1Yi04ZGVkLTY1ZmMxZGFjZjIzMw.jpg",
 
  ];

$("#eMatiasImg").attr("src",photos[0]);
$("#eDiegoImg").attr("src",photos[1]);
$("#eRensoImg").attr("src",photos[2]);
 
}

 function entrevistasMatias(){
 
	var nombre = "Matias";
  var intro = `Para los que no conocen a Matias, él  es actualmente   el administrador del grupo de FreeCodeCamp Montevideo, se encuentra detras de la organización de los ultimos eventos y es uno de los principales desarrolladores detras del sitio <a href="www.fccmontevideo">FCC Montevideo</a>, un muy buen amigo y referente en el grupo.`;

	var pregunta1 = `Si actualmente trabajo como desarrollador en Oracle - NetSuite en la parte de eCommerce, soy parte de un equipo que se encarga de preparar pruebas de concepto o demos ademas de el desarrollo de módulos que agregan funcionalidades o modifican algunas existentes. 
  Diariamente utilizo backbone.js, jquery, sass, handlebars, gulp, entre otras tecnologias.`;

 	var pregunta2 = `Estudié la carrera Tecnólogo en Informática en Paysandû (Tecnicamente aun estoy cursando la carrera aunque ya tengo aprobada la tesis jaja), actualmente estoy cursando unas materias para completar la cantidad de créditos y obtener el título.
  <br /><br />La verdad que pude estudiar lo que quería ya que en este caso es una carrera más enfocada a lo práctico aunque también cuenta con buena base de ciencias de la computación por lo cual me parece una carrera bastante equilibrada y que te permite insertarse en el mercado laboral sin ningún problema, y con el gran plus de que es una carrera gratuita lo que en mi caso me facilitó el poder estudiar.
  Actualmente no tengo pensado seguir ninguna otra carrera formal aunque no descarto la posibilidad en el futuro.`;


 	var pregunta3 = `Creo que por mas que realice una carrera formal siempre me caracterice por ir más allá, buscar e investigar por mi cuenta para reforzar los conocimientos que iba adquiriendo durante la carrera y aprender cosas nuevas que no se brindaban en la misma y que me resultaban de interés, creo que es de vital importancia ser una persona proactiva y estar constantemente buscando aprender cosas nuevas y mejorar cada dia. 
  <br /><br />Sin duda que esto tuvo gran impacto en mi desempeño y me abrió las puertas para lo que sería mi primer trabajo como programador y postriormente también mi trabajo actual.

   El mejor recurso que utilice para aprender a programar fue Google, el buscador es el punto de partida para todo lo demás, el aprender a buscar la solución a los problemas que se me presentaban, entender el por que de los errores y el por que de las soluciones. 
   <br /><br />Hoy en dia hay miles de recursos de los cuales valerse para aprender pero creo que es sumamente importante aprender a buscar bien en internet (muy importante buscar en ingles e ir aprendiendo el idioma en el proceso) y saber discernir la buen informacion de la no tan buena. 
   <br /><br />No dudo que las largas madrugadas depurando codigo, batallando con un error hasta poder solucionarlo o irse a dormir pensando en el problema(y muchas veces despertarse con la solución) todas esas son cosas que me ayudaron mucho y que me ayudan aún hoy a la hora de aprender.`;
  

  var pregunta4 = `La verdad es que es muy difícil decir lo que va a pasar de aquí a 1 año asi que imaginate en 3 o 4 jajaja, pero las bases fundamentales de las ciencias de la computación y la programación van a seguir siendo las mismas, incluso las tecnologias de punta que vemos hoy (o veremos en el futuro) aplican conceptos conocidos de maneras y en contextos diferentes que hacen posible nuevas formas de crear y que van evolucionando constantemente.

        <br /><br />Personalmente recomiendo todo lo que es el entorno y la plataforma web dado el gran alcance que tiene y la relativa facilidad con la que se puede crear algo funcional en poco tiempo, dicho esto vale aclarar que es todo un universo de posibilidades por lo que si no se transita con precaución podes perderte dentro de la gran cantidad de cosas que aprender, es fácil ir de un lado para otro si hacer ni aprender nada en concreto. 
        <br /><br />Sin dudas recomiendo que aprendan JavaScript como primer lenguaje ya que es el lenguaje de la web y por lo que mencionaba previamente, además está presente en cada vez mas lugares y sin dudas es una gran herramienta que va a continuar creciendo y mejorando. `;

    var pregunta5 = `Creo que la paga es buena en general aunque como todo depende mucho de la experiencia, el mercado y otros factores, pero creo que lo que hay que tener presente es la gran demanda de talento que hay, la cual es cada vez mayor y plantea un escenario de muchas oportunidades para aquellos que las quieran y sepan aprovechar. De la mano con esa demanda viene generalmente los beneficios que brindan las empresas para tratar de captar esos talentos y mantenerlos contentos en el lugar de trabajo.
     <br /><br />Generalmente se tienen horarios más flexibles, se puede trabajar desde la casa en ocasiones, oficinas con algún tipo de entretenimiento o cosas similares son comunes también, en mi caso hay mesa de ping pong y play station por ejemplo.
     <br /><br />Creo que esta muy bueno que la empresas busquen tener a sus empleados cómodos para que puedan rendir mejor en su trabajo y todos salgan beneficiados.`;


     var pregunta6 = `Bueno en mi caso comienzo a las 10:00 mas o menos (hasta las 19 aprox), primero revisando mails y esas cosas para ver si hay algo de prioridad que tenga que resolver, despues de eso continuo con las tareas o proyectos que venía trabajando desde antes y que aún no han sido completadas, también tengo que estar pendiente de las metas que tengo para el trimestre e ir completando eso tambien. 
      <br /><br />Como siempre seguir aprendiendo constantemente mirando código de los demás, leyendo documentación acerca de la plataforma y también pensando maneras de mejorar la forma en que trabajamos dentro del equipo y cuales son las dificultades que tenemos diariamente en los procesos y ese tipo de cosas. Actualmente estoy trabajando con un poco de automated testing para un módulo que desarrollamos y por supuesto aprovechando para aprender mas sobre esa temática que no he profundizado mucho todavía y que es muy importante en el desarrollo de software.`;

      $(".intro").html(intro);
     $("#pregunta1").html(pregunta1);
      $("#pregunta2").html(pregunta2);
       $("#pregunta3").html(pregunta3);
        $("#pregunta4").html(pregunta4);
         $("#pregunta5").html(pregunta5);
          $("#pregunta6").html(pregunta6);
          $(".extras").hide();
     	$(".nombre").html(`<b> ${nombre} </b> `);
};



 function entrevistasDiego(){
 
	var nombre = "Diego";
    var intro = `Diego  es un Ingeniero de Software en Mercadolibre Uruguay, pude conocerlo mediante Linkedin y estuvo de acuerdo en participar en las entrevistas para mi blog y poder dar su opinion.`;



	var pregunta1 = `Actualmente trabajo como Ingeniero Sr. de Software para Mercadolibre en la oficina de Uruguay.
          <br/>No solo programo y mantengo las features del site, sino que como ingeniero me debo encargar de analizar, organizar e implementar las nuevas soluciones a los problemas que se le plantean a mi equipo.
          <br/><br/>Estas soluciones no  se resuelven solo en código, sino que también se debe tener conocimiento de redes, administración de base de datos, escalabilidad, tolerancia a fallas y sistemas distribuidos en general.`;

 	var pregunta2 = ` Desde que era adolecente me interesé por la informática, principalmente por dos temas, el primero y me parece que más clásico es aprender a crear juegos y el segundo era mi interés sobre la seguridad informática.
  <br />Por lo tanto en mis últimos años de estudios secundarios decidí inscribirme a un curso de Analista en Sistemas, de forma que al terminar la secundaria también  me recibí de Analista.
  <br/><br/> Luego de eso me inscribí en la facultad de Ingeniería donde curso actualmente la carrera de Ingeniero en Sistemas.`;

 	var pregunta3 = `Me parece que ser auto didacta es uno de los principales skills de alguien que se quiere dedicar a esta carrera.Como todo elmundo sabe esta es una carrera donde todos los días surgen cosas nuevas para aprender y es muy necesaria tener una actitud de curiosidad para sentirse interesado por todo ese nuevo conocimiento.
  <br /><br />En mi caso el mejor recurso para esto es estar suscrito a blogs de tecnología, utilizo  <a href="www.feedly.com">feedly</a> como lector de RSS y estoy suscrito a más de 50 blogs, de forma de enterarme cuanto antes de las nuevas noticias en tecnología. 
  <br>A esto también le sumo que leo periódicamente la portada de <a href="www.hackernews.com">Hackernews</a> a la que considero una de las mejores fuentes para enterarse de lo más actual.`;



   var pregunta4 = `Las tecnologías son cosas muy cambiantes, no me preocuparía por
                    cual dejará de existir en el corto, mediano o largo plazo, sino que
                    recomendaría aprender a resolver problemas independientemente de la
                    tecnología que se utilice. 
                    <br/><br/>
                    No soy fanático de las personas que dicen, “aprende X lenguaje” sino
                    más bien que recomendaría aprender a programar, aprender sobre
                    paradigmas de programación y sobre patrones de desarrollo, lo cual te
                    preparará para aprender cualquier lenguaje en el futuro.
                    <br/><br/>
                    Lo mismo sucede con las bases de datos, no puedo decir cosas como
                    “mysql dejará de existir en 10 años” sino que recomendaría aprender
                    los conceptos de bases de datos SQL y noSQL como administrarlas y
                    cuándo utilizar una o la otra, de forma que si el día de mañana mysql
                    deja de existir pero surge otra estarán listos para aprenderla sin
                    problemas.
                    `;

    var pregunta5 = `Esta es una pregunta que depende mucho del contexto, tal como el
                    país y la empresa donde se trabaje, ademas de la experiencia que uno
                    tenga como programador.
                    <br/>A pesar de eso me parece que en general es una carrera mejor paga en
                    comparación a otras, tengo como ejemplo a muchos amigos que
                    decidieron aprender otras carreras y a pesar de estar recibidos aun así
                    les cuesta conseguir trabajo, en cambio a otros que decidieron aprender
                    sobre tecnología le llegan 2 o 3 ofertas de trabajo por mes.
                    <br/><br/>
                    En cuanto a beneficios de dedicarse a esta carrera, me parece que el
                    principal es que estamos en una “nueva era industrial” donde en vez de
                    aprender como trabajar en una fábrica, todo tiende a aprender sobre
                    tecnología, las fábricas con empleados se convirtieron en fábricas con
                    robots y se necesitan mas personas que puedan programarlos, ademas
                    se nota una clara tendencia al cambio de trabajos físicos por más
                    trabajos intelectuales, donde este es uno de los principales.
                    se nota una clara tendencia al cambio de trabajos físicos por mas
                    trabajos intelectuales, donde este es uno de los principales.
                    <br/><br/>
                    Fuera de eso, yendo más a los beneficios de trabajar en una empresa
                    de tecnología y puntualmente en mi caso sobre trabajar en
                    Mercadolibre, los beneficios son muy variados, van desde contar con
                    horario flexible y días de home office hasta contar con la mejor oficina
                    de Montevideo, contar con vendings de snacks en la oficina, frutas
                    grátis, café gratis, invitaciones a conferencias internacionales , uno de
                    los sueldos mas competitivos del país, bonos trimestrales,
                    capacitaciones idiomáticas, entre otros muchos beneficios que con
                    gusto le comentaré a los que quieran contactarse conmigo. `;


     var pregunta6 = `No sabría exactamente como responder ante “cómo es la vida de un
                      programador Uruguayo?” porque las empresas en Uruguay son muy
                      variadas y sus metodologías de trabajo también.
                      <br>
                      Pero contando un poco sobre mi caso en Mercadolibre, comienzo con
                      que en la oficina no tenemos horarios establecidos, no “marcamos reloj”
                      cuando llegamos ni cuando nos vamos, sino que podemos estar
                      entrando y saliendo de la oficina sin problemas.
                      <br/>Yo normalmente llego
                      entre las 9am y las 10am, como utilizamos Scrum lo que hacemos en mi
                      equipo aprox. a las 10:30am, cuando ya llegaron todos mis compañeros
                      de equipo, es hacer una reunion diaria (daily) donde comentamos que
                      fue lo que hicimos el día anterior y que haremos este día, luego de
                      preparar y distribuir las tareas me dispongo a realizarlas.
                      <br/><br/>
                      Al ser un programador Sr. mis tareas suelen ser mas sobre análisis que
                      sobre implementación, por lo que la mayoría de mi día lo distribuyo en
                      reuniones con compañeros de equipo, de otros equipos o
                      videoconferencia con equipos en oficinas de otros países, aunque a
                      veces también toca tirar algunas lineas de código ;). `;

                      
                       
      var pregunta7 = ` Me parece que hay una gran falta de desarrolladores en el mundo, no
                      solo en Uruguay. Esta es una carrera donde la demanda crece mucho
                      mas rápido que la oferta, un claro ejemplo de esto se ve cuando te
                      enteras que existen libros como “python for kids” o “coding games in
                      scratch” donde se busca enseñarle a programar a las nuevas
                      generaciones.`;

      var pregunta8 = `Me parece que el mejor consejo es siempre tener una actitud de
                      curiosidad y cuestionamiento. 
                      <br>
                      Al principio cuando todos estamos
                      aprendiendo lo que suele suceder es que copiamos y pegamos mucho
                      código sin entender lo que hace, por eso lo mejor es tener una actitud
                      de cuestionamiento y plantearse preguntas del estilo: ¿por qué esto
                      funciona de esta forma? ¿podría funcionar mejor? eso me parece que
                      ayudará a cualquiera para realmente aprender a programar y aprender
                      sobre computación.`;

     var pregunta9 = `Una de las cosas de este trabajo (al menos en Uruguay) es que lo que
                      se busca es experiencia comprobable, no importa si en tu curriculum
                      dice que contar con 1 master y 2 phd y que trabajaste en 5 empresas
                      antes, sino que lo que se suele hacer al contratar a alguien es tomar
                      pruebas y plantearle problemas para ver si realmente puede pensar en
                      la solución correcta y demostrar que puede implementarla.
                      <br/>
                      Por lo tanto lo que recomendaría sería leer y practicar mucho, hay
                      recursos online que sirven para esto como <a href="hackerrank.com ">hackerrank </a>  o <a href="leetcode.com ">leetcode</a> que pueden ayudarles.`;
                      
                      
                     
                            

     
    $(".intro").html(intro);

     $("#pregunta1").html(pregunta1);
      $("#pregunta2").html(pregunta2);
       $("#pregunta3").html(pregunta3);
        $("#pregunta4").html(pregunta4);
         $("#pregunta5").html(pregunta5);
          $("#pregunta6").html(pregunta6);
          $(".extras").show();
          $("#pregunta7").html(pregunta7);
          $("#pregunta8").html(pregunta8);
          $("#pregunta9").html(pregunta9);

     	$(".nombre").html(`<b> ${nombre} </b> `);
};

 
 function entrevistasRenso(){
 
  var nombre = "Renso";
  var intro = `Renso es  un egresado analista programador de la Universidad ORT y Desarrollador Sr, hoy nos da su opinion y nos cuenta brevemente un poco de su  rutina de trabajo.`;

  var pregunta1 = `Actualmente trabajo en PayGroup. Soy analista funcional y desarrollador.
  <br/> Digamos que cuando un cliente necesita algo, me encargo de documentar sus necesidades, crear documentos de negocio, funcionales y técnicos para que los desarroladores implemente una solución.`;

  var pregunta2 = `Soy Analista programador egresado de la universidad ORT Uruguay. 
  <br/>Actualmente estoy cursando Licenciatura en Sistemas también en la ORT, todavía no tengo bien pensado que hacer en el futuro..`;


  var pregunta3 = `Para ser auto didacta sin duda se necesita mucha voluntad y dedicación. Eh aprendido algunos frameworks investigando y leyendo manuales por mi cuenta y doy fé de que se puede aprender de esta manera, pero cuesta mucho mas.
Al no contar con la experiencia de otra persona a quien preguntar (profesores, etc.) se hace mas fácil "trancarse" con algo y si uno no tiene la voluntad necesaria abandona su investigación porque no pudo avanzar.
<br/>El mejor recurso no se cual será, el que aplico sin duda es realizar un buen análisis antes de iniciar el desarrollo, de manera que cuando llegue a las partes complejas la solución ya está pensada de ante mano. `;

  

  var pregunta4 = ` Es una pregunta difícil, sinceramente no se cual desaparecerá. A un nuevo programador le recomiendo que se involucre con el mundo JAVA y el mundo Microsoft.
<br/><br/>Por el respaldo que brinda Microsoft sin importar su costo las empresas no dudan en elegirlo, y JAVA ah demostrado ser una plataforma muy robusta la cual brinda mucha confianza y siempre es considerada en todos los emprendimientos. `;

    var pregunta5 = `El tema salarial varía mucho, hay empresas chicas que pagan poco y otras que pagan mucho, y empresas grandes que pagan mucho y otras que pagan poco.
De todas maneras creo que el rubro en sí es bien remunerado. En nuestra empresa tenemos una política de trabajo que da libertad a los programadores en cuanto a su horario.

<br/><br/>Pero como todo, es siempre un compromiso profesional, hoy no puedes trabajar 8hs. no hay problema, durante la semana en vez de trabajar 8hs trabajas 9h y vas cubriendo las horas que faltaste.
Algunas veces te puedes ir antes, y otras veces toca quedarse hasta la madrugada (o mas).
Es un tema muy flexible en el cual no hemos tenido nunca problemas.`;


     var pregunta6 = ` Un día de trabajo je, bueno intentaré ser breve.
                        Llego a la oficina, dejo mi mochila y abrigo, saludo a mis compañeros de cubículo e inmediatamente a aprontar el mate en la cocina.
                        Al volver reviso el correo para verificar si algún cliente realizó alguna pregunta o solicitó alguna tarea.
                          <br/><br/>
                        Si tengo trabajo pendiente del día anterior retomo el trabajo.
                        Sino converso con mi PM para ver que tareas tengo para realizar o si puedo ayudar a alguno de mis compañeros con alguna de sus tareas.
                        Entre mate y mate conversamos de fútbol, política, tecnologías, nuevos autos que llegan al mercado uruguayo, etc.
                        Es un ambiente muy distentido y realmente agradable.
                        <br/><br/>
                        En PayGroup no trabajamos con metodologías ágiles, por lo tanto no tenemos esas mini reuniones de equipo donde todos comentan que hicieron y que harán en el día.
                        Pero cuando sale algún proyecto nuevo ahí si vamos a una sala donde los PM's hacen la presentación del mismo (cuentan a grandes razgos de que se trata) y como lo vamos a encarar.
                        <br/><br/>
                        Al mediodia salimos a comer, algunas veces a la cantina del LATU y otras compramos en el Devoto de portones.
                        Con la panza llena vuelvo a la oficina a revisar el correo nuevamente.
                        Si todo está tranquilo voy al escritorio de la persona de QA que seguramente estuvo realizando casos de prueba y/o testing de algun desarrollo que entregamos en la mañana, para pedir un feedback de su avance, si está trancado o no entiende algo enseguida evacuamos las dudas.
                        <br/><br/>
                        Vuelvo al escritorio a continuar con lo que estaba haciendo.Entre chistes (buenos y malos), mates, preguntas de trabajo y desarrollo se pasa la tarde, donde al despedirme saludo a los que estan nuevamente y me retiro a casa. je!
                        Espero haya sido una entrevista que aporte algo bueno.
                        Saludos !.`;

      $(".intro").html(intro);
     $("#pregunta1").html(pregunta1);
      $("#pregunta2").html(pregunta2);
       $("#pregunta3").html(pregunta3);
        $("#pregunta4").html(pregunta4);
         $("#pregunta5").html(pregunta5);
          $("#pregunta6").html(pregunta6);
          $(".extras").hide();
      $(".nombre").html(`<b> ${nombre} </b> `);
};
//variables correspondientes a los id y clases en HTML
const categoria = document.querySelector('#categoria');
const pregunta = document.querySelector('#pregunta');
const opciones = Array.from(document.querySelectorAll('.textoRespuesta'));
const progresoAviso = document.querySelector('#progreso');
const puntos = document.querySelector('#puntos');
const barraProgresoLlena = document.querySelector('#barraProgresoLlena');
let preguntaActual = {}
let respuestaObtenida= true;
let puntaje = 0; //Puntaje inicial
let contadorPreguntas = 0; //Contador de preguntas
let preguntasDisponibles = []
//5 categorias, 50 Preguntas con 4 opciones cada una y una respuesta correcta.
let preguntas = [

    {
        "categoria": "Muy Fácil",
        "pregunta": "¿En qué departamento se encuentra ubicada la ciudad de Medellín?",
        "opcion1": 'Antioquia',
        "opcion2": "Caldas",
        "opcion3": "Risaralda",
        "opcion4": "Nariño",
        "respuesta": 1,
    },

    {
        "categoria": "Muy Fácil",
        "pregunta": "¿Cuál es el país más poblado del mundo?",
        "opcion1": 'Rusia',
        "opcion2": "China",
        "opcion3": "India",
        "opcion4": "Estados Unidos",
        "respuesta": 2,
    },

    {
        "categoria": "Muy Fácil",
        "pregunta": "¿Cuál es el país más grande del mundo?",
        "opcion1": 'China',
        "opcion2": "Rusia",
        "opcion3": "India",
        "opcion4": "Japón",
        "respuesta": 2,
    },

    {
        "categoria": "Muy Fácil",
        "pregunta": "¿Cuántos colores tiene la bandera de Colombia?",
        "opcion1": '2',
        "opcion2": "1",
        "opcion3": "4",
        "opcion4": "3",
        "respuesta": 4,
    },

    {
        "categoria": "Muy Fácil",
        "pregunta": "¿Cuál es la capital de Colombia?",
        "opcion1": 'Medellín',
        "opcion2": "Bogotá",
        "opcion3": "Cali",
        "opcion4": "Cartagena",
        "respuesta": 2,
    },

    {
        "categoria": "Muy Fácil",
        "pregunta": "¿Cuál es el planeta más grande del sistema solar?",
        "opcion1": 'Saturno',
        "opcion2": "Júpiter",
        "opcion3": "Tierra",
        "opcion4": "Marte",
        "respuesta": 2,
    },

    {
        "categoria": "Fácil",
        "pregunta": "¿Cuál es el elemento químico más abundante en la corteza terrestre?",
        "opcion1": 'Nitrógeno',
        "opcion2": "Carbono",
        "opcion3": "Oxígeno",
        "opcion4": "Hierro",
        "respuesta": 3,
    },

    {
        "categoria": "Fácil",
        "pregunta": "¿Cuál es el planeta más cercano al sol?",
        "opcion1": 'Venus',
        "opcion2": "Tierra",
        "opcion3": "Marte",
        "opcion4": "Mercurio",
        "respuesta": 4,
    },

    {
        "categoria": "Fácil",
        "pregunta": "¿Cuál es el mineral más duro del planeta?",
        "opcion1": 'Cobre',
        "opcion2": "Oro",
        "opcion3": "Plata",
        "opcion4": "Diamante",
        "respuesta": 4,
    },

    {
        "categoria": "Fácil",
        "pregunta": "¿Qué gas liberan las plantas al hacer fotosíntesis?",
        "opcion1": 'CO2',
        "opcion2": "Oxígeno",
        "opcion3": "Nitrógeno",
        "opcion4": "Ninguno",
        "respuesta": 2,
    },

    {
        "categoria": "Normal",
        "pregunta": "¿Cuántos dientes tenemos?",
        "opcion1": '29',
        "opcion2": "30",
        "opcion3": "31",
        "opcion4": "32",
        "respuesta": 4,
    },

    {
        "categoria": "Normal",
        "pregunta": "¿Cuál es el primer elemento de la tabla periódica?",
        "opcion1": 'Hidrógeno',
        "opcion2": "Oro",
        "opcion3": "Plata",
        "opcion4": "Calcio",
        "respuesta": 1,
    },

    {
        "categoria": "Normal",
        "pregunta": "¿Qué ciencia estudia la sangre??",
        "opcion1": 'Hematología',
        "opcion2": "Cardiología",
        "opcion3": "Dermatología",
        "opcion4": "Neurología",
        "respuesta": 1,
    },

    {
        "categoria": "Normal",
        "pregunta": "¿Qué elemento está presente en absolutamente todas las moléculas orgánicas?",
        "opcion1": 'Calcio',
        "opcion2": "Potasio",
        "opcion3": "Carbono",
        "opcion4": "Helio",
        "respuesta": 3,
    },

    {
        "categoria": "Normal",
        "pregunta": "De los cinco sentidos, ¿cuál es el que se desarrolla primero?",
        "opcion1": 'Olfato',
        "opcion2": "Vista",
        "opcion3": "Gusto",
        "opcion4": "Oído",
        "respuesta": 1,
    },

    {
        "categoria": "Díficil",
        "pregunta": "¿Para una clase que tenga métodos get y set pero con atributos privados, ¿qué pilar de la programación se está aplicando?",
        "opcion1": 'Encapsulamiento',
        "opcion2": "Programación funcional",
        "opcion3": "Evitar efectos secundarios",
        "opcion4": "Ninguna de las anteriores",
        "respuesta": 1,
    },

    {
        "categoria": "Díficil",
        "pregunta": "¿Cuál de los siguientes es un lenguaje de programación compilado?",
        "opcion1": 'JavaScript',
        "opcion2": "CSS",
        "opcion3": "Java",
        "opcion4": "HTML",
        "respuesta": 3,
    },

    {
        "categoria": "Díficil",
        "pregunta": "¿Qué lenguaje de etiquetas se usa en un navegador?",
        "opciones": ["Boostrap","HTML","CSS","React"],
        "opcion1": 'Boostrap',
        "opcion2": "HTML",
        "opcion3": "CSS",
        "opcion4": "React",
        "respuesta": 2,
    },

    {
        "categoria": "Díficil",
        "pregunta": "Una etiqueta HTML que se usa para mostrar un título resaltado en negrilla: ",
        "opcion1": '<TH></TH>',
        "opcion2": "<H3></H3>",
        "opcion3": "<B></B>",
        "opcion4": "<Hr/>",
        "respuesta": 2,
    },

    {
        "categoria": "Díficil",
        "pregunta": "Un lenguaje que se usa para hacer consultas en una base de datos relacional",
        "opcion1": 'MongoDB',
        "opcion2": "SQL",
        "opcion3": "Query",
        "opcion4": "PL",
        "respuesta": 2,
    },

    {
        "categoria": "Muy Díficil",
        "pregunta": "Python es un lenguaje: ",
        "opcion1": 'Compilado',
        "opcion2": "Intepretado",
        "opcion3": "No interpretado",
        "opcion4": "No compilado",
        "respuesta": 2,
    },

    {
        "categoria": "Muy Díficil",
        "pregunta": "¿MongoDB es una base de datos de tipo?",
        "opcion1": 'Relacional',
        "opcion2": "Plana",
        "opcion3": "No-Relacional",
        "opcion4": "Ninguna de las anteriores",
        "respuesta": 3,
    },

    {
        "categoria": "Muy Díficil",
        "pregunta": "¿Un IDE conocido es?",
        "opcion1": 'Visual Studio Code',
        "opcion2": "World",
        "opcion3": "Notepad",
        "opcion4": "Netbeans",
        "respuesta": 4,
    },

    {
        "categoria": "Muy Díficil",
        "pregunta": "¿Reactjs es un framework o tecnología para?",
        "opcion1": 'Javascript',
        "opcion2": "Python",
        "opcion3": "HTML",
        "opcion4": "Java",
        "respuesta": 1,
    },

    {
        "categoria": "Muy Díficil",
        "pregunta": "¿Qué instrucción se usa para unir tablas en una base de datos relacional?",
        "opcion1": 'Combination',
        "opcion2": "UNION",
        "opcion3": "Joining",
        "opcion4": "JOIN",
        "respuesta": 4,
    },
]

const PUNTOS_CORRECTA = 100; //Puntos ganados por cada respuesta correcta
const PREGUNTAS_MAX = 5; //5 preguntas max por juego

empezarJuego = () => {
    contadorPreguntas = 0;
    puntaje = 0;
    preguntasDisponibles = [...preguntas] 
    obtenerNuevaPregunta()
}

obtenerNuevaPregunta = () =>{
    if(preguntasDisponibles.length ===0 || contadorPreguntas >= PREGUNTAS_MAX ){
        localStorage.setItem('puntajeMasReciente', puntaje) 
        return window.location.assign('/fin.html')
     }
    //Si no hay preguntas disponibles o el contador llega al numero de preguntas máximo por juego,
    // se guarda el puntaje en el almacenamiento local y se redirige a la vista de fin de juego
    
    contadorPreguntas ++;
    progresoAviso.innerText = `Pregunta ${contadorPreguntas} de ${PREGUNTAS_MAX}` //Progreso de juego
    barraProgresoLlena.style.width = `${(contadorPreguntas/PREGUNTAS_MAX) * 100}%`//Barra de progreso
    
    categoria.innerText = `Ronda ${contadorPreguntas}` //Categoria de la pregunta (Ronda)

    const indicePreguntas = Math.floor(Math.random() * preguntasDisponibles.length) //Elige el indice de una pregunta al azar
    preguntaActual = preguntasDisponibles[indicePreguntas] //Pregunta seleccionada
    pregunta.innerText = preguntaActual.pregunta; //Imprime la pregunta seleccionada en la vista

    opciones.forEach(opcion => {
        const number = opcion.dataset['number']
        opcion.innerText = preguntaActual["opcion" + number]
 }) //imprime las opciones correspondientes a la pregunta seleccionada

    preguntasDisponibles.splice(indicePreguntas, 1)
    respuestaObtenida = true
}

function select_id(id){
    return document.getElementById(id)
}

opciones.forEach(opcion => {
    opcion.addEventListener('click', e => {
        if(!respuestaObtenida) return 

        respuestaObtenida = false
        const opcionSeleccionada = e.target
        const respuestaSeleccionada = opcionSeleccionada.dataset['number']

        let classToApply = respuestaSeleccionada == preguntaActual.respuesta ? 'correcto' : 'incorrecto'
        //verifica que la opción seleccionada sea la respuesta correcta
        if(classToApply === 'correcto'){
            incrementarPuntaje(PUNTOS_CORRECTA) //si es correcta suma 100 puntos 
        }
        else {
            window.alert('¡Has perdido!')
            terminarJuego()   //si es incorrecta ejecuta la función terminarJuego()
        }
        opcionSeleccionada.parentElement.classList.add(classToApply)

        setTimeout(() => {
            opcionSeleccionada.parentElement.classList.remove(classToApply)
            obtenerNuevaPregunta()
        }, 1000) //tiempo que tardar en aparecer la siguiente pregunta
    })
})
incrementarPuntaje = num => {
    //Acumula los puntajes y los imprime en la casilla de puntaje
    puntaje+=num; 
    puntos.innerText = puntaje;
}
terminarJuego= () => {
    localStorage.setItem('puntajeMasReciente', puntaje) //al terminar el juego, guarda el puntaje en el almacenamiento local
    return window.location.assign('/fin.html') //Redirije a la vista de fin de juego
}
empezarJuego()
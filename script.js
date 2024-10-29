new Vue({ 
    el: '#app',
    data: {
        preguntaActual: 0,
        respuestas: [],
        resultadoVisible: false,
        preguntas: [
            {
                texto: "¿Cuál es tu color favorito?",
                opciones: [
                    { texto: "Rojo", puntos: 3 },
                    { texto: "Azul", puntos: 1 },
                    { texto: "Verde", puntos: 2 }
                ]
            },
            {
                texto: "¿Qué actividad disfrutas más?",
                opciones: [
                    { texto: "Leer", puntos: 2 },
                    { texto: "Deporte", puntos: 3 },
                    { texto: "Cocinar", puntos: 1 }
                ]
            },
            {
                texto: "¿Prefieres el día o la noche?",
                opciones: [
                    { texto: "Día", puntos: 1 },
                    { texto: "Noche", puntos: 3 }
                ]
            },
            {
                texto: "¿Qué tipo de música prefieres?",
                opciones: [
                    { texto: "Rock", puntos: 3 },
                    { texto: "Clásica", puntos: 1 },
                    { texto: "Pop", puntos: 2 }
                ]
            },
            {
                texto: "¿Cuál es tu estación del año favorita?",
                opciones: [
                    { texto: "Primavera", puntos: 2 },
                    { texto: "Verano", puntos: 3 },
                    { texto: "Invierno", puntos: 1 }
                ]
            },
            {
                texto: "¿Qué género de películas te gusta más?",
                opciones: [
                    { texto: "Acción", puntos: 3 },
                    { texto: "Comedia", puntos: 2 },
                    { texto: "Drama", puntos: 1 }
                ]
            },
            {
                texto: "¿Cuál es tu comida favorita?",
                opciones: [
                    { texto: "Pizza", puntos: 3 },
                    { texto: "Ensalada", puntos: 1 },
                    { texto: "Pasta", puntos: 2 }
                ]
            },
            {
                texto: "¿Qué prefieres para vacaciones?",
                opciones: [
                    { texto: "Playa", puntos: 3 },
                    { texto: "Montaña", puntos: 2 },
                    { texto: "Ciudad", puntos: 1 }
                ]
            },
            {
                texto: "¿Cuál es tu deporte favorito?",
                opciones: [
                    { texto: "Fútbol", puntos: 3 },
                    { texto: "Baloncesto", puntos: 2 },
                    { texto: "Natación", puntos: 1 }
                ]
            },
            {
                texto: "¿Cómo prefieres pasar tu tiempo libre?",
                opciones: [
                    { texto: "Con amigos", puntos: 3 },
                    { texto: "Solo", puntos: 1 },
                    { texto: "Con la familia", puntos: 2 }
                ]
            },
            {
                texto: "¿Cuál es tu bebida favorita?",
                opciones: [
                    { texto: "Café", puntos: 3 },
                    { texto: "Té", puntos: 2 },
                    { texto: "Jugo", puntos: 1 }
                ]
            },
            {
                texto: "¿Qué prefieres hacer en un día lluvioso?",
                opciones: [
                    { texto: "Leer un libro", puntos: 1 },
                    { texto: "Ver una película", puntos: 2 },
                    { texto: "Salir bajo la lluvia", puntos: 3 }
                ]
            }
        ]
    },
    methods: {
        siguientePregunta() {
            this.preguntaActual++;
        },
        mostrarResultado() {
            this.resultadoVisible = true;
        },
        obtenerResultado() {
            const totalPuntos = this.respuestas.reduce((total, puntos) => total + puntos, 0);
            if (totalPuntos <= 5) {
                return "Eres una persona tranquila y relajada.";
            } else if (totalPuntos <= 10) {
                return "Eres una persona equilibrada y sociable.";
            } else {
                return "Eres una persona enérgica y apasionada.";
            }
        },
        reiniciarTest() {
            this.preguntaActual = 0;
            this.respuestas = [];
            this.resultadoVisible = false;
        }
    }
});

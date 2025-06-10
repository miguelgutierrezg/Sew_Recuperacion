class Pregunta {
    constructor(texto, opciones, correcta) {
        this.texto = texto;
        this.opciones = opciones;
        this.correcta = correcta;
    }

    esCorrecta(indice) {
        return indice === this.correcta;
    }
}

class Juego {
    constructor(preguntas) {
        this.preguntas = preguntas;
        this.indice = 0;
        this.aciertos = 0;

        const secciones = document.querySelectorAll("main > section");
        this.seccionJuego = secciones[1];
        this.seccionResultado = secciones[2];

        const elementos = this.seccionJuego.querySelectorAll("article > *");
        this.h3 = elementos[0];
        this.lista = elementos[1];
        this.boton = elementos[2];
        this.parrafoResultado = this.seccionResultado.querySelector("p");

        this.boton.addEventListener("click", () => this.siguiente());
        this.mostrar();
    }

    mostrar() {
        const actual = this.preguntas[this.indice];
        this.h3.textContent = actual.texto;
        this.lista.innerHTML = "";

        actual.opciones.forEach((op, i) => {
            const li = document.createElement("li");
            const input = document.createElement("input");
            input.type = "radio";
            input.name = "respuesta";
            input.value = i;
            input.id = `resp${i}`;

            const label = document.createElement("label");
            label.setAttribute("for", `resp${i}`);
            label.textContent = op;

            li.appendChild(input);
            li.appendChild(label);
            this.lista.appendChild(li);
        });
    }

    siguiente() {
        const seleccion = this.seccionJuego.querySelector('input[name="respuesta"]:checked');
        if (!seleccion) return;

        const valor = parseInt(seleccion.value);
        if (this.preguntas[this.indice].esCorrecta(valor)) {
            this.aciertos++;
        }

        this.indice++;

        if (this.indice < this.preguntas.length) {
            this.mostrar();
        } else {
            this.seccionJuego.remove();
            this.parrafoResultado.textContent = `Has acertado ${this.aciertos} de ${this.preguntas.length}.`;
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const preguntas = [
        new Pregunta("¿Cuál es el concejo al que pertenece Langreo?", ["Siero", "Oviedo", "Langreo", "Mieres", "Gijón"], 2),
        new Pregunta("¿Qué río atraviesa Langreo?", ["Nalón", "Narcea", "Sella", "Caudal", "Esva"], 0),
        new Pregunta("¿En qué provincia está Langreo?", ["Lugo", "León", "Cantabria", "Asturias", "Ourense"], 3),
        new Pregunta("¿Qué parroquia es parte de Langreo?", ["La Felguera", "Luanco", "Cudillero", "Luarca", "Vegadeo"], 0),
        new Pregunta("¿Qué comida es típica de Asturias?", ["Fabada", "Paella", "Gazpacho", "Salmorejo", "Cocido lebaniego"], 0),
        new Pregunta("¿Qué plato típico asturiano se elabora con fabes, chorizo y morcilla?", ["Cachopo", "Fabada", "Pote", "Callos", "Arroz a la cubana"], 1),
        new Pregunta("¿Qué postre se cocina lentamente con canela y cáscara de limón?", ["Frixuelos", "Compota", "Arroz con leche", "Tarta de manzana", "Flan"], 2),
        new Pregunta("¿Qué plato consiste en filetes empanados rellenos de jamón y queso?", ["Cachopo", "Cordera al horno", "Caldereta", "Milanesa", "Fabada"], 0),
        new Pregunta("¿Qué dulce asturiano es similar a una crêpe?", ["Frixuelos", "Casadielles", "Tarta de queso", "Carbayón", "Magdalena"], 0),
        new Pregunta("¿Qué tipo de plato es el arroz con leche?", ["Entrante", "Aperitivo", "Plato principal", "Postre", "Bebida"], 3),
    ];

    new Juego(preguntas);
});

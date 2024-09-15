function siguienteBloque(bloque) {
    // Ocultamos todos los bloques
    document.getElementById('bloque1').style.display = 'none';
    document.getElementById('bloque2').style.display = 'none';
    document.getElementById('bloque3').style.display = 'none';
    
    // Mostramos el bloque correspondiente
    document.getElementById('bloque' + bloque).style.display = 'block';
}

function calcularPuntuacion() {
    const genero = document.querySelector('input[name="genero"]:checked').value;
    let atencion = 0, claridad = 0, reparacion = 0;

    // Sumamos las puntuaciones por cada dimensión
    for (let i = 1; i <= 8; i++) {
        atencion += parseInt(document.getElementById("item" + i).value);
    }
    for (let i = 9; i <= 16; i++) {
        claridad += parseInt(document.getElementById("item" + i).value);
    }
    for (let i = 17; i <= 24; i++) {
        reparacion += parseInt(document.getElementById("item" + i).value);
    }

    let mensaje = `<h3>Resultados:</h3>`;

    // Interpretación de resultados según el género seleccionado
    if (genero === "hombre") {
        // Cuadro para Atención
        mensaje += `<div class="resultado-cuadro">
                    <h4>Atención (Puntuación: ${atencion})</h4>`;
        if (atencion < 21) {
            mensaje += `<p>Estimado miembro del equipo, su puntuación en atención es baja, con un total de ${atencion} puntos. Esto sugiere que podría tener dificultades para mantener el enfoque en sus tareas cotidianas. Le recomendamos practicar técnicas de gestión del tiempo y concentración, como la priorización de actividades y el establecimiento de rutinas diarias para mejorar su productividad.</p>`;
        } else if (atencion <= 32) {
            mensaje += `<p>Su puntuación en atención es moderada, con ${atencion} puntos. Esto indica que tiene una buena capacidad para concentrarse en sus tareas, lo que le permite ser productivo. Asegúrese de seguir perfeccionando esta habilidad para mantener su alto rendimiento en el trabajo.</p>`;
        } else {
            mensaje += `<p>Su puntuación en atención es alta, con ${atencion} puntos. Aunque es positivo tener una buena capacidad de enfoque, tenga cuidado de no obsesionarse con los detalles menores. Puede ser útil equilibrar su atención con una visión global de las tareas para evitar el agotamiento y mejorar su eficiencia.</p>`;
        }
        mensaje += `</div>`;

        // Cuadro para Claridad
        mensaje += `<div class="resultado-cuadro">
                    <h4>Claridad (Puntuación: ${claridad})</h4>`;
        if (claridad < 25) {
            mensaje += `<p>Su puntuación en claridad emocional es baja, con un total de ${claridad} puntos. Esto indica que podría tener dificultades para identificar y entender sus emociones. Desarrollar esta habilidad puede mejorar su comunicación y relaciones interpersonales. Puede beneficiarse de la introspección y la práctica de expresar sus emociones de manera más clara.</p>`;
        } else if (claridad <= 35) {
            mensaje += `<p>Su puntuación en claridad emocional es moderada, con ${claridad} puntos. Esto sugiere que tiene una buena comprensión de sus emociones, lo que le permite manejar eficazmente situaciones de estrés y relacionarse bien con sus compañeros de trabajo. Mantenga este equilibrio para mejorar aún más su bienestar emocional.</p>`;
        } else {
            mensaje += `<p>Su puntuación en claridad emocional es alta, con ${claridad} puntos. Esto indica que posee una excelente capacidad para identificar y comunicar sus emociones, lo que contribuye a una comunicación eficaz y a una gestión emocional sólida. Esta es una habilidad valiosa en entornos laborales.</p>`;
        }
        mensaje += `</div>`;

        // Cuadro para Reparación
        mensaje += `<div class="resultado-cuadro">
                    <h4>Reparación (Puntuación: ${reparacion})</h4>`;
        if (reparacion < 23) {
            mensaje += `<p>Su puntuación en reparación emocional es baja, con un total de ${reparacion} puntos. Esto sugiere que puede tener dificultades para recuperarse de emociones negativas o situaciones estresantes. Trabajar en esta habilidad le permitirá gestionar mejor sus emociones y mantener un ambiente positivo en el trabajo.</p>`;
        } else if (reparacion <= 35) {
            mensaje += `<p>Su puntuación en reparación emocional es moderada, con ${reparacion} puntos. Esto indica que es capaz de manejar sus emociones de manera efectiva, lo que le ayuda a recuperarse rápidamente de situaciones estresantes o desafiantes. Mantenga esta habilidad para fomentar un entorno laboral saludable.</p>`;
        } else {
            mensaje += `<p>Su puntuación en reparación emocional es alta, con ${reparacion} puntos. Esto sugiere que tiene una excelente capacidad para recuperarse de emociones negativas y mantener un estado emocional positivo. Esta habilidad es crucial para mantener la resiliencia en su vida laboral.</p>`;
        }
        mensaje += `</div>`;

    } else if (genero === "mujer") {
        // Cuadro para Atención
        mensaje += `<div class="resultado-cuadro">
                    <h4>Atención (Puntuación: ${atencion})</h4>`;
        if (atencion < 24) {
            mensaje += `<p>Querida miembro del equipo, su puntuación en atención es baja, con un total de ${atencion} puntos. Esto puede indicar dificultades para concentrarse en las tareas asignadas. Le recomendamos aplicar técnicas como la creación de listas de tareas o la segmentación del tiempo en intervalos más manejables para mejorar su enfoque.</p>`;
        } else if (atencion <= 35) {
            mensaje += `<p>Su puntuación en atención es moderada, con ${atencion} puntos. Tiene una buena capacidad para concentrarse en las tareas importantes, lo que es esencial para mantener la productividad. Siga desarrollando esta habilidad para mejorar aún más su desempeño.</p>`;
        } else {
            mensaje += `<p>Su puntuación en atención es alta, con ${atencion} puntos. Aunque una alta capacidad de atención es beneficiosa, asegúrese de no perder la perspectiva general por enfocarse demasiado en los detalles. Le recomendamos practicar una visión más amplia para balancear su rendimiento.</p>`;
        }
        mensaje += `</div>`;

        // Cuadro para Claridad
        mensaje += `<div class="resultado-cuadro">
                    <h4>Claridad (Puntuación: ${claridad})</h4>`;
        if (claridad < 23) {
            mensaje += `<p>Su puntuación en claridad emocional es baja, con ${claridad} puntos. Esto puede dificultar la expresión de sus emociones. Trabajar en su claridad emocional le permitirá relacionarse mejor con los demás y expresar sus sentimientos de manera más clara y efectiva.</p>`;
        } else if (claridad <= 34) {
            mensaje += `<p>Su puntuación en claridad emocional es moderada, con ${claridad} puntos. Esto indica una buena capacidad para comprender y comunicar sus emociones, lo que es esencial para manejar el estrés y las relaciones interpersonales en el trabajo.</p>`;
        } else {
            mensaje += `<p>Su puntuación en claridad emocional es alta, con ${claridad} puntos. Esto refleja una gran habilidad para identificar y expresar sus emociones, lo que facilita una comunicación efectiva y el bienestar emocional en el entorno laboral.</p>`;
        }
        mensaje += `</div>`;

        // Cuadro para Reparación
        mensaje += `<div class="resultado-cuadro">
                    <h4>Reparación (Puntuación: ${reparacion})</h4>`;
        if (reparacion < 23) {
            mensaje += `<p>Su puntuación en reparación emocional es baja, con un total de ${reparacion} puntos. Esto indica que podría beneficiarse al desarrollar su capacidad para recuperarse emocionalmente de situaciones difíciles. Practicar técnicas de manejo del estrés y autocuidado puede ser de gran ayuda.</p>`;
        } else if (reparacion <= 34) {
            mensaje += `<p>Su puntuación en reparación emocional es moderada, con ${reparacion} puntos. Esto demuestra que tiene una capacidad sólida para manejar y recuperarse de situaciones emocionales desafiantes. Esta habilidad es fundamental para mantener el equilibrio emocional en su vida laboral.</p>`;
        } else {
            mensaje += `<p>Su puntuación en reparación emocional es alta, con ${reparacion} puntos. Esto indica una excelente capacidad para gestionar y recuperarse de emociones negativas. Esta habilidad le permite mantener una actitud positiva y resiliente frente a los desafíos.</p>`;
        }
        mensaje += `</div>`;
    }



    // Ocultamos todos los bloques y la selección de género, y mostramos el resultado
    document.getElementById('bloque1').style.display = 'none';
    document.getElementById('bloque2').style.display = 'none';
    document.getElementById('bloque3').style.display = 'none';
    document.getElementById('seleccionGenero').style.display = 'none';
    
    // Mostramos el contenedor de resultados
    document.getElementById('resultadoMensaje').innerHTML = mensaje;
    document.getElementById('resultado').style.display = 'block';
}

function volverLogin() {
    window.location.href = 'index.html'; // Cambia esto si la ubicación de tu página de login es diferente
}
function ocultarResultado() {
    document.getElementById('resultado').style.display = 'none';
}

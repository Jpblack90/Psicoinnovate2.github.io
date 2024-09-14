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
       // mensaje += `<p><strong>Atención:</strong> `;
        if (atencion < 21) mensaje += "Estimado miembro del equipo, su puntuación en atención fue menor a 21, lo que sugiere que puede haber dificultades para mantener el enfoque en sus tareas. Le recomendamos trabajar en técnicas para mejorar su concentración y gestionar mejor sus prioridades, lo que puede optimizar su rendimiento en el trabajo.";
        else if (atencion <= 32) mensaje += "Su puntuación en atención es de 22 a 32, lo que indica que tiene una buena capacidad para mantener el enfoque en sus tareas y proyectos. Esto es fundamental para su productividad y eficacia en el trabajo. Le animamos a seguir utilizando y perfeccionando esta habilidad para mantener su alto rendimiento y optimizar aún más su eficiencia en el entorno laboral.";
        else mensaje += "Estimado miembro del equipo, su puntuación en atención es superior a 33, lo que sugiere que podría estar prestando demasiada atención a los detalles, lo que puede afectar su capacidad para mantener un enfoque equilibrado en sus tareas. Le recomendamos revisar sus prioridades y técnicas de gestión del tiempo para optimizar su rendimiento.";
        mensaje += `</p>`;

        //mensaje += `<p><strong>Claridad:</strong> `;
        if (claridad < 25) mensaje += "Estimado integrante, su puntuación en claridad emocional es menor a 25, lo que indica que puede mejorar en esta área. Trabajar en su claridad emocional le ayudará a comunicar mejor sus emociones y a manejar mejor las relaciones laborales.";
        else if (claridad <= 35) mensaje += "Estimado integrante, su puntuación en claridad emocional está entre 26 y 35, lo que refleja una capacidad adecuada. Siga perfeccionando esta habilidad para mantener una buena comunicación y manejo de relaciones laborales.";
        else mensaje += "Estimado integrante, su puntuación en claridad emocional es superior a 36, lo que muestra una excelente capacidad. Su habilidad para comunicar y entender emociones es destacada y fundamental para el éxito en el entorno laboral.";
        mensaje += `</p>`;

       // mensaje += `<p><strong>Reparación:</strong> `;
        if (reparacion < 23) mensaje += "Estimado colega, su puntuación en reparación emocional es menor a 23, lo que sugiere que puede mejorar en la gestión y recuperación emocional. Trabajar en esta habilidad le ayudará a manejar mejor los conflictos y mantener un ambiente laboral positivo.";
        else if (reparacion <= 35) mensaje += "Estimado profesional, su puntuación en reparación emocional está entre 24 y 35, lo que indica una capacidad adecuada. Continúe desarrollando esta habilidad para mantener un entorno laboral armonioso y gestionar conflictos efectivamente. Estamos aquí para apoyarlo.";
        else mensaje += "Estimado profesional, su puntuación en reparación emocional es superior a 36, mostrando una excelente capacidad para gestionar y recuperarse de situaciones emocionales. Esto es fundamental para mantener un ambiente laboral positivo.";
        mensaje += `</p>`;
    } else if (genero === "mujer") {
       // mensaje += `<p><strong>Atención:</strong> `;
        if (atencion < 24) mensaje += "Querida miembro del equipo, su puntuación en atención fue menor a 24, lo que sugiere que puede haber dificultades para mantener el enfoque en sus tareas. Le recomendamos trabajar en técnicas para mejorar su concentración y gestionar mejor sus prioridades, lo que puede optimizar su rendimiento en el trabajo.";
        else if (atencion <= 35) mensaje += "Su puntuación en atención es de 25 a 35, lo que indica que tiene una buena capacidad para mantener el enfoque en sus tareas y proyectos. Esto es fundamental para su productividad y eficacia en el trabajo. Le animamos a seguir utilizando y perfeccionando esta habilidad para mantener su alto rendimiento y optimizar aún más su eficiencia en el entorno laboral.";
        else mensaje += "Querida miembro del equipo, su puntuación en atención es superior a 36, lo que sugiere que podría estar prestando demasiada atención a los detalles, lo que puede afectar su capacidad para mantener un enfoque equilibrado en sus tareas. Le recomendamos revisar sus prioridades y técnicas de gestión del tiempo para optimizar su rendimiento.";
        mensaje += `</p>`;

        //mensaje += `<p><strong>Claridad:</strong> `;
        if (claridad < 23) mensaje += "Querida integrante, su puntuación en claridad emocional es menor a 23, lo que sugiere que puede mejorar en esta área. Trabajar en su claridad emocional le ayudará a comunicar mejor sus emociones y manejar las relaciones laborales. Estamos aquí para apoyarla.";
        else if (claridad <= 34) mensaje += "Querida integrante, su puntuación en claridad emocional está entre 24 y 34, indicando una capacidad adecuada. Siga desarrollando esta habilidad para mantener una buena comunicación y manejo de relaciones laborales.";
        else mensaje += "Querida integrante, su puntuación en claridad emocional es superior a 35, mostrando una excelente capacidad. Su habilidad para comunicar y entender emociones es destacada y beneficiosa para el entorno laboral.";
        mensaje += `</p>`;

       // mensaje += `<p><strong>Reparación:</strong> `;
        if (reparacion < 23) mensaje += "Querida colaboradora, su puntuación en reparación emocional es menor a 23, lo que indica que puede mejorar en la gestión y recuperación emocional. Fortalecer esta habilidad le ayudará a manejar mejor los conflictos en el entorno laboral. Estamos aquí para apoyarla.";
        else if (reparacion <= 34) mensaje += "Querida colaboradora, su puntuación en reparación emocional está entre 24 y 34, lo que refleja una capacidad adecuada. Seguir perfeccionando esta habilidad contribuirá a un ambiente laboral armonioso y a una gestión efectiva de conflictos.";
        else mensaje += "Querida colaboradora, su puntuación en reparación emocional es superior a 35, indicando una excelente capacidad para manejar y recuperarse de situaciones emocionales. Esto es clave para mantener un entorno organizacional positivo.";
        mensaje += `</p>`;
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
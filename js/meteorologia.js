$(document).ready(function () {

    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/43.3080556,-5.6888889?unitGroup=metric&lang=es&include=days&key=D9EELQF2R5XGPFC7WJ5DEX67X&contentType=json`;

    $.ajax({
        url: url,
        method: "GET",
        dataType: "json",
        success: function (data) {
            const dias = data.days.slice(0, 7); 
            const contenedor = $("main > section").eq(1);

            dias.forEach(dia => {
                const fecha = dia.datetime;
                const icono = dia.icon; 
                const descripcion = dia.conditions;
                const temperaturaMax = dia.tempmax;
                const temperaturaMin = dia.tempmin;
                const humedad = dia.humidity;
                const lluvia = dia.precip || 0;

                const html = `
                    <article>
                        <h3>${fecha}</h3>
                        <img src="https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/PNG/4th Set - Color/${icono}.png" alt="${descripcion}" style="width:70px"/>
                        <p>Temperatura mínima: ${temperaturaMin} °C</p>
                        <p>Temperatura máxima: ${temperaturaMax} °C</p>
                        <p>Humedad: ${humedad}%</p>
                        <p>Clima: ${descripcion}</p>
                        <p>Lluvia estimada: ${lluvia} mm</p>
                    </article>
                `;

                contenedor.append(html);
            });
        },
        error: function (xhr) {
            $("main > section").eq(1).html(`<p>Error al cargar la previsión meteorológica: ${xhr.status}</p>`);
        }
    });
});

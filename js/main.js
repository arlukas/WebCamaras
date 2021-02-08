'use strict'

window.addEventListener('load', () =>{


        var text_footer = document.querySelector("#footer_label");
        var hoy = new Date();
        text_footer.innerHTML = text_footer.innerText + " - " + hoy.getFullYear();

        var calendario = document.querySelector("#calendario");

        document.querySelector("#titulo_cam").innerHTML = "PARADOR";

        var subtitulo = document.querySelector("#subtitulo");
        subtitulo.innerHTML = "Bienvenido a la pagina web de la cámara de RAJADA. Por defecto se muestra la última imagen pero puedes seleccionar cualquier otra para visualizarla e incluso descargarla.";



        var opciones={
            id: 1,
            formatter: (input, date, instance) => {
                const opt = { year: 'numeric', month: '2-digit', day: '2-digit' };
                const value = date.toLocaleDateString('es-ES', opt)
                input.value = value // => '1/1/2099'
              },
            startDay: 1,
            position: 'br',
            customDays: ['Dom', 'Lun','Mar','Mie','Jue','Vie','Sab'],
            customMonths:['Enero','Febrero','Marzo','Abril','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'],
            dateSelected: new Date(),
            onSelect: (instance, date) => {
                console.log( date );
              }
        }

        const picker = datepicker(calendario, opciones);


});
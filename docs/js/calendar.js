

$(document).ready(function () {
    now = new Date();
    dataAtual = (now.getMonth() + 1) + "/" + now.getDate() + "/" + now.getFullYear();
    $('#calendar').fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'agendaWeek,month,agendaDay'
        },
        defaultDate: dataAtual,
        navLinks: true, // can click day/week names to navigate views
        selectable: true,
        selectHelper: true,
        select: function (start, end) {
            var eventData;
            bootbox.prompt("Agende o aluno!", function(result){ 
                title = result;
                if (title != null) {
                    eventData = {
                        title: title,
                        start: start,
                        end: end
                    };
                    $('#calendar').fullCalendar('renderEvent', eventData, true); // stick? = true
                }
            });
            $('#calendar').fullCalendar('unselect');
        },
        monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
        monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
        dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado'],
        dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
        axisFormat: 'H:mm',
        timeFormat: {
            '': 'H:mm',
            agenda: 'H:mm{ - H:mm}'
        },
        buttonText: {
            today: "Hoje",
            month: "Mês",
            week: "Semana",
            day: "Dia"
        },
        eventClick: function (calEvent, jsEvent, view) {

            console.log('Event: ' + calEvent.title);
            console.log('Coordinates: ' + jsEvent.pageX + ',' + jsEvent.pageY);
            console.log('View: ' + view.name);

            // change the border color just for fun
            $(this).css('border-color', 'red');

        },
        editable: true,
        eventLimit: true, // allow "more" link when too many events
        events: [
            {
                title: 'All Day Event',
                start: '2018-02-01'
            },
            {
                title: 'Long Event',
                start: '2018-02-07',
                end: '2018-02-12'
            },
            {
                id: 999,
                title: 'Repeating Event',
                start: '2018-02-09T16:00:00'
            },
            {
                id: 999,
                title: 'Repeating Event',
                start: '2018-02-16T16:00:00'
            },
            {
                title: 'Conference',
                start: '2018-02-11',
                end: '2018-02-13'
            },
            {
                title: 'Meeting',
                start: '2018-02-12T10:30:00',
                end: '2018-02-12T12:30:00'
            },
            {
                title: 'Lunch',
                start: '2018-02-12T12:00:00'
            },
            {
                title: 'Meeting',
                start: '2018-02-12T14:30:00'
            },
            {
                title: 'Happy Hour',
                start: '2018-02-12T17:30:00'
            },
            {
                title: 'Dinner',
                start: '2018-02-12T20:00:00'
            },
            {
                title: 'Birthday Party',
                start: '2018-02-13T07:00:00'
            },
            {
                title: 'Click for Google',
                url: 'http://google.com/',
                start: '2018-02-28'
            },
            {
                title: 'Click for Google',
                url: 'http://google.com/',
                start: '2018-02-27'
            }
        ]
    });
    // $('#calendar').fullCalendar('option', 'themeSystem', 'jquery-ui');
});
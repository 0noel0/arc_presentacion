
    $(function () {
        $(document).ready(function() {
            Highcharts.setOptions({
                global: {
                    useUTC: false
                }
            });
        
            var chart;
            $('#contenedor').highcharts({
                chart: {
                    type: 'spline',
                    animation: Highcharts.svg, // don't animate in old IE
                    marginRight: 10,
                    events: {
                        load: function() {
                            response = "";
                            // set up the updating of the chart each second
                            var series = this.series[0];
                            setInterval(function() {
                                /**************  Comunicacion con el server por ajax  **************/
                                $.ajax({
                                    url: 'conexion/controller.php',
                                    type: 'POST',
                                    success: function(info){  //funcion que se ejecutara cuando el servidor de una respuesta
                                        console.log(info); //info son los datos que devuelve el servidor
                                        response = info;
                                    },
                                    error: function(jqXHR, estado, error){ //en caso de error, se ejecuta esto 
                                        console.log(error);
                                        console.log(estado);
                                    }//,timeout: 10000 //tiempo maximo de espera por la peticion
                                });
                                var x = (new Date()).getTime(), // current time
                                    y = parseInt(response);
                                series.addPoint([x, y], true, true);
                            }, 600);
                        }
                    }
                },
                title: {
                    text: 'Grafico de Frecuencia vrs Tiempo '
                },
                xAxis: {
                    type: 'datetime',
                    tickPixelInterval: 150
                },
                yAxis: {
                    title: {
                        text: 'Frecuencia en Hrz'
                    },
                    plotLines: [{
                        value: 0,
                        width: 1,
                        color: '#808080'
                    }]
                },
                tooltip: {
                    formatter: function() {
                            return '<b>'+ this.series.name +'</b><br/>'+
                            Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) +'<br/>'+
                            Highcharts.numberFormat(this.y, 2);
                    }
                },
                legend: {
                    enabled: false
                },
                exporting: {
                    enabled: false
                },
                series: [{
                    name: 'Frecuencia/Tiempo',
                    data: (function() {
                        var data = [],
                            time = (new Date()).getTime(),
                            i;
        
                        for (i = -19; i <= 0; i++) {
                            data.push({
                                x: time + i * 1000,
                                y: 0
                            });
                        }
                        return data;
                    })()
                }]
            });
        });
        
    });

$(document).on('ready', function(){
    $('#range').on('change', function(){
        valorRange = $(this).val();
        $(rangeValue).val(valorRange);
        if(valorRange>=100 && valorRange<=300)
        {
            $('#simulacion').attr("src", "imagenes/6Nodos.gif");
        }
        /**************  Comunicacion con el server por ajax  **************/
            $.ajax({
                url: 'conexion/controller.php',
                type: 'POST',
                data: {datos:valorRange},
                success: function(info){  //funcion que se ejecutara cuando el servidor de una respuesta
                    console.log(info); //info son los datos que devuelve el servidor
                },
                error: function(jqXHR, estado, error){ //en caso de error, se ejecuta esto 
                    console.log(error);
                    console.log(estado);
                },
                complete: function(jqXHR, estado){ //siempre se ejecuta independientemente si fue un success o error 
                        console.log(estado);
                }//,timeout: 10000 //tiempo maximo de espera por la peticion
            });
    });
});    


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
                                        if(response>=80 && response<=90)
                                        {
                                            var nodo=2;
                                            var longitud=31.2;
                                            var distancia=7.5;
                                            var velocidad=longitud*response;

                                        }
                                        if(response>=112 && response<=135)
                                        {
                                            var nodo=3;
                                            var longitud= 21.7;
                                            var distancia=3.0;
                                             var velocidad=longitud*response;

                                        }
                                        if(response>=155 && response<=177)
                                        {
                                            var nodo=4;
                                            var longitud= 16.13;
                                            var distancia=4.5;
                                             var velocidad=longitud*response;
                                        }
                                        if(response>=198 && response<=213)
                                        {
                                            var nodo=5;
                                            var longitud= 15.7;
                                            var distancia=3.8;
                                             var velocidad=longitud*response;

                                        }
                                        if(response>=240 && response<=264)
                                        {
                                            var nodo=6;
                                            var longitud=10.7;
                                            var distancia=4.3; 
                                            var velocidad=longitud*response;                                           

                                        }
                                        var capa = document.getElementById("nodos").innerHTML=nodo;
                                        //capa.innerHTML = nodo;
                                        var capa2 = document.getElementById("longitud");
                                        capa2.innerHTML = longitud;
                                        var capa = document.getElementById("distancia");
                                        capa.innerHTML = distancia;
                                        var capa = document.getElementById("periodo");
                                        capa.innerHTML = 1/response;
                                        var capa = document.getElementById("frecuencia");
                                        capa.innerHTML = response;
                                        var capa = document.getElementById("velocidad");
                                        capa.innerHTML =  velocidad;

                                        //$('#simulacion').attr("src", "imagenes/4Nodos.gif");
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

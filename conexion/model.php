<?php
include('config.php');


class model{
	//Conectamos con mysql
	var $mysql;
	var $idSensor = "";
	var $promedio = 0;

	function __construct() {
		$this->mysql = new mysql;
		$this->mysql->server   = "localhost";
		$this->mysql->user     = "root";
		$this->mysql->pass     = "1000";
		$this->mysql->connect();
		$this->mysql->select("arcdb"); 
		
   }

   	function obtener(){

		$sql = $this->mysql->query("SELECT * FROM  lecturas ORDER BY fecha DESC "); 
		
		$result = $this->mysql->f_array($sql);
		return $result[1];
					
	}

	function insertar($frecuencia){

		return $this->mysql->query("INSERT INTO potenciometro(potenciometro) VALUES($frecuencia)"); 
			
	}

	function lectura($max){
		$sql = $this->mysql->query("SELECT * FROM `LECTURAS` ORDER BY NLECTURA DESC;"); 
		$result = $this->mysql->f_array($sql);
	}
		
}
?>


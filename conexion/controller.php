<?php
	include('model.php');
	$miModelo = new model();


	if (isset($_REQUEST['datos'])) {
		$data=$_REQUEST['datos'];

		if ($miModelo->insertar($data)) {
			echo 'Inserción exitosa';
		}else{
			echo 'A ocurrido un error';
		}
	}else{
		echo $miModelo->obtener();
	}
		
	
?>

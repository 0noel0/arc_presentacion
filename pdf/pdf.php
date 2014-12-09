<?php
require('fpdf/fpdf.php');

$pdf=new FPDF();
$pdf->AddPage();
$pdf->SetFont('Arial','B',16);

$pdf->Cell(200, 10,'Datos Generados', 0, 1, 'C');
      $pdf->Cell(200, 10,'Lecturas y Potenciometro', 0, 1, 'C');

$pdf->Ln(20);
$pdf->SetFont('Arial','B',12);
      $pdf->Cell(200, 10,'Lecturas || Potenciometro || Fecha y Hora del sistema', 0, 1, 'L');

 $host='localhost';
 $user='admin';
 $pw='1001';
 $db='arcdb';


 $con=mysql_connect($host,$user,$pw) or die("Problemas al conectar"); 
      mysql_select_db($db,$con) or die("Problemas al conectar con la base"); 


$queryResultado = mysql_query("SELECT lecturas.lectura, lecturas.fecha, potenciometro.potenciometro from lecturas, potenciometro WHERE lecturas.fecha = potenciometro.fecha limit 0,30", $con);
//$pdf->SetFont('Arial', '', 10);
$filas=array();
	while ($reg=mysql_fetch_assoc($queryResultado))
	{
	$filas[]=$reg;
//	$filas[]=array_map('utf8_encode', $reg);

	}

 $pdf->SetFont('Arial', '', 10);
foreach ($filas as $key => $value) {
$variable=$value['lectura'];
$var2=$value['potenciometro'];
$fecha=$value['fecha'];
       $pdf->Cell(25, 10, $variable, 0,'C');
       $pdf->Cell(5, 10, '||', 0,'C');
       $pdf->Cell(20, 10, $var2, 0,'C');
       $pdf->Cell(5, 10, '||', 0,'C');
       $pdf->Cell(50, 10, $fecha, 0,'C');
       //$pdf->Cell(25, 10, $var2, 0,'C');
       $pdf->Ln(10);

}

/*for($i=0, $i<=10,$i++)
{
$variable=$filas['lectura'];
       $pdf->Cell(25, 10, '$variable', 0,'C');
}*/


$pdf->Output();
?>

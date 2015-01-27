<?php
require('fpdf/fpdf.php');

$pdf=new FPDF();
$pdf->AddPage();
$pdf->SetTextColor(0,16,87);
$pdf->SetFont('Arial','B',16);
$pdf->Cell(200, 10,'Datos Generados', 0, 1, 'C');
$pdf->Cell(200, 10,'Lecturas y Potenciometro', 0, 1, 'C');

$pdf->Ln(20);
$pdf->SetTextColor(0,0,0);
$pdf->SetFont('Arial','B',12);
$pdf->Cell(60, 10,'Lecturas', 1, 'C');
$pdf->Cell(1,10, ' ', 0,'C');
$pdf->Cell(60,10,'Potenciometro',1,'C');
$pdf->Cell(1,10,' ',0,'C');
$pdf->Cell(60,10,'Fecha y Hora del Sistema',1,'C');
$pdf->Ln(10);
//********************************CONEXION********************
 $host='localhost';
 $user='root';
 $pw='1000';
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
      $pdf->Cell(60, 10, $variable, 1,'L');
       $pdf->Cell(1, 10, ' ', 0,'C');
       $pdf->Cell(60, 10, $var2, 1,'L');
       $pdf->Cell(1, 10, ' ', 0,'C');
       $pdf->Cell(60, 10, $fecha, 1,'L');
       //$pdf->Cell(60, 10, $var2, 1,'L');
       $pdf->Ln(10);

}

$pdf->AddPage();
// Encabezado pag2
$pdf->SetTextColor(0,16,87);
$pdf->setFont('Arial','B',16);
$pdf->Cell(200,10,'Resultados.',0,1,'C');
$pdf->Ln(20);
//$pdf->SetFillColor(16,22,41);
$pdf->SetTextColor(0,2,51);
$pdf->SetFont('Arial','B',12);
$pdf->Cell(17,10,'Nodos',1,'C');
$pdf->Cell(1,10,' ',0,'C');
$pdf->Cell(33,10,'Long de onda',1,'C');
$pdf->Cell(1,10,' ',0,'C');
$pdf->Cell(38,10,'Dis.entre nodos',1,'C');
$pdf->Cell(1,10,' ',0,'C');
$pdf->Cell(30,10,'Periodo',1,'C');
$pdf->Cell(1,10,' ', 0,'C');
$pdf->Cell(28,10,'Frecuencia',1,'C');
$pdf->Cell(1,10, ' ',0,'C');
$pdf->Cell(30,10,'Vel. De onda',1,'C');
$pdf->Ln(10);
$pdf->SetTextColor(0,0,51);


$pdf->SetFont('Arial', '', 10);
foreach ($filas as $key => $value) {
//$variable=$value['lectura'];
$var2=$value['potenciometro'];
$var3=1000;
$var4= 20;
$var5=30;
//$fecha=$value['fecha'];
       $pdf->Cell(17, 10, $var2*2, 1,'C');
       $pdf->Cell(1,10, ' ' , 0,'C');
       $pdf->Cell(33, 10 , $var2, 1,'C');
       $pdf->Cell(1,10 , ' ' , 0,'C');
       $pdf->Cell(38, 10, $var,1,'C');
	$pdf->Cell(1,10,' ',0,'C');
       $pdf->Cell(30, 10, $var3, 1,'C');
	$pdf->Cell(1,10,' ' ,0,'C');
	$pdf->Cell(28,10,$var4,1,'C' );
	$pdf->Cell(1,10,' ',1,'C');
	$pdf->Cell(30,10,$var5,1,'C');
       $pdf->Ln(10);

}


/*for($i=0, $i<=10,$i++)
{
$variable=$filas['lectura'];
       $pdf->Cell(25, 10, '$variable', 0,'C');
}*/


$pdf->Output();
?>

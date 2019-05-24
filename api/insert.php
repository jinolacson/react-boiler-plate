<?php 
include 'connect.php';

$_POST = json_decode(file_get_contents("php://input"),true);

if(isset($_POST["name"]) && isset($_POST["port"])){
		$sql = "INSERT INTO server(name,port)VALUES ('".$_POST["name"]."','".$_POST["port"]."')";

	if (mysqli_query($con, $sql)) {
	   echo json_encode([
	   	"msg" => "New record created successfully"
	   ]);
	} else {
	    echo json_encode([
	   	"msg" => "Error inserting record"
	   ]);
	}
	$con->close();
}
?>
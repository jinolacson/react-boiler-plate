<?php 
include 'connect.php';

$_POST = json_decode(file_get_contents("php://input"),true);

if(isset($_GET["id"]) && isset($_POST["name"]) && isset($_POST["port"])){
		$sql = "UPDATE server SET name='".$_POST['name']."', port='".$_POST['port']."' WHERE id='".$_GET['id']."'";

	if (mysqli_query($con, $sql)) {
	   echo json_encode([
	   	"msg" => "Record updated successfully"
	   ]);
	} else {
	    echo json_encode([
	   	"msg" => "Error updating record"
	   ]);
	}
	$con->close();
}
?>
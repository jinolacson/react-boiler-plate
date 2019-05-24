<?php 
include 'connect.php';

if(isset($_GET["id"])){
		$sql = "DELETE FROM server WHERE id='".$_GET['id']."'";

	if (mysqli_query($con, $sql)) {
	   echo json_encode([
	   	"msg" => "record successfully delted"
	   ]);
	} else {
	    echo json_encode([
	   	"msg" => "Error deleting record"
	   ]);
	}
	$con->close();
}
?>
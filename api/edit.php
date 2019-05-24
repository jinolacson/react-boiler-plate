<?php 
include 'connect.php';
if ($result = mysqli_query($con,"SELECT * FROM server WHERE id='".$_GET['id']."'")) {

    $row =  mysqli_fetch_object($result);
    echo json_encode($row);
}

$result->close();
$con->close();
?>
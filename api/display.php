<?php 
include 'connect.php';
$myArray = array();
if ($result = mysqli_query($con,"SELECT * FROM server")) {

    while($row = mysqli_fetch_assoc($result)) {
            $myArray[] = $row;
    }
    echo json_encode($myArray);
}

$result->close();
$con->close();
?>
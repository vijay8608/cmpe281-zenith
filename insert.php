<?php
$servername = "localhost";
$username = "root";
$password = "Vijay@2017";
$database = "Online_food_ordering";


//define('DB_SERVER', 'localhost:3036');
//define('DB_USERNAME', 'root');
//define('DB_PASSWORD', 'Vijay@2017');
//define('DB_DATABASE', 'database');

//$conn = mysqli_connect(DB_SERVER,DB_USERNAME,DB_PASSWORD,DB_DATABASE);

// Create connection
$conn = mysqli_connect($servername, $username, $password, $database);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
echo "Connected successfully \n";
 
mysqli_select_db($conn,"Online_food_ordering");

$first_name = ($_POST['first_name']);
$last_name = ($_POST['last_name']);
$mobile_number = ($_POST['mobile_number']);
$email = ($_POST['email']);
$password = ($_POST['password']);


$sql="INSERT INTO users (firstname, lastname, mobile, email, pass)
VALUES
('$first_name','$last_name','$mobile_number','$email','$password')";
 
if ($conn->query($sql) === TRUE) {
    echo "New record created successfully\n";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}
$conn->close();
?>


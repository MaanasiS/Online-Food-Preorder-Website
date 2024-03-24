<?php
// Check if the request method is POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Establish a connection to the MariaDB database
    $servername = "localhost";
    $username = "root";
    $password = "GODSONLY@4113";
    $dbname = "DTM";

    $conn = new mysqli($servername, $username, $password, $dbname);

    // Check the connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Retrieve the item information from the request parameters
    $itemId = $_POST['id'];
    $itemName = $_POST['name'];
    $itemPrice = $_POST['price'];

    // Prepare the SQL INSERT statement
    $sql = "INSERT INTO cart_items (id, name, price) VALUES (?, ?, ?)";
    $stmt = $conn->prepare($sql);

    // Bind the item information to the prepared statement
    $stmt->bind_param("iss", $itemId, $itemName, $itemPrice);

    // Execute the prepared statement
    if ($stmt->execute()) {
        // Item inserted successfully
        echo "Item added to cart!";
    } else {
        // Error occurred while inserting item
        echo "Error adding item to cart: " . $stmt->error;
    }

    // Close the prepared statement and database connection
    $stmt->close();
    $conn->close();
} else {
    // Return an error response for other request methods
    http_response_code(405);
    echo 'Method Not Allowed';
}
?>
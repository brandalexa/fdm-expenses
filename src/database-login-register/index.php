<?php require("register.class.php") ?>
<?php
    if(isset($_POST['submit'])){
        $user = new RegisterUser($_POST['fname'], $_POST['password']);
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Register Form</title>
</head>
<body>
    <form action="" method="post" enctype="multipart/form-data" autocomplete="off">
		<h2>Register Form</h2>
		<h4>Both fields are <span>required</span></h4>

		<label>Name</label>
        <input type="text" name="username">

        <label>Password</label>
        <input type="text" name="password">

        <button type="submit" name="submit">Register</button>

        <p class="error"><?php echo @$user->error?></p>
        <p class="success"><?php echo @$user->success?></p>

	</form>
</body>



</html>	
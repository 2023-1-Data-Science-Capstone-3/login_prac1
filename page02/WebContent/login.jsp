<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html>
<head>
	<title>Login Page</title>
	<meta charset="UTF-8">
	<meta name="v
	iewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
	<header>
		
		<h1 class="logo" >쓰_테크</h1>
	</header>

	<div class="container">
		<form action="loginPro.jsp" method="POST">
			<h2>Login</h2>
			
			
			<label for="username"><b>Username</b></label>
			<input type="text" placeholder="Enter Username" name="userid" required>

			<label for="password"><b>Password</b></label>
			<input type="password" placeholder="Enter Password" name="userpw" required>

			<button type="submit">Login</button>
		</form>
	</div>
</body>
</html>
<%@page import="beans.Account"%>
<%@page import="java.sql.Date"%>
<%@page import="java.util.List"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html>
<head>
	<title>homeAdmin.jsp</title>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" type="text/css" href="style_home.css">
</head>
<body>
	<header>
		<h1 class="logo" >쓰_테크</h1>
	</header>
 
 	<%
	Account user = (Account) session.getAttribute("user");
	String id =  user.getUserid();
	
		String loginSite = "login.jsp";
		String login = "Login";
		String infoSite = "" ;

		
		
		id = user.getUserid();
		loginSite = "logout.jsp";
		login = "Logout";
		
		
		if(id.equals("admin")) infoSite = "adminPage.jsp";
		else infoSite = "myPage.jsp";
		
	%>
 
 
 	<div class="buttons-container">
		<div class="buttons">
			<a href=<%=infoSite %> class="mypage-btn"><%= id %>님</a>
			<a href="logout.jsp" class="logout-btn">Logout</a>

		</div>
	</div>
	<div class="content">
		<h4> this is for ADMIN MAP </h4>
	</div>

	
</body>
</html>
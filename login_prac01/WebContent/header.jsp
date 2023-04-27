<%@page import="beans.Account"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>header.jsp</title>

<style>
	ul {
		display: flex;
		list-style: none;
		padding: 0;
	}
	li {
		margin: 10px;
	}
	a {
		text-decoration: none;
		color: black;
	}
	a:hover {
		text-decoration: underline;
	}
</style>
</head>
<body>
	<%
	Account user = (Account) session.getAttribute("user");
	String id = (user == null) ? "x" : user.getUserid();
	
		String loginSite = "login.jsp";
		String login = "Login";
		
		if (user != null) {
			id = user.getUserid() + "님";
			loginSite = "logout.jsp";
			login = "Logout";
		}
	%>

	<h1>로그인 기능 구현</h1>
	
	<h4>접속 : <%=id %></h4>
	
	<ul>
		<li><a href="home.jsp">Home</a></li>
		<li><a href="<%=loginSite %>"><%=login %></a></li>
		<li><a href="#">MyPage</a></li>
	</ul>
	
	<hr>

<%@page import="beans.Account"%>
<%@page import="java.sql.Date"%>
<%@page import="java.util.List"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html>
<head>
	<title>home.jsp</title>
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
		loginSite = "../logout.jsp";
		login = "Logout";
		
		
		if(id.equals("admin")) infoSite = "adminPage.jsp";
		else infoSite = "myPage.jsp";
		
	%>
 
 
 	<div class="buttons-container">
		<div class="buttons">
			<a href=<%=infoSite %> class="mypage-btn"><%= id %>님</a>
			<a href="../logout.jsp" class="logout-btn">Logout</a>

		</div>
	</div>
	<div class="content">
		<html>
<head>
    <meta charset="utf-8">
    <title>쓰-테크</title>
    <style>
        .label .size { width: 740; height: 250;}
        .label {margin-bottom: 96px;}
        .label * {display: inline-block;vertical-align: top;}
        .label .left {background: url("https://t1.daumcdn.net/localimg/localimages/07/2011/map/storeview/tip_l.png") no-repeat;display: inline-block;height: 24px;overflow: hidden;vertical-align: top;width: 7px;}
        .label .center {background: url(https://t1.daumcdn.net/localimg/localimages/07/2011/map/storeview/tip_bg.png) repeat-x;display: inline-block;height: 24px;font-size: 12px;line-height: 24px;}
        .label .right {background: url("https://t1.daumcdn.net/localimg/localimages/07/2011/map/storeview/tip_r.png") -1px 0  no-repeat;display: inline-block;height: 24px;overflow: hidden;width: 6px;}
        </style>    
</head>
<body>
<div id="map" style="width:100%;height:100vh;"></div>

<script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=7c8628fe2f5e5b695725e9c27a136c5e"></script>
<script src="map.js"></script>
<script src="trash.js"></script>
<script src="cctv.js"></script>
</body>
</html>
	</div>

	
</body>
</html>
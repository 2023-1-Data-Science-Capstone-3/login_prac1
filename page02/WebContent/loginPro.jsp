<%@page import="org.apache.tomcat.util.descriptor.web.LoginConfig"%>
<%@page import="org.apache.catalina.startup.HomesUserDatabase"%>
<%@page import="beans.Account"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>

	<%!
	Account[] db = new Account[] {
		new Account("admin", "0", "admin@naver.com" ),
		new Account("ej", "1", "ej@naver.com" ),
		new Account("sj", "2", "sj@gmail.com" ),
		new Account("jb", "3", "jb@naver.com"),
		new Account("hb", "4", "hb@gmail.com") 
	};

	public Account login(Account input) {
		for (int i = 0; i < db.length; i++) {
			if (db[i].equals(input)) {
				return db[i];
			}
		}
		
		return null;
	}
	%>

	
	<% request.setCharacterEncoding("utf-8"); %>
	
	<jsp:useBean id="input" class="beans.Account"/>
	<jsp:setProperty property="*" name="input"/>
	
	<%
	Account user = login(input);
	
	
	int success = 0;
	String homeSite = "user/home.jsp";
	
	if (user != null) {
		success = 1;
		
		session.setAttribute("user", user);
		
		if(user.getUserid().equals("admin")) homeSite = "admin/adminHome.jsp";

	}
	
	
	
	
	%>
	

	<script>
		var success = <%=success %>;
		
		if (success) {
			alert('로그인 성공,  환영합니다.');
			location.href = '<%=homeSite %>';
		}
		else {
			alert('정보가 정확한지 다시 확인해주세요.');
			history.go(-1);
		}
	</script>
</body>
</html>
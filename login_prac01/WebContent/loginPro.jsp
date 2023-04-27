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
	
	if (user != null) {
		success = 1;
		
		// 로그인 정보 유지 -> 세션에 저장
		session.setAttribute("user", user);
	}
	%>
	

	<script>
		var success = <%=success %>;
		
		if (success) {
			alert('로그인 성공');
			location.href = 'home.jsp';
		}
		else {
			alert('로그인 실패');
			history.go(-1);
		}
	</script>
</body>
</html>
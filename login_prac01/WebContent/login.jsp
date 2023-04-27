<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
 <%@ include file="header.jsp" %>
    

	<h3>로그인</h3>
	
	<form action="loginPro.jsp" method="POST">
		<p><input name="userid" type="text" placeholder="ID" required></p>
		<p><input name="userpw" type="password" placeholder="PW" required></p>
		
		<button>Login</button>
	</form>

</body>
</html>
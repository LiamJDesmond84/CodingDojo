<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Checkerboard Assignment</title>
<link href="style.css" rel="stylesheet" type="text/css">
</head>
<body>

<%
int x = Integer.parseInt(request.getParameter("x"));
int y = Integer.parseInt(request.getParameter("y"));
%>


	<table>
		<%for(int j = 0; j < x; j++) { %>
		<tr>
			<%for(int i = 0; i < x; i++) { %>
			<td id="div1"></td>
			<td id="div2"></td>
				<% } %>
		</tr>
		<tr>
			<%for(int i = 0; i < y; i++) { %>
			<td id="div2"></td>
			<td id="div1"></td>
				<% } %>
		</tr>

			<% } %>
	</table>
</body>
</html>
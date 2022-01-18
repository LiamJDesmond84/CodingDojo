<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>

<form action="/TeamRoster/Teams" method="post">
	<label>Team Name: </label>
	<input type="text" name="team_name" />
	<button>Submit</button>
</form>

</body>
</html>
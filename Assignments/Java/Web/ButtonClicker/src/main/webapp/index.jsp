<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Button Clicker</title>
</head>
<body>

<p>Counter: <c:out value="${count}"/></p>

<form action="/ButtonClicker/Home">
<input type="submit" value="Click">

</form>
</body>
</html>
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

<p>Name: <c:out value="${dog.name}"/></p>
<p>Breed: <c:out value="${dog.breed}"/></p>
<p>Weight: <c:out value="${dog.weight}"/></p>

<h3><c:out value="${dog.showAffection()}"/></h3>

</body>
</html>
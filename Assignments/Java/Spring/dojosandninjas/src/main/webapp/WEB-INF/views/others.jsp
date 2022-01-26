<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ page isErrorPage="true" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
	<a href="/">Dashboard</a>
	
<div class="container d-flex justify-content-center align-items-center flex-column">
		<h2>${ninja.firstName} ${ninja.lastName}</h2>

	<h3>First Name</h3>
	<p>${ninja.firstName}</p>
	<h3>Last Name</h3>
	<p>${ninja.lastName}</p>
	<h3>Age</h3>
	<p>${ninja.age}</p>
	<h3>Dojo</h3>
	<p>${dojo.name}</p>



	<form action="/ninjas/${ninja.id}" method="post">
    <input type="hidden" name="_method" value="delete">
    <input type="submit" value="Delete">
	</form>
	
	<h2>All Ninjas</h2>
<c:forEach items="${ninjas}" var="x">

<a href="/ninjas/show/${x.id}">${x.firstName}</a>




</c:forEach>

</div>

</body>
</html>
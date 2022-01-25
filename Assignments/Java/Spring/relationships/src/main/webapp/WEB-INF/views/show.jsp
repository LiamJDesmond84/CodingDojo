<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ page isErrorPage="true" %>
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>Insert title here</title>
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
<a href="/persons">Dashboard</a>
<div class="container d-flex justify-content-center align-items-center flex-column">

 		<table class="table table-striped">
 			<thead>
 			<tr>
 				<th>First Name</th>
 				<th>Last Name</th>
 				<th>License #</th>
 				<th>License State</th>
 				<th>License Expiration Date</th>

 			</tr>
 			</thead>
 			<tbody> <!-- Loop through all dogs -->

 			<tr>
 				<td>${person.firstName}</td>
 				<td>${person.lastName}</td>
 				<td>${person.license.id}</td>
 				<td>${person.license.state}</td>
 				<td>${person.license.expirationDate}</td>
 			</tr>

 			</tbody>	
 		</table>
 		<form action="/persons/${person.id}" method="post">
		    <input type="hidden" name="_method" value="delete">
		    <input type="submit" value="Delete">
		</form>
</div>
	
</body>
</html>
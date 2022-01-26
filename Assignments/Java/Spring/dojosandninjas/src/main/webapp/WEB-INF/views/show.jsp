<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ page isErrorPage="true" %>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
	<a href="/">Dashboard</a>
<div class="container d-flex justify-content-center align-items-center flex-column">
		<h2>${dojo.name}'s Ninjas</h2>
 		<table class="table table-striped">
 			<thead>
 			<tr>
 				<th>First Name</th>
 				<th>Last Name</th>
 				<th>Age</th>
 				<th>Delete</th>

 			</tr>
 			</thead>
 			<tbody> <!-- Loop through all dogs -->
			<c:forEach items="${ninjas}" var="x">
 			<tr>
 				<td><a href="/ninjas/show/${x.id}">${x.firstName}</a></td>
 				<td>${x.lastName}</td>
 				<td>${x.age}</td>

 				<td>
	 				<form action="/ninjas/${x.id}" method="post">
					    <input type="hidden" name="_method" value="delete">
					    <input type="submit" value="Delete">
					</form>
				</td>
			
 			</tr>
			</c:forEach>
 			</tbody>	
 		</table>

</div>
</body>
</html>
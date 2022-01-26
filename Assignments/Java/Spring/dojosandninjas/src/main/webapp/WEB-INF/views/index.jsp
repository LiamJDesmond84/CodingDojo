<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ page isErrorPage="true" %>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
<div class="container d-flex justify-content-center align-items-center flex-column">
	<a href="/ninja">Add a Ninja</a>
	<h1>New Dojo</h1>
	<form:form action="/dojos" method="POST" modelAttribute="dojo">
		<form:label path="name">Name:</form:label>
		<form:errors path="name"></form:errors>
		<form:input path="name"></form:input>
		<button type="submit">Create</button>
	</form:form>
	
	<div>
		<table class="table table-striped">
			<thead>
				<tr>
					<th>Location</th>
					<th>Actions</th>
				</tr>
			</thead>
			<tbody>
			<c:forEach items="${dojos}" var="x">
				<tr>
					<td>${x.name}</td>
					<td><a href="/dojos/${x.id}">Students</a></td>
			</c:forEach>
			</tbody>
		</table>
		
	</div>
	
</div>

</body>
</html>
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
	<div class="container">
	<a href="license">Create a license</a>
	<h2>Add a Person</h2>
	 	<form:form action="/persons" method="POST" modelAttribute="person">
	
	 		<div class="form-group">
	 			<form:label path="firstName">First Name:</form:label>
	 			<form:errors path="firstName" />
	 			<form:input path="firstName" />
	 		</div>
	 		<div class="form-group">
	 			<form:label path="lastName">Last Name:</form:label>
	 			<form:errors path="lastName" />
	 			<form:input path="lastName" />
	 		</div>

	 		<button>Create</button>
	
	 	</form:form>
	</div>
</body>
</html>
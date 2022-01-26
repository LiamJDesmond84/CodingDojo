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
	<h1>New Ninja</h1>
	
	<form:form action="/create/ninja" method="POST" modelAttribute="ninja">
		<form:label path="firstName">First Name:</form:label>
		<form:errors path="firstName"></form:errors>
		<form:input path="firstName"></form:input>
		
		<form:label path="lastName">Last Name:</form:label>
		<form:errors path="lastName"></form:errors>
		<form:input path="lastName"></form:input>
		
		<form:label path="age">Age:</form:label>
		<form:errors path="age"></form:errors>
		<form:input type="number" path="age"></form:input>

		
		<form:label path="dojo">Dojo:</form:label>
	 	<form:select path="dojo">
 			<c:forEach items="${dojos}" var="x">
 				<form:option value="${x.id}">${x.name}</form:option>
 			</c:forEach>
	 	</form:select>
	 	
		<button type="submit">Create</button>
	</form:form>
	

	
</div>
</body>
</html>
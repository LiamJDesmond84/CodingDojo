<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
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
	 	<form:form action="/create/license" method="POST" modelAttribute="license">
	
	 		<div class="form-group">
	 		<a href="/persons">Dashboard</a>
				<h2>Add a license</h2>
	 			<form:label path="person">Person:</form:label>
	 			<form:errors path="person" />
	 			<form:select path="person">
	 			<c:forEach items="${persons}" var="x">
	 				<option value="${x.id}">${x.firstName} ${x.lastName}</option>
	 			</c:forEach>
	 			</form:select>

	 		</div>
	 		<div class="form-group">
	 			<form:label path="expirationDate">Expiration Date:</form:label>
	 			<form:errors path="expirationDate" />
	 			<form:input type="date" path="expirationDate"/>

	 		</div>
	 		<div class="form-group">
	 			<form:label path="state">State:</form:label>
	 			<form:errors path="state" />
	 			<form:input path="state" />
	 		</div>

	 		<button>Create</button>
	
	 	</form:form>
	</div>
</body>
</html>